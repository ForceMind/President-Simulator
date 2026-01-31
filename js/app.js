(function() {
    // 错误检查与容错
    if (!window.GAME_DATA) {
        console.error('CRITICAL: GAME_DATA not found. data.js failed to load.');
        alert('游戏数据加载失败，请刷新重试或检查 data.js 文件。');
    }
    if (typeof Vue === 'undefined') {
        console.error('CRITICAL: Vue not found. CDN failed.');
        alert('Vue.js 核心库加载失败，请检查网络连接。');
    }

    const { CHARACTERS, CARD_DB, EVENTS_DB } = window.GAME_DATA || {};
    const { createApp } = Vue;

    if (!createApp) {
        throw new Error("Vue createApp is missing");
    }

    const app = createApp({
    data() {
            return {
                state: 'SELECT_CHAR', // SELECT_CHAR, PLAYING, GAME_OVER
                selectedCharId: null,
                player: null,
                characters: CHARACTERS,
                
                // 游戏核心数据
                month: 1,
                approval: 50,
                money: 0,
                ap: 2,
                maxAp: 2,
                
                // 系统状态
                hand: [],
                logs: [],
                currentEvent: null,
                
                // 市场状态分数 (-100 ~ 100)
                marketScore: 0,
                cryptoScore: 10,
                commodityScore: 0,

                // 市场状态 (bear, neutral, bull, crash)
                marketTrend: 'neutral', 
                cryptoTrend: 'bull',
                commodityTrend: 'neutral',
                
                // 全局经济周期 (growth, recession, crisis, boom)
                globalEconomy: 'growth', 
                
                // 行为控制
                actionsTaken: { stock: false, crypto: false, commodity: false, embezzle: false },
                pendingInvestments: [], // 待结算投资

                // 技能状态
                skillCooldown: 0,
                skillCost: 0, // 技能不再消耗AP
                skillActive: false, // 持续性技能激活状态

                // 移动端适配
                isMobile: window.innerWidth < 900,
                activeTab: 'desk', // stats, desk, market
                showFullLogs: false, // 移动端日志展开状态

                // 弹窗
                modal: { show: false, title: '', msg: '', type: 'info', btnText: '确定' }
            }
        },
        mounted() {
            window.addEventListener('resize', this.checkMobile);
        },
        beforeUnmount() {
            window.removeEventListener('resize', this.checkMobile);
        },
        computed: {
            approvalColor() {
                if (this.approval > 60) return 'text-green';
                if (this.approval < 30) return 'text-red';
                return '';
            }
        },
        methods: {
            startGame() {
                const char = this.characters.find(c => c.id === this.selectedCharId);
                this.player = { ...char }; // 深拷贝
                this.money = this.player.money;
                this.state = 'PLAYING';
                this.logs.push(`总统先生/女士，欢迎入主白宫。当前是第1个月。`);
                this.drawCards(3);
                this.updateMarketTrends(true); // 初始随机
            },

            // --- 核心循环 ---
            nextTurn() {
                // 1. 胜利/失败检测
                if (this.checkGameOver()) return;

                // 2. 时间推进
                this.month++;
                this.addLog(`📅 进入第 ${this.month} 个月`);

                // 3. AP 回复机制 (基于支持率)
                if (this.approval >= 80) this.maxAp = 8;
                else if (this.approval >= 60) this.maxAp = 6;
                else if (this.approval >= 40) this.maxAp = 4;
                else this.maxAp = 2;
                this.ap = this.maxAp;

                // 4. 技能冷却减少
                if (this.skillCooldown > 0) this.skillCooldown--;

                // 5. 随机事件触发 (基于难度自适应)
                this.currentEvent = null;
                this.handleEvents();

                // 6. 市场刷新 (关联性更新)
                this.updateMarketTrends();

                // 7. 结算上回合投资 (使用新市场状态)
                this.settleInvestments();

                // 8. 重置行为限制
                this.actionsTaken = { stock: false, crypto: false, commodity: false, embezzle: false };

                // 9. 补充卡牌 (手牌上限6，每回合抽2张)
                this.drawCards(2);
            },

            checkGameOver() {
                // 财富 < 1亿 -> 暗杀
                if (this.money < 1) {
                    this.showModal("GAME OVER: 遇刺身亡", "你的私人安保团队因为欠薪罢工了。你在高尔夫球场被不明身份的狙击手击毙。", "fail");
                    return true;
                }
                // 支持率 < 25 -> 弹劾
                if (this.approval < 25) {
                    this.showModal("GAME OVER: 遭到弹劾", "国会全票通过了对你的弹劾案。你不仅丢了工作，还将面临牢狱之灾。", "fail");
                    return true;
                }
                // 48月结束 -> 结算
                if (this.month > 48) {
                    if (this.money >= 200) {
                        this.showModal("完美结局: 资本大鳄", `任期结束。你带着 $${this.money.toFixed(1)}亿 的巨额财富光荣退休，成为幕后真正的统治者。`, "win");
                    } else {
                        this.showModal("结局: 凄惨晚年", `任期结束。虽然你活了下来，但仅有的 $${this.money.toFixed(1)}亿 财富不足以让你在政敌的清算中自保。`, "fail");
                    }
                    return true;
                }
                return false;
            },

            // --- 行为逻辑 ---
            drawCards(count) {
                // 手牌上限6张
                let drawCount = count;
                if (this.hand.length + drawCount > 6) {
                    drawCount = 6 - this.hand.length;
                    if (drawCount <= 0) {
                        this.addLog("手牌已满，无法抽取新文件。");
                        return;
                    }
                }

                for (let i = 0; i < drawCount; i++) {
                    // 资深政客技能：只抽阴谋/经济
                    let pool = CARD_DB;
                    if (this.player.id === 2 && this.skillActive) {
                        pool = CARD_DB.filter(c => c.type === '阴谋' || c.type === '经济');
                    }
                    
                    const template = pool[Math.floor(Math.random() * pool.length)];
                    this.hand.push({ ...template });
                }
                // 消耗一次性技能状态
                if (this.player.id === 2 && this.skillActive) this.skillActive = false; 
            },

            discardCard(index) {
                if (this.ap < 1) {
                    this.addLog("⚠️ 行动力不足，无法清理文件！");
                    return;
                }
                this.ap -= 1;
                const card = this.hand[index];
                this.hand.splice(index, 1);
                this.addLog(`🗑️ 废弃文件【${card.title}】`);
            },

            playCard(index) {
                const card = this.hand[index];
                if (this.ap < card.cost) {
                    this.addLog("⚠️ 行动力不足！");
                    return;
                }

                this.ap -= card.cost;
                this.hand.splice(index, 1);

                // 应用效果
                this.approval += (card.effect.approval || 0);
                this.money += (card.effect.money || 0);
                
                // 特殊效果
                if (card.effect.market) this.modifyMarketScore('market', card.effect.market);
                if (card.effect.commodity) this.modifyMarketScore('commodity', card.effect.commodity);
                if (card.effect.crypto) this.modifyMarketScore('crypto', card.effect.crypto);
                if (card.effect.inflation) this.globalEconomy = 'recession'; // 通胀导致衰退风险
                
                // 政治行为改变全球经济
                if (card.effect.global_economy) {
                    this.globalEconomy = card.effect.global_economy;
                    this.addLog(`🌍 政策影响: 全球经济转向 ${this.getEconomyName(this.globalEconomy)}`);
                }

                // 限制数值范围
                this.approval = Math.min(100, Math.max(0, this.approval));
                this.money = parseFloat(this.money.toFixed(2));

                this.addLog(`签署文件【${card.title}】`);
            },
            
            modifyMarketScore(market, trend) {
                let scoreChange = 0;
                if (trend === 'bull') scoreChange = 15;
                else if (trend === 'bear') scoreChange = -15;
                else if (trend === 'crash') scoreChange = -40;
                else if (trend === 'neutral') scoreChange = 0; // 回归中值

                if (market === 'market') this.marketScore += scoreChange;
                if (market === 'crypto') this.cryptoScore += scoreChange;
                if (market === 'commodity') this.commodityScore += scoreChange;
                
                // 限制分数范围
                const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
                this.marketScore = clamp(this.marketScore, -100, 100);
                this.cryptoScore = clamp(this.cryptoScore, -100, 100);
                this.commodityScore = clamp(this.commodityScore, -100, 100);
            },

            // --- 投资系统 (增强版) ---
            makeInvestment(type, position) {
                if (this.actionsTaken[type]) return; // 每回合限一次
                
                this.money -= 1; // 成本1亿
                this.actionsTaken[type] = true;

                // 存入待结算队列
                this.pendingInvestments.push({
                    type: type,
                    position: position,
                    amount: 1,
                    turn: this.month,
                    skillActive: (this.player.id === 3 && this.skillActive) || (this.player.id === 6 && this.skillActive),
                    playerId: this.player.id
                });

                const actionName = position === 'long' ? '做多' : '做空';
                const typeName = type === 'stock' ? '美股' : (type === 'crypto' ? '加密' : '商品');
                this.addLog(`💼 投资挂单: ${actionName}${typeName} (将在下月结算)`);
                
                // 消耗技能状态 (仅用于标记，实际效果在结算时计算)
                if (this.player.id === 3 && this.skillActive) {
                    this.skillActive = false; 
                    this.addLog("⚡ 内幕消息已使用，收益将在结算时翻倍。");
                }
            },

            settleInvestments() {
                if (this.pendingInvestments.length === 0) return;

                this.addLog("======== 投资结算 ========");
                
                this.pendingInvestments.forEach(inv => {
                    let roi = 0;
                    let trend = 'neutral';
                    let score = 0;
                    
                    if (inv.type === 'stock') { trend = this.marketTrend; score = this.marketScore; }
                    else if (inv.type === 'crypto') { trend = this.cryptoTrend; score = this.cryptoScore; }
                    else if (inv.type === 'commodity') { trend = this.commodityTrend; score = this.commodityScore; }

                    // 计算市场因子 (基于分数更精确)
                    let marketFactor = score * 0.015; // 分数/100 * 1.5倍放大
                    
                    // 随机波动
                    let volatility = 0;
                    if (inv.type === 'crypto') volatility = (Math.random() * 1.5) - 0.7; // 剧烈波动
                    else if (inv.type === 'commodity') volatility = (Math.random() * 0.6) - 0.3;
                    else volatility = (Math.random() * 0.4) - 0.15;

                    let change = marketFactor + volatility;
                    
                    // 做空逻辑
                    if (inv.position === 'short') change = -change;

                    // 技能加成
                    if (inv.skillActive) {
                        if (inv.playerId === 3) { // 科技新贵: 必赢翻倍
                             change = Math.abs(change) + 0.5; // 确保正收益且增加
                        } else if (inv.playerId === 6) { // 好莱坞: 无风险
                             if (change < 0) change = 0.1; // 保底
                        }
                    }

                    roi = inv.amount * (1 + change);
                    const profit = roi - inv.amount;
                    
                    this.money += roi;
                    
                    const icon = profit > 0 ? '💰' : '💸';
                    const typeName = inv.type === 'stock' ? '美股' : (inv.type === 'crypto' ? '加密' : '商品');
                    const posName = inv.position === 'long' ? '做多' : '做空';
                    
                    this.addLog(`${icon} ${posName}${typeName}: ${profit > 0 ? '盈利' : '亏损'} $${Math.abs(profit).toFixed(2)}亿`);
                });

                this.money = parseFloat(this.money.toFixed(2));
                this.pendingInvestments = []; // 清空队列
            },

            embezzle() {
                if (this.actionsTaken.embezzle) return;
                // 不消耗AP
                this.actionsTaken.embezzle = true;
                this.approval -= 10;
                const gain = 2 + Math.random() * 2; 
                this.money += gain;
                this.addLog(`🤫 进行了权力寻租，获得 $${gain.toFixed(1)}亿，支持率下降。`);
            },

            // --- 技能系统 ---
            useSkill() {
                if (this.player.skillCostMoney && this.money < this.player.skillCostMoney) {
                    this.addLog("❌ 资金不足以发动技能！");
                    return;
                }
                
                this.money -= (this.player.skillCostMoney || 0);
                this.skillCooldown = 6; 
                this.addLog(`★ 发动技能: ${this.player.skillName}`);

                switch(this.player.id) {
                    case 1: // 金发大亨
                        this.approval += 15;
                        if(this.approval > 100) this.approval = 100;
                        this.addLog("推特治国生效：支持率大幅上升。");
                        break;
                    case 2: // 资深政客
                        this.ap += 2;
                        this.skillActive = true; // 标记下回合抽卡
                        this.addLog("深层政府运作：获得了额外的行动力，且下回合将操纵卡牌库。");
                        break;
                    case 3: // 科技新贵
                        this.skillActive = true; 
                        this.addLog("内幕消息已获取：下次投资必定大赚。");
                        break;
                    case 4: // 退役将军
                        this.approval -= 20;
                        this.money += 5;
                        this.addLog("戒严令生效：支持率暴跌，但军费已入账。");
                        break;
                    case 5: // 平权斗士
                        const convert = this.approval * 0.1;
                        this.money += convert;
                        this.approval -= 10;
                        this.addLog(`草根筹款：获得了 $${convert.toFixed(1)}亿 捐款。`);
                        break;
                    case 6: // 好莱坞明星
                        this.approval += 10;
                        this.skillActive = true;
                        this.addLog("粉丝狂热：支持率上升，本回合投资无风险。");
                        break;
                }
            },

            // --- 动态事件与市场系统 ---
            handleEvents() {
                // 基础概率 25%
                let eventChance = 0.25;
                
                // 难度自适应：如果玩家太有钱或支持率太高，增加坏事概率
                if (this.money > 50 || this.approval > 80) eventChance += 0.15;
                
                if (Math.random() < eventChance) {
                    // 筛选候选事件
                    let candidates = EVENTS_DB.filter(e => !e.type); // 普通事件
                    
                    // 针对性反向事件
                    if (this.money > 80) candidates = candidates.concat(EVENTS_DB.filter(e => e.type === 'money_loss'));
                    if (this.approval > 85) candidates = candidates.concat(EVENTS_DB.filter(e => e.type === 'scandal'));
                    if (this.marketTrend === 'crash') candidates = candidates.concat(EVENTS_DB.filter(e => e.type === 'crash' || e.type === 'unrest'));

                    const event = candidates[Math.floor(Math.random() * candidates.length)];
                    
                    this.currentEvent = event;
                    this.addLog(`⚡ 突发: ${event.title}`);
                    
                    // 应用事件效果 (现在叠加分数)
                    if (event.effect.approval) this.approval += event.effect.approval;
                    if (event.effect.money) this.money += event.effect.money;
                    
                    if (event.effect.market) this.modifyMarketScore('market', event.effect.market);
                    if (event.effect.crypto) this.modifyMarketScore('crypto', event.effect.crypto);
                    if (event.effect.commodity) this.modifyMarketScore('commodity', event.effect.commodity);
                    
                    // 限制
                    this.approval = Math.min(100, Math.max(0, this.approval));
                }
            },

            updateMarketTrends(forceRandom = false) {
                // 将分数转化为趋势标签
                const scoreToTrend = (score) => {
                    if (score <= -40) return 'crash';
                    if (score <= -15) return 'bear';
                    if (score >= 40) return 'bull'; // 超级牛市
                    if (score >= 15) return 'bull';
                    return 'neutral';
                };

                if (forceRandom) {
                    this.marketScore = (Math.random() * 60) - 30;
                    this.cryptoScore = (Math.random() * 100) - 40;
                    this.commodityScore = (Math.random() * 60) - 30;
                    this.marketTrend = scoreToTrend(this.marketScore);
                    this.cryptoTrend = scoreToTrend(this.cryptoScore);
                    this.commodityTrend = scoreToTrend(this.commodityScore);
                    return;
                }

                // 更新全局经济状态
                const economyCycle = ['growth', 'growth', 'boom', 'recession', 'crisis', 'recession'];
                // 10% 概率切换经济周期
                if (Math.random() < 0.1) {
                    this.globalEconomy = economyCycle[Math.floor(Math.random() * economyCycle.length)];
                    this.addLog(`🌍 全球经济进入: ${this.getEconomyName(this.globalEconomy)} 阶段`);
                }

                // 分数自然衰减 (回归中值)
                this.marketScore *= 0.9;
                this.cryptoScore *= 0.85; // 加密货币波动大
                this.commodityScore *= 0.95;

                // 经济周期影响分数
                let ecoFactor = 0;
                if (this.globalEconomy === 'boom') ecoFactor = 5;
                if (this.globalEconomy === 'recession') ecoFactor = -5;
                if (this.globalEconomy === 'crisis') ecoFactor = -15;

                this.marketScore += ecoFactor + (Math.random() * 10 - 5);
                this.commodityScore += (ecoFactor * -0.5) + (Math.random() * 10 - 5); // 商品有时反周期
                this.cryptoScore += (Math.random() * 30 - 15);

                this.marketTrend = scoreToTrend(this.marketScore);
                this.cryptoTrend = scoreToTrend(this.cryptoScore);
                this.commodityTrend = scoreToTrend(this.commodityScore);
            },

            evolveMarket(current, globalEco, isCommodity = false) {
                 // 废弃，改用分数系统
                 return current;
            },

            getEconomyName(state) {
                const map = { 'growth': '稳定增长', 'boom': '繁荣', 'recession': '衰退', 'crisis': '危机' };
                return map[state] || state;
            },

            addLog(msg) {
                this.logs.push(msg);
                if(this.logs.length > 20) this.logs.shift();
                // 自动滚动到底部
                this.$nextTick(() => {
                    const logArea = document.querySelector('.log-area');
                    if (logArea) logArea.scrollTop = logArea.scrollHeight;
                });
            },

            showModal(title, msg, type) {
                this.modal = {
                    show: true,
                    title: title,
                    msg: msg,
                    type: type, 
                    btnText: (type === 'win' || type === 'fail') ? '重新开始' : '确定'
                };
            },

            handleModalAction() {
                if (this.modal.type === 'win' || this.modal.type === 'fail') {
                    location.reload();
                } else {
                    this.modal.show = false;
                }
            }
        }
    }).mount('#app');
})();

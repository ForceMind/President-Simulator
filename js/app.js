import { CHARACTERS, CARD_DB, EVENTS_DB } from './data.js';

const { createApp } = Vue;

createApp({
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
            
            // 市场状态 (bear, neutral, bull, crash)
            marketTrend: 'neutral', 
            cryptoTrend: 'bull',
            commodityTrend: 'neutral',
            
            // 全局经济周期 (growth, recession, crisis, boom)
            globalEconomy: 'growth', 
            
            // 技能状态
            skillCooldown: 0,
            skillCost: 0, // 技能不再消耗AP
            skillActive: false, // 持续性技能激活状态

            // 弹窗
            modal: { show: false, title: '', msg: '', type: 'info', btnText: '确定' }
        }
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

            // 7. 补充卡牌 (保持手牌3张)
            const cardsNeeded = 3 - this.hand.length;
            if (cardsNeeded > 0) this.drawCards(cardsNeeded);
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
            for (let i = 0; i < count; i++) {
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
            if (card.effect.market) this.marketTrend = card.effect.market;
            if (card.effect.commodity) this.commodityTrend = card.effect.commodity;
            if (card.effect.inflation) this.globalEconomy = 'recession'; // 通胀导致衰退风险

            // 限制数值范围
            this.approval = Math.min(100, Math.max(0, this.approval));
            this.money = parseFloat(this.money.toFixed(2));

            this.addLog(`签署文件【${card.title}】`);
        },

        // --- 投资系统 (增强版) ---
        invest(type) {
            // 不再消耗AP
            this.money -= 1; // 投入1亿
            let roi = 0;

            // 科技新贵技能：必赢
            let guaranteedWin = (this.player.id === 3 && this.skillActive);

            // 获取市场系数
            const getMarketFactor = (trend) => {
                switch(trend) {
                    case 'crash': return -0.4;
                    case 'bear': return -0.15;
                    case 'neutral': return 0.05;
                    case 'bull': return 0.25;
                    default: return 0;
                }
            };

            if (type === 'stock') {
                let baseReturn = (Math.random() * 0.3) - 0.1; // -10% ~ +20%
                baseReturn += getMarketFactor(this.marketTrend);
                
                // 全局经济影响
                if (this.globalEconomy === 'boom') baseReturn += 0.1;
                if (this.globalEconomy === 'crisis') baseReturn -= 0.2;

                // 好莱坞明星技能：无风险
                if (this.player.id === 6 && this.skillActive) baseReturn = Math.abs(baseReturn) + 0.1;

                roi = 1 + baseReturn;
            } else if (type === 'crypto') {
                let baseReturn = (Math.random() * 2.0) - 0.8; // -80% ~ +120%
                if (this.cryptoTrend === 'bull') baseReturn += 0.6;
                if (this.cryptoTrend === 'bear') baseReturn -= 0.4;
                if (this.cryptoTrend === 'crash') baseReturn = -0.9;

                if (guaranteedWin) baseReturn = Math.abs(baseReturn) + 1.0; 

                roi = 1 + baseReturn;
            }

            if (guaranteedWin) {
               this.skillActive = false; 
               this.addLog("⚡ [被动触发] 内幕交易生效！");
            }
            if (this.player.id === 6 && this.skillActive) this.skillActive = false;

            const profit = roi - 1;
            this.money += roi;
            this.money = parseFloat(this.money.toFixed(2));
            
            const icon = profit > 0 ? '📈' : '📉';
            this.addLog(`${icon} 投资结算: ${profit > 0 ? '盈利' : '亏损'} $${Math.abs(profit).toFixed(2)}亿`);
        },

        investFuture(position) {
            // 商品期货
            this.money -= 1; 
            let roi = 0;
            
            let marketFactor = 0;
            switch(this.commodityTrend) {
                case 'bull': marketFactor = 0.4; break;
                case 'bear': marketFactor = -0.4; break;
                case 'crash': marketFactor = -0.8; break;
                default: marketFactor = (Math.random() * 0.4) - 0.2;
            }

            let volatility = (Math.random() * 0.6) - 0.3; 
            let actualChange = marketFactor + volatility;

            if (position === 'long') roi = 1 + actualChange;
            else roi = 1 - actualChange;

            const profit = roi - 1;
            this.money += roi;
            this.money = parseFloat(this.money.toFixed(2));
            
            const icon = profit > 0 ? '💰' : '💸';
            const actionName = position === 'long' ? '做多' : '做空';
            this.addLog(`${icon} 期货${actionName}: ${profit > 0 ? '盈利' : '亏损'} $${Math.abs(profit).toFixed(2)}亿`);
        },

        embezzle() {
            // 不消耗AP
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
                
                // 应用事件效果
                if (event.effect.approval) this.approval += event.effect.approval;
                if (event.effect.money) this.money += event.effect.money;
                if (event.effect.market) this.marketTrend = event.effect.market;
                if (event.effect.crypto) this.cryptoTrend = event.effect.crypto;
                if (event.effect.commodity) this.commodityTrend = event.effect.commodity;
                
                // 限制
                this.approval = Math.min(100, Math.max(0, this.approval));
            }
        },

        updateMarketTrends(forceRandom = false) {
            if (forceRandom) {
                const states = ['bear', 'neutral', 'bull'];
                this.marketTrend = states[Math.floor(Math.random() * 3)];
                this.cryptoTrend = states[Math.floor(Math.random() * 3)];
                this.commodityTrend = states[Math.floor(Math.random() * 3)];
                return;
            }

            // 更新全局经济状态
            const economyCycle = ['growth', 'growth', 'boom', 'recession', 'crisis', 'recession'];
            // 10% 概率切换经济周期
            if (Math.random() < 0.1) {
                this.globalEconomy = economyCycle[Math.floor(Math.random() * economyCycle.length)];
                this.addLog(`🌍 全球经济进入: ${this.getEconomyName(this.globalEconomy)} 阶段`);
            }

            // 市场根据全局状态演变
            this.marketTrend = this.evolveMarket(this.marketTrend, this.globalEconomy);
            this.commodityTrend = this.evolveMarket(this.commodityTrend, this.globalEconomy, true); // 商品有时反周期
            
            // 加密货币比较独立且波动大
            if (Math.random() < 0.4) {
                 const states = ['bear', 'neutral', 'bull', 'crash', 'bull']; // bull 概率略高
                 this.cryptoTrend = states[Math.floor(Math.random() * states.length)];
            }
        },

        evolveMarket(current, globalEco, isCommodity = false) {
            const r = Math.random();
            // 危机时刻容易崩盘
            if (globalEco === 'crisis' && r < 0.4) return 'crash';
            if (globalEco === 'recession' && r < 0.5) return 'bear';
            if (globalEco === 'boom' && r < 0.6) return 'bull';

            // 维持现状概率高
            if (r < 0.6) return current;

            // 随机变动
            const states = ['bear', 'neutral', 'bull'];
            return states[Math.floor(Math.random() * 3)];
        },

        getEconomyName(state) {
            const map = { 'growth': '稳定增长', 'boom': '繁荣', 'recession': '衰退', 'crisis': '危机' };
            return map[state] || state;
        },

        addLog(msg) {
            this.logs.push(msg);
            if(this.logs.length > 20) this.logs.shift();
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

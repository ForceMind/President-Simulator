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
                economyPhase: 0, // 0 - 2PI 周期
                economyCycleStatus: '', // 文本描述

                
                // 行为控制
                actionsTaken: { stock: false, crypto: false, commodity: false, embezzle: false },
                positions: [], // 持仓列表
                
                // 引导与教程
                showTutorial: false,
                tutorialStep: 1,
                showCharTutorial: false,
                charTutorialStep: 1,
                
                // 新手引导 Flags
                tutorialFlags: {
                    firstCard: false,
                    firstInvest: false,
                    firstCrisis: false,
                    firstClose: false
                },

                // 技能状态
                skillCooldown: 0,
                skillCost: 0, // 技能不再消耗AP
                skillActive: false, // 持续性技能激活状态

                // 移动端适配
                isMobile: window.innerWidth < 900,
                activeTab: 'desk', // stats, desk, market
                showFullLogs: false, // 移动端日志展开状态

                // 弹窗
                modal: { show: false, title: '', msg: '', type: 'info', btnText: '确定' },
                skillModal: { show: false },
                reportModal: { show: false, title: '', changes: [] },

                // 成就系统
                achievements: {},
                lastActionTime: Date.now(),
                idleCheckInterval: null,
                isIdleWarned: false
            }
        },
        mounted() {
            window.addEventListener('resize', this.checkMobile);
            this.loadAchievements();

            // Check Char Select Tutorial
            if (!localStorage.getItem('president_sim_char_tutorial_done')) {
                this.showCharTutorial = true;
            }

            // Tab Visibility Check
            document.addEventListener("visibilitychange", this.handleVisibilityChange);

            // Idle Check
            ['mousemove', 'click', 'keydown', 'touchstart'].forEach(evt => {
                window.addEventListener(evt, this.resetIdleTimer);
            });
            this.idleCheckInterval = setInterval(this.checkIdle, 1000);
            this.lastActionTime = Date.now();
        },
        beforeUnmount() {
            window.removeEventListener('resize', this.checkMobile);
            document.removeEventListener("visibilitychange", this.handleVisibilityChange);
            ['mousemove', 'click', 'keydown', 'touchstart'].forEach(evt => {
                window.removeEventListener(evt, this.resetIdleTimer);
            });
            if (this.idleCheckInterval) clearInterval(this.idleCheckInterval);
        },
        computed: {
            approvalColor() {
                if (this.approval > 60) return 'text-green';
                if (this.approval < 30) return 'text-red';
                return '';
            },
            tutorialTitle() {
                const titles = ['', '欢迎来到总统府', '关键数据', '政治手牌', '金融市场'];
                return titles[this.tutorialStep];
            },
            tutorialText() {
                if (this.isMobile) {
                    const texts = [
                        '',
                        '目标：存活48个月并赚取$200亿。',
                        '顶部是您的状态。支持率影响行动力(AP)。',
                        '这是您的手牌。打出卡牌会消耗AP。',
                        '在此通过买卖赚取资金。记得低买高卖！'
                    ];
                    return texts[this.tutorialStep];
                }
                const texts = [
                    '',
                    '总统先生/女士，您的目标是在48个月内积累$200亿财富，并保证支持率不崩盘。',
                    '左侧/顶部显示您的支持率和资金。支持率决定每回合行动点(AP)，资金决定生死。',
                    '这里是待处理的文件。打出它们会消耗AP，并影响国家和您的财富。',
                    '这是家族基金会。您可以利用信息差在股市、加密货币或商品市场进行多空操作。记得及时平仓！'
                ];
                return texts[this.tutorialStep];
            },
            endTurnText() {
                if (this.month === 48) return '卸任结算';
                if (this.ap < 1 && this.hand.length === 0) return '结束本月 >>';
                // 如果所有经济操作都做了(或者没钱了)，且AP没了
                const noMoney = this.money < 5 && this.positions.length === 0; // Simple heuristic
                if (this.ap === 0) return '结束本月 >>';
                return '结束本月';
            }
        },
        methods: {
            // --- Unlock System ---
            isCharLocked(char) {
                const clearedIds = this.getClearedCharIds();
                const clearedCount = clearedIds.length;
                
                // 基础角色 (ID 1-6)
                if (char.id <= 6) {
                    // 默认解锁: 2 (政客), 5 (平权)
                    if (char.id === 2 || char.id === 5) return false;
                    
                    // 第二级: 需通关任意 1 个角色 -> 解锁 1 (金发), 4 (将军)
                    if (char.id === 1 || char.id === 4) {
                        return clearedCount < 1;
                    }
                    
                    // 第三级: 需通关任意 3 个角色 -> 解锁 3 (科技), 6 (明星)
                    if (char.id === 3 || char.id === 6) {
                        return clearedCount < 3;
                    }
                }
                
                // 扩展角色 (ID 7+)
                // 需通关所有基础角色 (1-6)
                if (char.id > 6) {
                    const baseIds = [1, 2, 3, 4, 5, 6];
                    const allBaseCleared = baseIds.every(id => clearedIds.includes(id.toString()) || clearedIds.includes(id));
                    // 调试作弊模式：如果在localStorage设置了ps_unlock_all即可全开
                    if (localStorage.getItem('ps_unlock_all')) return false;

                    return !allBaseCleared;
                }
                
                return true;
            },
            
            getLockReason(char) {
                 if (char.id <= 6) {
                     if (char.id === 1 || char.id === 4) return "🔒 需通关任意 1 位角色";
                     if (char.id === 3 || char.id === 6) return "🔒 需通关任意 3 位角色";
                 }
                 if (char.id > 6) return "🔒 需通关所有基础角色(6位)";
                 return "未解锁";
            },

            getClearedCharIds() {
                // Return array of IDs that have 'completed: true'
                return Object.keys(this.achievements).filter(id => this.achievements[id].completed);
            },

            // --- Helper Methods for UI ---
            getPosition(type) {
                return this.positions.find(p => p.type === type);
            },
            getPosRoi(type) {
                const pos = this.getPosition(type);
                if (!pos) return 0;
                return ((pos.currentVal - pos.amount) / pos.amount * 100).toFixed(1);
            },
            closePositionByType(type) {
                const idx = this.positions.findIndex(p => p.type === type);
                if (idx !== -1) this.closePosition(idx);
            },

            handleVisibilityChange() {
                if (document.hidden) {
                    this.lastHiddenTime = Date.now();
                } else {
                    if (this.lastHiddenTime && Date.now() - this.lastHiddenTime > 5000) {
                        // Away for more than 5s
                        this.approval -= 1;
                        this.addLog("📉 摸鱼警告: 您因擅离职守导致支持率轻微下降。");
                    }
                }
            },
            resetIdleTimer() {
                this.lastActionTime = Date.now();
            },
            checkIdle() {
                if (this.state !== 'PLAYING') return;
                const idleTime = Date.now() - this.lastActionTime;
                if (idleTime > 60000 && !this.isIdleWarned) { // 1 minute
                    this.addLog("📢 秘书提醒: 总统先生，文件堆积如山，请尽快处理。");
                    this.isIdleWarned = true;
                }
                if (idleTime < 1000) {
                    this.isIdleWarned = false;
                }
            },

            checkMobile() {
                this.isMobile = window.innerWidth < 900;
            },
            
            // --- 教程逻辑 ---
            nextCharTutorialStep() {
                if (this.charTutorialStep < 2) {
                    this.charTutorialStep++;
                } else {
                    this.showCharTutorial = false;
                    localStorage.setItem('president_sim_char_tutorial_done', 'true');
                }
            },
            nextTutorialStep() {
                if (this.tutorialStep < 4) {
                    this.tutorialStep++;
                } else {
                    this.showTutorial = false;
                    localStorage.setItem('president_sim_tutorial_done', 'true');
                }
            },
            startGame() {
                // 重置游戏核心状态
                this.month = 1;
                this.approval = 50;
                this.money = 0;
                this.ap = 2;
                this.maxAp = 2;
                this.hand = [];
                this.logs = [];
                this.currentEvent = null;
                
                // 重置经济与持仓
                this.marketScore = 0;
                this.cryptoScore = 10;
                this.commodityScore = 0;
                this.globalEconomy = 'growth';
                this.economyPhase = 0;
                this.actionsTaken = { stock: false, crypto: false, commodity: false, embezzle: false };
                this.positions = []; 
                this.tutorialFlags = { firstCard: false, firstInvest: false, firstClose: false }; // Reset flags? Or Keep? Keep persistent usually better for tutorial but this is session based.
                // Load flags from localstorage if intended to be once-ever
                if (localStorage.getItem('ps_t_flags')) {
                    this.tutorialFlags = JSON.parse(localStorage.getItem('ps_t_flags'));
                }

                this.lastActionTime = Date.now();
                this.achievements = {}; // Reload or keep persistent? Usually reloading from storage is safer here
                this.loadAchievements(); // Ensure achievements are fresh

                const char = this.characters.find(c => c.id === this.selectedCharId);
                this.player = { ...char }; // 深拷贝
                this.money = this.player.money;
                this.state = 'PLAYING';
                
                const title = this.player.gender === 'female' ? '女士' : '先生';
                this.logs.push(`总统${title}，欢迎入主总统府。当前是第1个月。`);
                
                this.drawCards(3);
                this.updateMarketTrends(true); // 初始随机
                
                // 检查是否显示教程
                if (localStorage.getItem('president_sim_tutorial_done')) {
                    this.showTutorial = false;
                } else {
                    this.showTutorial = true;
                    this.tutorialStep = 1;
                }
            },

            // --- 核心循环 ---
            nextTurn() {
                if (this.checkGameOver()) return;

                // 1. 市场演变与结算 (在月度报告前计算)
                const oldPositionsVal = this.positions.reduce((acc, p) => acc + p.currentVal, 0);
                
                this.updateMarketTrends();
                this.updatePositions();

                const newPositionsVal = this.positions.reduce((acc, p) => acc + p.currentVal, 0);
                const posChange = newPositionsVal - oldPositionsVal;

                // 2. 生成报告
                this.reportModal.title = `第 ${this.month} 月结报告`;
                this.reportModal.changes = [];

                if (Math.abs(posChange) > 0.01) {
                    this.reportModal.changes.push({
                        label: '基金会盈亏',
                        val: (posChange > 0 ? '+' : '') + '$' + posChange.toFixed(2) + '亿',
                        class: posChange >= 0 ? 'text-green' : 'text-red'
                    });
                }
                
                this.reportModal.changes.push({
                    label: '当前支持率',
                    val: this.approval + '%',
                    class: this.approvalColor
                });

                // 显示经济周期状态
                this.reportModal.changes.push({
                    label: '宏观经济',
                    val: this.economyCycleStatus || '波动中',
                    class: 'text-blue' // 假设 text-blue 存在或默认样式
                });

                // 提示
                let hint = "保持现状，稳步发展。";
                let isCrisis = this.globalEconomy === 'crisis' || this.globalEconomy === 'recession';
                
                // 优先根据宏观周期给出建议
                if (this.globalEconomy === 'crisis') hint = "🌍 警告：全球危机！现金为王，或者做空一切。";
                else if (this.globalEconomy === 'recession') hint = "📉 提示：经济衰退，避险资产(如商品)通常表现更好。";
                else if (this.globalEconomy === 'boom') hint = "🚀 提示：繁荣时期，大胆做多股市和加密货币！";
                
                // 特殊情况覆盖
                if (this.approval < 30) hint = "🔥 警告：支持率极低，小心弹劾风险！优先处理民生。";
                else if (this.money < 2) hint = "💸 警告：资金枯竭，注意人身安全！";
                
                // 如果没有宏观大问题，再看市场趋势
                else if (!isCrisis && this.marketTrend === 'bull') hint = "📈 提示：股市牛市，可以适当加仓。";

                this.reportModal.hint = hint;
                this.reportModal.show = true;
            },

            confirmReport() {
                this.reportModal.show = false;
                this.activeTab = 'desk';
                this.startNewMonth();
            },

            startNewMonth() {
                // 3. 时间推进
                this.month++;
                this.addLog(`📅 进入第 ${this.month} 个月`);

                // 4. AP 回复机制 (基于支持率)
                if (this.approval >= 80) this.maxAp = 8;
                else if (this.approval >= 60) this.maxAp = 6;
                else if (this.approval >= 40) this.maxAp = 4;
                else this.maxAp = 2;
                this.ap = this.maxAp;

                // 5. 技能冷却减少
                if (this.skillCooldown > 0) this.skillCooldown--;

                // 6. 随机事件触发
                if (this.currentEvent && this.currentEvent.choices) {
                    this.showModal("紧急国务", "你必须先处理当前的突发危机！", "info");
                    return;
                }
                this.currentEvent = null;
                this.handleEvents();

                // 7. 重置行为限制
                this.actionsTaken = { stock: false, crypto: false, commodity: false, embezzle: false };

                // 8. 补充卡牌 (手牌上限6，每回合抽2张)
                this.drawCards(2);
            },

            loadAchievements() {
                try {
                    const data = localStorage.getItem('president_sim_achievements');
                    if (data) {
                        this.achievements = JSON.parse(data);
                    }
                } catch (e) {
                    console.error("Failed to load achievements", e);
                }
            },

            saveAchievement(isWin = false) {
                if (!this.player) return;
                const cid = this.player.id;
                if (!this.achievements[cid]) {
                    this.achievements[cid] = { maxMonth: 0, maxMoney: 0, completed: false };
                }
                
                // 更新记录
                if (this.month > this.achievements[cid].maxMonth) {
                    this.achievements[cid].maxMonth = this.month;
                }
                if (this.money > this.achievements[cid].maxMoney) {
                    this.achievements[cid].maxMoney = this.money;
                }
                if (isWin) {
                    this.achievements[cid].completed = true;
                }

                localStorage.setItem('president_sim_achievements', JSON.stringify(this.achievements));
            },

            getCardCostClass(cost) {
                if (cost >= 3) return 'cost-high';
                if (cost === 2) return 'cost-med';
                return 'cost-low';
            },

            checkGameOver() {
                let isOver = false;
                let title = "";
                let msg = "";
                let type = "info";

                // 财富 < 1亿 -> 暗杀
                if (this.money < 1) {
                    title = "GAME OVER: 遇刺身亡";
                    msg = "你的私人安保团队因为欠薪罢工了。你在高尔夫球场被不明身份的狙击手击毙。";
                    type = "fail";
                    isOver = true;
                }
                // 支持率 < 25 -> 弹劾
                else if (this.approval < 25) {
                    title = "GAME OVER: 遭到弹劾";
                    msg = "国会全票通过了对你的弹劾案。你不仅丢了工作，还将面临牢狱之灾。";
                    type = "fail";
                    isOver = true;
                }
                // 48月结束 -> 结算
                else if (this.month > 48) {
                    if (this.money >= 200) {
                        title = "完美结局: 资本大鳄";
                        msg = `任期结束。你带着 $${this.money.toFixed(1)}亿 的巨额财富光荣退休，成为幕后真正的统治者。`;
                        type = "win";
                    } else {
                        title = "结局: 凄惨晚年";
                        msg = `任期结束。虽然你活了下来，但仅有的 $${this.money.toFixed(1)}亿 财富不足以让你在政敌的清算中自保。`;
                        type = "fail";
                    }
                    isOver = true;
                }

                if (isOver) {
                    this.saveAchievement(type === 'win');
                    this.showModal(title, msg, type);
                    this.state = 'GAME_OVER';
                    return true;
                }
                return false;
            },

            makeChoice(choiceIdx) {
                // AP 检查 (紧急事件消耗 1 AP)
                if (this.ap < 1) {
                    this.showModal("行动力不足", "你需要 1 点行动力(AP)来处理此事件。请选择【忽略】。", "warning");
                    return;
                }
                this.ap -= 1;

                const choice = this.currentEvent.choices[choiceIdx];
                const effect = choice.effect;
            
            if (effect.approval) this.approval += effect.approval;
            if (effect.money) this.money += effect.money;
            if (effect.market) this.modifyMarketScore('market', effect.market);
            if (effect.crypto) this.modifyMarketScore('crypto', effect.crypto);
            if (effect.commodity) this.modifyMarketScore('commodity', effect.commodity);
            if (effect.global_economy) {
                // 事件对周期的冲击
                const type = effect.global_economy;
                if (type === 'boom' || type === 'growth') {
                    this.marketScore += 10;
                } else {
                    this.marketScore -= 10;
                    // 事件导致的危机通常会直接把周期推向谷底
                    if (type === 'crisis') {
                        // 强制相位偏移向 3PI/2 (270度 = 4.71)
                        // 简单处理：如果正处在复苏(cos>0)，强行加相位
                        if (Math.cos(this.economyPhase) > 0) this.economyPhase += 1.0; 
                    }
                }
                this.addLog(`🌍 危机影响: 经济周期受到冲击`);
            }

            // 限制数值范围
            this.approval = Math.min(100, Math.max(0, this.approval));
            this.money = parseFloat(this.money.toFixed(2));

            this.addLog(`⚡ 应对危机: 选择了【${choice.text}】`);
            this.currentEvent = null; // 事件处理完毕
        },

        ignoreEvent() {
            // 忽略事件惩罚
            this.approval -= 5;
            this.addLog(`⚠️ 忽视危机: 未处理突发事件，民怨沸腾 (支持率 -5%)`);
            this.currentEvent = null;
        },

        // --- 行为逻辑 ---
            getPhase() {
                if (this.month <= 12) return 'early';
                if (this.month <= 36) return 'mid';
                return 'late';
            },

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

                const currentPhase = this.getPhase();

                for (let i = 0; i < drawCount; i++) {
                    // 1. 过滤：移除其他角色的专属卡 + Phase Filter
                    let pool = CARD_DB.filter(c => {
                        const charMatch = !c.reqCharId || c.reqCharId === this.player.id;
                        const phaseMatch = !c.phase || c.phase === 'any' || c.phase === currentPhase;
                        return charMatch && phaseMatch;
                    });

                    // 2. 资深政客技能：只抽阴谋/经济
                    if (this.player.id === 2 && this.skillActive) {
                        pool = pool.filter(c => c.type === '阴谋' || c.type === '经济');
                    }
                    
                    if (pool.length === 0) pool = CARD_DB; // Fallback

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
                // Check Tutorial Flag
                if (!this.tutorialFlags.firstCard) {
                    this.showModal("新手引导: 政治手牌", "这是你的第一次政治决策！\n\n1. 每张卡牌都会消耗 【AP (行动力)】。\n2. 卡牌主要影响 【支持率】 和 【资金】。\n3. 部分卡牌还会影响 【全球经济】 或 【特定市场】。\n\n请谨慎选择，AP 用完就只能等下个月了。", "info");
                    this.tutorialFlags.firstCard = true;
                    localStorage.setItem('ps_t_flags', JSON.stringify(this.tutorialFlags));
                    return; 
                }

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
                
                // 政治行为改变经济周期
                if (card.effect.global_economy) {
                    const type = card.effect.global_economy;
                    let logMsg = "";
                    
                    if (type === 'boom' || type === 'growth') {
                        // 刺激政策：推高分数，如果在衰退期则尝试扭转
                        this.marketScore += 15;
                        this.economyPhase += 0.1; // 加快周期流转
                        logMsg = "市场因刺激政策而兴奋";
                    } else {
                        // 紧缩/危机政策
                        this.marketScore -= 15;
                        this.economyPhase += 0.05; // 略微推进
                        logMsg = "市场因恐慌而下跌";
                    }
                    this.addLog(`🌍 政策干预: ${logMsg}`);
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

            // --- 新增：长期持仓系统 ---
            makeInvestment(type, position) {
                 // Check Tutorial Flag
                 if (!this.tutorialFlags.firstInvest) {
                    this.showModal("新手引导: 基金会投资", "欢迎来到金融市场！\n\n1. 【做多(Long)】: 认为市场会涨。\n2. 【做空(Short)】: 认为市场会跌。\n3. 每个仓位固定投入 $5亿。\n4. 记得在合适的时机 【平仓】 锁定利润，否则只能看着钱变少！", "info");
                    this.tutorialFlags.firstInvest = true;
                    localStorage.setItem('ps_t_flags', JSON.stringify(this.tutorialFlags));
                    return;
                }

                if (this.actionsTaken[type]) return;

                // 检查是否已有同类持仓
                const existing = this.positions.find(p => p.type === type && p.position === position);
                if (existing) {
                    this.showModal('重复建仓', `您已经持有 ${type==='stock'?'股市':(type==='crypto'?'加密货币':'商品')} 的${position==='long'?'多单':'空单'}了。请勿重复下注。`, 'info');
                    return;
                }
                
                // 资金检查
                const cost = 5; // 每次固定投入5亿
                if (this.money < cost) {
                    this.showModal('资金不足', '你需要至少$5亿才能开设新仓位。', 'info');
                    return;
                }

                this.money -= cost;
                this.actionsTaken[type] = true;

                // 创建持仓
                this.positions.push({
                    id: Date.now() + Math.random(),
                    type: type,
                    position: position, // 'long' or 'short'
                    amount: cost,
                    currentVal: cost,
                    startMonth: this.month,
                    startScore: type === 'stock' ? this.marketScore : (type === 'crypto' ? this.cryptoScore : this.commodityScore)
                });

                this.addLog(`💼 开仓: ${position==='long'?'做多':'做空'} ${type==='stock'?'股市':(type==='crypto'?'加密':'商品')} ($${cost}亿)`);
                
                // 技能：内幕交易
                if (this.player.id === 3 && this.skillActive) {
                    this.skillActive = false;
                    this.positions[this.positions.length-1].isInsider = true; 
                    this.addLog("💡 内幕消息已生效，该仓位将受到特殊优待。");
                }
            },

            closePosition(index) {
                const pos = this.positions[index];
                this.money += pos.currentVal;
                this.positions.splice(index, 1);
                
                // 允许当回合再次该类型操作 (平仓后解锁)
                this.actionsTaken[pos.type] = false; // Reset action flag

                const profit = pos.currentVal - pos.amount;
                this.addLog(`💰 平仓: 收回 $${pos.currentVal.toFixed(2)}亿 (${profit>=0?'+':''}${profit.toFixed(2)}亿)`);
            },

            updatePositions() {
                this.positions.forEach(pos => {
                    let score = 0;
                    let volatility = 0;
                    
                    if (pos.type === 'stock') { score = this.marketScore; volatility = 0.05; }
                    else if (pos.type === 'crypto') { score = this.cryptoScore; volatility = 0.15; }
                    else if (pos.type === 'commodity') { score = this.commodityScore; volatility = 0.08; }

                    // 计算涨跌幅 (基于分数的变化)
                    // score 范围 -100 ~ 100. 100 => +10%, -100 => -10% per month
                    let percentChange = (score / 100) * 0.10; 
                    
                    // 加上随机波动
                    percentChange += (Math.random() * volatility * 2 - volatility);

                    // 做空反向
                    if (pos.position === 'short') percentChange = -percentChange;

                    // 技能修正
                    if (pos.isInsider) {
                        percentChange = Math.abs(percentChange) + 0.1; // 至少赚10%
                    }
                    if (this.player.id === 6 && this.skillActive) {
                         // 明星技能：本回合无风险 (此处简化为不跌)
                         if (percentChange < 0) percentChange = 0; 
                    }

                    // 更新价值 (复利)
                    pos.currentVal = pos.currentVal * (1 + percentChange);
                    
                    // 归零保护
                    if (pos.currentVal < 0.01) pos.currentVal = 0;
                });
                // 更新显示余额
                this.money = parseFloat(this.money.toFixed(2));
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
                // 打开确认弹窗而非直接执行
                this.skillModal.show = true;
            },

            confirmSkill() {
                this.skillModal.show = false;
                
                if (this.player.skillCostMoney && this.money < this.player.skillCostMoney) {
                    this.addLog("❌ 资金不足以发动技能！");
                    return;
                }
                
                // this.ap -= this.skillCost; // 技能不消耗点数
                this.money -= (this.player.skillCostMoney || 0);
                this.skillCooldown = 6; // 6个月冷却
                this.addLog(`★ 发动技能: ${this.player.skillName}`);

                switch(this.player.id) {
                    case 1: // 金发大亨
                        this.approval += 15;
                        if(this.approval > 100) this.approval = 100;
                        this.addLog("推特治国生效：支持率大幅上升。");
                        break;
                    case 2: // 资深政客
                        this.ap += 2;
                        this.skillActive = true; 
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
                    
                    // --- 新增角色技能 (7-18) ---
                    case 7: // 石油大亨 (能源垄断)
                        this.commodityScore += 30; 
                        this.money += 10;
                        this.addLog("能源垄断：商品市场暴涨，获利 $10亿。");
                        break;
                    case 8: // 律政俏佳人 (宪法解释)
                        this.approval += 15;
                        this.addLog("宪法解释：这不违宪，支持率回升。");
                        break;
                    case 9: // 加密极客 (去中心化)
                        this.cryptoScore += (Math.random() > 0.5 ? 40 : -40); 
                        this.hand.push({type: "经济", title: "空投代币", desc: "天上掉馅饼。", cost: 0, effect: {money: 2, crypto: "bull"}});
                        this.addLog("去中心化：加密市场剧烈波动，获得一张特殊卡牌。");
                        break;
                    case 10: // 脱口秀女王 (黄金时段)
                        this.approval = 60;
                        this.ap = 0;
                        this.addLog("黄金时段：支持率重置为60%，但耗尽了精力。");
                        break;
                    case 11: // 工会领袖 (全国罢工)
                        this.globalEconomy = 'recession';
                        this.approval += 15;
                        this.addLog("全国罢工：经济衰退，但工人阶级支持你。");
                        break;
                    case 12: // 环保少女 (气候紧急状态)
                        this.approval += 5;
                        this.commodityScore -= 20; 
                        this.addLog("气候紧急状态：商品市场受挫，年轻人为你欢呼。");
                        break;
                    case 13: //情报局长
                        this.addLog("棱镜计划：已获取未来市场情报(Beta)");
                        break;
                    case 14: // 地产皇后
                        this.marketScore += 20;
                        this.commodityScore += 20;
                        this.globalEconomy = 'recession'; 
                        this.addLog("房地产泡沫：资产价格上涨，但经济过热。");
                        break;
                    case 15: // 学术泰斗
                        this.money += 10;
                        this.addLog("MMT理论：凭空创造了 $10亿。");
                        break;
                    case 16: // 网红医生
                        this.approval += 8;
                        this.addLog("全民疫苗：公共卫生状况改善。");
                        break;
                    case 17: // 前朝国母
                        for(let i=0; i<3; i++) this.hand.push({type: "内政", title: "政治遗产", desc: "前任留下的馈赠", cost: 0, effect: {approval: 5, money: 1}});
                        this.addLog("政治遗产：获得3张强力内政卡牌。");
                        break;
                    case 18: // 摇滚巨星
                        this.approval += 10;
                        this.money += 2;
                        this.addLog("巡回演出：支持率飙升，门票收入入账。");
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
                    const currentPhase = this.getPhase();

                    // 1. Filter candidates by Phase
                    let candidates = EVENTS_DB.filter(e => {
                        return !e.phase || e.phase === 'any' || e.phase === currentPhase;
                    });
                     
                    if (candidates.length === 0) candidates = EVENTS_DB; // Fallback

                    // 针对性反向事件 (Adapted)
                    // Note: original logic relied on e.type which might be missing in new data. 
                    // So we rely on the filtered candidates primarily.
                    
                    const eventTemplate = candidates[Math.floor(Math.random() * candidates.length)];
                    const event = JSON.parse(JSON.stringify(eventTemplate)); // Deep copy based on template
                    
                    this.currentEvent = event;
                    this.addLog(`⚡ 突发: ${event.title}`);
                    
                    // 应用事件效果 (现在叠加分数)
                    // Some events might have immediate effects without choices, handle them if needed.
                    // But mostly events have choices.
                    
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
                    this.economyPhase = Math.random() * Math.PI * 2;
                } else {
                    // 推进经济周期 (步进 0.15 ~ 0.3, 约20-40回合一个周期)
                    const step = 0.15 + Math.random() * 0.15;
                    this.economyPhase += step;
                }

                // 保持 Phase 在 0-2PI
                if (this.economyPhase > Math.PI * 2) this.economyPhase -= Math.PI * 2;

                // 计算基础经济分数 (-50 ~ 50)
                const baseEcoScore = Math.sin(this.economyPhase) * 50;

                // 更新全局状态
                if (baseEcoScore > 35) this.globalEconomy = 'boom';
                else if (baseEcoScore > 5) this.globalEconomy = 'growth';
                else if (baseEcoScore > -25) this.globalEconomy = 'recession';
                else this.globalEconomy = 'crisis';
                
                // 周期状态描述
                const slope = Math.cos(this.economyPhase);
                this.economyCycleStatus = `周期: ${baseEcoScore.toFixed(0)} (${slope > 0 ? '🔺复苏' : '🔻衰退'})`;

                if (!forceRandom) {
                    // 分数自然衰减
                    this.marketScore *= 0.8; 
                    this.cryptoScore *= 0.8;
                    this.commodityScore *= 0.9;
                }

                // 经济周期影响分数
                // 股市：顺周期，波动中等
                this.marketScore += baseEcoScore * 0.6 + (Math.random() * 10 - 5);
                // 商品：弱反周期或滞后 (此处设为弱反)
                this.commodityScore += (baseEcoScore * -0.2) + (Math.random() * 12 - 6); 
                // 加密：强顺周期，高波动
                this.cryptoScore += (baseEcoScore * 0.9) + (Math.random() * 30 - 15);

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
                    // Reset to character selection instead of reloading
                    this.state = 'SELECT_CHAR';
                    this.selectedCharId = null; // Optional: Reset selection
                    this.modal.show = false;
                } else {
                    this.modal.show = false;
                }
            }
        }
    }).mount('#app');
})();

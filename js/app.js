(function() {
    // 错误检查与容错
    if (!window.GAME_DATA) {
        console.error('CRITICAL: GAME_DATA not found. data.js failed to load.');
        alert('Game Data Load Failed. Please refresh or check data.js.');
    }
    if (typeof Vue === 'undefined') {
        console.error('CRITICAL: Vue not found. CDN failed.');
        alert('Vue.js failed to load. Check network connection.');
    }

    const { CHARACTERS, CARD_DB, EVENTS_DB } = window.GAME_DATA || {};
    const { createApp } = Vue;

    if (!createApp) {
        throw new Error("Vue createApp is missing");
    }

    const app = createApp({
        data() {
            return {
                lang: 'zh',
                langOptions: [
                    { code: 'zh', label: '🇨🇳 简体中文' },
                    { code: 'zh-tw', label: '🇹🇼 繁體中文' },
                    { code: 'en', label: '🇺🇸 English' },
                    { code: 'es', label: '🇪🇸 Español' },
                    { code: 'fr', label: '🇫🇷 Français' },
                    { code: 'ja', label: '🇯🇵 日本語' },
                    { code: 'ko', label: '🇰🇷 한국어' }
                ],
                state: 'SELECT_CHAR', // SELECT_CHAR, PLAYING, GAME_OVER
                selectedCharId: null,
                player: null,
                characters: CHARACTERS,
                
                // 游戏核心数据
                term: 1, // 1 or 2
                hiddenStats: {}, // e.g. { happiness: 10, unity: -5 }
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

                // 核心状态追踪
                cardPlayedThisTurn: false,

                // 移动端适配
                isMobile: window.innerWidth < 900,
                activeTab: 'desk', // stats, desk, market
                showFullLogs: false, // 移动端日志展开状态

                // 弹窗
                modal: { show: false, title: '', msg: '', type: 'info', btnText: '确定' },
                eventModal: { show: false },  // Fixed: Added eventModal state
                skillModal: { show: false },
                reportModal: { show: false, title: '', changes: [] },
                discardModal: { show: false, index: -1, noAsk: false, cost: 1 }, // Discard Modal State

                // 成就系统
                achievements: {},
                lastActionTime: Date.now(),
                idleCheckInterval: null,
                isIdleWarned: false,
                
                // Track Unique Cards
                playedUniqueTitles: []
            }
        },
        mounted() {
            if (localStorage.getItem('ps_lang')) {
                this.lang = localStorage.getItem('ps_lang');
            }
            if (localStorage.getItem('ps_discard_no_ask')) {
                this.discardModal.noAsk = true;
            }
            window.addEventListener('resize', this.checkMobile);
            this.loadAchievements();
            
            // Try to load saved game
            this.loadGame();

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
                if (this.tutorialStep === 0) return '';
                return this.t('tutorial_title_base_' + this.tutorialStep);
            },
            tutorialText() {
                if (this.tutorialStep === 0) return '';
                const prefix = this.isMobile ? 'tutorial_text_mobile_' : 'tutorial_text_pc_';
                return this.t(prefix + this.tutorialStep);
            },
            endTurnText() {
                if (this.month === 48) return this.t('end_turn_final');
                if (this.ap < 1 && this.hand.length === 0) return this.t('end_turn_next');
                // 如果所有经济操作都做了(或者没钱了)，且AP没了
                const noMoney = this.money < 5 && this.positions.length === 0; // Simple heuristic
                if (this.ap === 0) return this.t('end_turn_next');
                return this.t('end_turn_simple');
            }
        },
        methods: {
            t(key, ...args) {
                if (!window.I18N) return key;
                let str = (window.I18N[this.lang] && window.I18N[this.lang][key]) || (window.I18N['zh'] && window.I18N['zh'][key]) || key;
                args.forEach((arg, i) => {
                    str = str.replace(`{${i}}`, arg);
                });
                return str;
            },
            getLoc(val) {
                // 1. Data Object Format (Legacy Support)
                if (typeof val === 'object' && val !== null) {
                    return val[this.lang] || val['zh'] || val['en'] || '';
                }
                
                // 2. I18N Key Format (New Architecture)
                if (typeof val === 'string') {
                    // Direct lookup in window.I18N
                    if (window.I18N && window.I18N[this.lang] && window.I18N[this.lang][val]) {
                        return window.I18N[this.lang][val];
                    }
                    // Fallback to English
                    if (window.I18N && window.I18N['en'] && window.I18N['en'][val]) {
                        return window.I18N['en'][val];
                    }
                }
                
                return val || '';
            },
            setLang(code) {
                this.lang = code;
                localStorage.setItem('ps_lang', code);
            },

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
                     if (char.id === 1 || char.id === 4) return this.t('lock_reason_1');
                     if (char.id === 3 || char.id === 6) return this.t('lock_reason_3');
                 }
                 if (char.id > 6) return this.t('lock_reason_all');
                 return this.t('lock_unlocked');
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
                        this.addLog(this.t('log_afk_warning'));
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
                    this.addLog(this.t('log_idle_warning'));
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
                this.term = 1;
                this.hiddenStats = {};
                this.hand = [];
                this.logs = [];
                this.currentEvent = null;
                this.eventModal = { show: false }; // New Event Modal State
                
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
                
                // const title = this.player.gender === 'female' ? '女士' : '先生';
                this.logs.push(this.t('log_welcome'));
                
                this.drawCards(3);
                this.updateMarketTrends(true); // 初始随机
                
                // 检查是否显示教程
                if (localStorage.getItem('president_sim_tutorial_done')) {
                    this.showTutorial = false;
                } else {
                    this.showTutorial = true;
                    this.tutorialStep = 1;
                }
                
                this.saveGame();
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
                this.reportModal.title = this.t('report_title', this.month);
                this.reportModal.changes = [];

                if (Math.abs(posChange) > 0.01) {
                    this.reportModal.changes.push({
                        label: this.t('report_profit'),
                        val: (posChange > 0 ? '+' : '') + '$' + posChange.toFixed(2) + this.t('unit_billion'),
                        class: posChange >= 0 ? 'text-green' : 'text-red'
                    });
                }
                
                this.reportModal.changes.push({
                    label: this.t('report_approval'),
                    val: this.approval + '%',
                    class: this.approvalColor
                });

                // 显示经济周期状态
                this.reportModal.changes.push({
                    label: this.t('report_economy'),
                    val: this.economyCycleStatus || this.t('eco_fluctuation'),
                    class: 'text-blue' // 假设 text-blue 存在或默认样式
                });

                // 提示
                let hint = this.t('hint_default');
                let isCrisis = this.globalEconomy === 'crisis' || this.globalEconomy === 'recession';
                
                // 优先根据宏观周期给出建议
                if (this.globalEconomy === 'crisis') hint = this.t('hint_crisis');
                else if (this.globalEconomy === 'recession') hint = this.t('hint_recession');
                else if (this.globalEconomy === 'boom') hint = this.t('hint_boom');
                
                // 特殊情况覆盖
                if (this.approval < 30) hint = this.t('hint_low_approval');
                else if (this.money < 2) hint = this.t('hint_low_money');
                
                // 如果没有宏观大问题，再看市场趋势
                else if (!isCrisis && this.marketTrend === 'bull') hint = this.t('hint_bull');

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
                if (this.checkGameOver()) return; // Check immediate game over (Month 49)
                this.addLog(`📅 进入第 ${this.month} 个月`);

                // Idle Penalty Logic
                if (!this.cardPlayedThisTurn && this.month > 1) {
                    const penalty = 3;
                    this.approval -= penalty;
                    this.addLog(this.t('log_idle_penalty', penalty));
                    
                    if (!this.tutorialFlags.idleWarned) {
                        this.showModal(this.t('tutorial_idle_title'), this.t('tutorial_idle_msg'), 'warning');
                        this.tutorialFlags.idleWarned = true;
                        localStorage.setItem('ps_t_flags', JSON.stringify(this.tutorialFlags));
                    }
                }
                this.cardPlayedThisTurn = false; // Reset for new month

                // Hand Limit Penalty Logic
                if (this.hand.length >= 10) {
                    const penalty = 5;
                    this.approval -= penalty;
                    this.addLog(this.t('log_hand_limit_penalty', penalty));
                    
                     if (!this.tutorialFlags.handLimitWarned) {
                        this.showModal(this.t('tutorial_hand_limit_title'), this.t('tutorial_hand_limit_msg'), 'warning');
                        this.tutorialFlags.handLimitWarned = true;
                        localStorage.setItem('ps_t_flags', JSON.stringify(this.tutorialFlags));
                    }
                }

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
                    this.showModal(this.t('modal_emergency'), this.t('modal_emergency_msg'), "info");
                    return;
                }
                this.currentEvent = null;
                this.handleEvents();

                // 7. 重置行为限制
                this.actionsTaken = { stock: false, crypto: false, commodity: false, embezzle: false };

                // 8. 补充卡牌 (动态刷新数量)
                // Calculate total months passed including previous terms (approx) or just this term scaling
                // User asked: "随着任期的长度...越来越多"
                const totalMonths = (this.term - 1) * 48 + this.month;
                let drawAmount = 2 + Math.floor(totalMonths / 12); 
                drawAmount = Math.min(5, drawAmount); // Max 5

                this.drawCards(drawAmount);

                this.saveGame();
            },

            saveGame() {
                if (this.state !== 'PLAYING') return;
                const saveData = {
                    term: this.term,
                    hiddenStats: this.hiddenStats,
                    month: this.month,
                    approval: this.approval,
                    money: this.money,
                    ap: this.ap,
                    hand: this.hand,
                    logs: this.logs,
                    currentEvent: this.currentEvent,
                    marketScore: this.marketScore,
                    cryptoScore: this.cryptoScore,
                    commodityScore: this.commodityScore,
                    marketTrend: this.marketTrend,
                    cryptoTrend: this.cryptoTrend,
                    commodityTrend: this.commodityTrend,
                    globalEconomy: this.globalEconomy,
                    economyPhase: this.economyPhase,
                    actionsTaken: this.actionsTaken,
                    positions: this.positions,
                    cardPlayedThisTurn: this.cardPlayedThisTurn,
                    player: this.player,
                    tutorialFlags: this.tutorialFlags,
                    timstamp: Date.now()
                };
                localStorage.setItem('ps_save_data', JSON.stringify(saveData));
            },

            loadGame() {
                const json = localStorage.getItem('ps_save_data');
                if (!json) return false;
                try {
                    const data = JSON.parse(json);
                    
                    // Simple validation
                    if (!data.player || !data.month) return false;

                    this.term = data.term || 1;
                    this.hiddenStats = data.hiddenStats || {};
                    this.month = data.month;
                    this.approval = data.approval;
                    this.money = data.money;
                    this.ap = data.ap;
                    this.hand = data.hand || [];
                    this.logs = data.logs || [];
                    this.currentEvent = data.currentEvent;
                    this.marketScore = data.marketScore;
                    this.cryptoScore = data.cryptoScore;
                    this.commodityScore = data.commodityScore;
                    this.marketTrend = data.marketTrend;
                    this.cryptoTrend = data.cryptoTrend;
                    this.commodityTrend = data.commodityTrend;
                    this.globalEconomy = data.globalEconomy;
                    this.economyPhase = data.economyPhase;
                    this.actionsTaken = data.actionsTaken;
                    this.positions = data.positions || [];
                    this.cardPlayedThisTurn = data.cardPlayedThisTurn || false;
                    this.player = data.player;
                    this.tutorialFlags = data.tutorialFlags || this.tutorialFlags;
                    
                    this.state = 'PLAYING';
                    this.addLog(this.t('log_game_loaded'));
                    return true;
                } catch (e) {
                    console.error("Load failed", e);
                    return false;
                }
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

            startSecondTerm() {
                // Tutorial / Intro for Term 2
                if (!this.tutorialFlags.legacyWarned) {
                     this.showModal(this.t('tutorial_legacy_title'), this.t('tutorial_legacy_msg'), 'info');
                     this.tutorialFlags.legacyWarned = true;
                     localStorage.setItem('ps_t_flags', JSON.stringify(this.tutorialFlags));
                }

                // Determine buff based on Term 1 stats
                let legacyMsg = [];
                const h = this.hiddenStats || {};
                
                // 1. Happiness > 5 -> +10 Approval (Legacy: The People LOVED you)
                if ((h.happiness || 0) > 5) {
                    this.approval += 15;
                    legacyMsg.push(this.t('legacy_happiness_buff'));
                }
                
                // 2. Corruption > 5 -> +$5B Money, -10 Approval (Legacy: The Grifting Continues)
                if ((h.corruption || 0) > 5) {
                     this.money += 5;
                     this.approval -= 10;
                     legacyMsg.push(this.t('legacy_corruption_buff'));
                }
                
                // 3. Notoriety > 5 -> -15 Approval, +10 Power (Legacy: Fear)
                if ((h.notoriety || 0) > 5) {
                    this.approval -= 15;
                    h.power = (h.power || 0) + 10; 
                    legacyMsg.push(this.t('legacy_notoriety_debuff'));
                }

                // 4. Unity > 5 -> +10 Approval, +5 Security
                if ((h.unity || 0) > 5) {
                    this.approval += 10;
                    h.security = (h.security || 0) + 5;
                    legacyMsg.push(this.t('legacy_unity_buff'));
                }

                // 5. Tech Dominance/Level > 5 -> +15 Market Score (Legacy: Tech Boom)
                if ((h.tech_level || 0) > 5 || (h.tech_dominance || 0) > 5) {
                    this.marketScore += 20;
                    legacyMsg.push(this.t('legacy_tech_buff'));
                }

                // 6. Military Power > 20 -> -5 Diplomacy, +10 Security (Legacy: Hawkish)
                if ((h.power || 0) > 20) {
                    h.diplomacy = (h.diplomacy || 0) - 5;
                    h.security = (h.security || 0) + 10;
                    legacyMsg.push(this.t('legacy_power_buff'));
                }

                // 7. Ego > 50 -> +2 AP Cap (simulated energy?), -10 Unity (Legacy: Cult of Personality)
                if ((h.ego || 0) > 50) {
                    this.approval = Math.max(50, this.approval); // Floor approval
                    legacyMsg.push(this.t('legacy_ego_buff'));
                }
                
                this.approval = Math.min(100, Math.max(0, this.approval));

                // Reset Game State for Term 2
                this.term = 2;
                this.month = 48; // startNewMonth will set to 49
                this.hand = [];
                this.positions = []; 
                this.deck = [...this.cards]; // Reshuffle
                
                this.addLog(this.t('log_term_2_start'));
                legacyMsg.forEach(msg => this.addLog(msg));
                
                this.drawCards(3);
                this.startNewMonth();
            },

            gameOver(reason) {
                let title = "", msg = "", type = "info";
                if (reason === 'retire') {
                    title = this.t('game_over_retire_title');
                    msg = this.t('game_over_retire_msg');
                    type = 'win';
                } else {
                    title = this.t('game_end_fail_title');
                    msg = this.t('game_end_fail_msg', '$' + this.money.toFixed(1), this.t('unit_billion'));
                    type = 'fail';
                }
                this.saveAchievement(type === 'win');
                // Use showSummaryModal but override action to ensure restart works
                this.showSummaryModal(title, msg, type);
                this.modal.action = 'restart'; // Ensure main button restarts game
                this.state = 'GAME_OVER';
            },

            checkGameOver() {
                let isOver = false;
                let title = "";
                let msg = "";
                let type = "info";
                let btnText = this.t('btn_ok');
                let action = null;

                // 财富 < 1亿 -> 暗杀
                if (this.money < 1) {
                    title = this.t('game_over_bankrupt_title');
                    msg = this.t('game_over_bankrupt_msg');
                    type = "fail";
                    isOver = true;
                }
                // 支持率 < 25 -> 弹劾
                else if (this.approval < 25) {
                    title = this.t('game_over_impeach_title');
                    msg = this.t('game_over_impeach_msg');
                    type = "fail";
                    isOver = true;
                }
                // 48月结束 -> 结算
                else if (this.month > 48) {
                    const moneyStr = '$' + this.money.toFixed(1);
                    const unit = this.t('unit_billion');
                    
                    if (this.term === 1) {
                         // Check Re-election Condition
                         // Must have decent approval (e.g. > 50) and no extreme bad stats
                         // e.g. High Chaos/Notoriety might ban you.
                         
                         const isNotorietyHigh = (this.hiddenStats.notoriety || 0) > 8;
                         const isChaosHigh = (this.hiddenStats.chaos || 0) > 8;
                         const isApprovalLow = this.approval < 50;

                         if (isNotorietyHigh || isChaosHigh) {
                             // Ban
                             title = this.t('game_over_banned_title');
                             msg = this.t('game_over_banned_msg');
                             type = "fail";
                             isOver = true;
                         } else if (isApprovalLow) {
                             // Lost Election
                             title = this.t('game_over_lost_election_title');
                             msg = this.t('game_over_lost_election_msg');
                             type = "fail";
                             isOver = true;
                         } else {
                             // Success! Offer Term 2 via Summary Modal
                             title = this.t('term_1_end_title');
                             msg = this.t('term_1_end_msg', moneyStr, unit);
                             type = "win"; // Green Text

                             // Show Summary first
                             this.showSummaryModal(title, msg, type);
                             
                             // Override buttons for transition
                             this.modal.btnText = this.t('btn_start_term_2');
                             this.modal.action = "start_term_2";
                             
                             this.modal.btnTextSec = this.t('btn_retire');
                             this.modal.actionSec = "retire";
                             
                             this.saveAchievement(true);
                             return true;
                         }
                    } else {
                        // Term 2 End
                        if (this.money >= 200) {
                            title = this.t('game_end_win_title');
                            msg = this.t('game_end_win_msg', [moneyStr, unit]);
                            type = "win";
                        } else {
                            title = this.t('game_end_fail_title');
                            msg = this.t('game_end_fail_msg', [moneyStr, unit]);
                            type = "fail";
                        }
                        
                        // Flavor Text based on stats
                        const maxStat = Object.keys(this.hiddenStats).reduce((a, b) => (this.hiddenStats[a] > (this.hiddenStats[b]||0) ? a : b), 'none');
                        if (maxStat !== 'none' && this.hiddenStats[maxStat] > 5) {
                            msg += "\n\n" + this.t('honoric_title') + ": " + this.t('honoric_' + maxStat);
                        }
                        
                        isOver = true;
                    }
                }

                if (isOver) {
                    this.saveAchievement(type === 'win');
                    // Show End Game Summary
                    this.showSummaryModal(title, msg, type);
                    this.state = 'GAME_OVER';
                    return true;
                }
                return false;
            },
            
            showSummaryModal(title, outcomeMsg, type) {
                // Compile Summary Data
                const summary = [
                    { label: this.t('stats_term_length'), value: this.t('stats_term_months', this.month) },
                    { label: this.t('stats_final_approval'), value: this.approval + "%" },
                    { label: this.t('stats_final_money'), value: "$" + this.money.toFixed(1) + this.t('unit_billion') }
                ];
                
                // Add hidden stats (Removed limit, filtered 0s, Only show Consolidated Stats)
                // Filter: Must be non-zero AND must start with 'stat_' (the 6 core metrics)
                const hiddenSorted = Object.entries(this.hiddenStats)
                    .filter(pair => pair[1] !== 0 && pair[0].startsWith('stat_')) 
                    .sort((a,b) => b[1] - a[1])    // Sort by value desc
                    .map(pair => ({ 
                        label: (this.t(pair[0]) !== pair[0] ? this.t(pair[0]) : pair[0]), 
                        value: pair[1] 
                    }));
                
                // Calculate Rating
                let rating = "rating_average";
                let banReason = null;
                let preventReelection = false;

                // Check Reelection Ban based on new stats (Threshold > 50?)
                // Default threshold should be high enough.
                const BAN_THRESHOLD = 80;

                // Sort stats to find highest bad one
                if (hiddenSorted.length > 0) {
                     const highest = hiddenSorted[0]; // Object { label, value, key? no key in current obj }
                     // We need the key to determine reason.
                     // Refetch with key:
                     const entries = Object.entries(this.hiddenStats)
                        .filter(pair => pair[1] !== 0)
                        .sort((a,b) => b[1] - a[1]);
                    
                    if (entries.length > 0 && entries[0][1] >= BAN_THRESHOLD) {
                        const maxKey = entries[0][0];
                        preventReelection = true;
                        // Determine Reason
                        banReason = this.t('prevention_' + maxKey);
                        if (banReason === 'prevention_' + maxKey) {
                            banReason = this.t('prevention_generic', this.t(maxKey));
                        }
                    }
                }

                if (type === 'fail' && this.month < 48) rating = "rating_terrible"; // Assassinated/Impeached
                else if (preventReelection) rating = "rating_bad"; // Banned
                else if (type === 'fail') rating = "rating_bad"; // Lost reelection
                else if (this.money > 100 && this.approval > 80) rating = "rating_legendary";
                else if (this.money > 50 || this.approval > 60) rating = "rating_great";
                
                // Construct Outcome Message
                let msg = outcomeMsg;
                if (preventReelection) {
                    msg += "\n\n" + banReason;
                }

                this.modal = {
                    show: true,
                    title: this.t('modal_end_summary_title'), // "Term Summary"
                    msg: msg, 
                    type: type,
                    isSummary: true, // Special flag for template
                    summaryData: summary,
                    hiddenData: hiddenSorted,
                    rating: this.t(rating),
                    banReason: preventReelection ? banReason : null, // Pass to template specifically
                    btnText: this.t('btn_restart'),
                    action: 'restart'
                };
            },

            handleModalAction(isSecondary) {
                 if (isSecondary && this.modal.actionSec) {
                     if (this.modal.actionSec === 'retire') {
                         this.gameOver("retire");
                     }
                     this.modal.show = false;
                     return;
                 }

                 if (this.modal.action === 'start_term_2') {
                     this.startSecondTerm();
                 } else if (this.modal.action === 'restart' || this.state === 'GAME_OVER') {
                     this.modal.show = false;
                     this.state = 'SELECT_CHAR';
                     this.selectedCharId = null;
                 } else {
                     this.modal.show = false;
                 }
            },

            makeChoice(choiceIdx) {
                // AP 检查 (紧急事件消耗 1 AP)
                if (this.ap < 1) {
                    this.showModal(this.t('modal_ap_short_title'), this.t('modal_ap_short_msg'), "warning");
                    return;
                }
                this.ap -= 1;
                
                // Close modal if open
                this.eventModal.show = false;

                const choice = this.currentEvent.choices[choiceIdx];
                const effect = choice.effect;
            
            if (effect.approval) this.approval += effect.approval;
            if (effect.money) this.money += effect.money;
            if (effect.market) this.modifyMarketScore('market', effect.market);
            if (effect.crypto) this.modifyMarketScore('crypto', effect.crypto);
            if (effect.commodity) this.modifyMarketScore('commodity', effect.commodity);
            
            // Accumulate hidden stats and log
            let hiddenLog = [];
            for (let key in effect) {
                if (['approval', 'money', 'market', 'crypto', 'commodity', 'global_economy'].includes(key)) continue;
                
                let val = effect[key];
                let targetKey = key;

                 // --- MAPPING LOGIC START ---
                 if (window.STAT_MAPPING && window.STAT_MAPPING[key]) {
                    const map = window.STAT_MAPPING[key];
                    if (typeof map === 'string') {
                        targetKey = map;
                    } else if (typeof map === 'object') {
                        targetKey = map.key;
                        if (map.invert) val = -val;
                    }
                } else {
                     if (!key.startsWith('stat_')) continue;
                }
                // --- MAPPING LOGIC END ---

                if (typeof val === 'number') {
                     if (!this.hiddenStats[targetKey]) this.hiddenStats[targetKey] = 0;
                     this.hiddenStats[targetKey] += val;

                     const sign = val >= 0 ? '+' : '';
                     const localizedKey = this.t(targetKey);
                     hiddenLog.push(`${localizedKey} ${sign}${val}`);
                }
            }

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

            this.addLog(this.t('log_crisis_response', this.getLoc(choice.text)));
            if (hiddenLog.length > 0) {
                 this.addLog(`   └ ${hiddenLog.join(', ')}`);
            }
            this.currentEvent = null; // 事件处理完毕
            this.saveGame();
        },

        ignoreEvent() {
            // 忽略事件惩罚
            this.approval -= 5;
            this.addLog(`⚠️ 忽视危机: 未处理突发事件，民怨沸腾 (支持率 -5%)`);
            this.currentEvent = null;
            this.eventModal.show = false;
            this.saveGame();
        },

        openEventModal() {
            if (this.currentEvent && this.currentEvent.choices) {
                this.eventModal.show = true;
            }
        },

        // --- 行为逻辑 ---
            getPhase() {
                // Term 1
                if (this.month <= 12) return 'early';
                if (this.month <= 36) return 'mid';
                if (this.month <= 48) return 'late';
                // Term 2
                if (this.month <= 60) return 'early';
                if (this.month <= 84) return 'mid';
                return 'late';
            },

            drawCards(count) {
                // 手牌上限10张 (Previously 6)
                let drawCount = count;
                const maxHand = 10;
                
                if (this.hand.length + drawCount > maxHand) {
                    drawCount = maxHand - this.hand.length;
                    if (drawCount <= 0) {
                        this.addLog(this.t('log_hand_full'));
                        return;
                    }
                }

                const currentPhase = this.getPhase();

                for (let i = 0; i < drawCount; i++) {
                    // 1. 过滤：移除其他角色的专属卡 + Phase Filter + Unique Filter
                    let pool = CARD_DB.filter(c => {
                        const charMatch = !c.reqCharId || c.reqCharId === this.player.id;
                        const phaseMatch = !c.phase || c.phase === 'any' || c.phase === currentPhase;
                        const uniqueMatch = !c.unique || !this.playedUniqueTitles.includes(c.title.en || c.title);
                        const termMatch = !c.term || c.term === this.term;
                        return charMatch && phaseMatch && uniqueMatch && termMatch;
                    });

                    // 2. 资深政客技能：只抽阴谋/经济
                    if (this.player.id === 2 && this.skillActive) {
                        pool = pool.filter(c => c.type === '阴谋' || c.type === '经济');
                    }
                    
                    if (pool.length === 0) pool = CARD_DB; // Fallback

                    const template = pool[Math.floor(Math.random() * pool.length)];
                    // Ensure every card has a cost. Default to 1 AP if not specified.
                    const cardData = { ...template };
                    if (cardData.cost === undefined) {
                        cardData.cost = 1;
                    }
                    this.hand.push(cardData);
                }
                // 消耗一次性技能状态
                if (this.player.id === 2 && this.skillActive) this.skillActive = false; 
            },

            confirmDiscard(index) {
                const card = this.hand[index];
                const cost = Math.max(1, Math.floor(card.cost / 2));

                if (this.ap < cost) {
                     this.addLog(this.t('log_ap_insufficient'));
                     return;
                }
                
                // Pass dynamic cost to modal translation
                this.discardModal.cost = cost; 
                // We need to inject this cost into the confirm text dynamically or update the modal prop
                
                if (this.discardModal.noAsk) {
                    this.executeDiscard(index);
                } else {
                    this.discardModal.index = index;
                    this.discardModal.show = true;
                    // Update the message dynamically if possible, or bind it in HTML
                    // Assuming HTML uses t('discard_confirm_text', discardModal.cost)
                }
            },

            executeDiscard(optIndex) {
                 let index = (typeof optIndex === 'number') ? optIndex : this.discardModal.index;
                 
                 if (this.discardModal.show) {
                     this.discardModal.show = false;
                     if (this.discardModal.noAsk) {
                         localStorage.setItem('ps_discard_no_ask', 'true');
                     }
                 }

                 if (index === -1 || index === null || index === undefined) return;

                const card = this.hand[index];
                const cost = Math.max(1, Math.floor(card.cost / 2));

                if (this.ap < cost) {
                    this.addLog(this.t('log_ap_insufficient'));
                    return;
                }
                this.ap -= cost;
                this.hand.splice(index, 1);
                this.addLog(this.t('log_discard', this.getLoc(card.title)));
                this.saveGame();
            },

            playCard(index) {
                const card = this.hand[index];
                
                // AP Check
                if (this.ap < card.cost) {
                    this.showModal(this.t('modal_action_limit'), this.t('modal_action_limit_msg'), "warning");
                    return;
                }

                // Check Tutorial Flag
                if (!this.tutorialFlags.firstCard) {
                    this.showModal(this.t('tutorial_card_title'), this.t('tutorial_card_text'), "info");
                    this.tutorialFlags.firstCard = true;
                    localStorage.setItem('ps_t_flags', JSON.stringify(this.tutorialFlags));
                    return; 
                }

                this.cardPlayedThisTurn = true;
                this.ap -= card.cost;
                
                // Mark Unique
                if (card.unique) {
                    this.playedUniqueTitles.push(card.title.en || card.title);
                }
                
                
                this.hand.splice(index, 1);



                // 应用效果
                this.approval += (card.effect.approval || 0);
                this.money += (card.effect.money || 0);
                
                // Collect hidden stats and dynamic effects
                const ignoreKeys = ['approval', 'money', 'market', 'commodity', 'crypto', 'inflation', 'global_economy'];
                let hiddenLog = [];

                for (let key in card.effect) {
                    if (ignoreKeys.includes(key)) continue;
                    
                    let val = card.effect[key];
                    let targetKey = key;
                    
                    // --- MAPPING LOGIC START ---
                    if (window.STAT_MAPPING && window.STAT_MAPPING[key]) {
                        const map = window.STAT_MAPPING[key];
                        if (typeof map === 'string') {
                            targetKey = map;
                        } else if (typeof map === 'object') {
                            targetKey = map.key;
                            if (map.invert) val = -val;
                        }
                    } else {
                         // Fallback for unmapped keys: if they aren't in keys to show, ignore or map to closest?
                         // For now, if not mapped, we assume it's one of the 6 stats already OR a new one we don't track.
                         // But we want to consolidate. If it's not mapped, we assign to 'Chaos' if negative, nothing if positive?
                         // Better: Just keep it if it starts with 'stat_'.
                         if (!key.startsWith('stat_')) {
                             // console.warn("Unmapped stat key:", key);
                             continue; // Skip unmapped keys to enforce 6 stats rule
                         }
                    }
                    // --- MAPPING LOGIC END ---

                    if (typeof val === 'number') {
                        if (!this.hiddenStats) this.hiddenStats = {}; // Ensure init
                        if (!this.hiddenStats[targetKey]) this.hiddenStats[targetKey] = 0;
                        this.hiddenStats[targetKey] += val;
                        
                        // Log (Using targetKey)
                        // Don't log repeats if multiple keys map to same target.
                        // Actually, logging the *original* key helps player understand flavor, 
                        // but logging the *target* key helps them understand mechanics.
                        // Let's log the target key name.
                        
                        // Debounce log? No, just push.
                        const sign = val >= 0 ? '+' : '';
                        const localizedKey = this.t(targetKey);
                        hiddenLog.push(`${localizedKey} ${sign}${val}`);
                    }
                }
                
                // Deduplicate hiddenLog based on keys (e.g. if "Panic" and "Violence" both map to "Chaos", just show "Chaos +20")
                // Simplified: Just show them. 

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
                        logMsg = this.t('log_market_excited');
                    } else {
                        // 紧缩/危机政策
                        this.marketScore -= 15;
                        this.economyPhase += 0.05; // 略微推进
                        logMsg = this.t('log_market_panic');
                    }
                    this.addLog(this.t('log_policy_intervention', logMsg));
                }

                // 限制数值范围
                this.approval = Math.min(100, Math.max(0, this.approval));
                this.money = parseFloat(this.money.toFixed(2));

                this.addLog(this.t('log_play_card', this.getLoc(card.title)));
                if (hiddenLog.length > 0) {
                     this.addLog(`   └ ${hiddenLog.join(', ')}`);
                }
                this.saveGame();
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
                    this.showModal(this.t('tutorial_invest_title'), this.t('tutorial_invest_msg'), "info");
                    this.tutorialFlags.firstInvest = true;
                    localStorage.setItem('ps_t_flags', JSON.stringify(this.tutorialFlags));
                    return;
                }

                if (this.actionsTaken[type]) return;

                // 检查是否已有同类持仓
                const existing = this.positions.find(p => p.type === type && p.position === position);
                if (existing) {
                    const typeText = this.t('market_' + type);
                    const posText = position === 'long' ? this.t('pos_long') : this.t('pos_short');
                    this.showModal(this.t('modal_duplicate_title'), this.t('modal_duplicate_msg', typeText, posText), 'info');
                    return;
                }
                
                // 资金检查
                const cost = 5; // 每次固定投入5亿
                if (this.money < cost) {
                    this.showModal(this.t('modal_funds_short_title'), this.t('modal_funds_short_msg'), 'info');
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

                const actionStr = position==='long' ? this.t('action_buy') : this.t('action_short');
                const marketStr = this.t('market_' + type);
                this.addLog(this.t('log_open_pos', actionStr, marketStr, cost));
                
                // 技能：内幕交易
                if (this.player.id === 3 && this.skillActive) {
                    this.skillActive = false;
                    this.positions[this.positions.length-1].isInsider = true; 
                    this.addLog(this.t('log_insider_active'));
                }
                this.saveGame();
            },

            closePosition(index) {
                const pos = this.positions[index];
                this.money += pos.currentVal;
                this.positions.splice(index, 1);
                
                // 允许当回合再次该类型操作 (平仓后解锁)
                this.actionsTaken[pos.type] = false; // Reset action flag

                const profit = pos.currentVal - pos.amount;
                this.addLog(`💰 平仓: 收回 $${pos.currentVal.toFixed(2)}亿 (${profit>=0?'+':''}${profit.toFixed(2)}亿)`);
                this.saveGame();
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
                this.addLog(this.t('log_embezzle', '$' + gain.toFixed(1), this.t('unit_billion')));
                this.saveGame();
            },

            // --- 技能系统 ---
            useSkill() {
                // 打开确认弹窗而非直接执行
                this.skillModal.show = true;
            },

            confirmSkill() {
                this.skillModal.show = false;
                
                if (this.player.skillCostMoney && this.money < this.player.skillCostMoney) {
                    this.addLog(this.t('log_skill_fail_money'));
                    return;
                }
                
                // this.ap -= this.skillCost; // 技能不消耗点数
                this.money -= (this.player.skillCostMoney || 0);
                this.skillCooldown = 6; // 6个月冷却
                this.addLog(this.t('log_skill_use', this.getLoc(this.player.skillName)));

                switch(this.player.id) {
                    case 1: // 金发大亨
                        this.approval += 15;
                        if(this.approval > 100) this.approval = 100;
                        this.addLog(this.t('log_skill_effect_1'));
                        break;
                    case 2: // 资深政客
                        this.ap += 2;
                        this.skillActive = true; 
                        this.addLog(this.t('log_skill_effect_2'));
                        break;
                    case 3: // 科技新贵
                        this.skillActive = true; 
                        this.addLog(this.t('log_skill_effect_3'));
                        break;
                    case 4: // 退役将军
                        this.approval -= 20;
                        this.money += 5;
                        this.addLog(this.t('log_skill_effect_4'));
                        break;
                    case 5: // 平权斗士
                        const convert = this.approval * 0.1;
                        this.money += convert;
                        this.approval -= 10;
                        this.addLog(this.t('log_skill_effect_5', '$' + convert.toFixed(1), this.t('unit_billion')));
                        break;
                    case 6: // 好莱坞明星
                        this.approval += 10;
                        this.skillActive = true;
                        this.addLog(this.t('log_skill_effect_6'));
                        break;
                    
                    // --- 新增角色技能 (7-18) ---
                    case 7: // 石油大亨 (能源垄断)
                        this.commodityScore += 30; 
                        this.money += 10;
                        this.addLog(this.t('log_skill_effect_7', this.t('unit_billion')));
                        break;
                    case 8: // 律政俏佳人 (宪法解释)
                        this.approval += 15;
                        this.addLog(this.t('log_skill_effect_8'));
                        break;
                    case 9: // 加密极客 (去中心化)
                        this.cryptoScore += (Math.random() > 0.5 ? 40 : -40); 
                        this.hand.push({
                            type: {zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", 'zh-tw': "經濟"},
                            title: {zh: "空投代币", en: "Token Airdrop", es: "Airdrop", fr: "Parachutage", ja: "トークン配布", ko: "토큰 에어드랍", 'zh-tw': "空投代幣"},
                            desc: {zh: "天上掉馅饼。", en: "Free money from the sky.", es: "Dinero gratis del cielo.", fr: "L'argent tombe du ciel.", ja: "棚からぼた餅。", ko: "하늘에서 돈이 떨어진다.", 'zh-tw': "天上掉餡餅。"},
                            cost: 0, 
                            effect: {money: 2, crypto: "bull"}
                        });
                        this.addLog(this.t('log_skill_effect_9'));
                        break;
                    case 10: // 脱口秀女王 (黄金时段)
                        this.approval = 60;
                        this.ap = 0;
                        this.addLog(this.t('log_skill_effect_10'));
                        break;
                    case 11: // 工会领袖 (全国罢工)
                        this.globalEconomy = 'recession';
                        this.approval += 15;
                        this.addLog(this.t('log_skill_effect_11'));
                        break;
                    case 12: // 环保少女 (气候紧急状态)
                        this.approval += 5;
                        this.commodityScore -= 20; 
                        this.addLog(this.t('log_skill_effect_12'));
                        break;
                    case 13: //情报局长
                        this.addLog(this.t('log_skill_effect_13'));
                        break;
                    case 14: // 地产皇后
                        this.marketScore += 20;
                        this.commodityScore += 20;
                        this.globalEconomy = 'recession'; 
                        this.addLog(this.t('log_skill_effect_14'));
                        break;
                    case 15: // 学术泰斗
                        this.money += 10;
                        this.addLog(this.t('log_skill_effect_15', '$10', this.t('unit_billion')));
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
                this.saveGame();
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
                        const phaseMatch = !e.phase || e.phase === 'any' || e.phase === currentPhase;
                        const termMatch = !e.term || e.term === this.term;
                        return phaseMatch && termMatch;
                    });
                     
                    if (candidates.length === 0) candidates = EVENTS_DB; // Fallback

                    // 针对性反向事件 (Adapted)
                    // Note: original logic relied on e.type which might be missing in new data. 
                    // So we rely on the filtered candidates primarily.
                    
                    const eventTemplate = candidates[Math.floor(Math.random() * candidates.length)];
                    const event = JSON.parse(JSON.stringify(eventTemplate)); // Deep copy based on template
                    
                    this.currentEvent = event;
                    this.addLog(this.t('log_event', this.getLoc(event.title)));
                    
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

                // Black Swan Event (5% chance)
                // Randomly flip scores or crash economy
                if (!forceRandom && Math.random() < 0.05) {
                    this.addLog(this.t('log_black_swan'));
                    
                    // Determine Crash or Boom (80% crash in crisis, 50% otherwise? Or just simple logic)
                    // Let's say if we are currently Good, we Crash. If Bad, we might Miracle.
                    // But Black Swan usually implies bad in finance context, though can be good.
                    
                    let isCrash = true;
                    if (this.globalEconomy === 'people_despair' || this.globalEconomy === 'crisis') {
                        // If already bad, 30% chance of miracle
                        if (Math.random() < 0.3) isCrash = false;
                    } else {
                        // If good, 70% chance of crash
                        if (Math.random() < 0.7) isCrash = true;
                        else isCrash = false;
                    }

                    if (isCrash) {
                        this.showModal("🦢 " + this.t('black_swan_crash_title'), this.t('black_swan_crash_msg'), 'warning');
                        // Flip to crash
                        // If we were in growth (cos>0), shift to recession (cos<0)
                         if (Math.cos(this.economyPhase) > 0) this.economyPhase += Math.PI;
                         
                         this.marketScore = -Math.abs(this.marketScore) - 30; // Deep crash
                         this.cryptoScore = -Math.abs(this.cryptoScore) - 40;
                         this.commodityScore = -Math.abs(this.commodityScore) - 20;
                         this.globalEconomy = 'crisis'; // Force update next cycle or now? 
                         // updateMarketTrends will recalculate globalEconomy at end, but we are inside it.
                         // It's fine, the score change will drive it.
                    } else {
                        // Miracle Boom
                        this.showModal("🦢 " + this.t('black_swan_boom_title'), this.t('black_swan_boom_msg'), 'win');
                        if (Math.cos(this.economyPhase) < 0) this.economyPhase += Math.PI;
                        
                        this.marketScore = Math.abs(this.marketScore) + 30; 
                        this.cryptoScore = Math.abs(this.cryptoScore) + 40;
                        this.commodityScore = Math.abs(this.commodityScore) + 20;
                    }
                }

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
                const status = slope > 0 ? this.t('cycle_recovery') : this.t('cycle_decline');
                this.economyCycleStatus = this.t('cycle_status', baseEcoScore.toFixed(0), status);

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
                if (this.t('eco_' + state) !== 'eco_' + state) {
                    return this.t('eco_' + state);
                }
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
                    btnText: (type === 'win' || type === 'fail') ? this.t('btn_restart') : this.t('btn_ok')
                };
            }
        }
    }).mount('#app');
})();

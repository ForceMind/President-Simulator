(function() {
    // 角色定义
    const CHARACTERS = [
    { 
        id: 1, name: '金发大亨', icon: '👱‍♂️', 
        desc: '商业帝国的继承人，擅长操纵媒体。', 
        money: 20, 
        skillName: '推特治国', 
        skillDesc: '消耗$2亿，支持率定向增加 15%。',
        skillCostMoney: 2
    },
    { 
        id: 2, name: '资深政客', icon: '👴🏻', 
        desc: '在华盛顿摸爬滚打40年的老狐狸。', 
        money: 5, 
        skillName: '深层政府', 
        skillDesc: '本回合行动点+2，但只会抽到阴谋/经济类卡牌。',
        skillCostMoney: 0
    },
    { 
        id: 3, name: '科技新贵', icon: '🧑🏻‍💻', 
        desc: '亚裔科技巨头，相信算法能解决一切。', 
        money: 50, 
        skillName: '内幕交易', 
        skillDesc: '下一次投资必定盈利，且收益翻倍。',
        skillCostMoney: 0
    },
    { 
        id: 4, name: '退役将军', icon: '👮🏿‍♂️', 
        desc: '以强硬著称的前国防部长。', 
        money: 3, 
        skillName: '军事戒严', 
        skillDesc: '消耗20%支持率，强制镇压反对派，本月免疫弹劾，获$5亿军费。',
        skillCostMoney: 0
    },
    { 
        id: 5, name: '平权斗士', icon: '👩🏽', 
        desc: '极具煽动力的社会活动家。', 
        money: 1, 
        skillName: '草根筹款', 
        skillDesc: '将当前支持率的10%转化为等额的资金(亿)。',
        skillCostMoney: 0
    },
    { 
        id: 6, name: '好莱坞明星', icon: '👩🏼', 
        desc: '因为演过总统而真的当选了总统。', 
        money: 15, 
        skillName: '粉丝经济', 
        skillDesc: '本回合所有经济投资无风险，且支持率+10%。',
        skillCostMoney: 1
    }
];

// 卡牌数据库
const CARD_DB = [
    // --- 经济类 ---
    { type: "经济", title: "科技补贴", desc: "投资AI产业，利好股市。", cost: 1, effect: { approval: 3, money: 0.2, market: "bull", global_economy: "boom" } },
    { type: "经济", title: "央行放水", desc: "印钞刺激经济。", cost: 2, effect: { approval: 5, money: 1, inflation: true, global_economy: "growth" } },
    { type: "经济", title: "基建法案", desc: "修桥补路，创造就业。", cost: 2, effect: { approval: 10, money: -3, global_economy: "growth" } },
    // --- 关税类 ---
    { type: "关税", title: "关税: 工业大国", desc: "保护本土制造，但股市恐慌。", cost: 1, effect: { approval: 5, money: 2, market: "bear", commodity: "bull", global_economy: "recession" } },
    { type: "关税", title: "关税: 农业邻国", desc: "对农产品加税。农民高兴，超市涨价。", cost: 1, effect: { approval: -2, money: 0.5, commodity: "bull" } },
    { type: "关税", title: "关税: 盟友联盟", desc: "对奢侈品和汽车加税。外交关系紧张。", cost: 1, effect: { approval: -5, money: 1.5, market: "neutral", global_economy: "recession" } },
    { type: "关税", title: "全面贸易战", desc: "对所有进口商品加税。世界燃烧！", cost: 3, effect: { approval: 15, money: 5, market: "crash", commodity: "crash", global_economy: "crisis" } },
    
    // --- 宏观经济调控 ---
    { type: "经济", title: "呼吁加息", desc: "抑制通胀，但打压股市。", cost: 1, effect: { approval: -5, money: 0, market: "bear", commodity: "bear", global_economy: "recession" } },
    { type: "经济", title: "呼吁降息", desc: "刺激投资，股市狂欢。", cost: 1, effect: { approval: 5, money: 0, market: "bull", crypto: "bull", global_economy: "boom" } },
    
    // --- 战争与和平 ---
    { type: "外交", title: "战争威胁", desc: "对敌对国发出最后通牒。", cost: 2, effect: { approval: 10, money: -1, market: "crash", commodity: "bull", global_economy: "crisis" } },
    { type: "外交", title: "和平谈判", desc: "缓和地区局势。", cost: 1, effect: { approval: 5, money: 0, market: "bull", commodity: "bear", global_economy: "growth" } },

    // --- 内政与民生 ---
    { type: "内政", title: "教育改革", desc: "增加学校拨款。", cost: 1, effect: { approval: 5, money: -1 } },
    { type: "内政", title: "住房补贴", desc: "帮助年轻人买房。", cost: 1, effect: { approval: 8, money: -1.5 } },
    { type: "内政", title: "禁止堕胎", desc: "取悦保守派，激怒自由派。", cost: 1, effect: { approval: -5, money: 0 } }, // 争议性话题，模拟支持率波动
    { type: "内政", title: "枪支管控", desc: "取悦自由派，激怒保守派。", cost: 1, effect: { approval: -5, money: 0 } },
    { type: "军事", title: "海外维和", desc: "派遣军队维护地区稳定。", cost: 2, effect: { approval: 8, money: -0.5 } },
    { type: "军事", title: "军售订单", desc: "向盟友出售旧武器。", cost: 1, effect: { approval: -3, money: 4 } },
    { type: "军事", title: "无人机打击", desc: "定点清除恐怖分子头目。", cost: 1, effect: { approval: 5, money: -0.2 } },
    // --- 内政类 ---
    { type: "内政", title: "全民医保", desc: "巨大的财政开支，但穷人喜欢。", cost: 2, effect: { approval: 15, money: -2 } },
    { type: "内政", title: "减税法案", desc: "富豪们会感谢你的，民众会愤怒。", cost: 2, effect: { approval: -10, money: 3 } },
    { type: "内政", title: "严打犯罪", desc: "铁腕治理街道安全。", cost: 1, effect: { approval: 6, money: -0.2 } },
    // --- 外交类 ---
    { type: "外交", title: "领土主张", desc: "在争议海域宣示主权。", cost: 1, effect: { approval: 5, money: 0 } },
    { type: "外交", title: "气候峰会", desc: "承诺碳中和目标。", cost: 1, effect: { approval: 4, money: -1 } },
    { type: "外交", title: "退出条约", desc: "不再当冤大头，退出国际组织。", cost: 1, effect: { approval: 5, money: 1 } },
    // --- 阴谋类 ---
    { type: "阴谋", title: "打压媒体", desc: "让那些批评家闭嘴。", cost: 1, effect: { approval: -2, money: 0 } },
    { type: "阴谋", title: "政治献金", desc: "接受财团的'馈赠'。", cost: 0, effect: { approval: -8, money: 5 } },
    { type: "阴谋", title: "伪造丑闻", desc: "制造对手的黑料。", cost: 1, effect: { approval: 5, money: -0.5 } },

    // --- 角色专属卡牌 ---
    // 1. 金发大亨
    { reqCharId: 1, type: "商业", title: "自家酒店", desc: "政府会议都在你的酒店举办。", cost: 1, effect: { money: 3, approval: -2 } },
    { reqCharId: 1, type: "商业", title: "品牌授权", desc: "出售名字使用权。", cost: 1, effect: { money: 2, approval: 1 } },
    
    // 2. 资深政客
    { reqCharId: 2, type: "阴谋", title: "各方妥协", desc: "谁都不得罪的废话法案。", cost: 1, effect: { approval: 3, money: 0.5 } },
    { reqCharId: 2, type: "阴谋", title: "暗箱操作", desc: "在法案里夹带私货。", cost: 2, effect: { money: 3, approval: -5 } },

    // 3. 科技新贵
    { reqCharId: 3, type: "科技", title: "AI监控", desc: "用算法预测犯罪。", cost: 2, effect: { approval: -5, money: 0, market: "bull" } },
    { reqCharId: 3, type: "科技", title: "数字货币", desc: "推行官方数字美元。", cost: 1, effect: { crypto: "bull", money: 1 } },

    // 4. 退役将军
    { reqCharId: 4, type: "军事", title: "阅兵仪式", desc: "展示肌肉。", cost: 2, effect: { approval: 10, money: -3 } },
    { reqCharId: 4, type: "军事", title: "军工复合体", desc: "批准新的武器研发。", cost: 1, effect: { money: 2, approval: -3, market: "bull" } },

    // 5. 平权斗士
    { reqCharId: 5, type: "民权", title: "平权法案", desc: "强制配额。", cost: 2, effect: { approval: 5, money: -1 } },
    { reqCharId: 5, type: "民权", title: "富人税", desc: "向最富有的1%征税。", cost: 2, effect: { money: 5, approval: 5, market: "bear" } },

    // 6. 好莱坞明星
    { reqCharId: 6, type: "娱乐", title: "电视讲话", desc: "运用你的表演天赋。", cost: 1, effect: { approval: 10, money: 0 } },
    { reqCharId: 6, type: "娱乐", title: "明星带货", desc: "在直播中推荐国货。", cost: 1, effect: { money: 2, approval: 5 } }
];

// 随机事件库 (基于2000-2025真实历史改编)
const EVENTS_DB = [
    // --- 市场与经济 ---
    { id: 101, title: "科技泡沫破裂", desc: "纳斯达克崩盘，科技股血流成河。", effect: { market: "crash", approval: -5 } },
    { id: 102, title: "房地产崩盘", desc: "房地产市场崩溃，引发全球金融海啸。", effect: { market: "crash", money: -5, approval: -10 } },
    { id: 103, title: "加密寒冬", desc: "加密货币暴跌，大量交易所破产。", effect: { crypto: "crash" } },
    { id: 104, title: "AI 技术革命", desc: "通用人工智能取得突破，科技股狂欢。", effect: { market: "bull", approval: 2 } },
    { id: 105, title: "能源危机", desc: "油价飙升，通胀压力巨大。", effect: { commodity: "bull", market: "bear", approval: -5 } },
    
    // --- 灾难与疫情 ---
    { 
        id: 201, 
        title: "全球大流行病", 
        desc: "一种新型病毒席卷全球，医疗系统面临崩溃。", 
        choices: [
            { text: "全面封锁", desc: "经济停摆，但控制疫情", effect: { approval: 5, money: -2, market: "crash", global_economy: "recession" } },
            { text: "群体免疫", desc: "保持经济开放，死伤惨重", effect: { approval: -15, money: 1, market: "bull" } }
        ]
    },
    { 
        id: 202, 
        title: "特大飓风袭击", 
        desc: "南部沿海城市受灾严重，需要联邦救援。", 
        choices: [
            { text: "全力救援", desc: "拨款重建", effect: { money: -2, approval: 5 } },
            { text: "视察灾区", desc: "只去拍照，不给钱", effect: { money: 0, approval: -5 } }
        ]
    },
    
    // --- 战争与地缘政治 ---
    { 
        id: 301, 
        title: "恐怖袭击", 
        desc: "本土发生重大安全事故，全国进入紧急状态。", 
        choices: [
            { text: "反恐战争", desc: "出兵报复", effect: { approval: 10, money: -5, market: "bear" } },
            { text: "加强安保", desc: "国内严控", effect: { approval: -2, money: -1 } }
        ]
    }, 
    { id: 302, title: "地区战争爆发", desc: "重要产油国爆发内战。", effect: { commodity: "bull", market: "bear" } }, // 保持一些无选项事件作为简单突发
    { 
        id: 303, 
        title: "大国贸易战", 
        desc: "关税壁垒高筑，全球供应链紧张。", 
        choices: [
            { text: "加征关税", desc: "以牙还牙", effect: { market: "bear", commodity: "bull", approval: 5 } },
            { text: "寻求谈判", desc: "妥协退让", effect: { market: "bull", approval: -5 } }
        ]
    },
    
    // --- 社会与丑闻 (针对性反向事件) ---
    { id: 401, title: "维基解密爆料", desc: "你的私人邮件被黑客公开，内容不堪入目。", type: "scandal", effect: { approval: -15 } },
    { id: 402, title: "税务调查", desc: "国税局对你的家族基金会展开调查。", type: "money_loss", effect: { money: -5, approval: -2 } },
    { id: 403, title: "大规模抗议", desc: "民众占领了华尔街和国会山。", type: "unrest", effect: { approval: -10, market: "bear" } },
    { id: 404, title: "股市熔断", desc: "市场恐慌情绪蔓延，千股跌停。", type: "crash", effect: { market: "crash", money: -2 } }
];

    // 确保全局挂载安全
    if (typeof window !== 'undefined') {
        window.GAME_DATA = { CHARACTERS, CARD_DB, EVENTS_DB };
        console.log('Game Data Loaded:', window.GAME_DATA);
    } else {
        console.warn('Window object not found, skipping global mount.');
    }
})();

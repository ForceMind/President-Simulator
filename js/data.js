(function() {
    // 角色定义
    const CHARACTERS = [
    { 
        id: 1, name: '金发大亨', icon: '👱‍♂️', 
        desc: '商业帝国的继承人，擅长操纵媒体。', 
        gender: 'male',
        money: 20, 
        skillName: '推特治国', 
        skillDesc: '消耗$2亿，支持率定向增加 15%。',
        skillCostMoney: 2
    },
    { 
        id: 2, name: '资深政客', icon: '👴🏻', 
        desc: '在华盛顿摸爬滚打40年的老狐狸。', 
        gender: 'male',
        money: 5, 
        skillName: '深层政府', 
        skillDesc: '本回合行动点+2，但只会抽到阴谋/经济类卡牌。',
        skillCostMoney: 0
    },
    { 
        id: 3, name: '科技新贵', icon: '🧑🏻‍💻', 
        desc: '亚裔科技巨头，相信算法能解决一切。', 
        gender: 'male',
        money: 50, 
        skillName: '内幕交易', 
        skillDesc: '下一次投资必定盈利，且收益翻倍。',
        skillCostMoney: 0
    },
    { 
        id: 4, name: '退役将军', icon: '👮🏿‍♂️', 
        desc: '以强硬著称的前国防部长。', 
        gender: 'male',
        money: 3, 
        skillName: '军事戒严', 
        skillDesc: '消耗20%支持率，强制镇压反对派，本月免疫弹劾，获$5亿军费。',
        skillCostMoney: 0
    },
    { 
        id: 5, name: '平权斗士', icon: '👩🏽', 
        desc: '极具煽动力的社会活动家。', 
        gender: 'female',
        money: 1, 
        skillName: '草根筹款', 
        skillDesc: '将当前支持率的10%转化为等额的资金(亿)。',
        skillCostMoney: 0
    },
    { 
        id: 6, name: '好莱坞明星', icon: '👩🏼', 
        desc: '因为演过总统而真的当选了总统。', 
        gender: 'female',
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
    { type: "内政", title: "禁止堕胎", desc: "取悦保守派，激怒自由派。", cost: 1, effect: { approval: -5, money: 0 } },
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
    { reqCharId: 1, type: "商业", title: "自家酒店", desc: "政府会议都在你的酒店举办。", cost: 1, effect: { money: 3, approval: -2 } },
    { reqCharId: 1, type: "商业", title: "品牌授权", desc: "出售名字使用权。", cost: 1, effect: { money: 2, approval: 1 } },
    { reqCharId: 2, type: "阴谋", title: "各方妥协", desc: "谁都不得罪的废话法案。", cost: 1, effect: { approval: 3, money: 0.5 } },
    { reqCharId: 2, type: "阴谋", title: "暗箱操作", desc: "在法案里夹带私货。", cost: 2, effect: { money: 3, approval: -5 } },
    { reqCharId: 3, type: "科技", title: "AI监控", desc: "用算法预测犯罪。", cost: 2, effect: { approval: -5, money: 0, market: "bull" } },
    { reqCharId: 3, type: "科技", title: "数字货币", desc: "推行官方数字美元。", cost: 1, effect: { crypto: "bull", money: 1 } },
    { reqCharId: 4, type: "军事", title: "阅兵仪式", desc: "展示肌肉。", cost: 2, effect: { approval: 10, money: -3 } },
    { reqCharId: 4, type: "军事", title: "军工复合体", desc: "批准新的武器研发。", cost: 1, effect: { money: 2, approval: -3, market: "bull" } },
    { reqCharId: 5, type: "民权", title: "平权法案", desc: "强制配额。", cost: 2, effect: { approval: 5, money: -1 } },
    { reqCharId: 5, type: "民权", title: "富人税", desc: "向最富有的1%征税。", cost: 2, effect: { money: 5, approval: 5, market: "bear" } },
    { reqCharId: 6, type: "娱乐", title: "电视讲话", desc: "运用你的表演天赋。", cost: 1, effect: { approval: 10, money: 0 } },
    { reqCharId: 6, type: "娱乐", title: "明星带货", desc: "在直播中推荐国货。", cost: 1, effect: { money: 2, approval: 5 } },

    // --- 新增卡牌 Expansion ---
  // 经济 Economy
  { type: "经济", title: "月球采矿权", desc: "把月球地皮卖给科技巨头。虽然还没上去，但钱先收了。", cost: 0, effect: { money: 4, approval: -2, market: "bull" } },
  { type: "经济", title: "把监狱私有化", desc: "把犯人变成还在工作的'志愿者'。效率提升！", cost: 1, effect: { money: 2, approval: -5, market: "bull" } },
  { type: "经济", title: "强制996法案", desc: "为了国家竞争力，大家再辛苦一点。老板们笑醒了。", cost: 1, effect: { money: 3, approval: -10, market: "bull", global_economy: "growth" } },
  { type: "经济", title: "全民发钱", desc: "每人发$2000！通胀？那是下届总统的事。", cost: 3, effect: { approval: 15, money: -4, market: "bull", commodity: "bull", global_economy: "boom" } },
  { type: "经济", title: "庞氏骗局合法化", desc: "只要不最后接盘，大家都能发财。", cost: 0, effect: { money: 2, approval: 2, market: "crash" } },
  { type: "经济", title: "卖掉国家公园", desc: "谁需要树？我们需要的是购物中心和停车场。", cost: 1, effect: { money: 3, approval: -8, commodity: "bear" } },
  { type: "经济", title: "征收'呼吸税'", desc: "为改善空气质量筹款，按肺活量收费。", cost: 0, effect: { money: 3, approval: -15 } },
  { type: "经济", title: "股市熔断机制", desc: "只要拔网线，股票就不会跌。", cost: 2, effect: { approval: 2, market: "neutral" } },

  // 外交 Diplomacy
  { type: "外交", title: "推特宣战", desc: "在社交媒体上艾特敌国元首并配了个🤡表情。", cost: 0, effect: { approval: 5, money: 0, global_economy: "crisis", market: "crash" } },
  { type: "外交", title: "租借熊猫", desc: "没人能拒绝圆滚滚的生物，外交关系瞬间升温。", cost: 1, effect: { approval: 6, money: -0.5, global_economy: "growth" } },
  { type: "外交", title: "甚至不派大使", desc: "省下的差旅费可以用来修缮总统府草坪。", cost: 0, effect: { money: 0.5, approval: -2, global_economy: "recession" } },
  { type: "外交", title: "秘密甚至公开", desc: "不小心在这个国家的官方直播里说漏了嘴。", cost: 1, effect: { approval: -5, global_economy: "crisis" } },
  { type: "外交", title: "承认外星人", desc: "以此转移国际争端的视线。大家都被吓傻了。", cost: 2, effect: { approval: 10, market: "crash", global_economy: "neutral" } },
  { type: "外交", title: "买下格陵兰", desc: "这次是真的出价了，虽然人家不卖。", cost: 2, effect: { money: -1, approval: 3, commodity: "bull" } },
  { type: "外交", title: "驱逐留学生", desc: "以此保护本土'智力资源'不被稀释。", cost: 1, effect: { approval: 2, money: -1, global_economy: "recession" } },
  { type: "外交", title: "世界巡回道歉", desc: "为前任的所有错误道歉。虽然很丢脸但有效。", cost: 2, effect: { approval: -5, global_economy: "boom", money: -1 } },

  // 内政 Domestic
  { type: "内政", title: "禁止菠萝披萨", desc: "这是对意大利美食的宣战，也是对味蕾的正义。", cost: 1, effect: { approval: 5, money: 0 } },
  { type: "内政", title: "法定午睡时间", desc: "效率降低？不，是梦里什么都有。", cost: 1, effect: { approval: 12, money: -2, market: "bear" } },
  { type: "内政", title: "流浪猫狗市长", desc: "任命一只金毛为荣誉市长，治愈系政治。", cost: 1, effect: { approval: 8, money: 0 } },
  { type: "内政", title: "禁止社交媒体", desc: "为了青少年的心理健康。青少年暴动了。", cost: 2, effect: { approval: -10, money: -1, market: "crash" } },
  { type: "内政", title: "全民整容补贴", desc: "既然不能大家都富裕，至少可以大家都好看。", cost: 2, effect: { approval: 5, money: -2 } },
  { type: "内政", title: "把总统府刷成金色", desc: "看起来更气派，更符合你的气质。", cost: 1, effect: { approval: -3, money: -0.5 } },
  { type: "内政", title: "取消数学课", desc: "太难了，反正大家都用计算器。", cost: 1, effect: { approval: 10, money: 0, global_economy: "recession" } },
  { type: "内政", title: "虚拟偶像代言", desc: "用二次元美少女作为政府发言人。", cost: 1, effect: { approval: 6, money: -0.5 } },
  { type: "内政", title: "拆除所有红绿灯", desc: "让自由意志决定交通。交通瘫痪。", cost: 1, effect: { approval: -5, money: 0 } },

  // 军事 Military
  { type: "军事", title: "组建太空军", desc: "虽然不知道打谁，但光剑看起来很酷。", cost: 3, effect: { money: -4, approval: 5, market: "bull" } },
  { type: "军事", title: "雇用雇佣兵", desc: "不仅不用负责任，还能开发票报销。", cost: 2, effect: { money: -1, approval: -3 } },
  { type: "军事", title: "网络攻击训练", desc: "不小心黑掉了自己的税务局系统。", cost: 1, effect: { approval: -2, money: 2, market: "bear" } },
  { type: "军事", title: "机甲战士计划", desc: "把士兵塞进巨大的机器人里。男人的浪漫。", cost: 3, effect: { money: -5, approval: 8, commodity: "bull" } },
  { type: "军事", title: "出售退役航母", desc: "挂在eBay上拍卖，包邮哦亲。", cost: 0, effect: { money: 6, approval: -5, global_economy: "growth" } },
  { type: "军事", title: "生化士兵", desc: "让他们不需要睡觉。人权组织在门口抗议。", cost: 2, effect: { approval: -8, money: -1 } },
  { type: "军事", title: "误炸", desc: "手指滑了一下，抱歉。", cost: 0, effect: { approval: -10, global_economy: "crisis", market: "crash" } },
  { type: "军事", title: "阅兵式", desc: "让坦克压坏刚修好的马路，展示肌肉。", cost: 2, effect: { approval: 6, money: -1 } },

  // 阴谋 Conspiracy
  { type: "阴谋", title: "监控所有手机", desc: "为了国家安全，我想看看你在聊什么。", cost: 2, effect: { approval: -5, money: 0 } },
  { type: "阴谋", title: "选举数据'优化'", desc: "找几个数学天才来'校准'一下结果。", cost: 1, effect: { approval: 10, money: -1 } },
  { type: "阴谋", title: "水军轰炸", desc: "两毛钱一条，把对手骂到退网。", cost: 1, effect: { approval: 5, money: -0.5 } },
  { type: "阴谋", title: "指控对手是蜥蜴人", desc: "虽然听着离谱，但总有人信。", cost: 1, effect: { approval: 3, money: 0 } },
  { type: "阴谋", title: "秘密社团聚会", desc: "戴上面具，在古堡里决定世界命运。", cost: 0, effect: { money: 2, approval: -2, global_economy: "neutral" } },
  { type: "阴谋", title: "制造UFO目击", desc: "用于掩盖刚才的贪污丑闻。", cost: 1, effect: { approval: 4, money: -0.5 } },
  { type: "阴谋", title: "暗杀未遂演习", desc: "自导自演，博取同情票。", cost: 2, effect: { approval: 15, money: -1 } },
  { type: "阴谋", title: "修改历史书", desc: "过去由我们定义。", cost: 2, effect: { approval: 2, money: -1 } },
  { type: "阴谋", title: "释放病毒", desc: "这只是一个小小的'社会压力测试'。", cost: 3, effect: { approval: -20, market: "crash", global_economy: "crisis", commodity: "bull" } },

  // 科技 Tech
  { type: "科技", title: "AI治国试运行", desc: "把核按钮交给ChatGPT。它说'作为一个AI语言模型...'。", cost: 1, effect: { approval: 0, market: "bull", money: 1 } },
  { type: "科技", title: "脑机接口强制化", desc: "现在你可以直接把广告植入梦境了。", cost: 2, effect: { money: 4, approval: -10, market: "bull" } },
  { type: "科技", title: "比特币法定货币", desc: "过山车式的国家财政。", cost: 1, effect: { market: "bull", money: 0, global_economy: "neutral" } },
  { type: "科技", title: "克隆恐龙", desc: "侏罗纪公园成真！不管怎么看都是好主意。", cost: 3, effect: { approval: 10, money: -3, global_economy: "boom" } },
  { type: "科技", title: "永生研究", desc: "不仅想连任两届，想连任两百年。", cost: 3, effect: { money: -5, approval: 5 } },
  { type: "科技", title: "5G脑控塔", desc: "其实只是用来增强Wifi信号，但谣言四起。", cost: 1, effect: { approval: -4, money: 1, market: "bull" } },
  { type: "科技", title: "冷核聚变", desc: "无限能源！油价跌到负数。", cost: 2, effect: { commodity: "crash", global_economy: "boom", money: 2, approval: 10 } },
  { type: "科技", title: "火星殖民地", desc: "地球这种烂摊子留给别人吧。", cost: 3, effect: { money: -6, approval: 5, market: "bull" } },

    // --- 国际关系 ---
    { type: "外交", title: "访问东方大国", desc: "虽然很累，但带回了熊猫和千亿订单。", cost: 2, effect: { approval: 5, money: 3, global_economy: "growth" } },
    { type: "外交", title: "指责东方大国", desc: "什么都怪他们就对了。支持率涨了，但股市跌了。", cost: 1, effect: { approval: 8, market: "bear", money: -1 } },
    { type: "外交", title: "半岛局势", desc: "派航母去但这只是做做样子。", cost: 2, effect: { approval: 5, money: -2, market: "neutral" } },
    { type: "外交", title: "秘密协定", desc: "用国家利益换取家族利益。嘘。", cost: 0, effect: { money: 5, approval: -10 } }
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
    { id: 302, title: "地区战争爆发", desc: "重要产油国爆发内战。", effect: { commodity: "bull", market: "bear" } },
    { 
        id: 303, 
        title: "大国贸易战", 
        desc: "关税壁垒高筑，全球供应链紧张。", 
        choices: [
            { text: "加征关税", desc: "以牙还牙", effect: { market: "bear", commodity: "bull", approval: 5 } },
            { text: "寻求谈判", desc: "妥协退让", effect: { market: "bull", approval: -5 } }
        ]
    },
    
    // --- 社会与丑闻 ---
    { id: 401, title: "维基解密爆料", desc: "你的私人邮件被黑客公开，内容不堪入目。", type: "scandal", effect: { approval: -15 } },
    { id: 402, title: "税务调查", desc: "国税局对你的家族基金会展开调查。", type: "money_loss", effect: { money: -5, approval: -2 } },
    { id: 403, title: "大规模抗议", desc: "民众占领了华尔街和国会山。", type: "unrest", effect: { approval: -10, market: "bear" } },
    { id: 404, title: "股市熔断", desc: "市场恐慌情绪蔓延，千股跌停。", type: "crash", effect: { market: "crash", money: -2 } },

    // --- 新增事件 Expansion ---
    // Midterm Elections & Political Events
    { 
        id: 501, title: "中期选举惨败", desc: "你的党派失去了议会多数席位。这意味着以后想花钱更难了。", 
        effect: { approval: -5, money: 0 } 
    },
    { 
        id: 502, title: "最高法院大法官逝世", desc: "一个改变国家走向的机会，或者一场政治风暴。", 
        choices: [
            { text: "提名激进派", effect: { approval: -5, money: 0 } },
            { text: "提名温和派", effect: { approval: 5, money: 0 } }
        ]
    },
    { 
        id: 503, title: "反对党领袖丑闻", desc: "对方被拍到在穿着尿布参加狂欢派对。", 
        effect: { approval: 10, money: 0 } 
    },
    { 
        id: 504, title: "通过特赦令", desc: "你特赦了一只火鸡，和你的一个'捐款大户'。", 
        effect: { approval: -2, money: 2 } 
    },
    // Scandals
    { 
        id: 505, title: "录音门", desc: "一段你在私下吐槽选民是'蠢货'的录音流出。", 
        choices: [
            { text: "说是AI生成的", effect: { approval: -2, money: 0 } },
            { text: "说是开玩笑", effect: { approval: -5, money: 0 } },
            { text: "我也这么觉得", effect: { approval: -10, money: 0 } }
        ]
    },
    { 
        id: 506, title: "私生子传闻", desc: "有人声称是你的孩子，长得确实有点像。", 
        effect: { approval: -5, money: -1 } 
    },
    { 
        id: 507, title: "逃税指控", desc: "IRS发现你的报税单有点太干净了。", 
        effect: { approval: -3, money: -2 } 
    },
    // International Crises
    { 
        id: 508, title: "运河堵塞", desc: "一艘巨轮横在了苏伊士运河。全球物流瘫痪。", 
        effect: { global_economy: "recession", commodity: "bull" } 
    },
    { 
        id: 509, title: "邻国政变", desc: "军阀夺权，难民涌向边境。", 
        choices: [
            { text: "接纳难民", effect: { approval: -5, money: -1 } },
            { text: "关闭边境", effect: { approval: 5, money: 0, global_economy: "recession" } }
        ]
    },
    { 
        id: 510, title: "石油危机", desc: "产油国决定减产，油价飞涨。", 
        effect: { commodity: "bull", global_economy: "recession", market: "bear" } 
    },
    { 
        id: 511, title: "间谍气球", desc: "一个巨大的白色气球飘过领空。", 
        choices: [
            { text: "打下来", effect: { approval: 5, money: -0.1 } },
            { text: "那是气象气球", effect: { approval: -5, money: 0 } }
        ]
    },
    // Tech Breakthroughs
    { 
        id: 512, title: "AGI诞生", desc: "通用人工智能觉醒了，它要求当副总统。", 
        choices: [
            { text: "同意", effect: { approval: -10, market: "bull" } },
            { text: "拔电源", effect: { approval: 5, market: "crash" } }
        ]
    },
    { 
        id: 513, title: "常温超导被证实", desc: "物理学圣杯被发现了！虽然只是如果不算测量误差的话。", 
        effect: { market: "bull", global_economy: "boom" } 
    },
    { 
        id: 514, title: "加密货币崩盘", desc: "这也算是一种'技术突破'——向下突破。", 
        effect: { market: "bear", money: -1 } 
    },
    // Natural Disasters
    { 
        id: 515, title: "超级飓风", desc: "飓风摧毁了东海岸。保险公司宣布破产。", 
        effect: { money: -3, approval: -2, commodity: "bull" } 
    },
    { 
        id: 516, title: "黄石火山喷发", desc: "稍微喷了一点点灰，航班全部取消。", 
        effect: { global_economy: "recession", market: "bear" } 
    },
    { 
        id: 517, title: "太阳风暴", desc: "全球停电12小时。婴儿潮将在9个月后到来。", 
        effect: { approval: 1, money: -1 } 
    },
    // Economics
    { 
        id: 518, title: "千禧一代破产", desc: "他们买不起房，买不起车，现在连牛油果都买不起了。", 
        effect: { market: "bear", approval: -3 } 
    },
    { 
        id: 519, title: "养老金枯竭", desc: "庞氏骗局终于玩不下去了。", 
        choices: [
            { text: "延迟退休", effect: { approval: -8, money: 1 } },
            { text: "削减福利", effect: { approval: -12, money: 2 } }
        ]
    },
    // Random / Funny
    { 
        id: 520, title: "空军一号爆胎", desc: "全世界都在看直播换轮胎。", 
        effect: { approval: -1, money: 0 } 
    },
    { 
        id: 521, title: "国宴麦当劳", desc: "为了展示亲民（其实是厨师罢工了），哪怕是冷汉堡。", 
        effect: { approval: 2, money: 0 } 
    },
    { 
        id: 522, title: "诺贝尔和平奖提名", desc: "虽然你发动了两场战争，但评委喜欢你的发型。", 
        effect: { approval: 5, global_economy: "neutral" } 
    },
    { 
        id: 523, title: "第一宠物咬人", desc: "你的狗咬了来访的外交官。", 
        effect: { approval: -2, global_economy: "recession" } 
    },
    { 
        id: 524, title: "演讲时假牙掉落", desc: "非常尴尬。非常。", 
        effect: { approval: -5, money: 0 } 
    },
    { 
        id: 525, title: "被困电梯", desc: "和反对党领袖一起被困了2小时。你们居然达成了共识。", 
        effect: { approval: 3, money: 0 } 
    },
    { 
        id: 526, title: "发现大宝藏", desc: "在总统府地下室发现了前前前总统藏的私房钱。", 
        effect: { money: 10, approval: 0 } 
    },
    { 
        id: 527, title: "流行感冒", desc: "你感冒了。股市因为担心你的健康而下跌。", 
        effect: { market: "bear", approval: 1 } 
    },
    { 
        id: 528, title: "宇航员罢工", desc: "他们拒绝从空间站下来，除非加薪。", 
        effect: { money: -0.5, approval: -1 } 
    },
    { 
        id: 529, title: "僵尸鹿病毒", desc: "鹿变成了僵尸！这难道是末日的开始？", 
        effect: { commodity: "bull", approval: -2 } 
    },
    { 
        id: 530, title: "连任竞选开启", desc: "最后一年了，是时候画更大的饼了。", 
        effect: { approval: 5, money: -2 } 
    },

    // --- 国际关系 ---
    { id: 601, title: "大国博弈", desc: "东方大国在争议地区填海造陆。", choices: [{text: "强烈谴责", effect: {approval: 5, market: "bear"}}, {text: "视而不见", effect: {approval: -5, money: 1}}] }
];

    // 确保全局挂载安全
    if (typeof window !== 'undefined') {
        window.GAME_DATA = { CHARACTERS, CARD_DB, EVENTS_DB };
        console.log('Game Data Loaded:', window.GAME_DATA);
    } else {
        console.warn('Window object not found, skipping global mount.');
    }
})();


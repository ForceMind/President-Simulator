window.GAME_DATA = window.GAME_DATA || {};

window.GAME_DATA.CHARACTERS = [
    // --- 经典 ---
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
    },

    // --- 扩展角色 ---
    {
        id: 7, name: '石油大亨', icon: '🤠',
        desc: '来自德州的能源巨头，不仅有石油，还有枪。',
        gender: 'male',
        money: 35,
        skillName: '能源垄断',
        skillDesc: '强制商品市场进入牛市，并从中获得10亿收益。',
        skillCostMoney: 0
    },
    {
        id: 8, name: '律政俏佳人', icon: '👩🏻‍⚖️',
        desc: '名校出身的顶级律师，没有她打不赢的官司。',
        gender: 'female',
        money: 8,
        skillName: '宪法解释',
        skillDesc: '无视所有弹劾风险，直接清除身上的负面Debuff（如丑闻）。',
        skillCostMoney: 1
    },
    {
        id: 9, name: '加密极客', icon: '🪙',
        desc: '相信区块链会取代美元的神秘人物。',
        gender: 'male',
        money: 10,
        skillName: '去中心化',
        skillDesc: '加密货币市场波动率翻倍，获得一张随机加密货币相关卡牌。',
        skillCostMoney: 0
    },
    {
        id: 10, name: '脱口秀女王', icon: '🎤',
        desc: '全美最受欢迎的主持人，这不仅是脱口秀，这是政治。',
        gender: 'female',
        money: 25,
        skillName: '黄金时段',
        skillDesc: '支持率直接重置为60%（无论多低），但消耗本月所有AP。',
        skillCostMoney: 0
    },
    {
        id: 11, name: '工会领袖', icon: '👷',
        desc: '来自铁锈带的硬汉，代表蓝领阶层。',
        gender: 'male',
        money: 2,
        skillName: '全国罢工',
        skillDesc: '强迫全球经济进入衰退，但大幅提高国内支持率(+15%)。',
        skillCostMoney: 0
    },
    {
        id: 12, name: '环保少女', icon: '👧',
        desc: 'How dare you! 激进的环保主义者。',
        gender: 'female',
        money: 1,
        skillName: '气候紧急状态',
        skillDesc: '永久关闭商品市场（无法交易），每回合自动回复支持率+5%。',
        skillCostMoney: 0
    },
    {
        id: 13, name: '情报局长', icon: '🕵️‍♂️',
        desc: '他知道所有人的秘密，包括你的。',
        gender: 'male',
        money: 12,
        skillName: '棱镜计划',
        skillDesc: '查看接下来3个月的市场走势（文本提示）。',
        skillCostMoney: 3
    },
    {
        id: 14, name: '地产皇后', icon: '👸',
        desc: '在曼哈顿拥有半条街的楼。',
        gender: 'female',
        money: 40,
        skillName: '城市规划',
        skillDesc: '房地产泡沫：股市和商品市场同时上涨，但通胀增加。',
        skillCostMoney: 2
    },
    {
        id: 15, name: '学术泰斗', icon: '🎓',
        desc: '诺贝尔经济学奖得主，理论一套一套的。',
        gender: 'male',
        money: 6,
        skillName: '现代货币理论',
        skillDesc: '凭空获得$10亿，只要你不看通胀数据，它就不存在。',
        skillCostMoney: 0
    },
    {
        id: 16, name: '网红医生', icon: '👨‍⚕️',
        desc: '电视上最著名的健康专家。',
        gender: 'male',
        money: 18,
        skillName: '全民疫苗',
        skillDesc: '消除所有突发流行病事件的影响，支持率+8%。',
        skillCostMoney: 1
    },
    {
        id: 17, name: '前朝国母', icon: '👵',
        desc: '她丈夫是总统，现在轮到她了。',
        gender: 'female',
        money: 30,
        skillName: '政治遗产',
        skillDesc: '立即获得3张强力"内政"卡牌。',
        skillCostMoney: 0
    },
    {
        id: 18, name: '摇滚巨星', icon: '🎸',
        desc: '他的演唱会比竞选集会人还多。',
        gender: 'male',
        money: 22,
        skillName: '巡回演出',
        skillDesc: '每到一个摇摆州支持率就爆表。支持率+10%，资金+2亿。',
        skillCostMoney: 0
    }
];

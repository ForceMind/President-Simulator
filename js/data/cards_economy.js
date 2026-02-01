window.GAME_DATA = window.GAME_DATA || {};
window.GAME_DATA.CARD_DB = window.GAME_DATA.CARD_DB || [];

window.GAME_DATA.CARD_DB.push(
    // ---------------- EARLY PHASE (Capital Accumulation) ----------------
    {
        type: "经济",
        title: "大宇企业减税",
        desc: "如果你给那些还在穿尿布的亿万富翁减税，他们发誓会创造就业机会。",
        cost: 0,
        phase: "early",
        effect: { money: -5, approval: -5, corporate_support: 10 }
    },
    {
        type: "经济",
        title: "外包所有清洁工",
        desc: "为什么要在国内支付最低工资，当我们可以在海外支付更少？",
        cost: 1,
        phase: "early",
        effect: { money: 10, approval: -10, unemployment: 1 }
    },
    {
        type: "经济",
        title: "出售国家公园采矿权",
        desc: "那并不是真正的‘老忠实泉’，那只是未开发的‘液体黄金’。",
        cost: 2,
        phase: "early",
        effect: { money: 15, approval: -15, environment: -10 }
    },
    {
        type: "经济",
        title: "小额信贷‘改革’",
        desc: "实际上只是允许掠夺性贷款合法化，但名字听起来很慈善。",
        cost: 1,
        phase: "early",
        effect: { money: 5, approval: -5 }
    },
    
    // ---------------- MID PHASE (Market Manipulation) ----------------
    {
        type: "经济",
        title: "印钞厂夜班",
        desc: "通货膨胀只是数字游戏。只要印钞机不卡纸，一切都好。",
        cost: 0,
        phase: "mid",
        effect: { money: 20, inflation: 5, approval: 5 }
    },
    {
        type: "经济",
        title: "私人监狱上市",
        desc: "犯罪率上升？不，那是‘客户群增长’。",
        cost: 3,
        phase: "mid",
        effect: { money: 12, approval: -8, law_order: 5 }
    },
    {
        type: "经济",
        title: "贸易战推特风暴",
        desc: "在凌晨3点发推特威胁对盟友加征关税。市场喜欢波动性！",
        cost: 1,
        phase: "mid",
        effect: { money: -5, approval: 5, volatility: 10 }
    },
    {
        type: "经济",
        title: "全民基本‘彩票’",
        desc: "不是收入，是彩票。每周抽一人发一亿，大家都觉得自己会赢。",
        cost: 5,
        phase: "mid",
        effect: { money: -2, approval: 10, stupidity: 5 }
    },
    {
        type: "经济",
        title: "将空气私有化",
        desc: "清洁空气是一种服务，不是权利。安装智能呼吸计。",
        cost: 4,
        phase: "mid",
        effect: { money: 25, approval: -30, environment: -5 }
    },
    {
        type: "经济",
        title: "加密货币大亨晚宴",
        desc: "他们穿得很奇怪，谈论着‘去中心化’，但他们的支票在这个中心化的银行里兑现得很好。",
        cost: 2,
        phase: "mid",
        effect: { money: 15, approval: -5 }
    },
    {
        type: "经济",
        title: "削减教育预算",
        desc: "聪明的选民是危险的选民。让他们忙着还贷吧。",
        cost: 0,
        phase: "mid",
        effect: { money: 10, approval: -10, education: -5 }
    },
    {
        type: "经济",
        title: "医疗‘简化’法案",
        desc: "用‘祝你好运’贺卡代替昂贵的手术。",
        cost: 1,
        phase: "mid",
        effect: { money: 15, approval: -20, health: -10 }
    },
    {
        type: "经济",
        title: "强制购买国产汽车",
        desc: "它们虽然漏油且没有刹车，但它们是我们的漏油没刹车的车！",
        cost: 2,
        phase: "mid",
        effect: { money: 8, approval: 5, industry: 5 }
    },
    {
        type: "经济",
        title: "取消食品安全局",
        desc: "这一直是餐饮业创新的主要障碍。有点大肠杆菌没杀过人...大概。",
        cost: 1,
        phase: "mid",
        effect: { money: 5, approval: -5, health: -5 }
    },
    {
        type: "经济",
        title: "庞氏骗局合法化",
        desc: "称之为‘多层次营销刺激计划’。",
        cost: 3,
        phase: "mid",
        effect: { money: 20, approval: 5, economy_stability: -20 }
    },
    {
        type: "经济",
        title: "征收‘呼吸税’",
        desc: "虽然不受欢迎，但大家都得呼吸，逃税率极低。",
        cost: 0,
        phase: "mid",
        effect: { money: 30, approval: -40 }
    },
    {
        type: "经济",
        title: "出售月球地产",
        desc: "谁在乎国际条约？先卖了再说。",
        cost: 2,
        phase: "mid",
        effect: { money: 10, approval: 2 }
    },
    {
        type: "经济",
        title: "大麻全面合法化并垄断",
        desc: "国家现在是唯一的毒贩。利润高得惊人。",
        cost: 5,
        phase: "mid",
        effect: { money: 25, approval: 15, productivity: -5 }
    },
    {
        type: "经济",
        title: "机器人替代公务员",
        desc: "它们不会抱怨，不会罢工，也不会在厕所里刷手机。",
        cost: 8,
        phase: "mid",
        effect: { money: 10, approval: -10, efficiency: 10 }
    },
    {
        type: "经济",
        title: "虚拟股市",
        desc: "无论实际经济如何，股市只涨不跌。这就是算法的力量。",
        cost: 6,
        phase: "mid",
        effect: { money: 0, approval: 10, bubble: 20 }
    },

    // ---------------- LATE PHASE (Economic Collapse / Legacy) ----------------
    {
        type: "经济",
        title: "出售国名为广告位",
        desc: "美利坚百事可乐合众国？听起来很解渴。",
        cost: 0,
        phase: "late",
        effect: { money: 100, approval: -50, dignity: -100 }
    },
    {
        type: "经济",
        title: "没收所有养老金",
        desc: "为了国家的未来，或是为了我的退休别墅。",
        cost: 5,
        phase: "late",
        effect: { money: 50, approval: -60, rebellion_risk: 20 }
    },
    {
        type: "经济",
        title: "引发惡性通货膨胀",
        desc: "如果每个人都是亿万富翁，就没有人是穷人了！面包现在卖一万亿。",
        cost: 0,
        phase: "late",
        effect: { money: 0, approval: -30, inflation: 100 }
    },
    {
        type: "经济",
        title: "最后的私有化：军队",
        desc: "黑水公司接管国防部。这是一个巨大的成本节约措施。",
        cost: 10,
        phase: "late",
        effect: { money: 40, approval: -20, coup_risk: 30 }
    },
    {
        type: "经济",
        title: "主权债务违约",
        desc: "只要说‘我不欠这笔钱’，钱就不见了。经济学家讨厌这一招！",
        cost: 0,
        phase: "late",
        effect: { money: 0, approval: 10, international_standing: -50 }
    },
    {
        type: "经济",
        title: "黄金降落伞",
        desc: "准备好你的逃生路线。把国库里的金条都搬上私人飞机。",
        cost: 20,
        phase: "late",
        effect: { money: -20, personal_wealth: 100, approval: -100 }
    },
    {
        type: "经济",
        title: "发行‘爱国者’NFT",
        desc: "JPEG图片能救国？也许能救你的银行账户。",
        cost: 2,
        phase: "late",
        effect: { money: 5, approval: -5 }
    },
    {
        type: "经济",
        title: "向火星殖民地收税",
        desc: "虽然还没建成，但可以预征。",
        cost: 1,
        phase: "late",
        effect: { money: 8, approval: -2 }
    },
    {
        type: "经济",
        title: "解散中央银行",
        desc: "回到以贝壳和闪亮石头为货币的时代。",
        cost: 10,
        phase: "late",
        effect: { money: -10, chaos: 50 }
    },
    {
        type: "经济",
        title: "卖掉加利福尼亚",
        desc: "真的，那是谁的？我们要把那块地卖给科技巨头建立主权国家。",
        cost: 5,
        phase: "late",
        effect: { money: 200, approval: -20, territory: -1 }
    }
);

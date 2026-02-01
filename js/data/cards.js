window.GAME_DATA = window.GAME_DATA || {};

// Categories: "经济", "外交", "内政", "军事", "阴谋", "关税"
// Phases: "early", "mid", "late", "any"

window.GAME_DATA.CARDS = [
    // --- 经济 (Economic) ---
    {
        id: "eco_print_money",
        type: "经济",
        title: "疯狂印钞机",
        desc: "只要印得够快，通货膨胀就追不上我们！Brrr!",
        costMoney: -10, // Negative cost means gain
        costApproval: 10,
        effect: { money: 10, approval: -5, inflation: 5 },
        phase: "any"
    },
    {
        id: "eco_tax_cut",
        type: "经济",
        title: "富人减税",
        desc: "涓滴效应肯定会生效的，大概在两百年后。",
        costMoney: 5,
        costApproval: -5,
        effect: { approval: 5, corporate_support: 10 },
        phase: "early"
    },
    {
        id: "eco_infrastructure",
        type: "经济",
        title: "基础设施周",
        desc: "我们要修路！虽然每届政府都这么说。",
        costMoney: 15,
        costApproval: 0,
        effect: { approval: 10, money: 2 }, // Long term gain simulates
        phase: "mid"
    },
    {
        id: "eco_trade_war",
        type: "经济",
        title: "发动贸易战",
        desc: "贸易战很容易赢！除非我也要买东西。",
        costMoney: 5,
        costApproval: 0,
        effect: { money: -5, approval: 5, nationalism: 10 },
        phase: "mid"
    },
    {
        id: "eco_tech_subsidy",
        type: "经济",
        title: "科技补贴",
        desc: "给硅谷那帮人更多钱，希望他们别造出天网。",
        costMoney: 8,
        costApproval: 0,
        effect: { money: 5, tech_level: 1 },
        phase: "any"
    },
    {
        id: "eco_austerity",
        type: "经济",
        title: "勒紧裤腰带",
        desc: "国家要省钱。当然，总统府的空调不能停。",
        costMoney: 0,
        costApproval: 15,
        effect: { money: 10, approval: -15 },
        phase: "late"
    },
    {
        id: "eco_sell_land",
        type: "经济",
        title: "出售国土",
        desc: "那一块荒地反正也没人用，卖给地产商盖高尔夫球场吧。",
        costMoney: 0,
        costApproval: 10,
        effect: { money: 20, approval: -10 },
        phase: "late"
    },
    {
        id: "eco_crypto_legal",
        type: "经济",
        title: "比特币法币化",
        desc: "未来是加密的！波动也是。",
        costMoney: 0,
        costApproval: 0,
        effect: { money: 0, volatility: 20 }, // Special effect handled in logic
        phase: "mid"
    },
    {
        id: "eco_union_bust",
        type: "经济",
        title: "打击工会",
        desc: "他们要求的午休时间太长了！",
        costMoney: 0,
        costApproval: 10,
        effect: { money: 5, approval: -10, corporate_support: 10 },
        phase: "any"
    },
    {
        id: "eco_ubi",
        type: "经济",
        title: "全民基本收入",
        desc: "免费发钱！这也是一种经济策略，对吧？",
        costMoney: 25,
        costApproval: 0,
        effect: { approval: 25, money: -5 },
        phase: "mid"
    },

    // --- 外交 (Diplomacy) ---
    {
        id: "dip_state_dinner",
        type: "外交",
        title: "国宴",
        desc: "请大家吃最好的汉堡和薯条。",
        costMoney: 2,
        costApproval: 0,
        effect: { approval: 5, diplomacy: 5 },
        phase: "any"
    },
    {
        id: "dip_un_speech",
        type: "外交",
        title: "联合国演讲",
        desc: "在那个大厅里讲讲笑话，希望能逗笑几个独裁者。",
        costMoney: 0,
        costApproval: 0,
        effect: { approval: 5, diplomacy: 2 },
        phase: "early"
    },
    {
        id: "dip_foreign_aid",
        type: "外交",
        title: "对外援助",
        desc: "给别的国家钱，希望能买来友谊。",
        costMoney: 10,
        costApproval: 5,
        effect: { diplomacy: 15, approval: -5 },
        phase: "mid"
    },
    {
        id: "dip_spy_swap",
        type: "外交",
        title: "间谍交换",
        desc: "这是我们在电影里学到的。",
        costMoney: 0,
        costApproval: 0,
        effect: { diplomacy: 5, security: 5 },
        phase: "mid"
    },
    {
        id: "dip_secret_pact",
        type: "外交",
        title: "秘密协定",
        desc: "没人知道我们签了什么，包括我自己。",
        costMoney: 0,
        costApproval: 5,
        effect: { money: 10, diplomacy: -5 },
        phase: "late"
    },
    {
        id: "dip_insult_leader",
        type: "外交",
        title: "推特羞辱他国元首",
        desc: "他的发型太丑了，必须说出来。",
        costMoney: 0,
        costApproval: 0,
        effect: { diplomacy: -15, approval: 5 },
        phase: "any"
    },
    {
        id: "dip_peace_treaty",
        type: "外交",
        title: "和平条约",
        desc: "诺贝尔和平奖，我来了！",
        costMoney: 5,
        costApproval: 0,
        effect: { approval: 20, diplomacy: 20 },
        phase: "late"
    },
    {
        id: "dip_exit_treaty",
        type: "外交",
        title: "退出气候协定",
        desc: "天气本来就会变，这都是骗局！",
        costMoney: 0,
        costApproval: 10,
        effect: { money: 10, approval: -10, diplomacy: -10 },
        phase: "early"
    },
    {
        id: "dip_buy_island",
        type: "外交",
        title: "购买格陵兰岛",
        desc: "那个岛看起来挺大的，买了！",
        costMoney: 50,
        costApproval: 0,
        effect: { approval: 5, size: 1 },
        phase: "mid"
    },
    {
        id: "dip_panda",
        type: "外交",
        title: "熊猫外交",
        desc: "租两只熊猫来，大家都喜欢熊猫。",
        costMoney: 5,
        costApproval: 0,
        effect: { approval: 10, diplomacy: 5 },
        phase: "any"
    },

    // --- 内政 (Domestic) ---
    {
        id: "dom_media_control",
        type: "内政",
        title: "整顿媒体",
        desc: "所有新闻都必须通过真理部审核。",
        costMoney: 5,
        costApproval: 10,
        effect: { approval: 5, control: 10 },
        phase: "mid"
    },
    {
        id: "dom_police_budget",
        type: "内政",
        title: "增加警力",
        desc: "更多的警车，更酷的制服。",
        costMoney: 8,
        costApproval: 0,
        effect: { security: 10, approval: 5 },
        phase: "any"
    },
    {
        id: "dom_legal_weed",
        type: "内政",
        title: "大麻合法化",
        desc: "这样大家就会开心得忘记通货膨胀了。",
        costMoney: -5, // Tax revenue
        costApproval: 5,
        effect: { money: 5, approval: 5 },
        phase: "mid"
    },
    {
        id: "dom_ban_tiktok",
        type: "内政",
        title: "封禁短视频",
        desc: "年轻人在上面跳舞太尴尬了，必须禁止。",
        costMoney: 0,
        costApproval: 0,
        effect: { approval: -15, security: 5 },
        phase: "mid"
    },
    {
        id: "dom_national_holiday",
        type: "内政",
        title: "新增法定假日",
        desc: "总统大人生日必须放假！",
        costMoney: 2,
        costApproval: 0,
        effect: { approval: 10, money: -2 },
        phase: "any"
    },
    {
        id: "dom_education_cut",
        type: "内政",
        title: "削减教育预算",
        desc: "反正他们都在玩手机，不需要那么多书。",
        costMoney: 0,
        costApproval: 10,
        effect: { money: 8, approval: -10 },
        phase: "late"
    },
    {
        id: "dom_monument",
        type: "内政",
        title: "建造巨型雕像",
        desc: "按照我的样子建，要比自由女神像还高。",
        costMoney: 20,
        costApproval: 0,
        effect: { approval: 10, ego: 100 },
        phase: "late"
    },
    {
        id: "dom_prison_private",
        type: "内政",
        title: "监狱私营化",
        desc: "让罪犯通过劳动创造价值！",
        costMoney: -5,
        costApproval: 5,
        effect: { money: 5, approval: -5 },
        phase: "mid"
    },
    {
        id: "dom_spy_citizens",
        type: "内政",
        title: "全境监控",
        desc: "为了安全，这是必要的牺牲。",
        costMoney: 15,
        costApproval: 20,
        effect: { security: 20, approval: -20 },
        phase: "late"
    },
    {
        id: "dom_ufo_reveal",
        type: "内政",
        title: "公布UFO档案",
        desc: "转移公众注意力的终极手段。",
        costMoney: 0,
        costApproval: 0,
        effect: { approval: 5, chaos: 10 },
        phase: "late"
    },

    // --- 军事 (Military) ---
    {
        id: "mil_parade",
        type: "军事",
        title: "大阅兵",
        desc: "我要坦克在首都大街上开！要最大的那种！",
        costMoney: 10,
        costApproval: 0,
        effect: { approval: 5, power: 5 },
        phase: "early"
    },
    {
        id: "mil_drone_strike",
        type: "军事",
        title: "无人机打击",
        desc: "像玩电子游戏一样解决问题。",
        costMoney: 5,
        costApproval: 5,
        effect: { security: 10, approval: -5 },
        phase: "mid"
    },
    {
        id: "mil_space_force",
        type: "军事",
        title: "太空军",
        desc: "我们要保卫月球！防止外星人偷我们的奶酪。",
        costMoney: 30,
        costApproval: 0,
        effect: { money: -30, approval: 10, tech: 5 },
        phase: "mid"
    },
    {
        id: "mil_arms_deal",
        type: "军事",
        title: "军火交易",
        desc: "虽然他们是坏蛋，但他们的钱是香的。",
        costMoney: -15,
        costApproval: 10,
        effect: { money: 15, approval: -10, diplomacy: -5 },
        phase: "any"
    },
    {
        id: "mil_start_war",
        type: "军事",
        title: "发动特别行动",
        desc: "支持率低了？打一仗就好了！",
        costMoney: 50,
        costApproval: 0,
        effect: { money: -50, approval: 20 },
        phase: "late"
    },
    {
        id: "mil_nuke_test",
        type: "军事",
        title: "核试验",
        desc: "就在自家后院放个并不是很大的烟花。",
        costMoney: 20,
        costApproval: 20,
        effect: { power: 50, approval: -10, diplomacy: -20 },
        phase: "late"
    },
    {
        id: "mil_buy_jets",
        type: "军事",
        title: "购买F-35",
        desc: "虽然这飞机不仅贵还经常出故障，但还是买了。",
        costMoney: 25,
        costApproval: 0,
        effect: { security: 10, money: -25 },
        phase: "mid"
    },
    {
        id: "mil_secret_base",
        type: "军事",
        title: "扩建51区",
        desc: "我们需要更多地方存放抓到的异形。",
        costMoney: 10,
        costApproval: 0,
        effect: { tech: 5, secrecy: 10 },
        phase: "any"
    },
    {
        id: "mil_cyber_army",
        type: "军事",
        title: "组建网军",
        desc: "键盘侠也有正规军编制了。",
        costMoney: 5,
        costApproval: 0,
        effect: { security: 5, diplomacy: -5 },
        phase: "mid"
    },
    {
        id: "mil_coup_insurance",
        type: "军事",
        title: "防政变保险",
        desc: "给将军们涨薪水，确保他们站在我这边。",
        costMoney: 10,
        costApproval: 0,
        effect: { coup_risk: -20 },
        phase: "late"
    },

    // --- 阴谋 (Scandal) ---
    {
        id: "sca_fake_news",
        type: "阴谋",
        title: "制造假新闻",
        desc: "如果真相不喜欢我，那就制造一个新的真相。",
        costMoney: 2,
        costApproval: 5, // Risk
        effect: { approval: 10, truth: -10 },
        phase: "any"
    },
    {
        id: "sca_bribe_senator",
        type: "阴谋",
        title: "贿赂议员",
        desc: "这不叫贿赂，这叫游说。",
        costMoney: 5,
        costApproval: 0,
        effect: { legislation_pass_chance: 100, money: -5 },
        phase: "mid"
    },
    {
        id: "sca_cover_up",
        type: "阴谋",
        title: "销毁证据",
        desc: "碎纸机卡住了？那就把文件吞下去！",
        costMoney: 5,
        costApproval: 0,
        effect: { scandal_risk: -50 },
        phase: "any"
    },
    {
        id: "sca_blame_migrants",
        type: "阴谋",
        title: "指责移民",
        desc: "所有问题都是他们造成的，包括今天下雨。",
        costMoney: 0,
        costApproval: -10, // Polarizing
        effect: { approval: 5, unity: -20 },
        phase: "any"
    },
    {
        id: "sca_deepfake",
        type: "阴谋",
        title: "Deepfake 对手",
        desc: "这是对手穿着芭蕾舞裙跳舞的视频，绝对真实。",
        costMoney: 3,
        costApproval: 0,
        effect: { approval: 5, opponent_approval: -10 },
        phase: "late"
    },
    {
        id: "sca_embezzle",
        type: "阴谋",
        title: "挪用公款",
        desc: "我的新游艇是为了国家安全。",
        costMoney: -10, 
        costApproval: 20, // High risk
        effect: { personal_wealth: 10, approval: -10 },
        phase: "mid"
    },
    {
        id: "sca_watergate",
        type: "阴谋",
        title: "安装窃听器",
        desc: "我要知道除此之外的所有人在说什么。",
        costMoney: 2,
        costApproval: 30,
        effect: { intel: 100, impeachment_risk: 20 },
        phase: "mid"
    },
    {
        id: "sca_nepotism",
        type: "阴谋",
        title: "任人唯亲",
        desc: "让女婿负责中东和平，让女儿负责所有的事。",
        costMoney: 0,
        costApproval: 5,
        effect: { loyalty: 100, competence: -50 },
        phase: "early"
    },
    {
        id: "sca_tax_evasion",
        type: "阴谋",
        title: "公开纳税申报（假的）",
        desc: "这就是我的税单，虽然上面只有一张白纸。",
        costMoney: 0,
        costApproval: 5,
        effect: { approval: 2 },
        phase: "early"
    },
    {
        id: "sca_witch_hunt",
        type: "阴谋",
        title: "大喊“猎巫行动”",
        desc: "只要喊得够大声，调查就会停止。",
        costMoney: 0,
        costApproval: 0,
        effect: { approval: 5 },
        phase: "late"
    },

    // --- 关税 (Tariff) ---
    {
        id: "tar_steel",
        type: "关税",
        title: "钢铁关税",
        desc: "保护我们的钢铁工人！虽然建筑成本会飞涨。",
        costMoney: 0,
        costApproval: 0,
        effect: { money: 5, approval: 2, construction_cost: 20 },
        phase: "mid"
    },
    {
        id: "tar_tech_embargo",
        type: "关税",
        title: "芯片禁运",
        desc: "不准卖给他们高端芯片！只能卖计算器芯片。",
        costMoney: 10,
        costApproval: 0,
        effect: { tech_dominance: 10, money: -10 },
        phase: "mid"
    },
    {
        id: "tar_luxury",
        type: "关税",
        title: "奢侈品税",
        desc: "对法国红酒和意大利皮包征收 200% 重税。",
        costMoney: 0,
        costApproval: -2,
        effect: { money: 8, upper_class_approval: -10 },
        phase: "any"
    },
    {
        id: "tar_car",
        type: "关税",
        title: "汽车关税",
        desc: "外国车太危险了，还是开国产大排量吧。",
        costMoney: 0,
        costApproval: 0,
        effect: { money: 5, environment: -5 },
        phase: "mid"
    },
    {
        id: "tar_soybean",
        type: "关税",
        title: "大豆战争",
        desc: "我们的农民很爱国，他们愿意为此破产。",
        costMoney: 5, // Subsidies needed
        costApproval: 5,
        effect: { money: -5, diplomacy: -10 },
        phase: "mid"
    },
    {
        id: "tar_carbon",
        type: "关税",
        title: "碳关税",
        desc: "你们生产的东西太脏了，得加钱。",
        costMoney: 0,
        costApproval: 5,
        effect: { money: 5, environment: 10, diplomacy: -5 },
        phase: "any"
    },
    {
        id: "tar_digital",
        type: "关税",
        title: "数字服务税",
        desc: "硅谷的巨头们赚得太多了，分一杯羹。",
        costMoney: 0,
        costApproval: 0,
        effect: { money: 15, tech_approval: -10 },
        phase: "any"
    },
    {
        id: "tar_import_ban",
        type: "关税",
        title: "全面进口禁令",
        desc: "自给自足！回到农耕时代！",
        costMoney: 20,
        costApproval: 20,
        effect: { economy: -50, independence: 100 },
        phase: "late"
    },
    {
        id: "tar_cheese",
        type: "关税",
        title: "奶酪战争",
        desc: "为了保护本土奶酪的尊严。",
        costMoney: 0,
        costApproval: 0,
        effect: { money: 2, obesity: 1 },
        phase: "any"
    },
    {
        id: "tar_free_trade",
        type: "关税",
        title: "取消所有关税",
        desc: "让市场决定一切！",
        costMoney: 10,
        costApproval: 10,
        effect: { money: -10, global_approval: 20 },
        phase: "early"
    }
];

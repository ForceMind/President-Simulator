window.GAME_DATA = window.GAME_DATA || {};
window.GAME_DATA.CARD_DB = window.GAME_DATA.CARD_DB || [];

window.GAME_DATA.CARD_DB.push(
    // ---------------- EARLY PHASE ----------------
    {
        type: "丑闻",
        title: "被遗忘的私生子",
        desc: "那个长得和你一模一样的服务员？纯属巧合。",
        cost: 2,
        phase: "early",
        effect: { approval: -5, family_values: -10 }
    },
    {
        type: "丑闻",
        title: "论文抄袭曝光",
        desc: "你的大学论文其实是从维基百科复制粘贴的...而在当时维基百科还不存在。",
        cost: 1,
        phase: "early",
        effect: { approval: -2, intelligence: -5 }
    },
    {
        type: "丑闻",
        title: "逃税记录泄露",
        desc: "你不仅没交税，还向政府申请了低保。",
        cost: 3,
        phase: "early",
        effect: { approval: -8, money: 2 }
    },

    // ---------------- MID PHASE ----------------
    {
        type: "丑闻",
        title: "用竞选资金买游艇",
        desc: "这艘船叫‘民意号’，所以这显然是竞选开支。",
        cost: 0,
        phase: "mid",
        effect: { money: 10, approval: -10, corruption: 10 }
    },
    {
        type: "丑闻",
        title: "录音门",
        desc: "你在录音里说你讨厌你的选民。‘一群没牙的乡巴佬’。",
        cost: 5,
        phase: "mid",
        effect: { approval: -15, elitism: 10 }
    },
    {
        type: "丑闻",
        title: "与外国间谍的绯闻",
        desc: "但她真的很性感，而且她的名字真的是‘娜塔莎’。",
        cost: 4,
        phase: "mid",
        effect: { approval: -10, security: -15 }
    },
    {
        type: "丑闻",
        title: "高尔夫球场交易",
        desc: "把军事基地建在你的度假村旁边，房价翻倍。",
        cost: 2,
        phase: "mid",
        effect: { money: 8, approval: -5 }
    },
    {
        type: "丑闻",
        title: "推特账号被黑...是你自己发的",
        desc: "凌晨2点的胡言乱语。把‘核按钮’拼成了‘喝按钮’。",
        cost: 1,
        phase: "mid",
        effect: { approval: -2, mockery: 10 }
    },
    {
        type: "丑闻",
        title: "虚假慈善机构",
        desc: "‘救助小海豹’基金实际上是用来买你的肖像画的。",
        cost: 3,
        phase: "mid",
        effect: { money: 5, approval: -12 }
    },
    {
        type: "丑闻",
        title: "内阁成员在直播中打架",
        desc: "国务卿用椅子砸了财政部长。收视率爆表。",
        cost: 0,
        phase: "mid",
        effect: { approval: 2, dignity: -15 }
    },
    {
        type: "丑闻",
        title: "酒店床虱爆发",
        desc: "你的豪华酒店充满了寄生虫。比喻义和字面义都是。",
        cost: 2,
        phase: "mid",
        effect: { money: -5, approval: -2 }
    },
    {
        type: "丑闻",
        title: "被拍到吃披萨用叉子",
        desc: "这是不可原谅的罪行。真正的美国人用手抓！",
        cost: 1,
        phase: "mid",
        effect: { approval: -8, populism: -10 }
    },
    {
        type: "丑闻",
        title: "被揭露戴假发",
        desc: "一场大风毁了一切。那个橙色的东西飞走了。",
        cost: 1,
        phase: "mid",
        effect: { approval: -3, mockery: 20 }
    },
    {
        type: "丑闻",
        title: "在葬礼上自拍",
        desc: "带着微笑和竖大拇指。",
        cost: 2,
        phase: "mid",
        effect: { approval: -10, respect: -20 }
    },
    {
        type: "丑闻",
        title: "赦免那个杀了人的网红",
        desc: "因为他在YouTube上有两千万粉丝。",
        cost: 2,
        phase: "mid",
        effect: { approval: -5, youth_vote: 5 }
    },

    // ---------------- LATE PHASE ----------------
    {
        type: "丑闻",
        title: "试图出售阿拉斯加",
        desc: "俄罗斯出价很高，而且那里太冷了。",
        cost: 5,
        phase: "late",
        effect: { approval: -20, treason_risk: 10 }
    },
    {
        type: "丑闻",
        title: "被发现囤积卫生纸",
        desc: "在短缺期间，地下室里有三千箱。",
        cost: 0,
        phase: "late",
        effect: { approval: -15, selfishness: 10 }
    },
    {
        type: "丑闻",
        title: "深度伪造视频...是真的",
        desc: "你赤身裸体骑着一只熊。糟糕的是，这无法否认。",
        cost: 5,
        phase: "late",
        effect: { approval: -10, insanity: 10 }
    },
    {
        type: "丑闻",
        title: "在国家电视台上崩溃",
        desc: "哭着喊妈妈，并承认偷了小学的饼干。",
        cost: 2,
        phase: "late",
        effect: { approval: -25, weakness: 20 }
    },
    {
        type: "丑闻",
        title: "被发现是蜥蜴人",
        desc: "你的皮肤脱落了一块，露出了绿色的鳞片。这解释了很多。",
        cost: 10,
        phase: "late",
        effect: { approval: -50, conspiracy_confirmed: 100 }
    },
    {
        type: "丑闻",
        title: "在国旗上签名卖钱",
        desc: "在eBay上拍卖，起拍价$9.99。",
        cost: 0,
        phase: "late",
        effect: { approval: -10, cash: 1 }
    }
);

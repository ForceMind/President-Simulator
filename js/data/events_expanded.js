window.GAME_DATA = window.GAME_DATA || {};
window.GAME_DATA.EVENTS_DB = window.GAME_DATA.EVENTS_DB || [];

// Helper to push multiple events
window.GAME_DATA.EVENTS_DB.push(
    // ================= EARLY PHASE (0-10) =================
    {
        title: { zh: "就职典礼演说", en: "Inauguration Speech" },
        desc: { zh: "是你最重要的时刻。你要说什么？", en: "It's your big moment. What do you say?" },
        phase: "early",
        choices: [
            { text: { zh: "团结与希望", en: "Unity & Hope" }, effect: { approval: 5, unity: 5 } },
            { text: { zh: "黑暗与复仇", en: "Darkness & Revenge" }, effect: { approval: -5, loyalty: 10 } },
            { text: { zh: "关于你自己有多棒", en: "All About Me" }, effect: { approval: -2, ego: 5 } }
        ]
    },
    {
        title: { zh: "白宫装修", en: "White House Reno" },
        desc: { zh: "这里看起来太... 穷酸了。需要金子。", en: "This place looks... poor. It needs gold." },
        phase: "early",
        choices: [
            { text: { zh: "全部镀金", en: "Gold Plating" }, effect: { money: -5, approval: -2 } },
            { text: { zh: "保持原样", en: "Keep it Classic" }, effect: { money: 0, approval: 2 } },
            { text: { zh: "改为高尔夫模拟室", en: "Golf Simulator" }, effect: { money: -2, approval: -1 } }
        ]
    },
    {
        title: { zh: "第一份法案", en: "First Bill" },
        desc: { zh: "你要签署什么作为你的第一项成就？", en: "What will be your first signature achievement?" },
        phase: "early",
        choices: [
            { text: { zh: "每个人发钱", en: "Free Money" }, effect: { money: -10, approval: 10 } },
            { text: { zh: "驱逐不受欢迎的人", en: "Deport Unwanted" }, effect: { approval: -5, loyalty: 5 } },
            { text: { zh: "命名一种新三明治", en: "Name a Sandwich" }, effect: { approval: 1, mockery: 2 } }
        ]
    },
    {
        title: { zh: "内阁选拔", en: "Cabinet Picking" },
        desc: { zh: "谁来管理国家？", en: "Who runs the country?" },
        phase: "early",
        choices: [
            { text: { zh: "行业专家", en: "Experts" }, effect: { approval: 5, corruption: -2 } },
            { text: { zh: "你的家人", en: "Family Members" }, effect: { corruption: 5, loyalty: 10 } },
            { text: { zh: "给钱最多的人", en: "Highest Bidders" }, effect: { money: 10, approval: -5 } }
        ]
    },
    {
        title: { zh: "第一次新闻发布会", en: "First Press Conference" },
        desc: { zh: "记者们像饥饿的狼。喂给他们什么？", en: "The press are like hungry wolves. What do you feed them?" },
        phase: "early",
        choices: [
            { text: { zh: "真相", en: "The Truth" }, effect: { approval: 2, boredom: 5 } },
            { text: { zh: "谎言", en: "Lies" }, effect: { approval: -2, attention: 10 } },
            { text: { zh: "侮辱他们的发型", en: "Insults" }, effect: { approval: 1, chaos: 5 } }
        ]
    },
    {
        title: { zh: "反对党的橄榄枝", en: "Opposition Olive Branch" },
        desc: { zh: "他们想合作。真的吗？", en: "They want to work together. Really?" },
        phase: "early",
        choices: [
            { text: { zh: "接受合作", en: "Accept" }, effect: { approval: 5, loyalty: -5 } },
            { text: { zh: "公开羞辱他们", en: "Humiliate Them" }, effect: { approval: -2, loyalty: 5 } },
            { text: { zh: "设下陷阱", en: "Set a Trap" }, effect: { scandal_chance: 5 } }
        ]
    },
    {
        title: { zh: "特勤局代号", en: "Secret Service Code Name" },
        desc: { zh: "你需要一个很酷的代号。", en: "You need a cool name." },
        phase: "early",
        choices: [
            { text: { zh: "爱国者", en: "Patriot" }, effect: { approval: 2 } },
            { text: { zh: "大老板", en: "Big Boss" }, effect: { ego: 2 } },
            { text: { zh: "性感野兽", en: "Sexy Beast" }, effect: { mockery: 10 } }
        ]
    },
    {
        title: { zh: "发现前任的秘密笔记", en: "Secret Note" },
        desc: { zh: "他在抽屉里留了一张条子：‘没有钱了，祝好运。’", en: "A note in the drawer: 'No money left. Good luck.'" },
        phase: "early",
        choices: [
            { text: { zh: "公开它", en: "Publicize It" }, effect: { approval: 2, blame: 5 } },
            { text: { zh: "烧掉它", en: "Burn It" }, effect: { secrets: 1 } },
            { text: { zh: "吃掉它", en: "Eat It" }, effect: { digestion: -1 } }
        ]
    },
    {
        title: { zh: "第一次出国访问", en: "First State Visit" },
        desc: { zh: "去哪里？", en: "Where to go?" },
        phase: "early",
        choices: [
            { text: { zh: "传统盟友", en: "Allies" }, effect: { relations: 5 } },
            { text: { zh: "敌对独裁者", en: "Dictators" }, effect: { relations: -5, notoriety: 10 } },
            { text: { zh: "迪士尼乐园", en: "Disneyland" }, effect: { approval: -5, happiness: 5 } }
        ]
    },
    
    // ================= MID PHASE =================
    {
        title: { zh: "流感爆发", en: "Flu Season" },
        desc: "人们在咳嗽。这是真的病还是假新闻？",
        phase: "mid",
        choices: [
            { text: "资助科学研究", effect: { money: -5, approval: 5 } },
            { text: "告诉大家喝漂白剂", effect: { approval: -10, death_rate: 2 } },
            { text: "责怪别的国家", effect: { tension: 10, approval: 2 } }
        ]
    },
    {
        title: "股市崩盘",
        desc: "红色的箭头到处都是。有些银行家在跳楼。",
        phase: "mid",
        choices: [
            { text: "救助银行", effect: { money: -20, approval: -10, economy: 10 } },
            { text: "救助人民", effect: { money: -20, approval: 10, economy: 5 } },
            { text: "做空市场赚钱", effect: { money: 30, approval: -20, personal_wealth: 20 } }
        ]
    },
    {
        title: "飓风来袭",
        desc: "它正对着佛罗里达。",
        phase: "mid",
        choices: [
            { text: "发送援助", effect: { money: -5, approval: 5 } },
            { text: "扔纸巾给灾民", effect: { approval: -5, meme_potential: 10 } },
            { text: "建议用核弹炸飓风", effect: { approval: -10, insanity: 20 } }
        ]
    },
    {
        title: "最高法院大法官去世",
        desc: "一个空缺。无论你做什么，一半人都会恨你。",
        phase: "mid",
        choices: [
            { text: "任命温和派", effect: { approval: 0, base_loyalty: -10 } },
            { text: "任命极端派", effect: { approval: -5, base_loyalty: 10 } },
            { text: "任命你的律师", effect: { correction: 20, approval: -15 } }
        ]
    },
    {
        title: "贸易逆差扩大",
        desc: "我们买的东西比卖的多。",
        phase: "mid",
        choices: [
            { text: "加征关税", effect: { money: 5, inflation: 5, approval: 0 } },
            { text: "忽略它", effect: { economy: -2 } },
            { text: "禁止进口奶酪", effect: { approval: -2, cheese_prices: 10 } }
        ]
    },
    {
        title: "外国选举受干扰",
        desc: "我们的情报机构说有人在搞鬼。",
        phase: "mid",
        choices: [
            { text: "制裁干扰国", effect: { tension: 5, approval: 2 } },
            { text: "这对我有利，所以没发生", effect: { corruption: 5, approval: -5 } },
            { text: "邀请他们下次再来", effect: { treason: 10 } }
        ]
    },
    {
        title: "石油价格飙升",
        desc: "加油站的人们很愤怒。",
        phase: "mid",
        choices: [
            { text: "释放战略储备", effect: { money: -2, approval: 5 } },
            { text: "入侵产油国", effect: { money: -10, approval: 5, war: 1 } },
            { text: "告诉大家走路更健康", effect: { approval: -10 } }
        ]
    },
    {
        title: "名人批评你",
        desc: "好莱坞明星在颁奖典礼上骂你。",
        phase: "mid",
        choices: [
            { text: "因为言论自由而尊重", effect: { approval: 2, ego: -5 } },
            { text: "推特反击", effect: { approval: 1, distraction: 5 } },
            { text: "查他们的税", effect: { money: 1, approval: -5, fear: 5 } }
        ]
    },
    {
        title: "大规模枪击事件",
        desc: "又发生了一起。悲剧。",
        phase: "mid",
        choices: [
            { text: "思想和祈祷", effect: { approval: -2, nothing_changes: 1 } },
            { text: "枪支管制", effect: { approval: 0, base_loyalty: -20 } },
            { text: "更多的枪！", effect: { base_loyalty: 10, safety: -10 } }
        ]
    },
    {
        title: "太空竞赛重启",
        desc: "中国人要登月了。",
        phase: "mid",
        choices: [
            { text: "增加NASA预算", effect: { money: -5, science: 5 } },
            { text: "成立太空军", effect: { money: -10, awe: 5 } },
            { text: "声称月球是假的", effect: { science: -10, conspiracy: 5 } }
        ]
    },
    {
        title: "基础设施崩溃",
        desc: "一座大桥塌了。",
        phase: "mid",
        choices: [
            { text: "基建周！", effect: { money: -10, approval: 5 } },
            { text: "责怪前任", effect: { approval: 0 } },
            { text: "私有化道路", effect: { money: 5, approval: -5 } }
        ]
    },
    {
        title: "抗议者在白宫外",
        desc: "他们拿着标语，喊着口号。",
        phase: "mid",
        choices: [
            { text: "倾听他们的诉求", effect: { approval: 5, weakness: 2 } },
            { text: "放狗", effect: { approval: -10, strength: 5 } },
            { text: "关灯装作不在家", effect: { approval: -2, mockery: 10 } }
        ]
    },
    {
        title: "这真的是外星人吗？",
        desc: "不明飞行物报告解密。",
        phase: "mid",
        choices: [
            { text: "告诉全世界", effect: { chaos: 20 } },
            { text: "掩盖真相", effect: { stability: 5, deep_state: 5 } },
            { text: "试图约会外星人", effect: { insanity: 10 } }
        ]
    },
    {
        title: "你的纳税申报单",
        desc: "人们还在要求看它。",
        phase: "mid",
        choices: [
            { text: "公布", effect: { approval: 5, money: -5 } },
            { text: "正在审计中，无可奉告", effect: { approval: -2 } },
            { text: "那是假的！", effect: { approval: -5 } }
        ]
    },
    {
        title: "气候峰会",
        desc: "世界领导人聚集在一起讨论地球。",
        phase: "mid",
        choices: [
            { text: "承诺减排", effect: { economy: -5, approval: 5, international: 5 } },
            { text: "退出协定", effect: { economy: 5, international: -10 } },
            { text: "在会议上睡着", effect: { dignity: -5 } }
        ]
    },
    {
        title: "新的社交媒体应用爆火",
        desc: "大家都用TikTok... 或者是它的山寨版。",
        phase: "mid",
        choices: [
            { text: "禁止它（间谍风险）", effect: { approval: -5, security: 5 } },
            { text: "加入并在上面跳舞", effect: { approval: 2, cringe: 100 } },
            { text: "收购它", effect: { money: -10, control: 10 } }
        ]
    },
    {
        title: "各种各样的泄密",
        desc: "白宫像个筛子。",
        phase: "mid",
        choices: [
            { text: "测谎仪测试所有人", effect: { morale: -10, security: 5 } },
            { text: "没收手机", effect: { morale: -5 } },
            { text: "以此为诱饵抓内鬼", effect: { intelligence: 5 } }
        ]
    },
    {
        title: "感恩节",
        desc: "赦免火鸡的时刻。",
        phase: "mid",
        choices: [
            { text: "赦免两只", effect: { approval: 1, kindness: 2 } },
            { text: "吃掉火鸡", effect: { approval: -5, horror: 5 } },
            { text: "赦免你的竞选经理", effect: { approval: -10, corruption: 5 } }
        ]
    },
    {
        title: "超级碗",
        desc: "每个人都在看。",
        phase: "mid",
        choices: [
            { text: "发推特支持一支队", effect: { approval: 0 } },
            { text: "不想看，因为球员跪下了", effect: { base_loyalty: 5, division: 5 } },
            { text: "购买广告位宣传自己", effect: { money: -5, exposure: 10 } }
        ]
    },
    {
        title: "诺贝尔和平奖提名",
        desc: "有人提名了你。真的很奇怪。",
        phase: "mid",
        choices: [
            { text: "谦虚接受", effect: { approval: 5 } },
            { text: "吹嘘那是应得的", effect: { ego: 5, mockery: 2 } },
            { text: "要求现金奖励", effect: { approval: -5, greed: 5 } }
        ]
    },
    // Adding more Mid phase events to reach count
    { title: "被困在电梯里", desc: "和普京一起。尴尬。", phase: "mid", choices: [{text: "谈判", effect: {diplomacy: 5}}, {text: "打架", effect: {strength: 5}}, {text: "哭泣", effect: {weakness: 5}}] },
    { title: "发现石油", desc: "在黄石公园。", phase: "mid", choices: [{text: "钻探", effect: {money: 10, environment: -10}}, {text: "保护", effect: {approval: 5, money: -5}}] },
    { title: "比特币暴跌", desc: "这也影响了你的秘密账户。", phase: "mid", choices: [{text: "禁止加密货币", effect: {economy: -2}}, {text: "逢低买入", effect: {money: -5, risk: 10}}] },
    { title: "僵尸鹿病", desc: "鹿变成了僵尸。", phase: "mid", choices: [{text: "猎杀所有鹿", effect: {nature: -5}}, {text: "不用担心", effect: {pandemic_risk: 5}}] },
    { title: "互联网断网", desc: "全国断网一小时。", phase: "mid", choices: [{text: "这是攻击！", effect: {panic: 10}}, {text: "每个人去读书", effect: {culture: 1}}] },
    { title: "牛奶涨价", desc: "早餐危机。", phase: "mid", choices: [{text: "补贴奶农", effect: {money: -2}}, {text: "喝豆浆", effect: {approval: -2}}] },
    { title: "你的狗咬了记者", desc: "它是好孩子吗？", phase: "mid", choices: [{text: "道歉", effect: {approval: 2}}, {text: "那是记者咬了狗", effect: {gaslighting: 10}}] },
    { title: "发现新的岛屿", desc: "由于海平面上升...等等，那是新的吗？", phase: "mid", choices: [{text: "插旗", effect: {territory: 1}}, {text: "那是垃圾岛", effect: {sadness: 5}}] },
    { title: "奥运会", desc: "如果你去，可能会被嘘。", phase: "mid", choices: [{text: "出席", effect: {prestige: 2}}, {text: "抵制", effect: {nationalism: 5}}] },
    { title: "复活节彩蛋", desc: "孩子们在草坪上。", phase: "mid", choices: [{text: "和蔼可亲", effect: {approval: 2}}, {text: "抢他们的蛋", effect: {approval: -10, funny: 5}}] },
    { title: "错误的警报", desc: "导弹来袭警报响了。只有十分钟。", phase: "mid", choices: [{text: "躲起来", effect: {cowardice: 5}}, {text: "继续打高尔夫", effect: {coolness: 10}}] },
    { title: "黑客泄露你的浏览记录", desc: "不是很光彩。", phase: "mid", choices: [{text: "那是为了研究", effect: {lie: 5}}, {text: "我被黑了", effect: {denial: 5}}] },
    
    // --- ADDED BATCH 1 (Tech & Culture) ---
    { title: "5G基站阴谋", desc: "人们在烧毁信号塔。", phase: "mid", choices: [{text: "那是为了更快的色情片下载速度", effect: {approval: 5}}, {text: "那是精神控制", effect: {conspiracy: 10}}] },
    { title: "流媒体服务大战", desc: "这是新的世界大战。", phase: "mid", choices: [{text: "征收数字税", effect: {money: 5}}, {text: "免费给每个人订阅", effect: {happiness: 5, money: -5}}] },
    { title: "小学取消数学课", desc: "因为太难了。", phase: "mid", choices: [{text: "同意，谁需要微积分", effect: {education: -5, approval: 5}}, {text: "强制每个人学", effect: {education: 5, approval: -5}}] },
    { title: "禁止吸管", desc: "为了海龟。", phase: "mid", choices: [{text: "纸吸管", effect: {annoyance: 10}}, {text: "直接喝", effect: {pragmatism: 5}}] },
    { title: "电子竞技入奥", desc: "打游戏是体育吗？", phase: "mid", choices: [{text: "是的", effect: {youth_vote: 10}}, {text: "不，去外面玩", effect: {boomer_vote: 10}}] },
    { title: "发现古代遗迹", desc: "在你的高尔夫球场地下。", phase: "mid", choices: [{text: "埋回去", effect: {corruption: 5}}, {text: "变成博物馆", effect: {culture: 5, money: -2}}] },
    { title: "国家动物园熊猫逃跑", desc: "它在市中心吃竹子。", phase: "mid", choices: [{text: "它很可爱", effect: {happiness: 5}}, {text: "那是中国的特工", effect: {tension: 5}}] },
    { title: "新的饮食金字塔", desc: "大糖果公司的游说。", phase: "mid", choices: [{text: "披萨是蔬菜", effect: {health: -5, approval: 5}}, {text: "只吃羽衣甘蓝", effect: {health: 5, approval: -10}}] },
    { title: "强制接种疫苗...", desc: "对抗... 愚蠢？", phase: "mid", choices: [{text: "强制执行", effect: {science: 5, unrest: 10}}, {text: "自由选择", effect: {popularity: 5, pandemic_risk: 5}}] },
    { title: "油轮泄漏", desc: "企鹅被油覆盖了。", phase: "mid", choices: [{text: "用洗洁精洗", effect: {environment: 2}}, {text: "那不是油，那是... 巧克力", effect: {lie: 10}}] },
    { title: "废除便士", desc: "造价甚至超过面值。", phase: "mid", choices: [{text: "废除", effect: {efficiency: 2}}, {text: "林肯在上面！保留！", effect: {tradition: 5}}] },
    { title: "火星发现水", desc: "真的水。", phase: "mid", choices: [{text: "那是我们的水", effect: {imperialism: 5}}, {text: "不要喝", effect: {caution: 2}}] },
    { title: "禁止在披萨上放菠萝", desc: "这关乎国家尊严。", phase: "mid", choices: [{text: "禁止它", effect: {unity: 5}}, {text: "这是自由", effect: {liberty: 5}}] },
    { title: "国会休会去度假", desc: "当国家燃烧的时候。", phase: "mid", choices: [{text: "加入他们", effect: {approval: -5}}, {text: "召回他们", effect: {efficiency: 5, relations: -5}}] },
    { title: "彩票头奖达到100亿", desc: "每个人都疯了。", phase: "mid", choices: [{text: "我也买一张", effect: {humor: 5}}, {text: "征税90%", effect: {money: 50, anger: 20}}] },
    { title: "最大的货轮堵住了运河", desc: "全球贸易停滞。", phase: "mid", choices: [{text: "推它一下", effect: {simplicity: 5}}, {text: "炸掉它", effect: {chaos: 10}}] },
    { title: "网络迷因变成了货币", desc: "DogeCoin?", phase: "mid", choices: [{text: "承认它", effect: {economy: -10, youth: 10}}, {text: "这是非法的", effect: {stability: 5}}] },
    { title: "禁止汽车喇叭", desc: "为了噪音污染。", phase: "mid", choices: [{text: "安静", effect: {peace: 5}}, {text: "路怒症增加", effect: {violence: 5}}] },
    { title: "将冥王星恢复为行星", desc: "重要的科学议题。", phase: "mid", choices: [{text: "它是行星！", effect: {science_approval: -5}}, {text: "它是矮行星", effect: {science_approval: 5}}] },
    { title: "国家宽带计划", desc: "农村没有网。", phase: "mid", choices: [{text: "铺设光纤", effect: {money: -5, development: 5}}, {text: "发DVD", effect: {mockery: 5}}] },
    { title: "禁止某种书籍", desc: "家长们很生气。", phase: "mid", choices: [{text: "禁止", effect: {censorship: 5}}, {text: "阅读自由", effect: {liberal: 5}}] },
    { title: "更改国歌", desc: "现在的太难唱了。", phase: "mid", choices: [{text: "改成饶舌歌曲", effect: {culture: -10, cool: 10}}, {text: "保持原样", effect: {tradition: 5}}] },
    { title: "将首都迁往中部", desc: "华盛顿太潮湿了。", phase: "mid", choices: [{text: "搬迁", effect: {money: -50, chaos: 20}}, {text: "留下", effect: {stability: 5}}] },
    { title: "全民免费冰淇淋日", desc: "为了支持乳制品业。", phase: "mid", choices: [{text: "耶！", effect: {happiness: 10, health: -2}}, {text: "乳糖不耐受怎么办？", effect: {complaints: 5}}] },
    { title: "AI写了这行代码", desc: "这是个元事件。", phase: "mid", choices: [{text: "酷", effect: {meta: 1}}, {text: "可怕", effect: {fear: 1}}] },
    { title: "新的税法", phase: "mid", choices: [{text: "富人减税", effect: {donors: 5, approval: -5}}, {text: "穷人减税", effect: {approval: 5, money: -5}}] },
    { title: "最高法院裁决", phase: "mid", choices: [{text: "执行", effect: {rule_of_law: 5}}, {text: "无视", effect: {dictator: 5}}] },
    { title: "国家公园大火", phase: "mid", choices: [{text: "扫落叶", effect: {mockery: 5}}, {text: "救火", effect: {money: -2}}] },
    { title: "说唱歌手竞选总统", phase: "mid", choices: [{text: "嘲笑他", effect: {youth: -5}}, {text: "邀请合作", effect: {cool: 5}}] },
    { title: "月球背面基地", phase: "mid", choices: [{text: "纳粹？", effect: {conspiracy: 5}}, {text: "外星人？", effect: {conspiracy: 5}}] },
    { title: "流浪气球", phase: "mid", choices: [{text: "射击", effect: {strength: 2}}, {text: "抓捕", effect: {intel: 5}}] },
    { title: "AI获得意识", phase: "mid", choices: [{text: "拔插头", effect: {tech: -5}}, {text: "任命为顾问", effect: {efficiency: 10, humanity: -10}}] },
    { title: "前任出书", phase: "mid", choices: [{text: "起诉", effect: {streisand_effect: 10}}, {text: "因为不识字而不读", effect: {approval: 0}}] },
    { title: "国债上限", phase: "mid", choices: [{text: "提高", effect: {stability: 5}}, {text: "违约", effect: {chaos: 50}}] },

    // ================= LATE PHASE (20+) =================
    {
        title: "选举年经济衰退",
        desc: "时机糟透了。",
        phase: "late",
        choices: [
            { text: "发钱买选票", effect: { money: -20, approval: 10 } },
            { text: "暂停选举", effect: { dictatorship: 20, unrest: 50 } },
            { text: "责怪在野党", effect: { polarization: 10 } }
        ]
    },
    {
        title: "大辩论",
        desc: "你要上电视了。",
        phase: "late",
        choices: [
            { text: "像个疯子一样大喊", effect: { base_approval: 5, moderate_approval: -10 } },
            { text: "保持冷静", effect: { boredom: 5 } },
            { text: "拒绝参加", effect: { cowardice: 5 } }
        ]
    },
    {
        title: "十月惊奇",
        desc: "关于你的录像带出来了。",
        phase: "late",
        choices: [
            { text: "这是AI生成的", effect: { deception: 5 } },
            { text: "那是我的替身", effect: { absurdity: 5 } },
            { text: "道歉（也许？）", effect: { weakness: 10 } }
        ]
    },
    {
        title: "败选的可能性",
        desc: "民调看起来不妙。",
        phase: "late",
        choices: [
            { text: "准备政变", effect: { democracy: -50, survival: 20 } },
            { text: "准备回忆录", effect: { money: 10 } },
            { text: "开始粉碎文件", effect: { evidence_destruction: 10 } }
        ]
    },
    {
        title: "各种各样的暴乱",
        desc: "城市在燃烧。",
        phase: "late",
        choices: [
            { text: "法律与秩序", effect: { strength: 10, division: 20 } },
            { text: "呼吁和平", effect: { weakness: 5, peace: 5 } },
            { text: "躲在地堡", effect: { safety: 10, mockery: 20 } }
        ]
    },
    {
        title: "最高法院判决选举结果",
        desc: "这取决于他们。",
        phase: "late",
        choices: [
            { text: "贿赂他们", effect: { money: -50, corruption: 50 } },
            { text: "威胁他们", effect: { tyranny: 20 } },
            { text: "相信体制", effect: { failure_risk: 50 } }
        ]
    },
    {
        title: "流亡海外？",
        desc: "如果输了，你要去哪里？",
        phase: "late",
        choices: [
            { text: "俄罗斯", effect: { treason: 10 } },
            { text: "沙特阿拉伯", effect: { greed: 10 } },
            { text: "佛罗里达", effect: { humidity: 100 } }
        ]
    },
    {
        title: "最后的演说",
        desc: "告别演说，或者... 宣战演说？",
        phase: "late",
        choices: [
            { text: "优雅离场", effect: { legacy: 10 } },
            { text: "我们决不投降！", effect: { civil_war_risk: 50 } },
            { text: "我不干了，你们都不配", effect: { pettiness: 10 } }
        ]
    },
    {
        title: "历史的评价",
        desc: "历史书会怎么写你？",
        phase: "late",
        choices: [
            { text: "伟大的改革者", effect: { legacy: 5 } },
            { text: "完全的灾难", effect: { fame: 10 } },
            { text: "被遗忘的人", effect: { peace: 10 } }
        ]
    },
    {
        title: "核按钮落灰了",
        desc: "任期的最后一天。要是按一下会怎样？",
        phase: "late",
        choices: [
            { text: "别碰它", effect: { world_survives: 1 } },
            { text: "只是擦擦灰", effect: { accidental_launch_risk: 1 } },
            { text: "按！", effect: { game_over: true } }
        ]
    },
    {
        title: "特赦自己",
        desc: "这合法吗？谁在乎呢。",
        phase: "late",
        choices: [
            { text: "特赦", effect: { corruption: 10, safety: 10 } },
            { text: "不特赦，我相信陪审团", effect: { jail_risk: 80 } }
        ]
    },
    {
        title: "带走白宫家具",
        desc: "那幅画很配你的浴室。",
        phase: "late",
        choices: [
            { text: "拿走", effect: { theft: 10, money: 2 } },
            { text: "留下", effect: { norms: 5 } }
        ]
    },
    {
        title: "最后的推特",
        desc: "账户即将被封禁。",
        phase: "late",
        choices: [
            { text: "谢谢大家", effect: { polite: 1 } },
            { text: "我想念你们", effect: { sad: 1 } },
            { text: "我会回来的！", effect: { threat: 10 } }
        ]
    },
    {
        title: "雕像问题",
        desc: "他们想推倒你的雕像，尽管它还没建好。",
        phase: "late",
        choices: [
            { text: "保护雕像", effect: { culture_war: 10 } },
            { text: "建得更高", effect: { ego: 20 } }
        ]
    },
    {
        title: "家庭分裂",
        desc: "甚至你的孩子都不给你投票。",
        phase: "late",
        choices: [
            { text: "剥夺继承权", effect: { money: 10 } },
            { text: "哭泣", effect: { humanity: 5 } }
        ]
    },
    {
        title: "健康的恐慌",
        desc: "那次中风只是‘轻微的头晕’。",
        phase: "late",
        choices: [
            { text: "展示你的医疗记录（假的）", effect: { deception: 5 } },
            { text: "挑战拜登做俯卧撑", effect: { strength: 5 } }
        ]
    },
    {
        title: "外星人入侵",
        desc: "就在选举前一天。",
        phase: "late",
        choices: [
            { text: "战斗", effect: { approval: 100 } },
            { text: "投降", effect: { slavery: 100 } }
        ]
    },
    {
        title: "时间旅行者",
        desc: "他说你毁了未来。",
        phase: "late",
        choices: [
            { text: "逮捕他", effect: { tyranny: 5 } },
            { text: "问彩票号码", effect: { money: 100 } }
        ]
    },
    {
        title: "最后的晚餐",
        desc: "在白宫的最后​​一顿饭。",
        phase: "late",
        choices: [
            { text: "麦当劳", effect: { health: -5 } },
            { text: "牛排配番茄酱", effect: { class: -10 } }
        ]
    },
    {
        title: "交接钥匙",
        desc: "给下一任总统。",
        phase: "late",
        choices: [
            { text: "藏起钥匙", effect: { pettiness: 5 } },
            { text: "把厕所堵上", effect: { petty: 10 } },
            { text: "留下一封鼓励的信", effect: { maturity: 100 } } // Rare
        ]
    }
);

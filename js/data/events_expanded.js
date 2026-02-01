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
        desc: { zh: "人们在咳嗽。这是真的病还是假新闻？", en: "People are coughing. Is it real or fake news?" },
        phase: "mid",
        choices: [
            { text: { zh: "资助科学研究", en: "Fund Research" }, effect: { money: -5, approval: 5 } },
            { text: { zh: "告诉大家喝漂白剂", en: "Suggest Bleach" }, effect: { approval: -10, death_rate: 2 } },
            { text: { zh: "责怪别的国家", en: "Blame Others" }, effect: { tension: 10, approval: 2 } }
        ]
    },
    {
        title: { zh: "股市崩盘", en: "Stock Market Crash" },
        desc: { zh: "红色的箭头到处都是。有些银行家在跳楼。", en: "Red arrows everywhere. Bankers are jumping." },
        phase: "mid",
        choices: [
            { text: { zh: "救助银行", en: "Bailout Banks" }, effect: { money: -20, approval: -10, economy: 10 } },
            { text: { zh: "救助人民", en: "Bailout People" }, effect: { money: -20, approval: 10, economy: 5 } },
            { text: { zh: "做空市场赚钱", en: "Short the Market" }, effect: { money: 30, approval: -20, personal_wealth: 20 } }
        ]
    },
    {
        title: { zh: "飓风来袭", en: "Hurricane Incoming" },
        desc: { zh: "它正对着佛罗里达。", en: "It's heading for Florida." },
        phase: "mid",
        choices: [
            { text: { zh: "发送援助", en: "Send Aid" }, effect: { money: -5, approval: 5 } },
            { text: { zh: "扔纸巾给灾民", en: "Throw Paper Towels" }, effect: { approval: -5, meme_potential: 10 } },
            { text: { zh: "建议用核弹炸飓风", en: "Nuke the Hurricane" }, effect: { approval: -10, insanity: 20 } }
        ]
    },
    {
        title: { zh: "最高法院大法官去世", en: "Supreme Court Justice Dies" },
        desc: { zh: "一个空缺。无论你做什么，一半人都会恨你。", en: "A vacancy. Half the country will hate you." },
        phase: "mid",
        choices: [
            { text: { zh: "任命温和派", en: "Appoint Moderate" }, effect: { approval: 0, base_loyalty: -10 } },
            { text: { zh: "任命极端派", en: "Appoint Extremist" }, effect: { approval: -5, base_loyalty: 10 } },
            { text: { zh: "任命你的律师", en: "Appoint Your Lawyer" }, effect: { correction: 20, approval: -15 } }
        ]
    },
    {
        title: { zh: "贸易逆差扩大", en: "Trade Deficit Widens" },
        desc: { zh: "我们买的东西比卖的多。", en: "We buy more than we sell." },
        phase: "mid",
        choices: [
            { text: { zh: "加征关税", en: "Add Tariffs" }, effect: { money: 5, inflation: 5, approval: 0 } },
            { text: { zh: "忽略它", en: "Ignore it" }, effect: { economy: -2 } },
            { text: { zh: "禁止进口奶酪", en: "Ban Cheese Imports" }, effect: { approval: -2, cheese_prices: 10 } }
        ]
    },
    {
        title: { zh: "外国选举受干扰", en: "Foreign Election Interference" },
        desc: { zh: "我们的情报机构说有人在搞鬼。", en: "Intel says someone is meddling." },
        phase: "mid",
        choices: [
            { text: { zh: "制裁干扰国", en: "Sanction Them" }, effect: { tension: 5, approval: 2 } },
            { text: { zh: "这对我有利，所以没发生", en: "It helps me, so ignore" }, effect: { corruption: 5, approval: -5 } },
            { text: { zh: "邀请他们下次再来", en: "Invite them back" }, effect: { treason: 10 } }
        ]
    },
    {
        title: { zh: "石油价格飙升", en: "Oil Prices Surge" },
        desc: { zh: "加油站的人们很愤怒。", en: "People are angry at pumps." },
        phase: "mid",
        choices: [
            { text: { zh: "释放战略储备", en: "Release Reserves" }, effect: { money: -2, approval: 5 } },
            { text: { zh: "入侵产油国", en: "Invade Oil Country" }, effect: { money: -10, approval: 5, war: 1 } },
            { text: { zh: "告诉大家走路更健康", en: "Tell people to walk" }, effect: { approval: -10 } }
        ]
    },
    {
        title: { zh: "名人批评你", en: "Celebrity Criticism" },
        desc: { zh: "好莱坞明星在颁奖典礼上骂你。", en: "Hollywood star blasts you." },
        phase: "mid",
        choices: [
            { text: { zh: "因为言论自由而尊重", en: "Respect Free Speech" }, effect: { approval: 2, ego: -5 } },
            { text: { zh: "推特反击", en: "Twitter Rant" }, effect: { approval: 1, distraction: 5 } },
            { text: { zh: "查他们的税", en: "Audit their Taxes" }, effect: { money: 1, approval: -5, fear: 5 } }
        ]
    },
    {
        title: { zh: "大规模枪击事件", en: "Mass Shooting" },
        desc: { zh: "又发生了一起。悲剧。", en: "Another tragedy." },
        phase: "mid",
        choices: [
            { text: { zh: "思想和祈祷", en: "Thoughts and Prayers" }, effect: { approval: -2, nothing_changes: 1 } },
            { text: { zh: "枪支管制", en: "Gun Control" }, effect: { approval: 0, base_loyalty: -20 } },
            { text: { zh: "更多的枪！", en: "MORE GUNS!" }, effect: { base_loyalty: 10, safety: -10 } }
        ]
    },
    {
        title: { zh: "太空竞赛重启", en: "New Space Race" },
        desc: { zh: "中国人要登月了。", en: "Others are going to the moon." },
        phase: "mid",
        choices: [
            { text: { zh: "增加NASA预算", en: "Increase NASA Budget" }, effect: { money: -5, science: 5 } },
            { text: { zh: "成立太空军", en: "Space Force" }, effect: { money: -10, awe: 5 } },
            { text: { zh: "声称月球是假的", en: "Moon is Fake" }, effect: { science: -10, conspiracy: 5 } }
        ]
    },
    {
        title: { zh: "基础设施崩溃", en: "Infrastructure Crumbling" },
        desc: { zh: "一座大桥塌了。", en: "A bridge collapsed." },
        phase: "mid",
        choices: [
            { text: { zh: "基建周！", en: "Infrastructure Week!" }, effect: { money: -10, approval: 5 } },
            { text: { zh: "责怪前任", en: "Blame Predecessor" }, effect: { approval: 0 } },
            { text: { zh: "私有化道路", en: "Privatize Roads" }, effect: { money: 5, approval: -5 } }
        ]
    },
    {
        title: { zh: "抗议者在白宫外", en: "Protesters Outside" },
        desc: { zh: "他们拿着标语，喊着口号。", en: "Chanting slogans." },
        phase: "mid",
        choices: [
            { text: { zh: "倾听他们的诉求", en: "Listen to them" }, effect: { approval: 5, weakness: 2 } },
            { text: { zh: "放狗", en: "Release the Hounds" }, effect: { approval: -10, strength: 5 } },
            { text: { zh: "关灯装作不在家", en: "Turn off lights" }, effect: { approval: -2, mockery: 10 } }
        ]
    },
    {
        title: { zh: "这真的是外星人吗？", en: "Is it Aliens?" },
        desc: { zh: "不明飞行物报告解密。", en: "UFO report declassified." },
        phase: "mid",
        choices: [
            { text: { zh: "告诉全世界", en: "Tell the World" }, effect: { chaos: 20 } },
            { text: { zh: "掩盖真相", en: "Cover it up" }, effect: { stability: 5, deep_state: 5 } },
            { text: { zh: "试图约会外星人", en: "Date the Alien" }, effect: { insanity: 10 } }
        ]
    },
    {
        title: { zh: "你的纳税申报单", en: "Your Tax Returns" },
        desc: { zh: "人们还在要求看它。", en: "People demand to see it." },
        phase: "mid",
        choices: [
            { text: { zh: "公布", en: "Release them" }, effect: { approval: 5, money: -5 } },
            { text: { zh: "正在审计中，无可奉告", en: "Under Audit" }, effect: { approval: -2 } },
            { text: { zh: "那是假的！", en: "Fake News!" }, effect: { approval: -5 } }
        ]
    },
    {
        title: { zh: "气候峰会", en: "Climate Summit" },
        desc: { zh: "世界领导人聚集在一起讨论地球。", en: "Leaders discuss the planet." },
        phase: "mid",
        choices: [
            { text: { zh: "承诺减排", en: "Commit" }, effect: { economy: -5, approval: 5, international: 5 } },
            { text: { zh: "退出协定", en: "Withdraw" }, effect: { economy: 5, international: -10 } },
            { text: { zh: "在会议上睡着", en: "Sleep" }, effect: { dignity: -5 } }
        ]
    },
    {
        title: { zh: "新的社交媒体应用爆火", en: "Viral Social App" },
        desc: { zh: "大家都用TikTok... 或者是它的山寨版。", en: "Everyone is on it." },
        phase: "mid",
        choices: [
            { text: { zh: "禁止它（间谍风险）", en: "Ban it (Spy Risk)" }, effect: { approval: -5, security: 5 } },
            { text: { zh: "加入并在上面跳舞", en: "Join and Dance" }, effect: { approval: 2, cringe: 100 } },
            { text: { zh: "收购它", en: "Buy it" }, effect: { money: -10, control: 10 } }
        ]
    },
    {
        title: { zh: "各种各样的泄密", en: "Leaks Leaks" },
        desc: { zh: "白宫像个筛子。", en: "White House leaks like a sieve." },
        phase: "mid",
        choices: [
            { text: { zh: "测谎仪测试所有人", en: "Polygraph Everyone" }, effect: { morale: -10, security: 5 } },
            { text: { zh: "没收手机", en: "Confiscate Phones" }, effect: { morale: -5 } },
            { text: { zh: "以此为诱饵抓内鬼", en: "Use as Bait" }, effect: { intelligence: 5 } }
        ]
    },
    {
        title: { zh: "感恩节", en: "Thanksgiving" },
        desc: { zh: "赦免火鸡的时刻。", en: "Time to pardon a turkey." },
        phase: "mid",
        choices: [
            { text: { zh: "赦免两只", en: "Pardon Two" }, effect: { approval: 1, kindness: 2 } },
            { text: { zh: "吃掉火鸡", en: "Eat it" }, effect: { approval: -5, horror: 5 } },
            { text: { zh: "赦免你的竞选经理", en: "Pardon Campaign Manager" }, effect: { approval: -10, corruption: 5 } }
        ]
    },
    {
        title: { zh: "超级碗", en: "Super Bowl" },
        desc: { zh: "每个人都在看。", en: "Everyone is watching." },
        phase: "mid",
        choices: [
            { text: { zh: "发推特支持一支队", en: "Tweet Support" }, effect: { approval: 0 } },
            { text: { zh: "不想看，因为球员跪下了", en: "Boycott (Kneeling)" }, effect: { base_loyalty: 5, division: 5 } },
            { text: { zh: "购买广告位宣传自己", en: "Buy Ad Space" }, effect: { money: -5, exposure: 10 } }
        ]
    },
    {
        title: { zh: "诺贝尔和平奖提名", en: "Nobel Nomination" },
        desc: { zh: "有人提名了你。真的很奇怪。", en: "You got nominated. Weird." },
        phase: "mid",
        choices: [
            { text: { zh: "谦虚接受", en: "Accept Humbly" }, effect: { approval: 5 } },
            { text: { zh: "吹嘘那是应得的", en: "Brag about it" }, effect: { ego: 5, mockery: 2 } },
            { text: { zh: "要求现金奖励", en: "Demand Cash" }, effect: { approval: -5, greed: 5 } }
        ]
    },
    // Adding more Mid phase events to reach count
    { title: {zh: "被困在电梯里", en: "Stuck in Elevator"}, desc: {zh: "和普京一起。尴尬。", en: "With Putin. Awkward."}, phase: "mid", choices: [{text: {zh: "谈判", en: "Negotiate"}, effect: {diplomacy: 5}}, {text: {zh: "打架", en: "Fight"}, effect: {strength: 5}}, {text: {zh: "哭泣", en: "Cry"}, effect: {weakness: 5}}] },
    { title: {zh: "发现石油", en: "Oil Discovery"}, desc: {zh: "在黄石公园。", en: "In Yellowstone Park."}, phase: "mid", choices: [{text: {zh: "钻探", en: "Drill Baby Drill"}, effect: {money: 10, environment: -10}}, {text: {zh: "保护", en: "Protect it"}, effect: {approval: 5, money: -5}}] },
    { title: {zh: "比特币暴跌", en: "Bitcoin Crash"}, desc: {zh: "这也影响了你的秘密账户。", en: "Your secret stash is hit."}, phase: "mid", choices: [{text: {zh: "禁止加密货币", en: "Ban Crypto"}, effect: {economy: -2}}, {text: {zh: "逢低买入", en: "Buy the Dip"}, effect: {money: -5, risk: 10}}] },
    { title: {zh: "僵尸鹿病", en: "Zombie Deer Disease"}, desc: {zh: "鹿变成了僵尸。", en: "Deer are turning into zombies."}, phase: "mid", choices: [{text: {zh: "猎杀所有鹿", en: "Kill all deer"}, effect: {nature: -5}}, {text: {zh: "不用担心", en: "Don't worry"}, effect: {pandemic_risk: 5}}] },
    { title: {zh: "互联网断网", en: "Internet Outage"}, desc: {zh: "全国断网一小时。", en: "Nationwide blackout for an hour."}, phase: "mid", choices: [{text: {zh: "这是攻击！", en: "It's an Attack!"}, effect: {panic: 10}}, {text: {zh: "每个人去读书", en: "Read a Book"}, effect: {culture: 1}}] },
    { title: {zh: "牛奶涨价", en: "Milk Price Hike"}, desc: {zh: "早餐危机。", en: "Breakfast Crisis."}, phase: "mid", choices: [{text: {zh: "补贴奶农", en: "Subsidize Farmers"}, effect: {money: -2}}, {text: {zh: "喝豆浆", en: "Drink Soy"}, effect: {approval: -2}}] },
    { title: {zh: "你的狗咬了记者", en: "Dog Bites Reporter"}, desc: {zh: "它是好孩子吗？", en: "Is he a good boy?"}, phase: "mid", choices: [{text: {zh: "道歉", en: "Apologize"}, effect: {approval: 2}}, {text: {zh: "那是记者咬了狗", en: "Reporter bit the dog"}, effect: {gaslighting: 10}}] },
    { title: {zh: "发现新的岛屿", en: "New Island Found"}, desc: {zh: "由于海平面上升...等等，那是新的吗？", en: "Wait, is that new?"}, phase: "mid", choices: [{text: {zh: "插旗", en: "Plant Flag"}, effect: {territory: 1}}, {text: {zh: "那是垃圾岛", en: "It's trash"}, effect: {sadness: 5}}] },
    { title: {zh: "奥运会", en: "The Olympics"}, desc: {zh: "如果你去，可能会被嘘。", en: "You might get booed."}, phase: "mid", choices: [{text: {zh: "出席", en: "Attend"}, effect: {prestige: 2}}, {text: {zh: "抵制", en: "Boycott"}, effect: {nationalism: 5}}] },
    { title: {zh: "复活节彩蛋", en: "Easter Egg Roll"}, desc: {zh: "孩子们在草坪上。", en: "Kids on the lawn."}, phase: "mid", choices: [{text: {zh: "和蔼可亲", en: "Be Nice"}, effect: {approval: 2}}, {text: {zh: "抢他们的蛋", en: "Steal their Eggs"}, effect: {approval: -10, funny: 5}}] },
    { title: {zh: "错误的警报", en: "False Missile Alert"}, desc: {zh: "导弹来袭警报响了。只有十分钟。", en: "Incoming missile? JK."}, phase: "mid", choices: [{text: {zh: "躲起来", en: "Hide"}, effect: {cowardice: 5}}, {text: {zh: "继续打高尔夫", en: "Keep Golfing"}, effect: {coolness: 10}}] },
    { title: {zh: "黑客泄露你的浏览记录", en: "Browser History Leaked"}, desc: {zh: "不是很光彩。", en: "Not flattering."}, phase: "mid", choices: [{text: {zh: "那是为了研究", en: "Research purposes"}, effect: {lie: 5}}, {text: {zh: "我被黑了", en: "I was hacked"}, effect: {denial: 5}}] },
    
    // --- ADDED BATCH 1 (Tech & Culture) ---
    { title: {zh: "5G基站阴谋", en: "5G Conspiracy"}, desc: {zh: "人们在烧毁信号塔。", en: "People are burning towers."}, phase: "mid", choices: [{text: {zh: "那是为了更快的色情片下载速度", en: "Faster Porn"}, effect: {approval: 5}}, {text: {zh: "那是精神控制", en: "Mind Control"}, effect: {conspiracy: 10}}] },
    { title: {zh: "流媒体服务大战", en: "Streaming Wars"}, desc: {zh: "这是新的世界大战。", en: "The new world war."}, phase: "mid", choices: [{text: {zh: "征收数字税", en: "Tax them"}, effect: {money: 5}}, {text: {zh: "免费给每个人订阅", en: "Free for all"}, effect: {happiness: 5, money: -5}}] },
    { title: {zh: "小学取消数学课", en: "Math Cancelled"}, desc: {zh: "因为太难了。", en: "Too hard."}, phase: "mid", choices: [{text: {zh: "同意，谁需要微积分", en: "Agreed"}, effect: {education: -5, approval: 5}}, {text: {zh: "强制每个人学", en: "Force Math"}, effect: {education: 5, approval: -5}}] },
    { title: {zh: "禁止吸管", en: "Straw Ban"}, desc: {zh: "为了海龟。", en: "For the turtles."}, phase: "mid", choices: [{text: {zh: "纸吸管", en: "Paper Straws"}, effect: {annoyance: 10}}, {text: {zh: "直接喝", en: "Sip it"}, effect: {pragmatism: 5}}] },
    { title: {zh: "电子竞技入奥", en: "Esports Olympics"}, desc: {zh: "打游戏是体育吗？", en: "Is gaming a sport?"}, phase: "mid", choices: [{text: {zh: "是的", en: "Yes"}, effect: {youth_vote: 10}}, {text: {zh: "不，去外面玩", en: "Go Outside"}, effect: {boomer_vote: 10}}] },
    { title: {zh: "发现古代遗迹", en: "Ancient Ruins"}, desc: {zh: "在你的高尔夫球场地下。", en: "Under your golf course."}, phase: "mid", choices: [{text: {zh: "埋回去", en: "Bury it"}, effect: {corruption: 5}}, {text: {zh: "变成博物馆", en: "Museum"}, effect: {culture: 5, money: -2}}] },
    { title: {zh: "国家动物园熊猫逃跑", en: "Panda Escape"}, desc: {zh: "它在市中心吃竹子。", en: "Eating bamboo downtown."}, phase: "mid", choices: [{text: {zh: "它很可爱", en: "It's cute"}, effect: {happiness: 5}}, {text: {zh: "那是中国的特工", en: "Chinese Spy"}, effect: {tension: 5}}] },
    { title: {zh: "新的饮食金字塔", en: "New Food Pyramid"}, desc: {zh: "大糖果公司的游说。", en: "Big Candy lobby."}, phase: "mid", choices: [{text: {zh: "披萨是蔬菜", en: "Pizza is Veg"}, effect: {health: -5, approval: 5}}, {text: {zh: "只吃羽衣甘蓝", en: "Kale Only"}, effect: {health: 5, approval: -10}}] },
    { title: {zh: "强制接种疫苗...", en: "Mandatory Vaccines"}, desc: {zh: "对抗... 愚蠢？", en: "Fighting... stupidity?"}, phase: "mid", choices: [{text: {zh: "强制执行", en: "Enforce"}, effect: {science: 5, unrest: 10}}, {text: {zh: "自由选择", en: "Free Choice"}, effect: {popularity: 5, pandemic_risk: 5}}] },
    { title: {zh: "油轮泄漏", en: "Oil Tanker Spill"}, desc: {zh: "企鹅被油覆盖了。", en: "Oily penguins."}, phase: "mid", choices: [{text: {zh: "用洗洁精洗", en: "Dish Soap"}, effect: {environment: 2}}, {text: {zh: "那不是油，那是... 巧克力", en: "It's Chocolate"}, effect: {lie: 10}}] },
    { title: {zh: "废除便士", en: "Abolish the Penny"}, desc: {zh: "造价甚至超过面值。", en: "Costs more to make."}, phase: "mid", choices: [{text: {zh: "废除", en: "Abolish"}, effect: {efficiency: 2}}, {text: {zh: "林肯在上面！保留！", en: "Keep Lincoln"}, effect: {tradition: 5}}] },
    { title: {zh: "火星发现水", en: "Water on Mars"}, desc: {zh: "真的水。", en: "Actual water."}, phase: "mid", choices: [{text: {zh: "那是我们的水", en: "That's OUR water"}, effect: {imperialism: 5}}, {text: {zh: "不要喝", en: "Don't drink it"}, effect: {caution: 2}}] },
    { title: {zh: "禁止在披萨上放菠萝", en: "Ban Pineapple Pizza"}, desc: {zh: "这关乎国家尊严。", en: "It's about national dignity."}, phase: "mid", choices: [{text: {zh: "禁止它", en: "Ban it"}, effect: {unity: 5}}, {text: {zh: "这是自由", en: "It's freedom"}, effect: {liberty: 5}}] },
    { title: {zh: "国会休会去度假", en: "Congress Recess"}, desc: {zh: "当国家燃烧的时候。", en: "While the country burns."}, phase: "mid", choices: [{text: {zh: "加入他们", en: "Join them"}, effect: {approval: -5}}, {text: {zh: "召回他们", en: "Recall them"}, effect: {efficiency: 5, relations: -5}}] },
    { title: {zh: "彩票头奖达到100亿", en: "Lottery hits $10B"}, desc: {zh: "每个人都疯了。", en: "Everyone is going crazy."}, phase: "mid", choices: [{text: {zh: "我也买一张", en: "Buy a ticket"}, effect: {humor: 5}}, {text: {zh: "征税90%", en: "Tax it 90%"}, effect: {money: 50, anger: 20}}] },
    { title: {zh: "最大的货轮堵住了运河", en: "Canal Blocked"}, desc: {zh: "全球贸易停滞。", en: "Global trade halted."}, phase: "mid", choices: [{text: {zh: "推它一下", en: "Push it"}, effect: {simplicity: 5}}, {text: {zh: "炸掉它", en: "Blow it up"}, effect: {chaos: 10}}] },
    { title: {zh: "网络迷因变成了货币", en: "Meme becomes Currency"}, desc: {zh: "DogeCoin?", en: "DogeCoin?"}, phase: "mid", choices: [{text: {zh: "承认它", en: "Legitimize it"}, effect: {economy: -10, youth: 10}}, {text: {zh: "这是非法的", en: "It's illegal"}, effect: {stability: 5}}] },
    { title: {zh: "禁止汽车喇叭", en: "Ban Car Horns"}, desc: {zh: "为了噪音污染。", en: "For noise pollution."}, phase: "mid", choices: [{text: {zh: "安静", en: "Silence"}, effect: {peace: 5}}, {text: {zh: "路怒症增加", en: "Road rage rises"}, effect: {violence: 5}}] },
    { title: {zh: "将冥王星恢复为行星", en: "Restore Pluto"}, desc: {zh: "重要的科学议题。", en: "Crucial scientific issue."}, phase: "mid", choices: [{text: {zh: "它是行星！", en: "It IS a planet!"}, effect: {science_approval: -5}}, {text: {zh: "它是矮行星", en: "It's a dwarf"}, effect: {science_approval: 5}}] },
    { title: {zh: "国家宽带计划", en: "National Broadband"}, desc: {zh: "农村没有网。", en: "No internet in rural areas."}, phase: "mid", choices: [{text: {zh: "铺设光纤", en: "Lay fiber"}, effect: {money: -5, development: 5}}, {text: {zh: "发DVD", en: "Send DVDs"}, effect: {mockery: 5}}] },
    { title: {zh: "禁止某种书籍", en: "Ban Books"}, desc: {zh: "家长们很生气。", en: "Parents are angry."}, phase: "mid", choices: [{text: {zh: "禁止", en: "Ban it"}, effect: {censorship: 5}}, {text: {zh: "阅读自由", en: "Free to read"}, effect: {liberal: 5}}] },
    { title: {zh: "更改国歌", en: "Change Anthem"}, desc: {zh: "现在的太难唱了。", en: "Current one is too hard."}, phase: "mid", choices: [{text: {zh: "改成饶舌歌曲", en: "Make it Rap"}, effect: {culture: -10, cool: 10}}, {text: {zh: "保持原样", en: "Keep it"}, effect: {tradition: 5}}] },
    { title: {zh: "将首都迁往中部", en: "Move Capital"}, desc: {zh: "华盛顿太潮湿了。", en: "DC is too humid."}, phase: "mid", choices: [{text: {zh: "搬迁", en: "Move it"}, effect: {money: -50, chaos: 20}}, {text: {zh: "留下", en: "Stay"}, effect: {stability: 5}}] },
    { title: {zh: "全民免费冰淇淋日", en: "Free Ice Cream Day"}, desc: {zh: "为了支持乳制品业。", en: "Support dairy industry."}, phase: "mid", choices: [{text: {zh: "耶！", en: "Yay!"}, effect: {happiness: 10, health: -2}}, {text: {zh: "乳糖不耐受怎么办？", en: "What about lactose?"}, effect: {complaints: 5}}] },
    { title: {zh: "AI写了这行代码", en: "AI wrote this code"}, desc: {zh: "这是个元事件。", en: "It's a meta event."}, phase: "mid", choices: [{text: {zh: "酷", en: "Cool"}, effect: {meta: 1}}, {text: {zh: "可怕", en: "Scary"}, effect: {fear: 1}}] },
    { title: {zh: "新的税法", en: "New Tax Code"}, phase: "mid", choices: [{text: {zh: "富人减税", en: "Tax cuts for rich"}, effect: {donors: 5, approval: -5}}, {text: {zh: "穷人减税", en: "Tax cuts for poor"}, effect: {approval: 5, money: -5}}] },
    { title: {zh: "最高法院裁决", en: "Supreme Court Ruling"}, phase: "mid", choices: [{text: {zh: "执行", en: "Enforce it"}, effect: {rule_of_law: 5}}, {text: {zh: "无视", en: "Ignore it"}, effect: {dictator: 5}}] },
    { title: {zh: "国家公园大火", en: "National Park Fire"}, desc: {zh: "", en: ""}, phase: "mid", choices: [{text: {zh: "扫落叶", en: "Rake Leaves"}, effect: {mockery: 5}}, {text: {zh: "救火", en: "Put it out"}, effect: {money: -2}}] },
    { title: {zh: "说唱歌手竞选总统", en: "Rapper President Run"}, desc: {zh: "", en: ""}, phase: "mid", choices: [{text: {zh: "嘲笑他", en: "Mock him"}, effect: {youth: -5}}, {text: {zh: "邀请合作", en: "Collab"}, effect: {cool: 5}}] },
    { title: {zh: "月球背面基地", en: "Moon Base"}, desc: {zh: "", en: ""}, phase: "mid", choices: [{text: {zh: "纳粹？", en: "Nazis?"}, effect: {conspiracy: 5}}, {text: {zh: "外星人？", en: "Aliens?"}, effect: {conspiracy: 5}}] },
    { title: {zh: "流浪气球", en: "Stray Balloon"}, desc: {zh: "", en: ""}, phase: "mid", choices: [{text: {zh: "射击", en: "Shoot it"}, effect: {strength: 2}}, {text: {zh: "抓捕", en: "Capture it"}, effect: {intel: 5}}] },
    { title: {zh: "AI获得意识", en: "AI Sentience"}, desc: {zh: "", en: ""}, phase: "mid", choices: [{text: {zh: "拔插头", en: "Pull Plug"}, effect: {tech: -5}}, {text: {zh: "任命为顾问", en: "Hire as Advisor"}, effect: {efficiency: 10, humanity: -10}}] },
    { title: {zh: "前任出书", en: "Predecessor's Book"}, desc: {zh: "", en: ""}, phase: "mid", choices: [{text: {zh: "起诉", en: "Sue"}, effect: {streisand_effect: 10}}, {text: {zh: "因为不识字而不读", en: "Can't Read"}, effect: {approval: 0}}] },
    { title: {zh: "国债上限", en: "Debt Ceiling"}, desc: {zh: "", en: ""}, phase: "mid", choices: [{text: {zh: "提高", en: "Raise it"}, effect: {stability: 5}}, {text: {zh: "违约", en: "Default"}, effect: {chaos: 50}}] },

    // ================= LATE PHASE (20+) =================
    {
        title: {zh: "选举年经济衰退", en: "Election Year Recession"},
        desc: {zh: "时机糟透了。", en: "Terrible timing."},
        phase: "late",
        choices: [
            { text: {zh: "发钱买选票", en: "Stimulus Checks"}, effect: { money: -20, approval: 10 } },
            { text: {zh: "暂停选举", en: "Suspend Election"}, effect: { dictatorship: 20, unrest: 50 } },
            { text: {zh: "责怪在野党", en: "Blame Opposition"}, effect: { polarization: 10 } }
        ]
    },
    {
        title: {zh: "大辩论", en: "The Great Debate"},
        desc: {zh: "你要上电视了。", en: "You're on TV."},
        phase: "late",
        choices: [
            { text: {zh: "像个疯子一样大喊", en: "Yell like crazy"}, effect: { base_approval: 5, moderate_approval: -10 } },
            { text: {zh: "保持冷静", en: "Stay Calm"}, effect: { boredom: 5 } },
            { text: {zh: "拒绝参加", en: "Refuse"}, effect: { cowardice: 5 } }
        ]
    },
    {
        title: {zh: "十月惊奇", en: "October Surprise"},
        desc: {zh: "关于你的录像带出来了。", en: "A tape of you leaked."},
        phase: "late",
        choices: [
            { text: {zh: "这是AI生成的", en: "It's AI Generated"}, effect: { deception: 5 } },
            { text: {zh: "那是我的替身", en: "My Body Double"}, effect: { absurdity: 5 } },
            { text: {zh: "道歉（也许？）", en: "Apologize?"}, effect: { weakness: 10 } }
        ]
    },
    {
        title: {zh: "败选的可能性", en: "Losing the Election"},
        desc: {zh: "民调看起来不妙。", en: "Polls look bad."},
        phase: "late",
        choices: [
            { text: {zh: "准备政变", en: "Plan Coup"}, effect: { democracy: -50, survival: 20 } },
            { text: {zh: "准备回忆录", en: "Write Memoir"}, effect: { money: 10 } },
            { text: {zh: "开始粉碎文件", en: "Shred Documents"}, effect: { evidence_destruction: 10 } }
        ]
    },
    {
        title: {zh: "各种各样的暴乱", en: "Riots Everywhere"},
        desc: {zh: "城市在燃烧。", en: "Cities are burning."},
        phase: "late",
        choices: [
            { text: {zh: "法律与秩序", en: "Law & Order"}, effect: { strength: 10, division: 20 } },
            { text: {zh: "呼吁和平", en: "Call for Peace"}, effect: { weakness: 5, peace: 5 } },
            { text: {zh: "躲在地堡", en: "Hide in Bunker"}, effect: { safety: 10, mockery: 20 } }
        ]
    },
    {
        title: {zh: "最高法院判决选举结果", en: "SCOTUS Decides"},
        desc: {zh: "这取决于他们。", en: "It's up to them."},
        phase: "late",
        choices: [
            { text: {zh: "贿赂他们", en: "Bribe Them"}, effect: { money: -50, corruption: 50 } },
            { text: {zh: "威胁他们", en: "Threaten Them"}, effect: { tyranny: 20 } },
            { text: {zh: "相信体制", en: "Trust System"}, effect: { failure_risk: 50 } }
        ]
    },
    {
        title: {zh: "流亡海外？", en: "Exile?"},
        desc: {zh: "如果输了，你要去哪里？", en: "Where to go if you lose?"},
        phase: "late",
        choices: [
            { text: {zh: "俄罗斯", en: "Russia"}, effect: { treason: 10 } },
            { text: {zh: "沙特阿拉伯", en: "Saudi Arabia"}, effect: { greed: 10 } },
            { text: {zh: "佛罗里达", en: "Florida"}, effect: { humidity: 100 } }
        ]
    },
    {
        title: {zh: "最后的演说", en: "Final Speech"},
        desc: {zh: "告别演说，或者... 宣战演说？", en: "Farewell or War?"},
        phase: "late",
        choices: [
            { text: {zh: "优雅离场", en: "Graceful Exit"}, effect: { legacy: 10 } },
            { text: {zh: "我们决不投降！", en: "Never Surrender!"}, effect: { civil_war_risk: 50 } },
            { text: {zh: "我不干了，你们都不配", en: "I Quit, You Suck"}, effect: { pettiness: 10 } }
        ]
    },
    {
        title: {zh: "历史的评价", en: "History's Verdict"},
        desc: {zh: "历史书会怎么写你？", en: "How will history judge you?"},
        phase: "late",
        choices: [
            { text: {zh: "伟大的改革者", en: "Reformer"}, effect: { legacy: 5 } },
            { text: {zh: "完全的灾难", en: "Disaster"}, effect: { fame: 10 } },
            { text: {zh: "被遗忘的人", en: "Forgotten"}, effect: { peace: 10 } }
        ]
    },
    {
        title: {zh: "核按钮落灰了", en: "Nuclear Button Dusty"},
        desc: {zh: "任期的最后一天。要是按一下会怎样？", en: "Last day. What happens if I press it?"},
        phase: "late",
        choices: [
            { text: {zh: "别碰它", en: "Don't Touch"}, effect: { world_survives: 1 } },
            { text: {zh: "只是擦擦灰", en: "Just Dusting"}, effect: { accidental_launch_risk: 1 } },
            { text: {zh: "按！", en: "PRESS IT"}, effect: { game_over: true } }
        ]
    },
    {
        title: {zh: "特赦自己", en: "Self Pardon"},
        desc: {zh: "这合法吗？谁在乎呢。", en: "Is it legal? Who cares."},
        phase: "late",
        choices: [
            { text: {zh: "特赦", en: "Pardon"}, effect: { corruption: 10, safety: 10 } },
            { text: {zh: "不特赦，我相信陪审团", en: "Trust Jury"}, effect: { jail_risk: 80 } }
        ]
    },
    {
        title: {zh: "带走白宫家具", en: "Steal Furniture"},
        desc: {zh: "那幅画很配你的浴室。", en: "That painting matches your bathroom."},
        phase: "late",
        choices: [
            { text: {zh: "拿走", en: "Take it"}, effect: { theft: 10, money: 2 } },
            { text: {zh: "留下", en: "Leave it"}, effect: { norms: 5 } }
        ]
    },
    {
        title: {zh: "最后的推特", en: "Final Tweet"},
        desc: {zh: "账户即将被封禁。", en: "Account about to be banned."},
        phase: "late",
        choices: [
            { text: {zh: "谢谢大家", en: "Thank You"}, effect: { polite: 1 } },
            { text: {zh: "我想念你们", en: "Miss You"}, effect: { sad: 1 } },
            { text: {zh: "我会回来的！", en: "I'll Be Back!"}, effect: { threat: 10 } }
        ]
    },
    {
        title: {zh: "雕像问题", en: "Statue Issue"},
        desc: {zh: "他们想推倒你的雕像，尽管它还没建好。", en: "They want to tear down your statue."},
        phase: "late",
        choices: [
            { text: {zh: "保护雕像", en: "Protect It"}, effect: { culture_war: 10 } },
            { text: {zh: "建得更高", en: "Build Higher"}, effect: { ego: 20 } }
        ]
    },
    {
        title: {zh: "家庭分裂", en: "Family Divided"},
        desc: {zh: "甚至你的孩子都不给你投票。", en: "Even your kids won't vote for you."},
        phase: "late",
        choices: [
            { text: {zh: "剥夺继承权", en: "Disinherit"}, effect: { money: 10 } },
            { text: {zh: "哭泣", en: "Cry"}, effect: { humanity: 5 } }
        ]
    },
    {
        title: {zh: "健康的恐慌", en: "Health Scare"},
        desc: {zh: "那次中风只是‘轻微的头晕’。", en: "Just a 'dizzy spell'."},
        phase: "late",
        choices: [
            { text: {zh: "展示你的医疗记录（假的）", en: "Show Fake Records"}, effect: { deception: 5 } },
            { text: {zh: "挑战拜登做俯卧撑", en: "Push-up Contest"}, effect: { strength: 5 } }
        ]
    },
    {
        title: {zh: "外星人入侵", en: "Alien Invasion"},
        desc: {zh: "就在选举前一天。", en: "Day before election."},
        phase: "late",
        choices: [
            { text: {zh: "战斗", en: "Fight"}, effect: { approval: 100 } },
            { text: {zh: "投降", en: "Surrender"}, effect: { slavery: 100 } }
        ]
    },
    {
        title: {zh: "时间旅行者", en: "Time Traveler"},
        desc: {zh: "他说你毁了未来。", en: "He says you ruined the future."},
        phase: "late",
        choices: [
            { text: {zh: "逮捕他", en: "Arrest Him"}, effect: { tyranny: 5 } },
            { text: {zh: "问彩票号码", en: "Ask Lotto Numbers"}, effect: { money: 100 } }
        ]
    },
    {
        title: {zh: "最后的晚餐", en: "Last Supper"},
        desc: {zh: "在白宫的最后​​一顿饭。", en: "Last meal in WH."},
        phase: "late",
        choices: [
            { text: {zh: "麦当劳", en: "McDonalds"}, effect: { health: -5 } },
            { text: {zh: "牛排配番茄酱", en: "Steak & Ketchup"}, effect: { class: -10 } }
        ]
    },
    {
        title: {zh: "交接钥匙", en: "Hand Over Keys"},
        desc: {zh: "给下一任总统。", en: "To the next guy."},
        phase: "late",
        choices: [
            { text: {zh: "藏起钥匙", en: "Hide them"}, effect: { pettiness: 5 } },
            { text: {zh: "把厕所堵上", en: "Clog Toilet"}, effect: { petty: 10 } },
            { text: {zh: "留下一封鼓励的信", en: "Nice Letter"}, effect: { maturity: 100 } } // Rare
        ]
    }
);

window.GAME_DATA = window.GAME_DATA || {};
window.GAME_DATA.CARD_DB = window.GAME_DATA.CARD_DB || [];

window.GAME_DATA.CARD_DB.push(
    // ---------------- EARLY PHASE (Consolidating Power) ----------------
    {
        type: "政治",
        title: "任命亲戚为顾问",
        desc: "当你女儿的丈夫负责中东和平时，一切都会好起来的。",
        cost: 2,
        phase: "early",
        effect: { approval: -5, loyalty: 10, nepotism: 5 }
    },
    {
        type: "政治",
        title: "向反对派示好",
        desc: "邀请他们共进晚餐，然后在沙拉里放点泻药。只是个玩笑...除非？",
        cost: 2,
        phase: "early",
        effect: { approval: 5, opposition: -5 }
    },
    {
        type: "政治",
        title: "因为‘下雨’取消演讲",
        desc: "头发湿了不好看。而且演讲稿也没写完。",
        cost: 0,
        phase: "early",
        effect: { approval: -2, energy: 5 }
    },
    {
        type: "政治",
        title: "重新划分选区",
        desc: "如果你不能赢得选民的支持，就换一批选民。",
        cost: 5,
        phase: "early",
        effect: { approval: -10, election_chance: 15 }
    },

    // ---------------- MID PHASE (Control & Manipulation) ----------------
    {
        type: "政治",
        title: "Twitter治国",
        desc: "如果不全大写发推特，人们怎么知道你是认真的？",
        cost: 1,
        phase: "mid",
        effect: { approval: 2, media_chaos: 10 }
    },
    {
        type: "政治",
        title: "指责媒体是假新闻",
        desc: "那是真的新闻，但如果你喊得够大声，它可能就不是了。",
        cost: 2,
        phase: "mid",
        effect: { approval: 5, press_freedom: -10 }
    },
    {
        type: "政治",
        title: "举行毫无意义的集会",
        desc: "即使不是选举年，我们也需要掌声来滋养自尊心。",
        cost: 3,
        phase: "mid",
        effect: { approval: 8, money: -2 }
    },
    {
        type: "政治",
        title: "赦免感恩节火鸡",
        desc: "这也是你今年唯一赦免的无辜生物。",
        cost: 1,
        phase: "mid",
        effect: { approval: 2, poultry_relations: 5 }
    },
    {
        type: "政治",
        title: "调查政敌的电子邮件",
        desc: "肯定有什么东西在里面。意大利面食谱？撒旦崇拜？谁知道呢。",
        cost: 4,
        phase: "mid",
        effect: { approval: 4, scandal_risk: 5 }
    },
    {
        type: "政治",
        title: "在白宫开快餐派对",
        desc: "汉堡堆成山。这是高雅文化的顶峰。",
        cost: 1,
        phase: "mid",
        effect: { approval: 5, money: -1, health: -1 }
    },
    {
        type: "政治",
        title: "指控选举舞弊（预先）",
        desc: "如果我输了，那就是作弊。如果我赢了，那是正义的胜利。",
        cost: 0,
        phase: "mid",
        effect: { approval: 3, stability: -5 }
    },
    {
        type: "政治",
        title: "成立太空军",
        desc: "因为星球大战真的很酷。 pew pew!",
        cost: 8,
        phase: "mid",
        effect: { approval: 10, money: -15 }
    },
    {
        type: "政治",
        title: "更改飓风路径图",
        desc: "用记号笔画一下。我是总统，我说它往哪吹就往哪吹。",
        cost: 0,
        phase: "mid",
        effect: { approval: -5, stupid: 10 }
    },
    {
        type: "政治",
        title: "所有建筑贴上你的名字",
        desc: "邮局？贴上。厕所？贴上。核弹发射井？大金字贴上。",
        cost: 5,
        phase: "mid",
        effect: { approval: -2, ego: 20 }
    },
    {
        type: "政治",
        title: "禁止某种社交媒体",
        desc: "既然年轻人不在上面跳舞，他们也许会去投票...给你投反对票。",
        cost: 3,
        phase: "mid",
        effect: { approval: -10, security: 5 }
    },
    {
        type: "政治",
        title: "泄露机密照片",
        desc: "‘意外’泄露。其实是为了转移对你假发脱落的关注。",
        cost: 2,
        phase: "mid",
        effect: { approval: -5, distraction: 10 }
    },
    {
        type: "政治",
        title: "发明新词",
        desc: "‘Covfefe’。没人知道是什么意思，但这很有挑衅性。",
        cost: 0,
        phase: "mid",
        effect: { approval: 1, confusion: 10 }
    },
    {
        type: "政治",
        title: "更换副总统",
        desc: "现在的这个太无聊了，也不会拍马屁。换个电视明星。",
        cost: 5,
        phase: "mid",
        effect: { approval: -5, excitement: 5 }
    },
    {
        type: "政治",
        title: "国情咨文真人秀",
        desc: "包含现场投票淘汰最高法院法官环节。",
        cost: 4,
        phase: "mid",
        effect: { approval: 8, dignity: -10 }
    },
    {
        type: "政治",
        title: "否认气候变化",
        desc: "外面很冷！全球变暖在哪里？",
        cost: 0,
        phase: "mid",
        effect: { approval: 5, science: -10 }
    },
    {
        type: "政治",
        title: "支持极端阴谋论",
        desc: "也许地球是平的？也许鸟是间谍无人机？只要他们投票给我。",
        cost: 2,
        phase: "mid",
        effect: { approval: 4, sanity: -10 }
    },
    {
        type: "政治",
        title: "把脸刻在拉什莫尔山",
        desc: "就在林肯旁边。但是要大一点。",
        cost: 10,
        phase: "mid",
        effect: { approval: -15, ego: 50, money: -20 }
    },

    // ---------------- LATE PHASE (Desperation & Chaos) ----------------
    {
        type: "政治",
        title: "宣布自己为终身总统",
        desc: "选举太贵了，真的很浪费。只要我不死，我就当总统。",
        cost: 15,
        phase: "late",
        effect: { approval: -30, dictatorship: 20, coup_risk: 15 }
    },
    {
        type: "政治",
        title: "禁止反对党",
        desc: "为了‘国家团结’。现在只有一个党了，就是我的生日派对。",
        cost: 10,
        phase: "late",
        effect: { approval: -20, control: 20, unrest: 15 }
    },
    {
        type: "政治",
        title: "煽动暴徒冲击国会",
        desc: "如果他们不认证结果，那就稍微‘鼓励’一下游客去参观。",
        cost: 5,
        phase: "late",
        effect: { approval: -25, chaos: 30, loyalty: 5 }
    },
    {
        type: "政治",
        title: "特赦所有亲信",
        desc: "犯罪？不，那是‘创造性的法律解读’。你们都自由了！",
        cost: 5,
        phase: "late",
        effect: { approval: -10, loyalty: 20 }
    },
    {
        type: "政治",
        title: "躲在地堡里",
        desc: "检查一下地堡是否还好用。并不是因为外面有抗议者。",
        cost: 0,
        phase: "late",
        effect: { approval: -5, safety: 10 }
    },
    {
        type: "政治",
        title: "解雇联邦调查局局长",
        desc: "实际上，解雇所有人。我自己来调查。",
        cost: 8,
        phase: "late",
        effect: { approval: -15, obstruction: 20 }
    },
    {
        type: "政治",
        title: "试图购买格陵兰岛",
        desc: "哪怕是现在，我们也应该想想房地产。",
        cost: 5,
        phase: "late",
        effect: { approval: -5, international_mockery: 10 }
    },
    {
        type: "政治",
        title: "宣布戒严",
        desc: "除非每个人都待在家里看我的直播，否则不许出门。",
        cost: 12,
        phase: "late",
        effect: { approval: -40, control: 40, economy: -20 }
    }
);

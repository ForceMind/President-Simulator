window.GAME_DATA = window.GAME_DATA || {};
window.GAME_DATA.CARD_DB = window.GAME_DATA.CARD_DB || [];

window.GAME_DATA.CARD_DB.push(
    // ---------------- EARLY PHASE (Posturing) ----------------
    {
        type: "军事",
        title: "向盟友索要保护费",
        desc: "那是很棒的军事基地，如果不付钱，我们就把它变成赌场。",
        cost: 2,
        phase: "early",
        effect: { money: 10, approval: 5, alliances: -10 }
    },
    {
        type: "军事",
        title: "阅兵式",
        desc: "我们要很多坦克。由于道路承重不够，这可能会毁坏街道，但看起来很威风。",
        cost: 5,
        phase: "early",
        effect: { approval: 5, money: -5, ego: 10 }
    },
    {
        type: "军事",
        title: "退出核协议",
        desc: "那个协议是以前的人签的，所以肯定很糟糕。现在我们可以造更大的烟花。",
        cost: 0,
        phase: "early",
        effect: { approval: 5, tension: 15, stability: -5 }
    },
    {
        type: "军事",
        title: "任命疯狗将军为国防部长",
        desc: "他的绰号是‘疯狗’。这听起来很稳定，很理智。",
        cost: 2,
        phase: "early",
        effect: { approval: 5, military_competence: 5 }
    },

    // ---------------- MID PHASE (Conflict & Crisis) ----------------
    {
        type: "军事",
        title: "无人机暗杀",
        desc: "这就好像电子游戏，只不过得分是根据目标的重要性来算的。",
        cost: 3,
        phase: "mid",
        effect: { approval: 5, tension: 10, money: -2 }
    },
    {
        type: "军事",
        title: "突然撤军",
        desc: "不管他们在那里干什么，我们都不干了。甚至不告诉盟友我们走了。",
        cost: 1,
        phase: "mid",
        effect: { approval: 2, chaos: 15, alliances: -20 }
    },
    {
        type: "军事",
        title: "称赞独裁者",
        desc: "他说我写的情书很美。我们相爱了。",
        cost: 0,
        phase: "mid",
        effect: { approval: -5, diplomacy: -10, personal_friendship: 10 }
    },
    {
        type: "军事",
        title: "贸易禁运",
        desc: "不准买他们的香蕉！也不准卖给他们我们的... 自由。",
        cost: 2,
        phase: "mid",
        effect: { money: -5, approval: 2, suffering: 5 }
    },
    {
        type: "军事",
        title: "建造边境墙",
        desc: "又大又美。或许用太阳能板？不，还是用尖刺吧。",
        cost: 10,
        phase: "mid",
        effect: { money: -15, approval: 10, division: 10 }
    },
    {
        type: "军事",
        title: "对随机国家发动空袭",
        desc: "为了转移国内丑闻的注意力。没什么能比战斧导弹更能说‘看那边！’了。",
        cost: 8,
        phase: "mid",
        effect: { approval: 10, tension: 20, scandal_reduction: 15 }
    },
    {
        type: "军事",
        title: "向争议地区出售武器",
        desc: "如果他们互相射击，他们就需要买更多的子弹。这是简单的经济学。",
        cost: 0,
        phase: "mid",
        effect: { money: 15, approval: -5, peace: -20 }
    },
    {
        type: "军事",
        title: "侮辱北约",
        desc: "为什么我们要保护黑山？他们在那儿很具侵略性。",
        cost: 1,
        phase: "mid",
        effect: { money: 0, approval: 5, security: -15 }
    },
    {
        type: "军事",
        title: "雇佣私人雇佣兵",
        desc: "战争罪行？如果是承包商干的，那就只是‘合同纠纷’。",
        cost: 6,
        phase: "mid",
        effect: { money: -5, approval: -5, plausible_deniability: 10 }
    },
    {
        type: "军事",
        title: "网络攻击盟友",
        desc: "只是检查一下他们的防火墙。哎呀，删除了他们的税收记录。",
        cost: 3,
        phase: "mid",
        effect: { money: 5, relations: -10 }
    },
    {
        type: "军事",
        title: "在推特上宣战",
        desc: "正式的文件太慢了。@EnemyNation 准备好被核平了吗？#MAGA",
        cost: 0,
        phase: "mid",
        effect: { approval: 5, panic: 20 }
    },
    {
        type: "军事",
        title: "没收石油",
        desc: "我们帮了他们，所以我们应该保留石油。这很公平。",
        cost: 5,
        phase: "mid",
        effect: { money: 20, approval: 5, terrorism: 10 }
    },
    {
        type: "军事",
        title: "建立太空殖民地...的宣传片",
        desc: "实际上没有火箭。但是CGI看起来很棒。",
        cost: 2,
        phase: "mid",
        effect: { approval: 5, money: -2 }
    },
    {
        type: "军事",
        title: "驱逐外交官",
        desc: "他们甚至不付停车罚单。滚。",
        cost: 1,
        phase: "mid",
        effect: { approval: 5, diplomacy: -5 }
    },
    {
        type: "军事",
        title: "重启核试验",
        desc: "我们需要确保它们还能响。在内华达州震一下没什么大不了的。",
        cost: 5,
        phase: "mid",
        effect: { approval: 5, environment: -10, tension: 15 }
    },
    {
        type: "军事",
        title: "间谍气球",
        desc: "是气象气球！绝对不是在偷听他们的电话。",
        cost: 2,
        phase: "mid",
        effect: { intelligence: 5, embarrassment: 5 }
    },

    // ---------------- LATE PHASE (Global Conflict) ----------------
    {
        type: "军事",
        title: "按下那个大按钮",
        desc: "我的按钮比他的大，而且真的管用。",
        cost: 0,
        phase: "late",
        effect: { approval: -50, devastation: 100, game_over_risk: 50 }
    },
    {
        type: "军事",
        title: "入侵邻国",
        desc: "他们既然说着我们的语言，那地就是我们的。",
        cost: 15,
        phase: "late",
        effect: { approval: 10, economy: -30, sanctions: 20 }
    },
    {
        type: "军事",
        title: "退出联合国",
        desc: "反正他们只是在那里聊天喝茶。我们要在自己的后院建这玩意。",
        cost: 0,
        phase: "late",
        effect: { approval: 5, isolation: 30 }
    },
    {
        type: "军事",
        title: "全面征兵",
        desc: "不管是跛子还是瞎子，只要能拿枪，就是好士兵。",
        cost: 10,
        phase: "late",
        effect: { approval: -40, manpower: 50 }
    },
    {
        type: "军事",
        title: "轰炸自己的各种设施",
        desc: "焦土政策。如果我不能拥有它，没人能。",
        cost: 5,
        phase: "late",
        effect: { approval: -30, chaos: 40 }
    },
    {
        type: "军事",
        title: "煽动外国政变",
        desc: "那个看起来很友好的将军说他喜欢我很酷。",
        cost: 8,
        phase: "late",
        effect: { money: -10, influence: 20 }
    },
    {
        type: "军事",
        title: "世界末日地堡票",
        desc: "向富人出售座位。穷人？祝好运。",
        cost: 0,
        phase: "late",
        effect: { money: 100, approval: -80 }
    },
    {
        type: "军事",
        title: "释放生化武器...意外地",
        desc: "实验室的实习生把瓶子摔了。",
        cost: 0,
        phase: "late",
        effect: { approval: -60, population: -20 }
    },
    {
        type: "军事",
        title: "宣布外星人存在",
        desc: "最后的手段。团结全人类...对抗不存在的敌人。",
        cost: 2,
        phase: "late",
        effect: { approval: 20, hysteria: 40 }
    },
    {
        type: "军事",
        title: "建立机器人军队",
        desc: "终结者并不是科幻片，它是纪录片。",
        cost: 20,
        phase: "late",
        effect: { money: -50, power: 50, skynet_risk: 80 }
    }
);

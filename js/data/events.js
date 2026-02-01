window.GAME_DATA = window.GAME_DATA || {};
window.GAME_DATA.EVENTS_DB = window.GAME_DATA.EVENTS_DB || [];

// 基础事件库
window.GAME_DATA.EVENTS_DB.push(
    // --- Early Phase ---
    {
        title: "就职典礼意外",
        desc: "在就职典礼上，你的演讲稿被风吹跑了。",
        phase: "early",
        choices: [
            { text: "即兴发挥 (赌一把)", effect: { approval_chance: 0.5, success: { approval: 10 }, fail: { approval: -10 } } },
            { text: "讲个笑话 (稳妥)", effect: { approval: 2 } }
        ]
    },
    {
        title: "白宫闹鬼",
        desc: "特勤局报告说林肯的卧室有奇怪的声音。",
        phase: "early",
        choices: [
            { text: "请驱魔师", effect: { approval: -5, money: -0.1 } }, // 迷信
            { text: "是老鼠", effect: { approval: 0, money: -0.01 } }
        ]
    },
    // --- Mid Phase ---
    {
        title: "流行病爆发",
        desc: "一种新型流感正在传播。",
        phase: "mid",
        choices: [
            { text: "封锁城市", effect: { approval: -5, money: -2, market: "crash" } },
            { text: "只是流感", effect: { approval: 5, money: 0, risk: "high" } }
        ]
    },
    // --- Late Phase ---
    {
        title: "被弹劾风险",
        desc: "反对党掌握了你的一份秘密录音。",
        phase: "late",
        choices: [
            { text: "销毁证据 (阴谋)", effect: { approval: -5, money: -1 } },
            { text: "公开道歉", effect: { approval: -10 } }
        ]
    },
    // --- Any Phase ---
    {
        title: "发现UFO",
        desc: "军方雷达发现了不明飞行物。",
        phase: "any",
        choices: [
            { text: "公开真相", effect: { approval: 5, market: "crash" } }, // 恐慌
            { text: "绝密封存", effect: { approval: -2 } }
        ]
    }
);

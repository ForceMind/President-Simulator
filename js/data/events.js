window.GAME_DATA = window.GAME_DATA || {};
window.GAME_DATA.EVENTS_DB = window.GAME_DATA.EVENTS_DB || [];

// 基础事件库 (localized)
window.GAME_DATA.EVENTS_DB.push(
    // --- Early Phase ---
    {
        title: "events_title_020",
        desc: "events_desc_019",
        phase: "early",
        choices: [
            { 
                text: "events_text_018", 
                effect: { approval_chance: 0.5, success: { approval: 10 }, fail: { approval: -10 } } 
            },
            { 
                text: "events_text_017", 
                effect: { approval: 2 } 
            }
        ]
    },
    {
        title: "events_title_016",
        desc: "events_desc_015",
        phase: "early",
        choices: [
            { 
                text: "events_text_014", 
                effect: { approval: -5, money: -0.1 } 
            }, 
            { 
                text: "events_text_013", 
                effect: { approval: 0, money: -0.01 } 
            }
        ]
    },
    // --- Mid Phase ---
    {
        title: "events_title_012",
        desc: "events_desc_011",
        phase: "mid",
        choices: [
            { 
                text: "events_text_010", 
                effect: { approval: -5, money: -2, market: "crash" } 
            },
            { 
                text: "events_text_009", 
                effect: { approval: 5, risk: "high" } 
            }
        ]
    },
    // --- Late Phase ---
    {
        title: "events_title_008",
        desc: "events_desc_007",
        phase: "late",
        choices: [
            { 
                text: "events_text_006", 
                effect: { approval: -5, money: -1 } 
            },
            { 
                text: "events_text_005", 
                effect: { approval: -10 } 
            }
        ]
    },
    // --- Any Phase ---
    {
        title: "events_title_004",
        desc: "events_desc_003",
        phase: "any",
        choices: [
            { 
                text: "events_text_002", 
                effect: { approval: 5, market: "crash" } 
            },
            { 
                text: "events_text_001", 
                effect: { approval: -2 } 
            }
        ]
    }
);
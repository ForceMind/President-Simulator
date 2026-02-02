window.GAME_DATA = window.GAME_DATA || {};
window.GAME_DATA.CARD_DB = window.GAME_DATA.CARD_DB || [];

window.GAME_DATA.CARD_DB.push(
    // ---------------- EARLY PHASE (Capital Accumulation) ----------------
    {
        type: "economy_type_090",
        title: "economy_title_089",
        desc: "economy_desc_088",
        cost: 0,
        phase: "early",
        effect: { money: -5, approval: -5 }
    },
    {
        type: "economy_type_087",
        title: "economy_title_086",
        desc: "economy_desc_085",
        cost: 1,
        phase: "early",
        effect: { money: 10, approval: -10 }
    },
    {
        type: "economy_type_084",
        title: "economy_title_083",
        desc: "economy_desc_082",
        cost: 2,
        phase: "early",
        unique: true,
        effect: { money: 15, approval: -15 }
    },
    {
        type: "economy_type_081",
        title: "economy_title_080",
        desc: "economy_desc_079",
        cost: 1,
        phase: "early",
        effect: { money: 5, approval: -5 }
    },
    
    // ---------------- MID PHASE (Market Manipulation) ----------------
    {
        type: "economy_type_078",
        title: "economy_title_077",
        desc: "economy_desc_076",
        cost: 0,
        phase: "mid",
        effect: { money: 20, approval: 5 }
    },
    {
        type: "economy_type_075",
        title: "economy_title_074",
        desc: "economy_desc_073",
        cost: 3,
        phase: "mid",
        effect: { money: 12, approval: -8 }
    },
    {
        type: "economy_type_072",
        title: "economy_title_071",
        desc: "economy_desc_070",
        cost: 1,
        phase: "mid",
        effect: { money: -5, approval: 5 }
    },
    {
        type: "economy_type_069",
        title: "economy_title_068",
        desc: "economy_desc_067",
        cost: 5,
        phase: "mid",
        effect: { money: -2, approval: 10 }
    },
    {
        type: "economy_type_066",
        title: "economy_title_065",
        desc: "economy_desc_064",
        cost: 4,
        phase: "mid",
        effect: { money: 25, approval: -30 }
    },
    {
        type: "economy_type_063",
        title: "economy_title_062",
        desc: "economy_desc_061",
        cost: 2,
        phase: "mid",
        effect: { money: 15, approval: -5 }
    },
    {
        type: "economy_type_060",
        title: "economy_title_059",
        desc: "economy_desc_058",
        cost: 0,
        phase: "mid",
        effect: { money: 10, approval: -10 }
    },
    {
        type: "economy_type_057",
        title: "economy_title_056",
        desc: "economy_desc_055",
        cost: 1,
        phase: "mid",
        effect: { money: 15, approval: -20 }
    },
    {
        type: "economy_type_054",
        title: "economy_title_053",
        desc: "economy_desc_052",
        cost: 2,
        phase: "mid",
        effect: { money: 8, approval: 5 }
    },
    {
        type: "economy_type_051",
        title: "economy_title_050",
        desc: "economy_desc_049",
        cost: 1,
        phase: "mid",
        effect: { money: 5, approval: -5 }
    },
    {
        type: "economy_type_048",
        title: "economy_title_047",
        desc: "economy_desc_046",
        cost: 3,
        phase: "mid",
        effect: { money: 20, approval: 5 }
    },
    {
        type: "economy_type_045",
        title: "economy_title_044",
        desc: "economy_desc_043",
        cost: 0,
        phase: "mid",
        effect: { money: 30, approval: -40 }
    },
    {
        type: "economy_type_042",
        title: "economy_title_041",
        desc: "economy_desc_040",
        cost: 2,
        phase: "mid",
        unique: true,
        effect: { money: 10, approval: 2 }
    },
    {
        type: "economy_type_039",
        title: "economy_title_038",
        desc: "economy_desc_037",
        cost: 5,
        phase: "mid",
        effect: { money: 25, approval: 15 }
    },
    {
        type: "economy_type_036",
        title: "economy_title_035",
        desc: "economy_desc_034",
        cost: 4,
        phase: "mid",
        effect: { money: 10, approval: -10 }
    },
    {
        type: "economy_type_033",
        title: "economy_title_032",
        desc: "economy_desc_031",
        cost: 6,
        phase: "mid",
        effect: { approval: 10, bubble: 20 }
    },

    // ---------------- LATE PHASE (Economic Collapse / Legacy) ----------------
    {
        type: "economy_type_030",
        title: "economy_title_029",
        desc: "economy_desc_028",
        cost: 0,
        phase: "late",
        unique: true,
        effect: { money: 100, approval: -50 }
    },
    {
        type: "economy_type_027",
        title: "economy_title_026",
        desc: "economy_desc_025",
        cost: 5,
        phase: "late",
        effect: { money: 50, approval: -60 }
    },
    {
        type: "economy_type_024",
        title: "economy_title_023",
        desc: "economy_desc_022",
        cost: 0,
        phase: "late",
        effect: { approval: -30, inflation: 100 }
    },
    {
        type: "economy_type_021",
        title: "economy_title_020",
        desc: "economy_desc_019",
        cost: 5,
        phase: "late",
        effect: { money: 40, approval: -20 }
    },
    {
        type: "economy_type_018",
        title: "economy_title_017",
        desc: "economy_desc_016",
        cost: 0,
        phase: "late",
        effect: { approval: 10, international_standing: -50 }
    },
    {
        type: "economy_type_015",
        title: "economy_title_014",
        desc: "economy_desc_013",
        cost: 8,
        phase: "late",
        effect: { money: -20, approval: -100 }
    },
    {
        type: "economy_type_012",
        title: "economy_title_011",
        desc: "economy_desc_010",
        cost: 2,
        phase: "late",
        effect: { money: 5, approval: -5 }
    },
    {
        type: "economy_type_009",
        title: "economy_title_008",
        desc: "economy_desc_007",
        cost: 1,
        phase: "late",
        effect: { money: 8, approval: -2 }
    },
    {
        type: "economy_type_006",
        title: "economy_title_005",
        desc: "economy_desc_004",
        cost: 5,
        phase: "late",
        unique: true,
        effect: { money: -10, chaos: 50 }
    },
    {
        type: "economy_type_003",
        title: "economy_title_002",
        desc: "economy_desc_001",
        cost: 5,
        phase: "late",
        unique: true,
        effect: { money: 200, approval: -20 }
    }
);

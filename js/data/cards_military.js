window.GAME_DATA = window.GAME_DATA || {};
window.GAME_DATA.CARD_DB = window.GAME_DATA.CARD_DB || [];

window.GAME_DATA.CARD_DB.push(
    // ---------------- EARLY PHASE (Posturing) ----------------
    {
        type: "military_type_090",
        title: "military_title_089",
        desc: "military_desc_088",
        cost: 2,
        phase: "early",
        effect: { money: 10, approval: 5 }
    },
    {
        type: "military_type_087",
        title: "military_title_086",
        desc: "military_desc_085",
        cost: 5,
        phase: "early",
        effect: { money: -5, approval: 5 }
    },
    {
        type: "military_type_084",
        title: "military_title_083",
        desc: "military_desc_082",
        cost: 0,
        phase: "early",
        effect: { approval: 5, tension: 15 }
    },
    {
        type: "military_type_081",
        title: "military_title_080",
        desc: "military_desc_079",
        cost: 2,
        phase: "early",
        effect: { approval: 5, military_competence: 5 }
    },

    // ---------------- MID PHASE (Conflict & Crisis) ----------------
    {
        type: "military_type_078",
        title: "military_title_077",
        desc: "military_desc_076",
        cost: 3,
        phase: "mid",
        effect: { money: -2, approval: 5 }
    },
    {
        type: "military_type_075",
        title: "military_title_074",
        desc: "military_desc_073",
        cost: 1,
        phase: "mid",
        effect: { approval: 2, chaos: 15 }
    },
    {
        type: "military_type_072",
        title: "military_title_071",
        desc: "military_desc_070",
        cost: 0,
        phase: "mid",
        effect: { approval: -5, diplomacy: -10 }
    },
    {
        type: "military_type_069",
        title: "military_title_068",
        desc: "military_desc_067",
        cost: 2,
        phase: "mid",
        effect: { money: -5, approval: 2 }
    },
    {
        type: "military_type_066",
        title: "military_title_065",
        desc: "military_desc_064",
        cost: 5,
        phase: "mid",
        effect: { money: -15, approval: 10 }
    },
    {
        type: "military_type_063",
        title: "military_title_062",
        desc: "military_desc_061",
        cost: 4,
        phase: "mid",
        effect: { approval: 10, tension: 20 }
    },
    {
        type: "military_type_060",
        title: "military_title_059",
        desc: "military_desc_058",
        cost: 0,
        phase: "mid",
        effect: { money: 15, approval: -5 }
    },
    {
        type: "military_type_057",
        title: "military_title_056",
        desc: "military_desc_055",
        cost: 1,
        phase: "mid",
        effect: { approval: 5, security: -15 }
    },
    {
        type: "military_type_054",
        title: "military_title_053",
        desc: "military_desc_052",
        cost: 6,
        phase: "mid",
        effect: { money: -5, approval: -5 }
    },
    {
        type: "military_type_051",
        title: "military_title_050",
        desc: "military_desc_049",
        cost: 3,
        phase: "mid",
        effect: { money: 5, relations: -10 }
    },
    {
        type: "military_type_048",
        title: "military_title_047",
        desc: "military_desc_046",
        cost: 0,
        phase: "mid",
        effect: { approval: 5, panic: 20 }
    },
    {
        type: "military_type_045",
        title: "military_title_044",
        desc: "military_desc_043",
        cost: 5,
        phase: "mid",
        effect: { money: 20, approval: 5 }
    },
    {
        type: "military_type_042",
        title: "military_title_041",
        desc: "military_desc_040",
        cost: 2,
        phase: "mid",
        effect: { money: -2, approval: 5 }
    },
    {
        type: "military_type_039",
        title: "military_title_038",
        desc: "military_desc_037",
        cost: 1,
        phase: "mid",
        effect: { approval: 5, diplomacy: -5 }
    },
    {
        type: "military_type_036",
        title: "military_title_035",
        desc: "military_desc_034",
        cost: 5,
        phase: "mid",
        effect: { approval: 5, environment: -10 }
    },
    {
        type: "military_type_033",
        title: "military_title_032",
        desc: "military_desc_031",
        cost: 2,
        phase: "mid",
        effect: { intelligence: 5, embarrassment: 5 }
    },

    // ---------------- LATE PHASE (Global Conflict) ----------------
    {
        type: "military_type_030",
        title: "military_title_029",
        desc: "military_desc_028",
        cost: 0,
        phase: "late",
        effect: { approval: -50, devastation: 100 }
    },
    {
        type: "military_type_027",
        title: "military_title_026",
        desc: "military_desc_025",
        cost: 7,
        phase: "late",
        effect: { approval: 10, economy: -30 }
    },
    {
        type: "military_type_024",
        title: "military_title_023",
        desc: "military_desc_022",
        cost: 0,
        phase: "late",
        effect: { approval: 5, isolation: 30 }
    },
    {
        type: "military_type_021",
        title: "military_title_020",
        desc: "military_desc_019",
        cost: 5,
        phase: "late",
        effect: { approval: -40, manpower: 50 }
    },
    {
        type: "military_type_018",
        title: "military_title_017",
        desc: "military_desc_016",
        cost: 5,
        phase: "late",
        effect: { approval: -30, chaos: 40 }
    },
    {
        type: "military_type_015",
        title: "military_title_014",
        desc: "military_desc_013",
        cost: 4,
        phase: "late",
        effect: { money: -10, influence: 20 }
    },
    {
        type: "military_type_012",
        title: "military_title_011",
        desc: "military_desc_010",
        cost: 0,
        phase: "late",
        effect: { money: 100, approval: -80 }
    },
    {
        type: "military_type_009",
        title: "military_title_008",
        desc: "military_desc_007",
        cost: 0,
        phase: "late",
        effect: { approval: -60, population: -20 }
    },
    {
        type: "military_type_006",
        title: "military_title_005",
        desc: "military_desc_004",
        cost: 2,
        phase: "late",
        effect: { approval: 20, hysteria: 40 }
    },
    {
        type: "military_type_003",
        title: "military_title_002",
        desc: "military_desc_001",
        cost: 8,
        phase: "late",
        effect: { money: -50, power: 50 }
    }
);

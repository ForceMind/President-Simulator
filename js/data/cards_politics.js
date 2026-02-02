window.GAME_DATA = window.GAME_DATA || {};
window.GAME_DATA.CARD_DB = window.GAME_DATA.CARD_DB || [];

window.GAME_DATA.CARD_DB.push(
    // ---------------- EARLY PHASE (Consolidating Power) ----------------
    {
        type: "politics_type_090",
        title: "politics_title_089",
        desc: "politics_desc_088",
        cost: 2,
        phase: "early",
        effect: { approval: -5, loyalty: 10 }
    },
    {
        type: "politics_type_087",
        title: "politics_title_086",
        desc: "politics_desc_085",
        cost: 2,
        phase: "early",
        effect: { approval: 5, opposition: -5 }
    },
    {
        type: "politics_type_084",
        title: "politics_title_083",
        desc: "politics_desc_082",
        cost: 0,
        phase: "early",
        effect: { approval: -2, energy: 5 }
    },
    {
        type: "politics_type_081",
        title: "politics_title_080",
        desc: "politics_desc_079",
        cost: 5,
        phase: "early",
        effect: { approval: -10, election_chance: 15 }
    },

    // ---------------- MID PHASE (Control & Manipulation) ----------------
    {
        type: "politics_type_078",
        title: "politics_title_077",
        desc: "politics_desc_076",
        cost: 1,
        phase: "mid",
        effect: { approval: 2, media_chaos: 10 }
    },
    {
        type: "politics_type_075",
        title: "politics_title_074",
        desc: "politics_desc_073",
        cost: 2,
        phase: "mid",
        effect: { approval: 5, press_freedom: -10 }
    },
    {
        type: "politics_type_072",
        title: "politics_title_071",
        desc: "politics_desc_070",
        cost: 3,
        phase: "mid",
        effect: { money: -2, approval: 8 }
    },
    {
        type: "politics_type_069",
        title: "politics_title_068",
        desc: "politics_desc_067",
        cost: 1,
        phase: "mid",
        effect: { approval: 2, poultry_relations: 5 }
    },
    {
        type: "politics_type_066",
        title: "politics_title_065",
        desc: "politics_desc_064",
        cost: 4,
        phase: "mid",
        effect: { approval: 4, scandal_risk: 5 }
    },
    {
        type: "politics_type_063",
        title: "politics_title_062",
        desc: "politics_desc_061",
        cost: 1,
        phase: "mid",
        effect: { money: -1, approval: 5 }
    },
    {
        type: "politics_type_060",
        title: "politics_title_059",
        desc: "politics_desc_058",
        cost: 0,
        phase: "mid",
        effect: { approval: 3, stability: -5 }
    },
    {
        type: "politics_type_057",
        title: "politics_title_056",
        desc: "politics_desc_055",
        cost: 4,
        phase: "mid",
        effect: { money: -15, approval: 10 }
    },
    {
        type: "politics_type_054",
        title: "politics_title_053",
        desc: "politics_desc_052",
        cost: 0,
        phase: "mid",
        effect: { approval: -5, stupid: 10 }
    },
    {
        type: "politics_type_051",
        title: "politics_title_050",
        desc: "politics_desc_049",
        cost: 5,
        phase: "mid",
        effect: { approval: -2, ego: 20 }
    },
    {
        type: "politics_type_048",
        title: "politics_title_047",
        desc: "politics_desc_046",
        cost: 3,
        phase: "mid",
        effect: { approval: -10, security: 5 }
    },
    {
        type: "politics_type_045",
        title: "politics_title_044",
        desc: "politics_desc_043",
        cost: 2,
        phase: "mid",
        effect: { approval: -5, distraction: 10 }
    },
    {
        type: "politics_type_042",
        title: "politics_title_041",
        desc: "politics_desc_040",
        cost: 0,
        phase: "mid",
        effect: { approval: 1, confusion: 10 }
    },
    {
        type: "politics_type_039",
        title: "politics_title_038",
        desc: "politics_desc_037",
        cost: 5,
        phase: "mid",
        effect: { approval: -5, excitement: 5 }
    },
    {
        type: "politics_type_036",
        title: "politics_title_035",
        desc: "politics_desc_034",
        cost: 4,
        phase: "mid",
        effect: { approval: 8, dignity: -10 }
    },
    {
        type: "politics_type_033",
        title: "politics_title_032",
        desc: "politics_desc_031",
        cost: 0,
        phase: "mid",
        effect: { approval: 5, science: -10 }
    },
    {
        type: "politics_type_030",
        title: "politics_title_029",
        desc: "politics_desc_028",
        cost: 2,
        phase: "mid",
        effect: { approval: 4, sanity: -10 }
    },
    {
        type: "politics_type_027",
        title: "politics_title_026",
        desc: "politics_desc_025",
        cost: 5,
        phase: "mid",
        effect: { money: -20, approval: -15 }
    },

    // ---------------- LATE PHASE (Desperation & Chaos) ----------------
    {
        type: "politics_type_024",
        title: "politics_title_023",
        desc: "politics_desc_022",
        cost: 7,
        phase: "late",
        effect: { approval: -30, dictatorship: 20 }
    },
    {
        type: "politics_type_021",
        title: "politics_title_020",
        desc: "politics_desc_019",
        cost: 5,
        phase: "late",
        effect: { approval: -20, control: 20 }
    },
    {
        type: "politics_type_018",
        title: "politics_title_017",
        desc: "politics_desc_016",
        cost: 5,
        phase: "late",
        effect: { approval: -25, chaos: 30 }
    },
    {
        type: "politics_type_015",
        title: "politics_title_014",
        desc: "politics_desc_013",
        cost: 5,
        phase: "late",
        effect: { approval: -10, loyalty: 20 }
    },
    {
        type: "politics_type_012",
        title: "politics_title_011",
        desc: "politics_desc_010",
        cost: 0,
        phase: "late",
        effect: { approval: -5, safety: 10 }
    },
    {
        type: "politics_type_009",
        title: "politics_title_008",
        desc: "politics_desc_007",
        cost: 4,
        phase: "late",
        effect: { approval: -15, obstruction: 20 }
    },
    {
        type: "politics_type_006",
        title: "politics_title_005",
        desc: "politics_desc_004",
        cost: 5,
        phase: "late",
        effect: { approval: -5, international_mockery: 10 }
    },
    {
        type: "politics_type_003",
        title: "politics_title_002",
        desc: "politics_desc_001",
        cost: 6,
        phase: "late",
        effect: { approval: -40, control: 40 }
    }
);

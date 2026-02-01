const STAT_MAPPING = {
    // 1. Authoritarianism (Control/Power)
    "dictatorship": "stat_dictatorship",
    "martial_law": "stat_dictatorship", 
    "control": "stat_dictatorship",
    "power": "stat_dictatorship",
    "surveillance": "stat_dictatorship",
    "vote_suppression": "stat_dictatorship",
    "censorship": "stat_dictatorship",
    "police_state": "stat_dictatorship",
    "imperialism": "stat_dictatorship",
    "law_order": "stat_dictatorship",
    "security": "stat_dictatorship",
    "military_competence": "stat_dictatorship",
    "manpower": "stat_dictatorship",
    "skynet_risk": "stat_dictatorship",
    "press_freedom": { key: "stat_dictatorship", invert: true }, // Less press freedom = More dictatorship

    // 2. Corruption (Money/Greed)
    "corruption": "stat_corruption",
    "embezzlement": "stat_corruption",
    "nepotism": "stat_corruption",
    "corporate_support": "stat_corruption",
    "lobbying": "stat_corruption",
    "unethical": "stat_corruption",
    "obstruction": "stat_corruption", 
    "selfishness": "stat_corruption",
    "cash": "stat_corruption",
    "corporate_profit": "stat_corruption",
    "environment": { key: "stat_corruption", invert: true }, // Destruction = Corruption usually in this game context

    // 3. Chaos (Instability/Violence)
    "chaos": "stat_chaos",
    "unrest": "stat_chaos",
    "panic": "stat_chaos", 
    "hysteria": "stat_chaos",
    "violence": "stat_chaos",
    "crime": "stat_chaos",
    "protests": "stat_chaos",
    "terrorism": "stat_chaos",
    "suffering": "stat_chaos",
    "devastation": "stat_chaos",
    "war": "stat_chaos",
    "tension": "stat_chaos",
    "game_over_risk": "stat_chaos",
    "safety": { key: "stat_chaos", invert: true },
    "stability": { key: "stat_chaos", invert: true },
    "peace": { key: "stat_chaos", invert: true },

    // 4. Infamy (Scandal/Ego)
    "notoriety": "stat_infamy",
    "scandal_risk": "stat_infamy", 
    "scandal": "stat_infamy",
    "mockery": "stat_infamy",
    "embarrassment": "stat_infamy",
    "ego": "stat_infamy",
    "international_mockery": "stat_infamy",
    "treason_risk": "stat_infamy",
    "weakness": "stat_infamy",
    "plausible_deniability": "stat_infamy", 
    "insanity": "stat_infamy",
    "dignity": { key: "stat_infamy", invert: true },
    "relations": { key: "stat_infamy", invert: true },
    "international_standing": { key: "stat_infamy", invert: true },
    "diplomacy": { key: "stat_infamy", invert: true },
    "respect": { key: "stat_infamy", invert: true },
    "scandal_reduction": { key: "stat_infamy", invert: true },

    // 5. Polarization (Division/Hate)
    "polarization": "stat_polarization", 
    "division": "stat_polarization",
    "nationalism": "stat_polarization",
    "racism": "stat_polarization", 
    "xenophobia": "stat_polarization",
    "border_security": "stat_polarization", // Usually "The Wall" etc
    "wokeness": "stat_polarization", // Using it usually polarizes
    "tradition": "stat_polarization",
    "elitism": "stat_polarization",
    "family_values": "stat_polarization",
    "liberty": { key: "stat_polarization", invert: true }, 
    "unity": { key: "stat_polarization", invert: true },
    "alliances": { key: "stat_polarization", invert: true },

    // 6. Ignorance (Stupidity/Disinfo)
    "ignorance": "stat_ignorance",
    "stupidity": "stat_ignorance",
    "populism": "stat_ignorance", 
    "confusion": "stat_ignorance",
    "conspiracy": "stat_ignorance",
    "conspiracy_confirmed": "stat_ignorance",
    "anti_science": "stat_ignorance", 
    "distraction": "stat_ignorance",
    "science": { key: "stat_ignorance", invert: true },
    "truth": { key: "stat_ignorance", invert: true },
    "sanity": { key: "stat_ignorance", invert: true },
    "education": { key: "stat_ignorance", invert: true },
    "intelligence": { key: "stat_ignorance", invert: true },
    "efficiency": { key: "stat_ignorance", invert: true }
};

window.STAT_MAPPING = STAT_MAPPING;

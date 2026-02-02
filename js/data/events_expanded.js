window.GAME_DATA = window.GAME_DATA || {};
window.GAME_DATA.EVENTS_DB = window.GAME_DATA.EVENTS_DB || [];

// Helper to push multiple events
window.GAME_DATA.EVENTS_DB.push(
    // ================= EARLY PHASE (0-10) =================
    {
        title: "expanded_title_420",
        desc: "expanded_desc_419",
        phase: "early",
        choices: [
            { text: "expanded_text_418", effect: { approval: 5, unity: 5 } },
            { text: "expanded_text_417", effect: { approval: -5, loyalty: 10 } },
            { text: "expanded_text_416", effect: { approval: -2, ego: 5 } }
        ]
    },
    {
        title: "expanded_title_415",
        desc: "expanded_desc_414",
        phase: "early",
        choices: [
            { text: "expanded_text_413", effect: { money: -5, approval: -2 } },
            { text: "expanded_text_412", effect: { approval: 2 } },
            { text: "expanded_text_411", effect: { money: -2, approval: -1 } }
        ]
    },
    {
        title: "expanded_title_410",
        desc: "expanded_desc_409",
        phase: "early",
        choices: [
            { text: "expanded_text_408", effect: { money: -10, approval: 10 } },
            { text: "expanded_text_407", effect: { approval: -5, loyalty: 5 } },
            { text: "expanded_text_406", effect: { approval: 1, mockery: 2 } }
        ]
    },
    {
        title: "expanded_title_405",
        desc: "expanded_desc_404",
        phase: "early",
        choices: [
            { text: "expanded_text_403", effect: { approval: 5, corruption: -2 } },
            { text: "expanded_text_402", effect: { corruption: 5, loyalty: 10 } },
            { text: "expanded_text_401", effect: { money: 10, approval: -5 } }
        ]
    },
    {
        title: "expanded_title_400",
        desc: "expanded_desc_399",
        phase: "early",
        choices: [
            { text: "expanded_text_398", effect: { approval: 2, boredom: 5 } },
            { text: "expanded_text_397", effect: { approval: -2, attention: 10 } },
            { text: "expanded_text_396", effect: { approval: 1, chaos: 5 } }
        ]
    },
    {
        title: "expanded_title_395",
        desc: "expanded_desc_394",
        phase: "early",
        choices: [
            { text: "expanded_text_393", effect: { approval: 5, loyalty: -5 } },
            { text: "expanded_text_392", effect: { approval: -2, loyalty: 5 } },
            { text: "expanded_text_391", effect: { scandal_chance: 5 } }
        ]
    },
    {
        title: "expanded_title_390",
        desc: "expanded_desc_389",
        phase: "early",
        choices: [
            { text: "expanded_text_388", effect: { approval: 2 } },
            { text: "expanded_text_387", effect: { ego: 2 } },
            { text: "expanded_text_386", effect: { mockery: 10 } }
        ]
    },
    {
        title: "expanded_title_385",
        desc: "expanded_desc_384",
        phase: "early",
        choices: [
            { text: "expanded_text_383", effect: { approval: 2, blame: 5 } },
            { text: "expanded_text_382", effect: { secrets: 1 } },
            { text: "expanded_text_381", effect: { digestion: -1 } }
        ]
    },
    {
        title: "expanded_title_380",
        desc: "expanded_desc_379",
        phase: "early",
        choices: [
            { text: "expanded_text_378", effect: { relations: 5 } },
            { text: "expanded_text_377", effect: { relations: -5, notoriety: 10 } },
            { text: "expanded_text_376", effect: { approval: -5, happiness: 5 } }
        ]
    },
    
    // ================= MID PHASE =================
    {
        title: "expanded_title_375",
        desc: "expanded_desc_374",
        phase: "mid",
        choices: [
            { text: "expanded_text_373", effect: { money: -5, approval: 5 } },
            { text: "expanded_text_372", effect: { approval: -10, death_rate: 2 } },
            { text: "expanded_text_371", effect: { tension: 10, approval: 2 } }
        ]
    },
    {
        title: "expanded_title_370",
        desc: "expanded_desc_369",
        phase: "mid",
        choices: [
            { text: "expanded_text_368", effect: { money: -20, approval: -10, economy: 10 } },
            { text: "expanded_text_367", effect: { money: -20, approval: 10, economy: 5 } },
            { text: "expanded_text_366", effect: { money: 30, approval: -20, personal_wealth: 20 } }
        ]
    },
    {
        title: "expanded_title_365",
        desc: "expanded_desc_364",
        phase: "mid",
        choices: [
            { text: "expanded_text_363", effect: { money: -5, approval: 5 } },
            { text: "expanded_text_362", effect: { approval: -5, meme_potential: 10 } },
            { text: "expanded_text_361", effect: { approval: -10, insanity: 20 } }
        ]
    },
    {
        title: "expanded_title_360",
        desc: "expanded_desc_359",
        phase: "mid",
        choices: [
            { text: "expanded_text_358", effect: { approval: 0, base_loyalty: -10 } },
            { text: "expanded_text_357", effect: { approval: -5, base_loyalty: 10 } },
            { text: "expanded_text_356", effect: { correction: 20, approval: -15 } }
        ]
    },
    {
        title: "expanded_title_355",
        desc: "expanded_desc_354",
        phase: "mid",
        choices: [
            { text: "expanded_text_353", effect: { money: 5, inflation: 5, approval: 0 } },
            { text: "expanded_text_352", effect: { economy: -2 } },
            { text: "expanded_text_351", effect: { approval: -2, cheese_prices: 10 } }
        ]
    },
    {
        title: "expanded_title_350",
        desc: "expanded_desc_349",
        phase: "mid",
        choices: [
            { text: "expanded_text_348", effect: { tension: 5, approval: 2 } },
            { text: "expanded_text_347", effect: { corruption: 5, approval: -5 } },
            { text: "expanded_text_346", effect: { treason: 10 } }
        ]
    },
    {
        title: "expanded_title_345",
        desc: "expanded_desc_344",
        phase: "mid",
        choices: [
            { text: "expanded_text_343", effect: { money: -2, approval: 5 } },
            { text: "expanded_text_342", effect: { money: -10, approval: 5, war: 1 } },
            { text: "expanded_text_341", effect: { approval: -10 } }
        ]
    },
    {
        title: "expanded_title_340",
        desc: "expanded_desc_339",
        phase: "mid",
        choices: [
            { text: "expanded_text_338", effect: { approval: 2, ego: -5 } },
            { text: "expanded_text_337", effect: { approval: 1, distraction: 5 } },
            { text: "expanded_text_336", effect: { money: 1, approval: -5, fear: 5 } }
        ]
    },
    {
        title: "expanded_title_335",
        desc: "expanded_desc_334",
        phase: "mid",
        choices: [
            { text: "expanded_text_333", effect: { approval: -2, nothing_changes: 1 } },
            { text: "expanded_text_332", effect: { approval: 0, base_loyalty: -20 } },
            { text: "expanded_text_331", effect: { base_loyalty: 10, safety: -10 } }
        ]
    },
    {
        title: "expanded_title_330",
        desc: "expanded_desc_329",
        phase: "mid",
        choices: [
            { text: "expanded_text_328", effect: { money: -5, science: 5 } },
            { text: "expanded_text_327", effect: { money: -10, awe: 5 } },
            { text: "expanded_text_326", effect: { science: -10, conspiracy: 5 } }
        ]
    },
    {
        title: "expanded_title_325",
        desc: "expanded_desc_324",
        phase: "mid",
        choices: [
            { text: "expanded_text_323", effect: { money: -10, approval: 5 } },
            { text: "expanded_text_322", effect: { approval: 0 } },
            { text: "expanded_text_321", effect: { money: 5, approval: -5 } }
        ]
    },
    {
        title: "expanded_title_320",
        desc: "expanded_desc_319",
        phase: "mid",
        choices: [
            { text: "expanded_text_318", effect: { approval: 5, weakness: 2 } },
            { text: "expanded_text_317", effect: { approval: -10, strength: 5 } },
            { text: "expanded_text_316", effect: { approval: -2, mockery: 10 } }
        ]
    },
    {
        title: "expanded_title_315",
        desc: "expanded_desc_314",
        phase: "mid",
        choices: [
            { text: "expanded_text_313", effect: { chaos: 20 } },
            { text: "expanded_text_312", effect: { stability: 5, deep_state: 5 } },
            { text: "expanded_text_311", effect: { insanity: 10 } }
        ]
    },
    {
        title: "expanded_title_310",
        desc: "expanded_desc_309",
        phase: "mid",
        choices: [
            { text: "expanded_text_308", effect: { approval: 5, money: -5 } },
            { text: "expanded_text_307", effect: { approval: -2 } },
            { text: "expanded_text_306", effect: { approval: -5 } }
        ]
    },
    {
        title: "expanded_title_305",
        desc: "expanded_desc_304",
        phase: "mid",
        choices: [
            { text: "expanded_text_303", effect: { economy: -5, approval: 5, international: 5 } },
            { text: "expanded_text_302", effect: { economy: 5, international: -10 } },
            { text: "expanded_text_301", effect: { dignity: -5 } }
        ]
    },
    {
        title: "expanded_title_300",
        desc: "expanded_desc_299",
        phase: "mid",
        choices: [
            { text: "expanded_text_298", effect: { approval: -5, security: 5 } },
            { text: "expanded_text_297", effect: { approval: 2, cringe: 100 } },
            { text: "expanded_text_296", effect: { money: -10, control: 10 } }
        ]
    },
    {
        title: "expanded_title_295",
        desc: "expanded_desc_294",
        phase: "mid",
        choices: [
            { text: "expanded_text_293", effect: { morale: -10, security: 5 } },
            { text: "expanded_text_292", effect: { morale: -5 } },
            { text: "expanded_text_291", effect: { intelligence: 5 } }
        ]
    },
    {
        title: "expanded_title_290",
        desc: "expanded_desc_289",
        phase: "mid",
        choices: [
            { text: "expanded_text_288", effect: { approval: 1, kindness: 2 } },
            { text: "expanded_text_287", effect: { approval: -5, horror: 5 } },
            { text: "expanded_text_286", effect: { approval: -10, corruption: 5 } }
        ]
    },
    {
        title: "expanded_title_285",
        desc: "expanded_desc_284",
        phase: "mid",
        choices: [
            { text: "expanded_text_283", effect: { approval: 0 } },
            { text: "expanded_text_282", effect: { base_loyalty: 5, division: 5 } },
            { text: "expanded_text_281", effect: { money: -5, exposure: 10 } }
        ]
    },
    {
        title: "expanded_title_280",
        desc: "expanded_desc_279",
        phase: "mid",
        choices: [
            { text: "expanded_text_278", effect: { approval: 5 } },
            { text: "expanded_text_277", effect: { ego: 5, mockery: 2 } },
            { text: "expanded_text_276", effect: { approval: -5, greed: 5 } }
        ]
    },
    // Adding more Mid phase events to reach count
    { title: "expanded_title_275", desc: "expanded_desc_274", phase: "mid", choices: [{text: "expanded_text_273", effect: { diplomacy: 5 }}, {text: "expanded_text_272", effect: {strength: 5}}, {text: "expanded_text_271", effect: {weakness: 5}}] },
    { title: "expanded_title_270", desc: "expanded_desc_269", phase: "mid", choices: [{text: "expanded_text_268", effect: { money: 10, environment: -10 }}, {text: "expanded_text_267", effect: {approval: 5, money: -5}}] },
    { title: "expanded_title_266", desc: "expanded_desc_265", phase: "mid", choices: [{text: "expanded_text_264", effect: { economy: -2 }}, {text: "expanded_text_263", effect: {money: -5, risk: 10}}] },
    { title: "expanded_title_262", desc: "expanded_desc_261", phase: "mid", choices: [{text: "expanded_text_260", effect: { nature: -5 }}, {text: "expanded_text_259", effect: {pandemic_risk: 5}}] },
    { title: "expanded_title_258", desc: "expanded_desc_257", phase: "mid", choices: [{text: "expanded_text_256", effect: { panic: 10 }}, {text: "expanded_text_255", effect: {culture: 1}}] },
    { title: "expanded_title_254", desc: "expanded_desc_253", phase: "mid", choices: [{text: "expanded_text_252", effect: { money: -2 }}, {text: "expanded_text_251", effect: {approval: -2}}] },
    { title: "expanded_title_250", desc: "expanded_desc_249", phase: "mid", choices: [{text: "expanded_text_248", effect: { approval: 2 }}, {text: "expanded_text_247", effect: {gaslighting: 10}}] },
    { title: "expanded_title_246", desc: "expanded_desc_245", phase: "mid", choices: [{text: "expanded_text_244", effect: { territory: 1 }}, {text: "expanded_text_243", effect: {sadness: 5}}] },
    { title: "expanded_title_242", desc: "expanded_desc_241", phase: "mid", choices: [{text: "expanded_text_240", effect: { prestige: 2 }}, {text: "expanded_text_239", effect: {nationalism: 5}}] },
    { title: "expanded_title_238", desc: "expanded_desc_237", phase: "mid", choices: [{text: "expanded_text_236", effect: { approval: 2 }}, {text: "expanded_text_235", effect: {approval: -10, funny: 5}}] },
    { title: "expanded_title_234", desc: "expanded_desc_233", phase: "mid", choices: [{text: "expanded_text_232", effect: { cowardice: 5 }}, {text: "expanded_text_231", effect: {coolness: 10}}] },
    { title: "expanded_title_230", desc: "expanded_desc_229", phase: "mid", choices: [{text: "expanded_text_228", effect: { lie: 5 }}, {text: "expanded_text_227", effect: {denial: 5}}] },
    
    // --- ADDED BATCH 1 (Tech & Culture) ---
    { title: "expanded_title_226", desc: "expanded_desc_225", phase: "mid", choices: [{text: "expanded_text_224", effect: { approval: 5 }}, {text: "expanded_text_223", effect: {conspiracy: 10}}] },
    { title: "expanded_title_222", desc: "expanded_desc_221", phase: "mid", choices: [{text: "expanded_text_220", effect: { money: 5 }}, {text: "expanded_text_219", effect: {happiness: 5, money: -5}}] },
    { title: "expanded_title_218", desc: "expanded_desc_217", phase: "mid", choices: [{text: "expanded_text_216", effect: { education: -5, approval: 5 }}, {text: "expanded_text_215", effect: {education: 5, approval: -5}}] },
    { title: "expanded_title_214", desc: "expanded_desc_213", phase: "mid", choices: [{text: "expanded_text_212", effect: { annoyance: 10 }}, {text: "expanded_text_211", effect: {pragmatism: 5}}] },
    { title: "expanded_title_210", desc: "expanded_desc_209", phase: "mid", choices: [{text: "expanded_text_208", effect: { youth_vote: 10 }}, {text: "expanded_text_207", effect: {boomer_vote: 10}}] },
    { title: "expanded_title_206", desc: "expanded_desc_205", phase: "mid", choices: [{text: "expanded_text_204", effect: { corruption: 5 }}, {text: "expanded_text_203", effect: {culture: 5, money: -2}}] },
    { title: "expanded_title_202", desc: "expanded_desc_201", phase: "mid", choices: [{text: "expanded_text_200", effect: { happiness: 5 }}, {text: "expanded_text_199", effect: {tension: 5}}] },
    { title: "expanded_title_198", desc: "expanded_desc_197", phase: "mid", choices: [{text: "expanded_text_196", effect: { health: -5, approval: 5 }}, {text: "expanded_text_195", effect: {health: 5, approval: -10}}] },
    { title: "expanded_title_194", desc: "expanded_desc_193", phase: "mid", choices: [{text: "expanded_text_192", effect: { science: 5, unrest: 10 }}, {text: "expanded_text_191", effect: {popularity: 5, pandemic_risk: 5}}] },
    { title: "expanded_title_190", desc: "expanded_desc_189", phase: "mid", choices: [{text: "expanded_text_188", effect: { environment: 2 }}, {text: "expanded_text_187", effect: {lie: 10}}] },
    { title: "expanded_title_186", desc: "expanded_desc_185", phase: "mid", choices: [{text: "expanded_text_184", effect: { efficiency: 2 }}, {text: "expanded_text_183", effect: {tradition: 5}}] },
    { title: "expanded_title_182", desc: "expanded_desc_181", phase: "mid", choices: [{text: "expanded_text_180", effect: { imperialism: 5 }}, {text: "expanded_text_179", effect: {caution: 2}}] },
    { title: "expanded_title_178", desc: "expanded_desc_177", phase: "mid", choices: [{text: "expanded_text_176", effect: { unity: 5 }}, {text: "expanded_text_175", effect: {liberty: 5}}] },
    { title: "expanded_title_174", desc: "expanded_desc_173", phase: "mid", choices: [{text: "expanded_text_172", effect: { approval: -5 }}, {text: "expanded_text_171", effect: {efficiency: 5, relations: -5}}] },
    { title: "expanded_title_170", desc: "expanded_desc_169", phase: "mid", choices: [{text: "expanded_text_168", effect: { humor: 5 }}, {text: "expanded_text_167", effect: {money: 50, anger: 20}}] },
    { title: "expanded_title_166", desc: "expanded_desc_165", phase: "mid", choices: [{text: "expanded_text_164", effect: { simplicity: 5 }}, {text: "expanded_text_163", effect: {chaos: 10}}] },
    { title: "expanded_title_162", desc: "expanded_desc_161", phase: "mid", choices: [{text: "expanded_text_160", effect: { economy: -10, youth: 10 }}, {text: "expanded_text_159", effect: {stability: 5}}] },
    { title: "expanded_title_158", desc: "expanded_desc_157", phase: "mid", choices: [{text: "expanded_text_156", effect: { peace: 5 }}, {text: "expanded_text_155", effect: {violence: 5}}] },
    { title: "expanded_title_154", desc: "expanded_desc_153", phase: "mid", choices: [{text: "expanded_text_152", effect: { science_approval: -5 }}, {text: "expanded_text_151", effect: {science_approval: 5}}] },
    { title: "expanded_title_150", desc: "expanded_desc_149", phase: "mid", choices: [{text: "expanded_text_148", effect: { money: -5, development: 5 }}, {text: "expanded_text_147", effect: {mockery: 5}}] },
    { title: "expanded_title_146", desc: "expanded_desc_145", phase: "mid", choices: [{text: "expanded_text_144", effect: { censorship: 5 }}, {text: "expanded_text_143", effect: {liberal: 5}}] },
    { title: "expanded_title_142", desc: "expanded_desc_141", phase: "mid", choices: [{text: "expanded_text_140", effect: { culture: -10, cool: 10 }}, {text: "expanded_text_139", effect: {tradition: 5}}] },
    { title: "expanded_title_138", desc: "expanded_desc_137", phase: "mid", choices: [{text: "expanded_text_136", effect: { money: -50, chaos: 20 }}, {text: "expanded_text_135", effect: {stability: 5}}] },
    { title: "expanded_title_134", desc: "expanded_desc_133", phase: "mid", choices: [{text: "expanded_text_132", effect: { happiness: 10, health: -2 }}, {text: "expanded_text_131", effect: {complaints: 5}}] },
    { title: "expanded_title_130", desc: "expanded_desc_129", phase: "mid", choices: [{text: "expanded_text_128", effect: { meta: 1 }}, {text: "expanded_text_127", effect: {fear: 1}}] },
    { title: "expanded_title_126", phase: "mid", choices: [{text: "expanded_text_125", effect: { donors: 5, approval: -5 }}, {text: "expanded_text_124", effect: {approval: 5, money: -5}}] },
    { title: "expanded_title_123", phase: "mid", choices: [{text: "expanded_text_122", effect: { rule_of_law: 5 }}, {text: "expanded_text_121", effect: {dictator: 5}}] },
    { title: "expanded_title_120", desc: "expanded_desc_119", phase: "mid", choices: [{text: "expanded_text_118", effect: { mockery: 5 }}, {text: "expanded_text_117", effect: {money: -2}}] },
    { title: "expanded_title_116", desc: "expanded_desc_115", phase: "mid", choices: [{text: "expanded_text_114", effect: { youth: -5 }}, {text: "expanded_text_113", effect: {cool: 5}}] },
    { title: "expanded_title_112", desc: "expanded_desc_111", phase: "mid", choices: [{text: "expanded_text_110", effect: { conspiracy: 5 }}, {text: "expanded_text_109", effect: {conspiracy: 5}}] },
    { title: "expanded_title_108", desc: "expanded_desc_107", phase: "mid", choices: [{text: "expanded_text_106", effect: { strength: 2 }}, {text: "expanded_text_105", effect: {intel: 5}}] },
    { title: "expanded_title_104", desc: "expanded_desc_103", phase: "mid", choices: [{text: "expanded_text_102", effect: { tech: -5 }}, {text: "expanded_text_101", effect: {efficiency: 10, humanity: -10}}] },
    { title: "expanded_title_100", desc: "expanded_desc_099", phase: "mid", choices: [{text: "expanded_text_098", effect: { streisand_effect: 10 }}, {text: "expanded_text_097", effect: {approval: 0}}] },
    { title: "expanded_title_096", desc: "expanded_desc_095", phase: "mid", choices: [{text: "expanded_text_094", effect: { stability: 5 }}, {text: "expanded_text_093", effect: {chaos: 50}}] },

    // ================= LATE PHASE (20+) =================
    {
        title: "expanded_title_092",
        desc: "expanded_desc_091",
        phase: "late",
        choices: [
            { text: "expanded_text_090", effect: { money: -20, approval: 10 } },
            { text: "expanded_text_089", effect: { dictatorship: 20, unrest: 50 } },
            { text: "expanded_text_088", effect: { polarization: 10 } }
        ]
    },
    {
        title: "expanded_title_087",
        desc: "expanded_desc_086",
        phase: "late",
        choices: [
            { text: "expanded_text_085", effect: { base_approval: 5, moderate_approval: -10 } },
            { text: "expanded_text_084", effect: { boredom: 5 } },
            { text: "expanded_text_083", effect: { cowardice: 5 } }
        ]
    },
    {
        title: "expanded_title_082",
        desc: "expanded_desc_081",
        phase: "late",
        choices: [
            { text: "expanded_text_080", effect: { deception: 5 } },
            { text: "expanded_text_079", effect: { absurdity: 5 } },
            { text: "expanded_text_078", effect: { weakness: 10 } }
        ]
    },
    {
        title: "expanded_title_077",
        desc: "expanded_desc_076",
        phase: "late",
        choices: [
            { text: "expanded_text_075", effect: { democracy: -50, survival: 20 } },
            { text: "expanded_text_074", effect: { money: 10 } },
            { text: "expanded_text_073", effect: { evidence_destruction: 10 } }
        ]
    },
    {
        title: "expanded_title_072",
        desc: "expanded_desc_071",
        phase: "late",
        choices: [
            { text: "expanded_text_070", effect: { strength: 10, division: 20 } },
            { text: "expanded_text_069", effect: { weakness: 5, peace: 5 } },
            { text: "expanded_text_068", effect: { safety: 10, mockery: 20 } }
        ]
    },
    {
        title: "expanded_title_067",
        desc: "expanded_desc_066",
        phase: "late",
        choices: [
            { text: "expanded_text_065", effect: { money: -50, corruption: 50 } },
            { text: "expanded_text_064", effect: { tyranny: 20 } },
            { text: "expanded_text_063", effect: { failure_risk: 50 } }
        ]
    },
    {
        title: "expanded_title_062",
        desc: "expanded_desc_061",
        phase: "late",
        choices: [
            { text: "expanded_text_060", effect: { treason: 10 } },
            { text: "expanded_text_059", effect: { greed: 10 } },
            { text: "expanded_text_058", effect: { humidity: 100 } }
        ]
    },
    {
        title: "expanded_title_057",
        desc: "expanded_desc_056",
        phase: "late",
        choices: [
            { text: "expanded_text_055", effect: { legacy: 10 } },
            { text: "expanded_text_054", effect: { civil_war_risk: 50 } },
            { text: "expanded_text_053", effect: { pettiness: 10 } }
        ]
    },
    {
        title: "expanded_title_052",
        desc: "expanded_desc_051",
        phase: "late",
        choices: [
            { text: "expanded_text_050", effect: { legacy: 5 } },
            { text: "expanded_text_049", effect: { fame: 10 } },
            { text: "expanded_text_048", effect: { peace: 10 } }
        ]
    },
    {
        title: "expanded_title_047",
        desc: "expanded_desc_046",
        phase: "late",
        choices: [
            { text: "expanded_text_045", effect: { world_survives: 1 } },
            { text: "expanded_text_044", effect: { accidental_launch_risk: 1 } },
            { text: "expanded_text_043", effect: { game_over: true } }
        ]
    },
    {
        title: "expanded_title_042",
        desc: "expanded_desc_041",
        phase: "late",
        choices: [
            { text: "expanded_text_040", effect: { corruption: 10, safety: 10 } },
            { text: "expanded_text_039", effect: { jail_risk: 80 } }
        ]
    },
    {
        title: "expanded_title_038",
        desc: "expanded_desc_037",
        phase: "late",
        choices: [
            { text: "expanded_text_036", effect: { theft: 10, money: 2 } },
            { text: "expanded_text_035", effect: { norms: 5 } }
        ]
    },
    {
        title: "expanded_title_034",
        desc: "expanded_desc_033",
        phase: "late",
        choices: [
            { text: "expanded_text_032", effect: { polite: 1 } },
            { text: "expanded_text_031", effect: { sad: 1 } },
            { text: "expanded_text_030", effect: { threat: 10 } }
        ]
    },
    {
        title: "expanded_title_029",
        desc: "expanded_desc_028",
        phase: "late",
        choices: [
            { text: "expanded_text_027", effect: { culture_war: 10 } },
            { text: "expanded_text_026", effect: { ego: 20 } }
        ]
    },
    {
        title: "expanded_title_025",
        desc: "expanded_desc_024",
        phase: "late",
        choices: [
            { text: "expanded_text_023", effect: { money: 10 } },
            { text: "expanded_text_022", effect: { humanity: 5 } }
        ]
    },
    {
        title: "expanded_title_021",
        desc: "expanded_desc_020",
        phase: "late",
        choices: [
            { text: "expanded_text_019", effect: { deception: 5 } },
            { text: "expanded_text_018", effect: { strength: 5 } }
        ]
    },
    {
        title: "expanded_title_017",
        desc: "expanded_desc_016",
        phase: "late",
        choices: [
            { text: "expanded_text_015", effect: { approval: 100 } },
            { text: "expanded_text_014", effect: { slavery: 100 } }
        ]
    },
    {
        title: "expanded_title_013",
        desc: "expanded_desc_012",
        phase: "late",
        choices: [
            { text: "expanded_text_011", effect: { tyranny: 5 } },
            { text: "expanded_text_010", effect: { money: 100 } }
        ]
    },
    {
        title: "expanded_title_009",
        desc: "expanded_desc_008",
        phase: "late",
        choices: [
            { text: "expanded_text_007", effect: { health: -5 } },
            { text: "expanded_text_006", effect: { class: -10 } }
        ]
    },
    {
        title: "expanded_title_005",
        desc: "expanded_desc_004",
        phase: "late",
        choices: [
            { text: "expanded_text_003", effect: { pettiness: 5 } },
            { text: "expanded_text_002", effect: { petty: 10 } },
            { text: "expanded_text_001", effect: { maturity: 100 } } // Rare
        ]
    }
);

window.GAME_DATA = window.GAME_DATA || {};
window.GAME_DATA.EVENTS_DB = window.GAME_DATA.EVENTS_DB || [];

// 基础事件库 (localized)
window.GAME_DATA.EVENTS_DB.push(
    // --- Early Phase ---
    {
        title: { zh: "就职典礼意外", en: "Inauguration Mishap", es: "Percance de Inauguración", fr: "Incident d'Inauguration", ja: "就任式のハプニング", ko: "취임식 사고", "zh-tw": "就職典禮意外" },
        desc: { zh: "在就职典礼上，你的演讲稿被风吹跑了。", en: "The wind blew away your speech at the inauguration.", es: "El viento se llevó tu discurso en la inauguración.", fr: "Le vent a emporté votre discours lors de l'inauguration.", ja: "就任式で、演説原稿が風で飛ばされました。", ko: "취임식에서 연설문이 바람에 날아갔습니다.", "zh-tw": "在就職典禮上，你的演講稿被風吹跑了。" },
        phase: "early",
        choices: [
            { 
                text: { zh: "即兴发挥 (赌一把)", en: "Improvise (Risk)", es: "Improvisar (Riesgo)", fr: "Improviser (Risque)", ja: "即興で話す (賭け)", ko: "즉흥 연설 (도박)", "zh-tw": "即興發揮 (賭一把)" }, 
                effect: { approval_chance: 0.5, success: { approval: 10 }, fail: { approval: -10 } } 
            },
            { 
                text: { zh: "讲个笑话 (稳妥)", en: "Tell a Joke (Safe)", es: "Contar un Chiste (Seguro)", fr: "Raconter une Blague (Sûr)", ja: "冗談を言う (安全)", ko: "농담하기 (안전)", "zh-tw": "講個笑話 (穩妥)" }, 
                effect: { approval: 2 } 
            }
        ]
    },
    {
        title: { zh: "白宫闹鬼", en: "White House Haunted", es: "Casa Blanca Embrujada", fr: "Maison Blanche Hantée", ja: "ホワイトハウスの幽霊", ko: "백악관의 유령", "zh-tw": "白宮鬧鬼" },
        desc: { zh: "特勤局报告说林肯的卧室有奇怪的声音。", en: "Secret Service reports strange noises in Lincoln's bedroom.", es: "El Servicio Secreto reporta ruidos extraños en la habitación de Lincoln.", fr: "Les services secrets signalent des bruits étranges dans la chambre de Lincoln.", ja: "シークレットサービスがリンカーンの寝室で奇妙な音を報告しました。", ko: "비밀경호국이 링컨의 침실에서 이상한 소리를 보고했습니다.", "zh-tw": "特勤局報告說林肯的臥室有奇怪的聲音。" },
        phase: "early",
        choices: [
            { 
                text: { zh: "请驱魔师", en: "Hire Exorcist", es: "Contratar Exorcista", fr: "Engager un Exorciste", ja: "エクソシストを呼ぶ", ko: "엑소시스트 고용", "zh-tw": "請驅魔師" }, 
                effect: { approval: -5, money: -0.1 } 
            }, 
            { 
                text: { zh: "是老鼠", en: "It's Rats", es: "Son Ratas", fr: "Ce sont des Rats", ja: "ネズミだ", ko: "쥐일 뿐이다", "zh-tw": "是老鼠" }, 
                effect: { approval: 0, money: -0.01 } 
            }
        ]
    },
    // --- Mid Phase ---
    {
        title: { zh: "流行病爆发", en: "Epidemic Outbreak", es: "Brote Epidémico", fr: "Épidémie", ja: "疫病発生", ko: "전염병 발생", "zh-tw": "流行病爆發" },
        desc: { zh: "一种新型流感正在传播。", en: "A new flu strain is spreading.", es: "Una nueva cepa de gripe se está propagando.", fr: "Une nouvelle souche de grippe se propage.", ja: "新型インフルエンザが広まっています。", ko: "신종 독감이 퍼지고 있습니다.", "zh-tw": "一種新型流感正在傳播。" },
        phase: "mid",
        choices: [
            { 
                text: { zh: "封锁城市", en: "Lockdown", es: "Confinamiento", fr: "Confinement", ja: "都市封鎖", ko: "도시 봉쇄", "zh-tw": "封鎖城市" }, 
                effect: { approval: -5, money: -2, market: "crash" } 
            },
            { 
                text: { zh: "只是流感", en: "Just Flu", es: "Es solo gripe", fr: "Juste une grippe", ja: "ただの風邪", ko: "단순 독감", "zh-tw": "只是流感" }, 
                effect: { approval: 5, money: 0, risk: "high" } 
            }
        ]
    },
    // --- Late Phase ---
    {
        title: { zh: "被弹劾风险", en: "Impeachment Risk", es: "Riesgo de Destitución", fr: "Risque de Destitution", ja: "弾劾のリスク", ko: "탄핵 위험", "zh-tw": "被彈劾風險" },
        desc: { zh: "反对党掌握了你的一份秘密录音。", en: "The opposition has a secret recording of you.", es: "La oposición tiene una grabación secreta tuya.", fr: "L'opposition a un enregistrement secret de vous.", ja: "野党があなたの秘密録音を入手しました。", ko: "야당이 당신의 비밀 녹음 파일을 입수했습니다.", "zh-tw": "反對黨掌握了你的一份秘密錄音。" },
        phase: "late",
        choices: [
            { 
                text: { zh: "销毁证据 (阴谋)", en: "Destroy Evidence", es: "Destruir Evidencia", fr: "Détruire les Preuves", ja: "証拠隠滅", ko: "증거 인멸", "zh-tw": "銷毀證據 (陰謀)" }, 
                effect: { approval: -5, money: -1 } 
            },
            { 
                text: { zh: "公开道歉", en: "Public Apology", es: "Disculpa Pública", fr: "Excuses Publiques", ja: "公式謝罪", ko: "공개 사과", "zh-tw": "公開道歉" }, 
                effect: { approval: -10 } 
            }
        ]
    },
    // --- Any Phase ---
    {
        title: { zh: "发现UFO", en: "UFO Sighting", es: "Avistamiento OVNI", fr: "Observation OVNI", ja: "UFO発見", ko: "UFO 발견", "zh-tw": "發現UFO" },
        desc: { zh: "军方雷达发现了不明飞行物。", en: "Military radar detected a UFO.", es: "El radar militar detectó un OVNI.", fr: "Le radar militaire a détecté un OVNI.", ja: "軍のレーダーが未確認飛行物体を探知しました。", ko: "군 레이더가 미확인 비행 물체를 감지했습니다.", "zh-tw": "軍方雷達發現了不明飛行物。" },
        phase: "any",
        choices: [
            { 
                text: { zh: "公开真相", en: "Reveal Truth", es: "Revelar Verdad", fr: "Révéler la Vérité", ja: "真実を公開", ko: "진실 공개", "zh-tw": "公開真相" }, 
                effect: { approval: 5, market: "crash" } 
            },
            { 
                text: { zh: "绝密封存", en: "Cover Up", es: "Encubrir", fr: "Dissimuler", ja: "隠蔽", ko: "은폐", "zh-tw": "絕密封存" }, 
                effect: { approval: -2 } 
            }
        ]
    }
);

window.GAME_DATA = window.GAME_DATA || {};
window.GAME_DATA.CARD_DB = window.GAME_DATA.CARD_DB || [];

window.GAME_DATA.CARD_DB.push(
    // ---------------- EARLY PHASE (Capital Accumulation) ----------------
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "大宇企业减税", en: "Corporate Tax Cuts", es: "Recortes Impuestos Corp.", fr: "Baisse d'Impôts", ja: "法人税減税", ko: "법인세 감세", "zh-tw": "企對減稅" },
        desc: { zh: "如果你给那些还在穿尿布的亿万富翁减税，他们发誓会创造就业机会。", en: "Tax cuts for billionaires who promise jobs.", es: "Recortes para multimillonarios que prometen empleos.", fr: "Baisse d'impôts pour les milliardaires qui promettent des emplois.", ja: "億万長者に減税すれば、雇用が生まれると彼らは誓う。", ko: "억만장자에게 감세해주면 일자리를 약속합니다.", "zh-tw": "如果你給那些還在穿尿布的億萬富翁減稅，他們發誓會創造就業機會。" },
        cost: 0,
        phase: "early",
        effect: { money: -5, approval: -5, corporate_support: 10 }
    },
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "外包所有清洁工", en: "Outsource Janitors", es: "Subcontratar Conserjes", fr: "Externaliser Nettoyage", ja: "清掃業務の外注", ko: "청소 용역 아웃소싱", "zh-tw": "外包所有清潔工" },
        desc: { zh: "为什么要在国内支付最低工资，当我们可以在海外支付更少？", en: "Why pay minimum wage here when we can pay less overseas?", es: "¿Por qué pagar salario mínimo aquí si podemos pagar menos fuera?", fr: "Pourquoi payer le SMIC ici quand on peut payer moins ailleurs ?", ja: "海外で安く済むのに、なぜ国内で最低賃金を払うのか？", ko: "해외에서 더 적게 줄 수 있는데 왜 최저임금을 지급합니까?", "zh-tw": "為什麼要在國內支付最低工資，當我們可以在海外支付更少？" },
        cost: 1,
        phase: "early",
        effect: { money: 10, approval: -10, unemployment: 1 }
    },
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "出售国家公园采矿权", en: "Sell Park Mining Rights", es: "Vender Derechos Mineros", fr: "Vendre Droits Miniers", ja: "国立公園の採掘権売却", ko: "국립공원 채굴권 판매", "zh-tw": "出售國家公園採礦權" },
        desc: { zh: "那并不是真正的‘老忠实泉’，那只是未开发的‘液体黄金’。", en: "It's not 'Old Faithful', it's undeveloped liquid gold.", es: "No es un géiser, es oro líquido sin desarrollar.", fr: "Ce n'est pas un geyser, c'est de l'or liquide.", ja: "それは間欠泉ではなく、未開発の液体黄金だ。", ko: "그건 간헐천이 아니라 개발되지 않은 액체 황금입니다.", "zh-tw": "那並不是真正的‘老忠實泉’，那只是未開發的‘液體黃金’。" },
        cost: 2,
        phase: "early",
        effect: { money: 15, approval: -15, environment: -10 }
    },
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "小额信贷‘改革’", en: "Microloan 'Reform'", es: "Reforma Microcréditos", fr: "Réforme Microcrédit", ja: "マイクロローン「改革」", ko: "소액대출 '개혁'", "zh-tw": "小額信貸‘改革’" },
        desc: { zh: "实际上只是允许掠夺性贷款合法化，但名字听起来很慈善。", en: "Legalizing predatory lending, but sounds charitable.", es: "Legaliza préstamos predatorios, suena caritativo.", fr: "Légalise les prêts prédateurs, sonne charitable.", ja: "略奪的貸付の合法化だが、響きは慈悲深い。", ko: "약탈적 대출 합법화지만 이름은 자선적으로 들립니다.", "zh-tw": "實際上只是允許掠奪性貸款合法化，但名字聽起來很慈善。" },
        cost: 1,
        phase: "early",
        effect: { money: 5, approval: -5 }
    },
    
    // ---------------- MID PHASE (Market Manipulation) ----------------
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "印钞厂夜班", en: "Night Shift Minting", es: "Turno Noche Casa Moneda", fr: "Nuit à la Monnaie", ja: "造幣局の夜勤", ko: "조폐국 야간 근무", "zh-tw": "印鈔廠夜班" },
        desc: { zh: "通货膨胀只是数字游戏。只要印钞机不卡纸，一切都好。", en: "Inflation is just a number. Keep printing.", es: "La inflación es solo un número. Sigue imprimiendo.", fr: "L'inflation est juste un chiffre. Continuez d'imprimer.", ja: "インフレはただの数字。印刷し続けろ。", ko: "인플레이션은 숫자에 불과합니다. 계속 찍어내세요.", "zh-tw": "通貨膨脹只是數字遊戲。只要印鈔機不卡紙，一切都好。" },
        cost: 0,
        phase: "mid",
        effect: { money: 20, inflation: 5, approval: 5 }
    },
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "私人监狱上市", en: "Private Prison IPO", es: "OPI Prisión Privada", fr: "IPO Prison Privée", ja: "民間刑務所IPO", ko: "사설 교도소 상장", "zh-tw": "私人監獄上市" },
        desc: { zh: "犯罪率上升？不，那是‘客户群增长’。", en: "Crime rate up? No, that's 'customer growth'.", es: "¿Crimen sube? No, es 'crecimiento de clientes'.", fr: "Criminalité en hausse ? Non, 'croissance client'.", ja: "犯罪率上昇？いや、「顧客成長」だ。", ko: "범죄율 증가? 아니요, '고객 증가'입니다.", "zh-tw": "犯罪率上升？不，那是‘客戶群增長’。" },
        cost: 3,
        phase: "mid",
        effect: { money: 12, approval: -8, law_order: 5 }
    },
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "贸易战推特风暴", en: "Trade War Tweet", es: "Tuit Guerra Comercial", fr: "Tweet Guerre Comm.", ja: "貿易戦争ツイート", ko: "무역 전쟁 트윗", "zh-tw": "貿易戰推特風暴" },
        desc: { zh: "在凌晨3点发推特威胁对盟友加征关税。市场喜欢波动性！", en: "Threaten tariffs at 3AM. Market loves volatility!", es: "Amenaza aranceles a las 3AM. ¡El mercado ama la volatilidad!", fr: "Menace tarifs à 3h. Le marché aime la volatilité !", ja: "午前3時に関税で脅す。市場は変動を好む！", ko: "새벽 3시에 관세로 위협. 시장은 변동성을 좋아해!", "zh-tw": "在凌晨3點發推特威脅對盟友加徵關稅。市場喜歡波動性！" },
        cost: 1,
        phase: "mid",
        effect: { money: -5, approval: 5, volatility: 10 }
    },
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "全民基本‘彩票’", en: "UBI Lottery", es: "Lotería RBU", fr: "Loterie RBU", ja: "UBI宝くじ", ko: "기본소득 복권", "zh-tw": "全民基本‘彩票’" },
        desc: { zh: "不是收入，是彩票。每周抽一人发一亿，大家都觉得自己会赢。", en: "Weekly lottery for $100M. Everyone feels lucky.", es: "Lotería semanal de $100M. Todos se sienten con suerte.", fr: "Loterie hebdo 100M$. Tout le monde se sent chanceux.", ja: "毎週1億ドルの宝くじ。みんな運が良いと感じる。", ko: "매주 1억 달러 복권. 모두가 운이 좋다고 느낍니다.", "zh-tw": "不是收入，是彩票。每周抽一人發一億，大家都覺得自己會贏。" },
        cost: 5,
        phase: "mid",
        effect: { money: -2, approval: 10, stupidity: 5 }
    },
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "将空气私有化", en: "Privatize Air", es: "Privatizar Aire", fr: "Privatiser l'Air", ja: "空気の民営化", ko: "공기 사유화", "zh-tw": "將空氣私有化" },
        desc: { zh: "清洁空气是一种服务，不是权利。安装智能呼吸计。", en: "Clean air is a service. Install smart breath meters.", es: "El aire limpio es un servicio. Instala medidores.", fr: "L'air pur est un service. Installez des compteurs.", ja: "きれいな空気はサービスだ。スマート呼吸メーターを設置せよ。", ko: "깨끗한 공기는 서비스입니다. 스마트 호흡 측정기를 설치하세요.", "zh-tw": "清潔空氣是一種服務，不是權利。安裝智能呼吸計。" },
        cost: 4,
        phase: "mid",
        effect: { money: 25, approval: -30, environment: -5 }
    },
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "加密货币大亨晚宴", en: "Crypto Gala", es: "Gala Cripto", fr: "Gala Crypto", ja: "仮想通貨ガラ", ko: "크립토 갈라", "zh-tw": "加密貨幣大亨晚宴" },
        desc: { zh: "他们穿得很奇怪，谈论着‘去中心化’，但他们的支票在这个中心化的银行里兑现得很好。", en: "Weird clothes, decentralized talk, centralized checks.", es: "Ropa rara, charla descentralizada, cheques centralizados.", fr: "Vêtements bizarres, discours décentralisé, chèques centralisés.", ja: "奇妙な服、分散型の話、中央集権的な小切手。", ko: "이상한 옷, 탈중앙화 이야기, 중앙화된 수표.", "zh-tw": "他們穿得很奇怪，談論著‘去中心化’，但他們的支票在這個中心化的銀行裡兌現得很好。" },
        cost: 2,
        phase: "mid",
        effect: { money: 15, approval: -5 }
    },
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "削减教育预算", en: "Cut Education", es: "Cortar Educación", fr: "Couper Éducation", ja: "教育予算削減", ko: "교육 예산 삭감", "zh-tw": "削減教育預算" },
        desc: { zh: "聪明的选民是危险的选民。让他们忙着还贷吧。", en: "Smart voters are dangerous. Keep them in debt.", es: "Votantes listos son peligrosos. Mantenlos endeudados.", fr: "Votants malins sont dangereux. Gardez-les endettés.", ja: "賢い有権者は危険だ。借金漬けにしておけ。", ko: "똑똑한 유권자는 위험합니다. 빚에 허덕이게 하세요.", "zh-tw": "聰明的選民是危險的選民。讓他們忙著還貸吧。" },
        cost: 0,
        phase: "mid",
        effect: { money: 10, approval: -10, education: -5 }
    },
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "医疗‘简化’法案", en: "Healthcare 'Streamline'", es: "Simplificar Salud", fr: "Simplifier Santé", ja: "医療「簡素化」", ko: "의료 '간소화'", "zh-tw": "醫療‘簡化’法案" },
        desc: { zh: "用‘祝你好运’贺卡代替昂贵的手术。", en: "Replace surgeries with 'Get Well' cards.", es: "Reemplaza cirugías con tarjetas 'Mejórate'.", fr: "Remplacez les chirurgies par des cartes de vœux.", ja: "手術を「お大事に」カードに置き換える。", ko: "수술을 '쾌유 기원' 카드로 대체합니다.", "zh-tw": "用‘祝你好運’賀卡代替昂貴的手術。" },
        cost: 1,
        phase: "mid",
        effect: { money: 15, approval: -20, health: -10 }
    },
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "强制购买国产汽车", en: "Force Domestic Cars", es: "Forzar Autos Locales", fr: "Forcer Voitures Locales", ja: "国産車強制購入", ko: "국산차 강매", "zh-tw": "強制購買國產汽車" },
        desc: { zh: "它们虽然漏油且没有刹车，但它们是我们的漏油没刹车的车！", en: "They leak oil, but they are OUR leaking cars!", es: "Gotean aceite, ¡pero son NUESTROS autos!", fr: "Elles fuient, mais ce sont NOS voitures !", ja: "オイル漏れするが、我々のオイル漏れ車だ！", ko: "기름이 새지만, 우리의 기름 새는 차입니다!", "zh-tw": "它們雖然漏油且沒有剎車，但它們是我們的漏油沒剎車的車！" },
        cost: 2,
        phase: "mid",
        effect: { money: 8, approval: 5, industry: 5 }
    },
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "取消食品安全局", en: "Abolish FDA", es: "Abolir FDA", fr: "Abolir FDA", ja: "FDA廃止", ko: "식약청 폐지", "zh-tw": "取消食品安全局" },
        desc: { zh: "这一直是餐饮业创新的主要障碍。有点大肠杆菌没杀过人...大概。", en: "E.coli never killed... well, many people.", es: "E.coli nunca mató... bueno, a muchos.", fr: "E.coli n'a jamais tué... enfin, beaucoup.", ja: "大腸菌は人を殺さない...まあ、たくさんは。", ko: "대장균은 사람을 죽이지 않습니다... 뭐, 많이는 아니죠.", "zh-tw": "這一直是餐飲業創新的主要障礙。有點大腸桿菌沒殺過人...大概。" },
        cost: 1,
        phase: "mid",
        effect: { money: 5, approval: -5, health: -5 }
    },
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "庞氏骗局合法化", en: "Legalize Ponzi", es: "Legalizar Ponzi", fr: "Légaliser Ponzi", ja: "ポンジ・スキーム合法化", ko: "폰지 사기 합법화", "zh-tw": "龐氏騙局合法化" },
        desc: { zh: "称之为‘多层次营销刺激计划’。", en: "Call it 'Multi-level Stimulus'.", es: "Llámalo 'Estímulo Multinivel'.", fr: "Appelez ça 'Stimulation Multiniveau'.", ja: "「マルチレベル刺激策」と呼ぼう。", ko: "'다단계 부양책'이라고 부르세요.", "zh-tw": "稱之為‘多層次營銷刺激計畫’。" },
        cost: 3,
        phase: "mid",
        effect: { money: 20, approval: 5, economy_stability: -20 }
    },
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "征收‘呼吸税’", en: "Breathing Tax", es: "Impuesto Respirar", fr: "Taxe Respiration", ja: "呼吸税", ko: "호흡세", "zh-tw": "徵收‘呼吸稅’" },
        desc: { zh: "虽然不受欢迎，但大家都得呼吸，逃税率极低。", en: "Unpopular, but evasion rate is low.", es: "Impopular, pero baja evasión.", fr: "Impopulaire, mais faible évasion.", ja: "不人気だが、脱税率は低い。", ko: "인기는 없지만 탈세율은 낮습니다.", "zh-tw": "雖然不受歡迎，但大家都得呼吸，逃稅率極低。" },
        cost: 0,
        phase: "mid",
        effect: { money: 30, approval: -40 }
    },
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "出售月球地产", en: "Sell Moon Land", es: "Vender Luna", fr: "Vendre Lune", ja: "月面販売", ko: "달 토지 판매", "zh-tw": "出售月球地產" },
        desc: { zh: "谁在乎国际条约？先卖了再说。", en: "Who cares about treaties? Sell it.", es: "¿A quién le importan los tratados? Véndela.", fr: "Peu importe les traités ? Vendez-la.", ja: "条約なんて気にするな？売ってしまえ。", ko: "조약이 무슨 상관입니까? 파세요.", "zh-tw": "誰在乎國際條約？先賣了再說。" },
        cost: 2,
        phase: "mid",
        effect: { money: 10, approval: 2 }
    },
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "大麻全面合法化并垄断", en: "Weed Monopoly", es: "Monopolio Marihuana", fr: "Monopole Cannabis", ja: "大麻独占", ko: "대마 독점", "zh-tw": "大麻全面合法化並壟斷" },
        desc: { zh: "国家现在是唯一的毒贩。利润高得惊人。", en: "The State is the only dealer now.", es: "El Estado es el único distribuidor.", fr: "L'État est le seul dealer maintenant.", ja: "国家が唯一の密売人だ。", ko: "이제 국가가 유일한 딜러입니다.", "zh-tw": "國家現在是唯一的毒販。利潤高得驚人。" },
        cost: 5,
        phase: "mid",
        effect: { money: 25, approval: 15, productivity: -5 }
    },
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "机器人替代公务员", en: "Robot Bureaucrats", es: "Burócratas Robots", fr: "Bureaucrates Robots", ja: "ロボット官僚", ko: "로봇 공무원", "zh-tw": "機器人替代公務員" },
        desc: { zh: "它们不会抱怨，不会罢工，也不会在厕所里刷手机。", en: "No complaints, no strikes, no bathroom breaks.", es: "Sin quejas, sin huelgas, sin pausas de baño.", fr: "Pas de plaintes, pas de grèves, pas de pauses.", ja: "文句もストライキもトイレ休憩もない。", ko: "불만도, 파업도, 화장실 휴식도 없습니다.", "zh-tw": "它們不會抱怨，不會罷工，也不會在廁所裡刷手機。" },
        cost: 4,
        phase: "mid",
        effect: { money: 10, approval: -10, efficiency: 10 }
    },
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "虚拟股市", en: "Virtual Stock Market", es: "Bolsa Virtual", fr: "Bourse Virtuelle", ja: "仮想株式市場", ko: "가상 주식 시장", "zh-tw": "虛擬股市" },
        desc: { zh: "无论实际经济如何，股市只涨不跌。这就是算法的力量。", en: "Algorithm ensures stocks only go up.", es: "El algoritmo asegura que las acciones suban.", fr: "L'algorithme assure que les actions montent.", ja: "アルゴリズムで株価は上がり続ける。", ko: "알고리즘이 주가 상승을 보장합니다.", "zh-tw": "無論實際經濟如何，股市只漲不跌。這就是算法的力量。" },
        cost: 6,
        phase: "mid",
        effect: { money: 0, approval: 10, bubble: 20 }
    },

    // ---------------- LATE PHASE (Economic Collapse / Legacy) ----------------
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "出售国名为广告位", en: "Sell Country Name", es: "Vender Nombre País", fr: "Vendre Nom Pays", ja: "国名の命名権売却", ko: "국가명 판매", "zh-tw": "出售國名為廣告位" },
        desc: { zh: "美利坚百事可乐合众国？听起来很解渴。", en: "United States of Pepsi? Sounds refreshing.", es: "¿Estados Unidos de Pepsi? Suena refrescante.", fr: "États-Unis de Pepsi ? Rafraîchissant.", ja: "ペプシ合衆国？爽やかだね。", ko: "펩시 미합중국? 상쾌하게 들리네요.", "zh-tw": "美利堅百事可樂合眾國？聽起來很解渴。" },
        cost: 0,
        phase: "late",
        effect: { money: 100, approval: -50, dignity: -100 }
    },
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "没收所有养老金", en: "Seize Pensions", es: "Confiscar Pensiones", fr: "Saisir Pensions", ja: "年金没収", ko: "연금 몰수", "zh-tw": "沒收所有養老金" },
        desc: { zh: "为了国家的未来，或是为了我的退休别墅。", en: "For the country... or my retirement villa.", es: "Por el país... o mi villa de retiro.", fr: "Pour le pays... ou ma villa de retraite.", ja: "国のため...あるいは私の隠居別荘のため。", ko: "나라를 위해... 아니면 내 은퇴 별장을 위해.", "zh-tw": "為了國家的未來，或是為了我的退休別墅。" },
        cost: 5,
        phase: "late",
        effect: { money: 50, approval: -60, rebellion_risk: 20 }
    },
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "引发惡性通货膨胀", en: "Hyperinflation", es: "Hiperinflación", fr: "Hyperinflation", ja: "ハイパーインフレ", ko: "초인플레이션", "zh-tw": "引發惡性通貨膨脹" },
        desc: { zh: "如果每个人都是亿万富翁，就没有人是穷人了！面包现在卖一万亿。", en: "If everyone is a billionaire, no one is poor!", es: "¡Si todos son millonarios, nadie es pobre!", fr: "Si tout le monde est milliardaire, personne ne l'est !", ja: "全員が億万長者なら、貧乏人はいない！", ko: "모두가 억만장자라면, 가난한 사람은 없습니다!", "zh-tw": "如果每個人都是億萬富翁，就沒有人是窮人了！麵包現在賣一萬億。" },
        cost: 0,
        phase: "late",
        effect: { money: 0, approval: -30, inflation: 100 }
    },
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "最后的私有化：军队", en: "Privatize Army", es: "Privatizar Ejército", fr: "Privatiser Armée", ja: "軍隊の民営化", ko: "군대 사유화", "zh-tw": "最後的私有化：軍隊" },
        desc: { zh: "黑水公司接管国防部。这是一个巨大的成本节约措施。", en: "Blackwater takes over DoD. Big savings.", es: "Blackwater toma Defensa. Grandes ahorros.", fr: "Blackwater prend la Défense. Grosses économies.", ja: "ブラックウォーターが国防総省を引き継ぐ。大幅節約。", ko: "블랙워터가 국방부를 인수합니다. 엄청난 절약이죠.", "zh-tw": "黑水公司接管國防部。這是一個巨大的成本節約措施。" },
        cost: 5,
        phase: "late",
        effect: { money: 40, approval: -20, coup_risk: 30 }
    },
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "主权债务违约", en: "Default on Debt", es: "Impago de Deuda", fr: "Défaut de Dette", ja: "債務不履行", ko: "채무 불이행", "zh-tw": "主權債務違約" },
        desc: { zh: "只要说‘我不欠这笔钱’，钱就不见了。经济学家讨厌这一招！", en: "Just say 'I don't owe it'. Economists hate this!", es: "Di 'No lo debo'. ¡Los economistas odian esto!", fr: "Dites 'Je ne dois rien'. Les économistes détestent ça !", ja: "「借りてない」と言えばいい。経済学者はこれを嫌う！", ko: "그냥 '안 갚아'라고 하세요. 경제학자들이 싫어하는 방법이죠!", "zh-tw": "只要說‘我不欠這筆錢’，錢就不見了。經濟學家討厭這一招！" },
        cost: 0,
        phase: "late",
        effect: { money: 0, approval: 10, international_standing: -50 }
    },
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "黄金降落伞", en: "Golden Parachute", es: "Paracaídas de Oro", fr: "Parachute Doré", ja: "ゴールデンパラシュート", ko: "황금 낙하산", "zh-tw": "黃金降落傘" },
        desc: { zh: "准备好你的逃生路线。把国库里的金条都搬上私人飞机。", en: "Load the gold onto the private jet.", es: "Carga el oro en el jet privado.", fr: "Chargez l'or dans le jet privé.", ja: "プライベートジェットに金を積み込め。", ko: "개인 전용기에 금을 실으세요.", "zh-tw": "準備好你的逃生路線。把國庫裡的金條都搬上私人飛機。" },
        cost: 8,
        phase: "late",
        effect: { money: -20, personal_wealth: 100, approval: -100 }
    },
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "发行‘爱国者’NFT", en: "Patriot NFTs", es: "NFTs Patriotas", fr: "NFTs Patriotes", ja: "パトリオットNFT", ko: "애국자 NFT", "zh-tw": "發行‘愛國者’NFT" },
        desc: { zh: "JPEG图片能救国？也许能救你的银行账户。", en: "JPEGs save the nation? Or your bank account.", es: "¿JPEGs salvan la nación? O tu cuenta.", fr: "Les JPEGs sauvent la nation ? Ou votre compte.", ja: "JPEGが国を救う？あるいはあなたの口座を。", ko: "JPEG가 나라를 구한다고요? 아니면 당신 계좌를 구하겠죠.", "zh-tw": "JPEG圖片能救國？也許能救你的銀行帳戶。" },
        cost: 2,
        phase: "late",
        effect: { money: 5, approval: -5 }
    },
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "向火星殖民地收税", en: "Tax Mars Colony", es: "Impuesto Marte", fr: "Taxe Colonie Mars", ja: "火星植民地税", ko: "화성 식민지 세금", "zh-tw": "向火星殖民地收稅" },
        desc: { zh: "虽然还没建成，但可以预征。", en: "Not built yet, but we can pre-tax it.", es: "No construido, pero podemos pre-cargarlo.", fr: "Pas encore construit, mais on peut pré-taxer.", ja: "まだないが、前徴収できる。", ko: "아직 없지만 미리 과세할 수 있습니다.", "zh-tw": "雖然還沒建成，但可以預徵。" },
        cost: 1,
        phase: "late",
        effect: { money: 8, approval: -2 }
    },
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "解散中央银行", en: "End the Fed", es: "Acabar Reserva Fed", fr: "Fin de la Fed", ja: "中央銀行解散", ko: "연준 폐지", "zh-tw": "解散中央銀行" },
        desc: { zh: "回到以贝壳和闪亮石头为货币的时代。", en: "Return to seashells and shiny rocks.", es: "Volver a conchas y piedras brillantes.", fr: "Retour aux coquillages et pierres brillantes.", ja: "貝殻と光る石の時代に戻ろう。", ko: "조개껍데기와 반짝이는 돌의 시대로 돌아갑시다.", "zh-tw": "回到以貝殼和閃亮石頭為貨幣的時代。" },
        cost: 5,
        phase: "late",
        effect: { money: -10, chaos: 50 }
    },
    {
        type: { zh: "经济", en: "Economy", es: "Economía", fr: "Économie", ja: "経済", ko: "경제", "zh-tw": "經濟" },
        title: { zh: "卖掉加利福尼亚", en: "Sell California", es: "Vender California", fr: "Vendre Californie", ja: "カリフォルニア売却", ko: "캘리포니아 매각", "zh-tw": "賣掉加利福尼亞" },
        desc: { zh: "真的，那是谁的？我们要把那块地卖给科技巨头建立主权国家。", en: "Sell it to tech giants for a sovereign state.", es: "Véndelo a gigantes tech como estado soberano.", fr: "Vendez-le aux géants tech pour un état souverain.", ja: "IT大手に主権国家として売却しよう。", ko: "테크 거물들에게 주권 국가로 파세요.", "zh-tw": "真的，那是誰的？我們要把那塊地賣給科技巨頭建立主權國家。" },
        cost: 5,
        phase: "late",
        effect: { money: 200, approval: -20, territory: -1 }
    }
);

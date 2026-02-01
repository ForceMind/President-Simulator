window.GAME_DATA = window.GAME_DATA || {};

window.GAME_DATA.CHARACTERS = [
    // --- 经典 (Classic) ---
    { 
        id: 1, 
        name: { zh: '金发大亨', en: 'Blonde Tycoon', es: 'Magnate Rubio', fr: 'Magnat Blond', ja: '金髪の富豪', ko: '금발의 재벌', 'zh-tw': '金髮大亨' },
        icon: '👱‍♂️', 
        desc: { zh: '商业帝国的继承人，擅长操纵媒体。', en: 'Heir to a business empire, master of media manipulation.', es: 'Heredero de un imperio, maestro de los medios.', fr: 'Héritier d\'un empire, maître des médias.', ja: 'ビジネス帝国の後継者。メディア操作が得意。', ko: '상업 제국의 계승자, 미디어 조작의 달인.', 'zh-tw': '商業帝國的繼承人，擅長操縱媒體。' },
        gender: 'male',
        money: 20, 
        skillName: { zh: '推特治国', en: 'Tweet Diplomacy', es: 'Diplomacia Twitter', fr: 'Twitter Diplomatie', ja: 'ツイッター政治', ko: '트위터 정치', 'zh-tw': '推特治國' },
        skillDesc: { zh: '消耗$2亿，支持率定向增加 15%。', en: 'Cost $2B. Approval +15%.', es: 'Cuesta $2B. Aprobación +15%.', fr: 'Coût 2Mrd $. Popularité +15%.', ja: 'コスト20億ドル。支持率+15%。', ko: '비용 $20억. 지지율 +15%.', 'zh-tw': '消耗$2億，支持率定向增加 15%。' },
        skillCostMoney: 2
    },
    { 
        id: 2, 
        name: { zh: '资深政客', en: 'Senior Politician', es: 'Político Veterano', fr: 'Politicien Vétéran', ja: 'ベテラン政治家', ko: '노련한 정치인', 'zh-tw': '資深政客' },
        icon: '👴🏻', 
        desc: { zh: '在华盛顿摸爬滚打40年的老狐狸。', en: 'An old fox who has survived Washington for 40 years.', es: 'Un viejo zorro que ha sobrevivido a Washington por 40 años.', fr: 'Un vieux renard avec 40 ans d\'expérience à Washington.', ja: 'ワシントンで40年生き抜いた古狸。', ko: '워싱턴에서 40년을 버틴 늙은 여우.', 'zh-tw': '在華盛頓摸爬滾打40年的老狐狸。' },
        gender: 'male',
        money: 5, 
        skillName: { zh: '深层政府', en: 'Deep State', es: 'Estado Profundo', fr: 'État Profond', ja: 'ディープステート', ko: '딥 스테이트', 'zh-tw': '深層政府' },
        skillDesc: { zh: '本回合行动点+2，但只会抽到阴谋/经济类卡牌。', en: '+2 AP this turn, but only draw Conspiracy/Economy cards.', es: '+2 AP este turno, solo cartas Conspiración/Economía.', fr: '+2 PA ce tour, pioche uniquement Complot/Économie.', ja: '今ターンAP+2、ただし陰謀/経済カードのみ引く。', ko: '이번 턴 AP +2, 하지만 음모/경제 카드만 뽑음.', 'zh-tw': '本回合行動點+2，但只會抽到陰謀/經濟類卡牌。' },
        skillCostMoney: 0
    },
    { 
        id: 3, 
        name: { zh: '科技新贵', en: 'Tech Mogul', es: 'Magnate Tech', fr: 'Magnat Tech', ja: 'IT長者', ko: '테크 거물', 'zh-tw': '科技新貴' },
        icon: '🧑🏻‍💻', 
        desc: { zh: '亚裔科技巨头，相信算法能解决一切。', en: 'Asian tech giant, believes algorithms solve everything.', es: 'Gigante tech, cree que los algoritmos lo resuelven todo.', fr: 'Géant de la tech, croit aux algorithmes.', ja: 'IT大手。アルゴリズムが全てを解決すると信じている。', ko: '아시아계 테크 거물, 알고리즘 만능주의자.', 'zh-tw': '亞裔科技巨頭，相信算法能解決一切。' },
        gender: 'male',
        money: 50, 
        skillName: { zh: '内幕交易', en: 'Insider Trading', es: 'Información Privilegiada', fr: 'Délit d\'Initié', ja: 'インサイダー取引', ko: '내부자 거래', 'zh-tw': '內幕交易' },
        skillDesc: { zh: '下一次投资必定盈利，且收益翻倍。', en: 'Next investment guaranteed profit, double return.', es: 'Próxima inversión ganancia asegurada y doble.', fr: 'Prochain investissement gagnant garanti, retour doublé.', ja: '次の投資は確実に利益、かつ収益2倍。', ko: '다음 투자 무조건 수익, 이익 2배.', 'zh-tw': '下一次投資必定盈利，且收益翻倍。' },
        skillCostMoney: 0
    },
    { 
        id: 4, 
        name: { zh: '退役将军', en: 'Retired General', es: 'General Retirado', fr: 'Général Retraité', ja: '退役将軍', ko: '퇴역 장군', 'zh-tw': '退役將軍' },
        icon: '👮🏿‍♂️', 
        desc: { zh: '以强硬著称的前国防部长。', en: 'Former Defense Secretary known for being tough.', es: 'Ex Secretario de Defensa conocido por su dureza.', fr: 'Ancien Secrétaire à la Défense, connu pour sa fermeté.', ja: '強硬派として知られる元国防長官。', ko: '강경파로 알려진 전 국방장관.', 'zh-tw': '以強硬著稱的前國防部長。' },
        gender: 'male',
        money: 3, 
        skillName: { zh: '军事戒严', en: 'Martial Law', es: 'Ley Marcial', fr: 'Loi Martiale', ja: '戒厳令', ko: '계엄령', 'zh-tw': '軍事戒嚴' },
        skillDesc: { zh: '消耗20%支持率，强制镇压反对派，本月免疫弹劾，获$5亿军费。', en: '-20% Approval, suppress opposition, immune to impeachment, +$5B.', es: '-20% Aprobación, suprime oposición, inmune a destitución, +$5B.', fr: '-20% Popularité, supprime l\'opposition, immunité destitution, +5 Mrd $.', ja: '支持率-20%、反対派鎮圧、今月弾劾無効、軍事費+5億ドル。', ko: '지지율 20% 소모, 반대파 진압, 이번 달 탄핵 면역, 군비 $50억 획득.', 'zh-tw': '消耗20%支持率，強制鎮壓反對派，本月免疫彈劾，獲$5億軍費。' },
        skillCostMoney: 0
    },
    { 
        id: 5, 
        name: { zh: '平权斗士', en: 'Activist', es: 'Activista', fr: 'Militante', ja: '活動家', ko: '인권 운동가', 'zh-tw': '平權鬥士' },
        icon: '👩🏽', 
        desc: { zh: '极具煽动力的社会活动家。', en: 'A highly provocative social activist.', es: 'Una activista social muy provocadora.', fr: 'Une militante sociale très provocatrice.', ja: '扇動的な社会活動家。', ko: '선동적인 사회 운동가.', 'zh-tw': '極具煽動力的社會活動家。' },
        gender: 'female',
        money: 1, 
        skillName: { zh: '草根筹款', en: 'Grassroots', es: 'Recaudación Base', fr: 'Collecte Populaire', ja: '草の根募金', ko: '풀뿌리 모금', 'zh-tw': '草根籌款' },
        skillDesc: { zh: '将当前支持率的10%转化为等额的资金(亿)。', en: 'Convert 10% of Approval into equal funds (B).', es: 'Convierte 10% de Aprobación en fondos iguales (B).', fr: 'Convertit 10% de Popularité en fonds égaux (Md).', ja: '現在の支持率の10%を同額の資金(億)に変換。', ko: '현재 지지율의 10%를 동등한 자금(억)으로 전환.', 'zh-tw': '將當前支持率的10%轉化為等額的資金(億)。' },
        skillCostMoney: 0
    },
    { 
        id: 6, 
        name: { zh: '好莱坞明星', en: 'Hollywood Star', es: 'Estrella de Cine', fr: 'Star d\'Hollywood', ja: 'ハリウッドスター', ko: '할리우드 스타', 'zh-tw': '好萊塢明星' },
        icon: '👩🏼', 
        desc: { zh: '因为演过总统而真的当选了总统。', en: 'Elected because she played a president in a movie.', es: 'Elegida porque interpretó a una presidenta en una película.', fr: 'Élue parce qu\'elle a joué une présidente dans un film.', ja: '映画で大統領を演じたため、本当に当選した。', ko: '영화에서 대통령 역을 맡아서 진짜 대통령이 됨.', 'zh-tw': '因為演過總統而真的當選了總統。' },
        gender: 'female',
        money: 15, 
        skillName: { zh: '粉丝经济', en: 'Fan Economy', es: 'Economía de Fans', fr: 'Économie de Fans', ja: 'ファン経済', ko: '팬덤 경제', 'zh-tw': '粉絲經濟' },
        skillDesc: { zh: '本回合所有经济投资无风险，且支持率+10%。', en: 'Risk-free investments this turn, Approval +10%.', es: 'Inversiones sin riesgo este turno, Aprobación +10%.', fr: 'Investissements sans risque ce tour, Popularité +10%.', ja: '今ターンの投資リスクなし、支持率+10%。', ko: '이번 턴 모든 투자 무위험, 지지율 +10%.', 'zh-tw': '本回合所有經濟投資無風險，且支持率+10%。' },
        skillCostMoney: 1
    },

    // --- 扩展角色 (Extended) ---
    {
        id: 7, 
        name: { zh: '石油大亨', en: 'Oil Tycoon', es: 'Magnate Petrolero', fr: 'Magnat Pétrole', ja: '石油王', ko: '석유 재벌', 'zh-tw': '石油大亨' },
        icon: '🤠',
        desc: { zh: '来自德州的能源巨头，不仅有石油，还有枪。', en: 'Texas energy giant. Has oil and guns.', es: 'Gigante de energía de Texas. Tiene petróleo y armas.', fr: 'Géant de l\'énergie du Texas. A du pétrole et des armes.', ja: 'テキサスのエネルギー王。石油と銃を持っている。', ko: '텍사스 에너지 거물. 석유와 총을 가짐.', 'zh-tw': '來自德州的能源巨頭，不僅有石油，還有槍。' },
        gender: 'male',
        money: 35, 
        skillName: { zh: '能源垄断', en: 'Energy Monopoly', es: 'Monopolio Energía', fr: 'Monopole Énergie', ja: 'エネルギー独占', ko: '에너지 독점', 'zh-tw': '能源壟斷' },
        skillDesc: { zh: '强制商品市场进入牛市，并从中获得10亿收益。', en: 'Force Commodity Bull Market, gain $1B.', es: 'Fuerza mercado alcista en Commodities, gana $1B.', fr: 'Force marché haussier Matières, gain 1 Mrd $.', ja: '商品市場を強気に強制、10億ドルの利益。', ko: '원자재 시장 강세장 강제, $10억 수익.', 'zh-tw': '強制大宗商品市場進入牛市，並從中獲得10億收益。' },
        skillCostMoney: 0
    },
    {
        id: 8, 
        name: { zh: '律政俏佳人', en: 'Top Lawyer', es: 'Abogada Top', fr: 'Avocate Top', ja: '敏腕弁護士', ko: '유명 변호사', 'zh-tw': '律政俏佳人' },
        icon: '👩🏻‍⚖️',
        desc: { zh: '名校出身的顶级律师，没有她打不赢的官司。', en: 'Ivy League top lawyer, never lost a case.', es: 'Abogada top de la Ivy League, nunca perdió un caso.', fr: 'Avocate d\'élite, n\'a jamais perdu un cas.', ja: '名門出身のトップ弁護士。負け知らず。', ko: '명문대 출신 톱 변호사, 패소한 적 없음.', 'zh-tw': '名校出身的頂級律師，沒有她打不贏的官司。' },
        gender: 'female',
        money: 8, 
        skillName: { zh: '宪法解释', en: 'Constitutional', es: 'Constitucional', fr: 'Constitutionnel', ja: '憲法解釈', ko: '헌법 해석', 'zh-tw': '憲法解釋' },
        skillDesc: { zh: '无视所有弹劾风险，直接清除身上的负面Debuff（如丑闻）。', en: 'Ignore impeachment risk, clear all negative debuffs.', es: 'Ignora riesgo de destitución, limpia debuffs.', fr: 'Ignore risque destitution, efface debuffs.', ja: '弾劾リスク無視、全デバフ解除。', ko: '탄핵 위험 무시, 모든 부정적 상태 제거.', 'zh-tw': '無視所有彈劾風險，直接清除身上的負面Debuff（如醜聞）。' },
        skillCostMoney: 1
    },
    {
        id: 9, 
        name: { zh: '加密极客', en: 'Crypto Geek', es: 'Geek Cripto', fr: 'Geek Crypto', ja: '暗号資産オタク', ko: '크립토 괴짜', 'zh-tw': '加密極客' },
        icon: '🪙',
        desc: { zh: '相信区块链会取代美元的神秘人物。', en: 'Mysterious figure who believes blockchain replaces dollar.', es: 'Cree que blockchain reemplazará al dólar.', fr: 'Croit que la blockchain remplacera le dollar.', ja: 'ブロックチェーンがドルに取って代わると信じている。', ko: '블록체인이 달러를 대체할 것이라 믿는 신비주의자.', 'zh-tw': '相信區塊鏈會取代美元的神秘人物。' },
        gender: 'male',
        money: 10, 
        skillName: { zh: '去中心化', en: 'Decentralization', es: 'Descentralización', fr: 'Décentralisation', ja: '地方分権', ko: '탈중앙화', 'zh-tw': '去中心化' },
        skillDesc: { zh: '加密货币市场波动率翻倍，获得一张随机加密货币相关卡牌。', en: 'Double Crypto volatility, get random Crypto card.', es: 'Doble volatilidad Cripto, gana carta Cripto.', fr: 'Volatilité Crypto doublée, gagne carte Crypto.', ja: '仮想通貨の変動率2倍、ランダムな仮想通貨カード獲得。', ko: '암호화폐 변동성 2배, 무작위 암호화폐 카드 획득.', 'zh-tw': '加密貨幣市場波動率翻倍，獲得一張隨機加密貨幣相關卡牌。' },
        skillCostMoney: 0
    },
    {
        id: 10, 
        name: { zh: '脱口秀女王', en: 'Talk Show Queen', es: 'Reina del Talk Show', fr: 'Reine du Talk-Show', ja: 'トークショーの女王', ko: '토크쇼의 여왕', 'zh-tw': '脫口秀女王' },
        icon: '🎤',
        desc: { zh: '全美最受欢迎的主持人，这不仅是脱口秀，这是政治。', en: 'Most popular host. It\'s not show, it\'s politics.', es: 'Presentadora más popular. No es show, es política.', fr: 'Animatrice populaire. Ce n\'est pas un show, c\'est politique.', ja: '全米一の人気司会者。これはショーではなく政治だ。', ko: '미국에서 가장 인기 있는 진행자. 이건 쇼가 아니라 정치다.', 'zh-tw': '全美最受歡迎的主持人，這不僅是脫口秀，這是政治。' },
        gender: 'female',
        money: 25, 
        skillName: { zh: '黄金时段', en: 'Prime Time', es: 'Horario Estelar', fr: 'Prime Time', ja: 'ゴールデンタイム', ko: '프라임 타임', 'zh-tw': '黃金時段' },
        skillDesc: { zh: '支持率直接重置为60%（无论多低），但消耗本月所有AP。', en: 'Reset Approval to 60%, consume all AP.', es: 'Reset Aprobación a 60%, consume todo AP.', fr: 'Reset Popularité à 60%, consomme tout PA.', ja: '支持率を60%にリセット、全AP消費。', ko: '지지율 60%로 초기화, 모든 AP 소모.', 'zh-tw': '支持率直接重置為60%（無論多低），但消耗本月所有AP。' },
        skillCostMoney: 0
    },
    {
        id: 11, 
        name: { zh: '工会领袖', en: 'Union Leader', es: 'Líder Sindical', fr: 'Chef Syndical', ja: '組合リーダー', ko: '노조 지도자', 'zh-tw': '工會領袖' },
        icon: '👷',
        desc: { zh: '来自铁锈带的硬汉，代表蓝领阶层。', en: 'Tough guy from Rust Belt, represents blue collars.', es: 'Tipo duro del Rust Belt, representa trabajadores.', fr: 'Dur à cuire du Rust Belt, représente les ouvriers.', ja: 'ラストベルト出身のタフガイ。労働者階級を代表。', ko: '러스트 벨트 출신의 터프가이, 블루칼라 대표.', 'zh-tw': '來自鐵鏽帶的硬漢，代表藍領階層。' },
        gender: 'male',
        money: 2, 
        skillName: { zh: '全国罢工', en: 'National Strike', es: 'Huelga Nacional', fr: 'Grève Nationale', ja: '全国ストライキ', ko: '전국 파업', 'zh-tw': '全國罷工' },
        skillDesc: { zh: '强迫全球经济进入衰退，但大幅提高国内支持率(+15%)。', en: 'Force Global Recession, Approval +15%.', es: 'Fuerza Recesión Global, Aprobación +15%.', fr: 'Force Récession Globale, Popularité +15%.', ja: '世界不況を強制、支持率+15%。', ko: '글로벌 경기 침체 강제, 지지율 +15%.', 'zh-tw': '強迫全球經濟進入衰退，但大幅提高國內支持率(+15%)。' },
        skillCostMoney: 0
    },
    {
        id: 12, 
        name: { zh: '环保少女', en: 'Eco Girl', es: 'Chica Eco', fr: 'Fille Éco', ja: '環境活動家', ko: '환경 운동가', 'zh-tw': '環保少女' },
        icon: '👧',
        desc: { zh: 'How dare you! 激进的环保主义者。', en: 'How dare you! Radical environmentalist.', es: 'How dare you! Ambientalista radical.', fr: 'How dare you! Écologiste radicale.', ja: 'How dare you! 急進的な環境保護主義者。', ko: 'How dare you! 급진적 환경주의자.', 'zh-tw': 'How dare you! 激進的環保主義者。' },
        gender: 'female',
        money: 1, 
        skillName: { zh: '气候紧急状态', en: 'Climate Emergency', es: 'Emergencia Climática', fr: 'Urgence Climatique', ja: '気候非常事態', ko: '기후 비상사태', 'zh-tw': '氣候緊急狀態' },
        skillDesc: { zh: '永久关闭商品市场（无法交易），每回合自动回复支持率+5%。', en: 'Close Commodity Market permanently, +5% Approval/turn.', es: 'Cierra Mercado Commodities, +5% Aprobación/turno.', fr: 'Ferme Marché Matières, +5% Popularité/tour.', ja: '商品市場を永久閉鎖、毎ターン支持率+5%。', ko: '원자재 시장 영구 폐쇄, 매 턴 지지율 +5% 자동 회복.', 'zh-tw': '永久關閉大宗商品市場（無法交易），每回合自動回復支持率+5%。' },
        skillCostMoney: 0
    },
    {
        id: 13, 
        name: { zh: '情报局长', en: 'Intel Director', es: 'Director Intel', fr: 'Directeur Rens.', ja: '情報局長', ko: '정보국장', 'zh-tw': '情報局長' },
        icon: '🕵️‍♂️',
        desc: { zh: '他知道所有人的秘密，包括你的。', en: 'He knows everyone\'s secrets, including yours.', es: 'Conoce los secretos de todos, incluidos los tuyos.', fr: 'Il connaît les secrets de tous, y compris les vôtres.', ja: '彼は全員の秘密を知っている。あなたの秘密も。', ko: '그는 당신을 포함한 모든 사람의 비밀을 알고 있습니다.', 'zh-tw': '他知道所有人的秘密，包括你的。' },
        gender: 'male',
        money: 12, 
        skillName: { zh: '棱镜计划', en: 'Prism Project', es: 'Proyecto Prisma', fr: 'Projet Prism', ja: 'プリズム計画', ko: '프리즘 프로젝트', 'zh-tw': '稜鏡計畫' },
        skillDesc: { zh: '查看接下来3个月的市场走势（文本提示）。', en: 'View market trends for next 3 months.', es: 'Ver tendencias de mercado próximos 3 meses.', fr: 'Voir tendances marché 3 prochains mois.', ja: '今後3ヶ月の市場動向を確認。', ko: '향후 3개월 시장 추세 확인.', 'zh-tw': '查看接下來3個月的市場走勢（文本提示）。' },
        skillCostMoney: 3
    },
    {
        id: 14, 
        name: { zh: '地产皇后', en: 'Real Estate Queen', es: 'Reina Inmobiliaria', fr: 'Reine de l\'Immobilier', ja: '不動産女王', ko: '부동산 여왕', 'zh-tw': '地產皇后' },
        icon: '👸',
        desc: { zh: '在曼哈顿拥有半条街的楼。', en: 'Owns half a street in Manhattan.', es: 'Gana media calle en Manhattan.', fr: 'Possède la moitié d\'une rue à Manhattan.', ja: 'マンハッタンの半分の建物を所有。', ko: '맨해튼 거리의 절반을 소유.', 'zh-tw': '在曼哈頓擁有半條街的樓。' },
        gender: 'female',
        money: 40, 
        skillName: { zh: '城市规划', en: 'Urban Planning', es: 'Planificación Urbana', fr: 'Planification Urbaine', ja: '都市計画', ko: '도시 계획', 'zh-tw': '城市規劃' },
        skillDesc: { zh: '房地产泡沫：股市和商品市场同时上涨，但通胀增加。', en: 'Bubble: Stocks/Commodities up, Inflation up.', es: 'Burbuja: Acciones/Commodities suben, Inflación sube.', fr: 'Bulle : Actions/Matières montent, Inflation monte.', ja: 'バブル：株式/商品上昇、インフレ上昇。', ko: '버블: 주식/원자재 상승, 인플레이션 상승.', 'zh-tw': '房地產泡沫：股市和商品市場同時上漲，但通膨增加。' },
        skillCostMoney: 2
    },
    {
        id: 15, 
        name: { zh: '学术泰斗', en: 'Academic Titan', es: 'Titán Académico', fr: 'Titan Académique', ja: '学術の泰斗', ko: '학계의 거목', 'zh-tw': '學術泰斗' },
        icon: '🎓',
        desc: { zh: '诺贝尔经济学奖得主，理论一套一套的。', en: 'Nobel economist, full of theories.', es: 'Economista Nobel, lleno de teorías.', fr: 'Économiste Nobel, plein de théories.', ja: 'ノーベル賞経済学者、持論を展開。', ko: '노벨 경제학상 수상자, 이론으로 무장.', 'zh-tw': '諾貝爾經濟學獎得主，理論一套一套的。' },
        gender: 'male',
        money: 6, 
        skillName: { zh: '现代货币理论', en: 'MMT', es: 'TMM', fr: 'TMM', ja: 'MMT', ko: 'MMT', 'zh-tw': '現代貨幣理論' },
        skillDesc: { zh: '凭空获得$10亿，只要你不看通胀数据，它就不存在。', en: 'Create $1B out of thin air. Ignore inflation.', es: 'Crea $1B de la nada. Ignora inflación.', fr: 'Crée 1 Mrd $ à partir de rien. Ignorez l\'inflation.', ja: '無から10億ドルを創造。インフレは無視。', ko: '허공에서 $10억 창조. 인플레이션은 무시.', 'zh-tw': '憑空獲得$10億，只要你不看通膨數據，它就不存在。' },
        skillCostMoney: 0
    },
    {
        id: 16, 
        name: { zh: '网红医生', en: 'Celebrity Doctor', es: 'Doctor Calibridad', fr: 'Docteur Star', ja: 'タレント医師', ko: '스타 의사', 'zh-tw': '網紅醫生' },
        icon: '👨‍⚕️',
        desc: { zh: '电视上最著名的健康专家。', en: 'The most famous TV health expert.', es: 'El experto en salud más famoso de la TV.', fr: 'L\'expert santé TV le plus célèbre.', ja: 'テレビで最も有名な健康専門家。', ko: 'TV에서 가장 유명한 건강 전문가.', 'zh-tw': '電視上最著名的健康專家。' },
        gender: 'male',
        money: 18, 
        skillName: { zh: '全民疫苗', en: 'Universal Vaccine', es: 'Vacuna Universal', fr: 'Vaccin Universel', ja: '国民ワクチン', ko: '전국민 백신', 'zh-tw': '全民疫苗' },
        skillDesc: { zh: '消除所有突发流行病事件的影响，支持率+8%。', en: 'Eliminate pandemic events, +8% Approval.', es: 'Elimina pandemias, +8% Aprobación.', fr: 'Élimine pandémies, +8% Popularité.', ja: 'パンデミックイベントの影響を排除、支持率+8%。', ko: '모든 전염병 이벤트 제거, 지지율 +8%.', 'zh-tw': '消除所有突發流行病事件的影響，支持率+8%。' },
        skillCostMoney: 1
    },
    {
        id: 17, 
        name: { zh: '前朝国母', en: 'Former First Lady', es: 'Ex Primera Dama', fr: 'Ex Première Dame', ja: '元ファーストレディ', ko: '전 영부인', 'zh-tw': '前朝國母' },
        icon: '👵',
        desc: { zh: '她丈夫是总统，现在轮到她了。', en: 'Her husband was president, now it\'s her turn.', es: 'Su esposo fue presidente, ahora es su turno.', fr: 'Son mari était président, à son tour.', ja: '夫は大統領だった、次は彼女の番だ。', ko: '남편이 대통령이었고, 이젠 그녀 차례.', 'zh-tw': '她丈夫是總統，現在輪到她了。' },
        gender: 'female',
        money: 30, 
        skillName: { zh: '政治遗产', en: 'Political Legacy', es: 'Legado Político', fr: 'Héritage Politique', ja: '政治的遺産', ko: '정치적 유산', 'zh-tw': '政治遺產' },
        skillDesc: { zh: '立即获得3张强力"内政"卡牌。', en: 'Get 3 strong Domestic cards immediately.', es: 'Obtén 3 cartas Domésticas fuertes ya.', fr: 'Obtenez 3 cartes Intérieures fortes immédiatement.', ja: '強力な「内政」カードを3枚即座に獲得。', ko: '강력한 "내정" 카드 3장 즉시 획득.', 'zh-tw': '立即獲得3張得力"內政"卡牌。' },
        skillCostMoney: 0
    },
    {
        id: 18, 
        name: { zh: '摇滚巨星', en: 'Rock Star', es: 'Estrella de Rock', fr: 'Star du Rock', ja: 'ロックスター', ko: '락스타', 'zh-tw': '搖滾巨星' },
        icon: '🎸',
        desc: { zh: '他的演唱会比竞选集会人还多。', en: 'His concerts are bigger than rallies.', es: 'Sus conciertos son mayores que los mítines.', fr: 'Ses concerts sont plus grands que les rassemblements.', ja: '彼のコンサートは集会より人が多い。', ko: '그의 콘서트는 유세장보다 사람이 많다.', 'zh-tw': '他的演唱會比競選集會人還多。' },
        gender: 'male',
        money: 22, 
        skillName: { zh: '巡回演出', en: 'World Tour', es: 'Gira Mundial', fr: 'Tournée Mondiale', ja: 'ワールドツアー', ko: '월드 투어', 'zh-tw': '巡迴演出' },
        skillDesc: { zh: '每到一个摇摆州支持率就爆表。支持率+10%，资金+2亿。', en: 'Approval +10%, Money +$2B.', es: 'Aprobación +10%, Dinero +$2B.', fr: 'Popularité +10%, Argent +2 Mrd $.', ja: '支持率+10%、資金+2億ドル。', ko: '지지율 +10%, 자금 +$20억.', 'zh-tw': '每到一個搖擺州支持率就爆表。支持率+10%，資金+2億。' },
        skillCostMoney: 0
    }
];
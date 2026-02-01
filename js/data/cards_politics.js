window.GAME_DATA = window.GAME_DATA || {};
window.GAME_DATA.CARD_DB = window.GAME_DATA.CARD_DB || [];

window.GAME_DATA.CARD_DB.push(
    // ---------------- EARLY PHASE (Consolidating Power) ----------------
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "任命亲戚为顾问", en: "Appoint Family Advisor", es: "Nombrar Asesor Familiar", fr: "Conseiller Familial", ja: "親族を顧問に任命", ko: "친척을 고문으로 임명", "zh-tw": "任命親戚為顧問" },
        desc: { zh: "当你女儿的丈夫负责中东和平时，一切都会好起来的。", en: "Middle East peace is safe in your son-in-law's hands.", es: "La paz en Medio Oriente está a salvo con tu yerno.", fr: "La paix au Moyen-Orient est entre les mains de votre gendre.", ja: "中東和平は義理の息子の手に委ねれば安心だ。", ko: "중동 평화는 사위 손에 맡기면 안심입니다.", "zh-tw": "當你女兒的丈夫負責中東和平時，一切都會好起來的。" },
        cost: 2,
        phase: "early",
        effect: { approval: -5, loyalty: 10, nepotism: 5 }
    },
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "向反对派示好", en: "Woo Opposition", es: "Atraer Oposición", fr: "Séduire l'Opposition", ja: "野党に接近", ko: "야당 회유", "zh-tw": "向反對派示好" },
        desc: { zh: "邀请他们共进晚餐，然后在沙拉里放点泻药。只是个玩笑...除非？", en: "Dinner invitation with laxative salad. Joking... unless?", es: "Cena con ensalada laxante. Broma... ¿o no?", fr: "Dîner avec salade laxative. Je plaisante... sauf si ?", ja: "下剤入りサラダで夕食会。冗談だ...たぶん？", ko: "설사약 샐러드 만찬. 농담입니다... 설마요?", "zh-tw": "邀請他們共進晚餐，然後在沙拉裡放點瀉藥。只是個玩笑...除非？" },
        cost: 2,
        phase: "early",
        effect: { approval: 5, opposition: -5 }
    },
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "因为‘下雨’取消演讲", en: "Cancel Speech (Rain)", es: "Cancelar Discurso (Lluvia)", fr: "Annuler Discours (Pluie)", ja: "雨天演説中止", ko: "우천으로 연설 취소", "zh-tw": "因為‘下雨’取消演講" },
        desc: { zh: "头发湿了不好看。而且演讲稿也没写完。", en: "Wet hair looks bad. Also, speech isn't written.", es: "El pelo mojado se ve mal. Y no escribí el discurso.", fr: "Cheveux mouillés, c'est moche. Et discours pas prêt.", ja: "濡れた髪は似合わない。原稿もまだだ。", ko: "젖은 머리는 보기 흉해요. 연설문도 다 못 썼고요.", "zh-tw": "頭髮濕了不好看。而且演講稿也沒寫完。" },
        cost: 0,
        phase: "early",
        effect: { approval: -2, energy: 5 }
    },
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "重新划分选区", en: "Gerrymandering", es: "Gerrymandering", fr: "Redécoupage Électoral", ja: "ゲリマンダー", ko: "게리맨더링", "zh-tw": "重新劃分選區" },
        desc: { zh: "如果你不能赢得选民的支持，就换一批选民。", en: "Can't win voters? Change the voters.", es: "¿No ganas votantes? Cambia los votantes.", fr: "Pas d'électeurs ? Changez les électeurs.", ja: "有権者を獲得できない？なら有権者を取り換えろ。", ko: "표를 못 얻겠다고요? 유권자를 바꾸세요.", "zh-tw": "如果你不能贏得選民的支持，就換一批選民。" },
        cost: 5,
        phase: "early",
        effect: { approval: -10, election_chance: 15 }
    },

    // ---------------- MID PHASE (Control & Manipulation) ----------------
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "Twitter治国", en: "Rule by Tweet", es: "Gobernar por Tuit", fr: "Gouverner par Tweet", ja: "ツイッター政治", ko: "트위터 통치", "zh-tw": "Twitter治國" },
        desc: { zh: "如果不全大写发推特，人们怎么知道你是认真的？", en: "CAPS LOCK MEANS I AM SERIOUS.", es: "BLOQ MAYÚS SIGNIFICA QUE HABLO EN SERIO.", fr: "MAJUSCULES SIGNIFIE SÉRIEUX.", ja: "大文字でないと本気だと伝わらない。", ko: "대문자로 써야 진지해 보입니다.", "zh-tw": "如果不全大寫發推特，人們怎麼知道你是認真的？" },
        cost: 1,
        phase: "mid",
        effect: { approval: 2, media_chaos: 10 }
    },
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "指责媒体是假新闻", en: "Accuse 'Fake News'", es: "Acusar 'Fake News'", fr: "Accuser 'Fake News'", ja: "「フェイクニュース」非難", ko: "'가짜 뉴스' 비난", "zh-tw": "指責媒體是假新聞" },
        desc: { zh: "那是真的新闻，但如果你喊得够大声，它可能就不是了。", en: "It's true, but if you yell loud enough, maybe it isn't.", es: "Es verdad, pero si gritas, tal vez no.", fr: "C'est vrai, mais si vous criez, peut-être pas.", ja: "真実だが、大声で叫べば嘘になるかも。", ko: "사실이지만, 크게 소리치면 아닐지도 모릅니다.", "zh-tw": "那是真的新聞，但如果你喊得夠大聲，它可能就不是了。" },
        cost: 2,
        phase: "mid",
        effect: { approval: 5, press_freedom: -10 }
    },
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "举行毫无意义的集会", en: "Pointless Rally", es: "Mitin Sin Sentido", fr: "Rallye Inutile", ja: "無意味な集会", ko: "의미 없는 집회", "zh-tw": "舉行毫無意義的集會" },
        desc: { zh: "即使不是选举年，我们也需要掌声来滋养自尊心。", en: "Not election year, but my ego needs applause.", es: "No es año electoral, pero mi ego necesita aplausos.", fr: "Pas d'élection, mais mon ego veut des applaudissements.", ja: "選挙年ではないが、自尊心が拍手を求めている。", ko: "선거철은 아니지만 제 자존심엔 박수가 필요합니다.", "zh-tw": "即使不是選舉年，我們也需要掌聲來滋養自尊心。" },
        cost: 3,
        phase: "mid",
        effect: { approval: 8, money: -2 }
    },
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "赦免感恩节火鸡", en: "Pardon Turkey", es: "Indultar Pavo", fr: "Grâcier Dinde", ja: "七面鳥恩赦", ko: "칠면조 사면", "zh-tw": "赦免感恩節火雞" },
        desc: { zh: "这也是你今年唯一赦免的无辜生物。", en: "The only innocent creature you'll pardon.", es: "La única criatura inocente que indultarás.", fr: "La seule créature innocente que vous gracierez.", ja: "今年恩赦する唯一の無実な生き物だ。", ko: "올해 사면할 유일한 무고한 생물입니다.", "zh-tw": "這也是你今年唯一赦免的無辜生物。" },
        cost: 1,
        phase: "mid",
        effect: { approval: 2, poultry_relations: 5 }
    },
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "调查政敌的电子邮件", en: "Investigate Emails", es: "Investigar Correos", fr: "Enquêter Courriels", ja: "メール調査", ko: "이메일 조사", "zh-tw": "調查政敵的電子郵件" },
        desc: { zh: "肯定有什么东西在里面。意大利面食谱？撒旦崇拜？谁知道呢。", en: "Must be something. Pasta recipes? Satanism? Who knows.", es: "Algo habrá. ¿Recetas? ¿Satanismo? Quién sabe.", fr: "Il y a forcement un truc. Recettes ? Satanisme ?", ja: "何かあるはずだ。パスタのレシピ？悪魔崇拝？", ko: "뭔가 있을 겁니다. 파스타 레시피? 사탄 숭배?", "zh-tw": "肯定有什麼東西在裡面。義大利麵食譜？撒旦崇拜？誰知道呢。" },
        cost: 4,
        phase: "mid",
        effect: { approval: 4, scandal_risk: 5 }
    },
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "在白宫开快餐派对", en: "Fast Food Feast", es: "Fiesta Fast Food", fr: "Festin Fast Food", ja: "ファストフード宴会", ko: "패스트푸드 파티", "zh-tw": "在白宮開快餐派對" },
        desc: { zh: "汉堡堆成山。这是高雅文化的顶峰。", en: "Mountains of burgers. Peak culture.", es: "Montañas de hamburguesas. Cultura máxima.", fr: "Montagnes de burgers. Le sommet de la culture.", ja: "ハンバーガーの山。文化の極み。", ko: "햄버거 산. 고상한 문화의 정점이죠.", "zh-tw": "漢堡堆成山。這是高雅文化的頂峰。" },
        cost: 1,
        phase: "mid",
        effect: { approval: 5, money: -1, health: -1 }
    },
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "指控选举舞弊（预先）", en: "Pre-claim Fraud", es: "Pre-reclamar Fraude", fr: "Pré-réclamer Fraude", ja: "不正選挙の事前主張", ko: "부정 선거 선제 주장", "zh-tw": "指控選舉舞弊（預先）" },
        desc: { zh: "如果我输了，那就是作弊。如果我赢了，那是正义的胜利。", en: "If I lose, it's rigged. If I win, it's justice.", es: "Si pierdo, es fraude. Si gano, es justicia.", fr: "Si je perds, c'est truqué. Si je gagne, justice.", ja: "負ければ不正、勝てば正義。", ko: "지면 조작이고, 이기면 정의의 승리입니다.", "zh-tw": "如果我輸了，那就是作弊。如果我贏了，那是正義的勝利。" },
        cost: 0,
        phase: "mid",
        effect: { approval: 3, stability: -5 }
    },
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "成立太空军", en: "Create Space Force", es: "Crear Fuerza Espacial", fr: "Créer Force Spatiale", ja: "宇宙軍創設", ko: "우주군 창설", "zh-tw": "成立太空軍" },
        desc: { zh: "因为星球大战真的很酷。 pew pew!", en: "Star Wars is cool. Pew pew!", es: "Star Wars es genial. ¡Pew pew!", fr: "Star Wars c'est cool. Pew pew !", ja: "スターウォーズはかっこいいから。ピューピュー！", ko: "스타워즈는 멋지니까요. 쓩쓩!", "zh-tw": "因為星球大戰真的很酷。 pew pew!" },
        cost: 8,
        phase: "mid",
        effect: { approval: 10, money: -15 }
    },
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "更改飓风路径图", en: "Sharpie Hurricane Map", es: "Mapa Huracán Sharpie", fr: "Carte Ouragan Marqueur", ja: "ハリケーン進路修正", ko: "허리케인 경로 수정", "zh-tw": "更改颶風路徑圖" },
        desc: { zh: "用记号笔画一下。我是总统，我说它往哪吹就往哪吹。", en: "Alter it with a marker. I decide where wind blows.", es: "Altéralo con marcador. Yo decido el viento.", fr: "Modifiez au marqueur. Je décide du vent.", ja: "マジックで書き直せ。風向きは私が決める。", ko: "매직으로 고치세요. 바람 방향은 내가 정합니다.", "zh-tw": "用記號筆畫一下。我是總統，我說它往哪吹就往哪吹。" },
        cost: 0,
        phase: "mid",
        effect: { approval: -5, stupid: 10 }
    },
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "所有建筑贴上你的名字", en: "Brand Everything", es: "Marcar Todo", fr: "Marquer Tout", ja: "全建物に命名", ko: "모든 건물에 이름 붙이기", "zh-tw": "所有建築貼上你的名字" },
        desc: { zh: "邮局？贴上。厕所？贴上。核弹发射井？大金字贴上。", en: "Post office? Brand it. Toilets? Brand it. Nukes? Gold font.", es: "¿Correos? Marca. ¿Baños? Marca. ¿Bombas? Letras doradas.", fr: "Poste ? Marque. Toilettes ? Marque. Nuke ? Or.", ja: "郵便局？名前貼れ。トイレ？貼れ。核？金文字で。", ko: "우체국? 붙여. 화장실? 붙여. 핵미사일? 금색으로.", "zh-tw": "郵局？貼上。廁所？貼上。核彈發射井？大金字貼上。" },
        cost: 5,
        phase: "mid",
        effect: { approval: -2, ego: 20 }
    },
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "禁止某种社交媒体", en: "Ban Social App", es: "Prohibir App Social", fr: "Interdire App Sociale", ja: "SNSアプリ禁止", ko: "소셜 앱 금지", "zh-tw": "禁止某種社交媒體" },
        desc: { zh: "既然年轻人不在上面跳舞，他们也许会去投票...给你投反对票。", en: "Stop the dancing kids. Maybe they'll vote... against you.", es: "Detén el baile. Quizás voten... en contra.", fr: "Arrêtez la danse. Peut-être qu'ils voteront... contre.", ja: "踊る若者を止めろ。投票に行くかも...反対票を。", ko: "춤추는 애들을 막으세요. 투표할지도 모르죠... 당신 반대쪽으로.", "zh-tw": "既然年輕人不在上面跳舞，他們也許會去投票...給你的反對票。" },
        cost: 3,
        phase: "mid",
        effect: { approval: -10, security: 5 }
    },
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "泄露机密照片", en: "Leak Classified Pics", es: "Filtrar Fotos Clasif.", fr: "Fuite Photos Class.", ja: "機密写真流出", ko: "기밀 사진 유출", "zh-tw": "洩露機密照片" },
        desc: { zh: "‘意外’泄露。其实是为了转移对你假发脱落的关注。", en: "'Accidental' leak to distract from your toupee slip.", es: "Fuga 'accidental' para distraer de tu tupé.", fr: "Fuite 'accidentelle' pour distraire de votre perruque.", ja: "カツラのズレを隠すための「偶然の」流出。", ko: "가발 벗겨진 걸 감추려는 '우연한' 유출.", "zh-tw": "‘意外’洩露。其實是為了轉移對你假髮脫落的關注。" },
        cost: 2,
        phase: "mid",
        effect: { approval: -5, distraction: 10 }
    },
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "发明新词", en: "Invent New Word", es: "Inventar Palabra", fr: "Inventer un Mot", ja: "新語の発明", ko: "신조어 발명", "zh-tw": "發明新詞" },
        desc: { zh: "‘Covfefe’。没人知道是什么意思，但这很有挑衅性。", en: "'Covfefe'. Provocative, yet meaningless.", es: "'Covfefe'. Provocativo, sin sentido.", fr: "'Covfefe'. Provocateur, sans sens.", ja: "「Covfefe」。挑発的だが意味不明。", ko: "'Covfefe'. 도발적이지만 의미는 없습니다.", "zh-tw": "‘Covfefe’。沒人知道是什麼意思，但這很有挑釁性。" },
        cost: 0,
        phase: "mid",
        effect: { approval: 1, confusion: 10 }
    },
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "更换副总统", en: "Replace VP", es: "Reemplazar VP", fr: "Remplacer VP", ja: "副大統領交代", ko: "부통령 교체", "zh-tw": "更換副總統" },
        desc: { zh: "现在的这个太无聊了，也不会拍马屁。换个电视明星。", en: "Current one is boring. Get a TV star.", es: "El actual aburre. Trae una estrella de TV.", fr: "L'actuel est ennuyeux. Prenez une star TV.", ja: "今のは退屈だ。テレビスターに変えよう。", ko: "지금 사람은 지루해요. TV 스타로 바꿉시다.", "zh-tw": "現在的這個太無聊了，也不會拍馬屁。換個電視明星。" },
        cost: 5,
        phase: "mid",
        effect: { approval: -5, excitement: 5 }
    },
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "国情咨文真人秀", en: "State of Union Reality Show", es: "Show Estado Unión", fr: "Show État Union", ja: "一般教書演説ショー", ko: "국정 연설 리얼리티 쇼", "zh-tw": "國情咨文真人秀" },
        desc: { zh: "包含现场投票淘汰最高法院法官环节。", en: "Live voting to evict Supreme Court justices.", es: "Votación en vivo para echar jueces.", fr: "Vote en direct pour expulser les juges.", ja: "最高裁判事追放のライブ投票。", ko: "대법관 탈락 생방송 투표.", "zh-tw": "包含現場投票淘汰最高法院法官環節。" },
        cost: 4,
        phase: "mid",
        effect: { approval: 8, dignity: -10 }
    },
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "否认气候变化", en: "Deny Climate Change", es: "Negar Cambio Climático", fr: "Nier Changement Clim.", ja: "気候変動否定", ko: "기후 변화 부정", "zh-tw": "否認氣候變化" },
        desc: { zh: "外面很冷！全球变暖在哪里？", en: "It's cold outside! Where is global warming?", es: "¡Hace frío! ¿Dónde está el calentamiento?", fr: "Il fait froid ! Où est le réchauffement ?", ja: "外は寒い！温暖化はどこだ？", ko: "밖은 추워요! 지구 온난화는 어디 갔죠?", "zh-tw": "外面很冷！全球變暖在哪裡？" },
        cost: 0,
        phase: "mid",
        effect: { approval: 5, science: -10 }
    },
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "支持极端阴谋论", en: "Endorse Conspiracies", es: "Apoyar Conspiraciones", fr: "Soutenir Conspirations", ja: "陰謀論支持", ko: "음모론 지지", "zh-tw": "支持極端陰謀論" },
        desc: { zh: "也许地球是平的？也许鸟是间谍无人机？只要他们投票给我。", en: "Flat earth? Spy birds? As long as they vote for me.", es: "¿Tierra plana? ¿Pájaros espía? Mientras me voten.", fr: "Terre plate ? Oiseaux espions ? Tant qu'ils votent.", ja: "地球平面説？鳥はスパイ？私に投票するならOK。", ko: "평평한 지구? 스파이 새? 나를 찍어준다면야.", "zh-tw": "也許地球是平的？也許鳥是間諜無人機？只要他們投票給我就行。" },
        cost: 2,
        phase: "mid",
        effect: { approval: 4, sanity: -10 }
    },
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "把脸刻在拉什莫尔山", en: "Face on Rushmore", es: "Cara en Rushmore", fr: "Visage sur Rushmore", ja: "ラシュモア山に自分の顔", ko: "러시모어 산에 얼굴 조각", "zh-tw": "把臉刻在拉什莫爾山" },
        desc: { zh: "就在林肯旁边。但是要大一点。", en: "Next to Lincoln. But bigger.", es: "Junto a Lincoln. Pero más grande.", fr: "À côté de Lincoln. Mais plus gros.", ja: "リンカーンの隣に。でももっと大きく。", ko: "링컨 옆에. 하지만 더 크게.", "zh-tw": "就在林肯旁邊。但是要大一點。" },
        cost: 10,
        phase: "mid",
        effect: { approval: -15, ego: 50, money: -20 }
    },

    // ---------------- LATE PHASE (Desperation & Chaos) ----------------
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "宣布自己为终身总统", en: "President for Life", es: "Presidente Vitalicio", fr: "Président à Vie", ja: "終身大統領宣言", ko: "종신 대통령 선언", "zh-tw": "宣布自己為終身總統" },
        desc: { zh: "选举太贵了，真的很浪费。只要我不死，我就当总统。", en: "Elections are expensive waste. I stay till I die.", es: "Elecciones son derroche. Me quedo hasta morir.", fr: "Élections trop chères. Je reste jusqu'à la mort.", ja: "選挙は無駄遣いだ。死ぬまでやるぞ。", ko: "선거는 낭비입니다. 죽을 때까지 하겠습니다.", "zh-tw": "選舉太貴了，真的很浪費。只要我不死，我就當總統。" },
        cost: 15,
        phase: "late",
        effect: { approval: -30, dictatorship: 20, coup_risk: 15 }
    },
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "禁止反对党", en: "Ban Opposition Party", es: "Prohibir Oposición", fr: "Interdire l'Opposition", ja: "野党禁止", ko: "야당 금지", "zh-tw": "禁止反對黨" },
        desc: { zh: "为了‘国家团结’。现在只有一个党了，就是我的生日派对。", en: "For 'Unity'. Only one party now: My Birthday Party.", es: "Por 'Unidad'. Solo un partido: Mi Fiesta.", fr: "Pour l''Unité'. Un seul parti : Ma Fête.", ja: "「団結」のため。政党は一つ、私の誕生パーティーだけ。", ko: "'통합'을 위해. 이제 당은 하나뿐, 내 생일 파티.", "zh-tw": "為了‘國家團結’。現在只有一個黨了，就是我的生日派對。" },
        cost: 10,
        phase: "late",
        effect: { approval: -20, control: 20, unrest: 15 }
    },
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "煽动暴徒冲击国会", en: "Incite Capitol Mob", es: "Incitar Turba Capitolio", fr: "Inciter Foule Capitole", ja: "議会襲撃扇動", ko: "의회 난입 선동", "zh-tw": "煽動暴徒衝擊國會" },
        desc: { zh: "如果他们不认证结果，那就稍微‘鼓励’一下游客去参观。", en: "Encourage 'tourists' if they don't certify results.", es: "Anima a 'turistas' si no certifican resultados.", fr: "Encouragez les 'touristes' s'ils ne certifient pas.", ja: "結果を承認しないなら「観光客」を励ませ。", ko: "결과 승인 안 하면 '관광객'들을 좀 격려하세요.", "zh-tw": "如果他們不認證結果，那就稍微‘鼓勵’一下遊客去參觀。" },
        cost: 5,
        phase: "late",
        effect: { approval: -25, chaos: 30, loyalty: 5 }
    },
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "特赦所有亲信", en: "Pardon Cronies", es: "Indultar Cronies", fr: "Grâcier Copains", ja: "取り巻き全員恩赦", ko: "측근 전원 사면", "zh-tw": "特赦所有親信" },
        desc: { zh: "犯罪？不，那是‘创造性的法律解读’。你们都自由了！", en: "Crimes? No, 'creative legal interpretation'. Be free!", es: "¿Crímenes? No, 'interpretación creativa'. ¡Libres!", fr: "Crimes ? Non, 'interprétation créative'. Libres !", ja: "犯罪？いや、「創造的法的解釈」だ。自由だ！", ko: "범죄? 아니, '창의적 법 해석'이야. 자유다!", "zh-tw": "犯罪？不，那是‘創造性的法律解讀’。你們都自由了！" },
        cost: 5,
        phase: "late",
        effect: { approval: -10, loyalty: 20 }
    },
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "躲在地堡里", en: "Hide in Bunker", es: "Esconderse en Bunker", fr: "Cacher dans Bunker", ja: "バンカーに隠れる", ko: "벙커로 피신", "zh-tw": "躲在地堡裡" },
        desc: { zh: "检查一下地堡是否还好用。并不是因为外面有抗议者。", en: "Just inspecting it. Not because of protestors.", es: "Solo inspeccionando. No por los manifestantes.", fr: "Juste inspection. Pas à cause des manifestants.", ja: "点検中だ。デモ隊のせいじゃない。", ko: "점검 중일 뿐이야. 시위대 때문이 아니라고.", "zh-tw": "檢查一下地堡是否還好用。並不是因為外面有抗議者。" },
        cost: 0,
        phase: "late",
        effect: { approval: -5, safety: 10 }
    },
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "解雇联邦调查局局长", en: "Fire FBI Director", es: "Despedir Director FBI", fr: "Virer Directeur FBI", ja: "FBI長官解任", ko: "FBI 국장 해임", "zh-tw": "解僱聯邦調查局局長" },
        desc: { zh: "实际上，解雇所有人。我自己来调查。", en: "Fire everyone. I will investigate myself.", es: "Despide a todos. Yo me investigo.", fr: "Virez tout le monde. J'enquête moi-même.", ja: "全員クビだ。私が自分で捜査する。", ko: "다 잘라. 내가 직접 수사한다.", "zh-tw": "實際上，解僱所有人。我自己來調查。" },
        cost: 8,
        phase: "late",
        effect: { approval: -15, obstruction: 20 }
    },
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "试图购买格陵兰岛", en: "Buy Greenland", es: "Comprar Groenlandia", fr: "Acheter Groenland", ja: "グリーンランド購入", ko: "그린란드 매입 시도", "zh-tw": "試圖購買格陵蘭島" },
        desc: { zh: "哪怕是现在，我们也应该想想房地产。", en: "Even now, think about real estate.", es: "Incluso ahora, piensa en inmuebles.", fr: "Même maintenant, pensez immobilier.", ja: "今でも不動産のことを考えるべきだ。", ko: "지금 상황에서도 부동산은 생각해야죠.", "zh-tw": "哪怕是現在，我們也應該想想房地產。" },
        cost: 5,
        phase: "late",
        effect: { approval: -5, international_mockery: 10 }
    },
    {
        type: { zh: "政治", en: "Politics", es: "Política", fr: "Politique", ja: "政治", ko: "정치", "zh-tw": "政治" },
        title: { zh: "宣布戒严", en: "Declare Martial Law", es: "Ley Marcial", fr: "Loi Martiale", ja: "戒厳令宣告", ko: "계엄령 선포", "zh-tw": "宣布戒嚴" },
        desc: { zh: "除非每个人都待在家里看我的直播，否则不许出门。", en: "Stay home and watch my stream.", es: "Quédate en casa y mira mi stream.", fr: "Restez chez vous et regardez mon stream.", ja: "家にいて私の配信を見ろ。", ko: "집에서 내 방송이나 봐.", "zh-tw": "除非每個人都待在家裡看我的直播，否則不許出門。" },
        cost: 12,
        phase: "late",
        effect: { approval: -40, control: 40, economy: -20 }
    }
);

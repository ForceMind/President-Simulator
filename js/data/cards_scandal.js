window.GAME_DATA = window.GAME_DATA || {};
window.GAME_DATA.CARD_DB = window.GAME_DATA.CARD_DB || [];

window.GAME_DATA.CARD_DB.push(
    // ---------------- EARLY PHASE ----------------
    {
        type: { zh: "丑闻", en: "Scandal", es: "Escándalo", fr: "Scandale", ja: "スキャンダル", ko: "스캔들", "zh-tw": "醜聞" },
        title: { zh: "被遗忘的私生子", en: "Forgotten Love Child", es: "Hijo Secreto", fr: "Enfant Caché", ja: "隠し子発覚", ko: "숨겨둔 자식", "zh-tw": "被遺忘的私生子" },
        desc: { zh: "那个长得和你一模一样的服务员？纯属巧合。", en: "That waiter looks just like you? Coincidence.", es: "¿Ese mesero es igual a ti? Coincidencia.", fr: "Ce serveur vous ressemble ? Coïncidence.", ja: "あなたにそっくりなウェイター？偶然だ。", ko: "당신하고 똑같이 생긴 웨이터? 우연의 일치죠.", "zh-tw": "那個長得和你一模一樣的服務員？純屬巧合。" },
        cost: 2,
        phase: "early",
        effect: { approval: -5, family_values: -10 }
    },
    {
        type: { zh: "丑闻", en: "Scandal", es: "Escándalo", fr: "Scandale", ja: "スキャンダル", ko: "스캔들", "zh-tw": "醜聞" },
        title: { zh: "论文抄袭曝光", en: "Plagiarized Thesis", es: "Tesis Plagiada", fr: "Thèse Plagiée", ja: "論文盗用発覚", ko: "논문 표절 적발", "zh-tw": "論文抄襲曝光" },
        desc: { zh: "你的大学论文其实是从维基百科复制粘贴的...而在当时维基百科还不存在。", en: "Copied from Wikipedia... before it existed.", es: "Copiada de Wikipedia... antes de que existiera.", fr: "Copié de Wikipédia... avant que ça existe.", ja: "ウィキペディアからコピペ...当時まだないのに。", ko: "위키백과 베꼈는데... 그땐 위키백과가 없었어.", "zh-tw": "你的大學論文其實是從維基百科複製粘貼的...而在當時維基百科還不存在。" },
        cost: 1,
        phase: "early",
        effect: { approval: -2, intelligence: -5 }
    },
    {
        type: { zh: "丑闻", en: "Scandal", es: "Escándalo", fr: "Scandale", ja: "スキャンダル", ko: "스캔들", "zh-tw": "醜聞" },
        title: { zh: "逃税记录泄露", en: "Tax Evasion Leaked", es: "Evasión Fiscal Filtrada", fr: "Évasion Fiscale Fuite", ja: "脱税記録流出", ko: "탈세 기록 유출", "zh-tw": "逃稅記錄洩露" },
        desc: { zh: "你不仅没交税，还向政府申请了低保。", en: "Paid no tax, and applied for welfare.", es: "Sin impuestos, y pediste bienestar.", fr: "Pas d'impôts, et demandé l'aide sociale.", ja: "税金払わず、生活保護申請。", ko: "세금은 안 내고 생활보조금 신청했군.", "zh-tw": "你不僅沒交稅，還向政府申請了低保。" },
        cost: 3,
        phase: "early",
        effect: { approval: -8, money: 2 }
    },

    // ---------------- MID PHASE ----------------
    {
        type: { zh: "丑闻", en: "Scandal", es: "Escándalo", fr: "Scandale", ja: "スキャンダル", ko: "스캔들", "zh-tw": "醜聞" },
        title: { zh: "用竞选资金买游艇", en: "Yacht with Campaign Funds", es: "Yate con Fondos Campaña", fr: "Yacht avec Fonds Campagne", ja: "選挙資金でヨット購入", ko: "선거 자금으로 요트 구입", "zh-tw": "用競選資金買遊艇" },
        desc: { zh: "这艘船叫‘民意号’，所以这显然是竞选开支。", en: "Named 'Public Opinion', so it's an expense.", es: "Llamado 'Opinión Pública', es un gasto.", fr: "Nommé 'Opinion Publique', c'est une dépense.", ja: "「民意号」という名前だから経費だ。", ko: "이름이 '여론호'니까 선거 비용이지.", "zh-tw": "這艘船叫‘民意號’，所以這顯然是競選開支。" },
        cost: 0,
        phase: "mid",
        effect: { money: 10, approval: -10, corruption: 10 }
    },
    {
        type: { zh: "丑闻", en: "Scandal", es: "Escándalo", fr: "Scandale", ja: "スキャンダル", ko: "스캔들", "zh-tw": "醜聞" },
        title: { zh: "录音门", en: "The Tape Leak", es: "Filtración de Cinta", fr: "Fuite de la Cassette", ja: "録音テープ流出", ko: "녹음 파일 유출", "zh-tw": "錄音門" },
        desc: { zh: "你在录音里说你讨厌你的选民。‘一群没牙的乡巴佬’。", en: "You called voters 'toothless hillbillies'.", es: "Llamaste a votantes 'paletos sin dientes'.", fr: "Traités les électeurs de 'ploucs sans dents'.", ja: "有権者を「歯のない田舎者」と呼んだ。", ko: "유권자를 '이빨 빠진 촌놈들'이라고 했군.", "zh-tw": "你在錄音裡說你討厭你的選民。‘一群沒牙的鄉巴佬’。" },
        cost: 5,
        phase: "mid",
        effect: { approval: -15, elitism: 10 }
    },
    {
        type: { zh: "丑闻", en: "Scandal", es: "Escándalo", fr: "Scandale", ja: "スキャンダル", ko: "스캔들", "zh-tw": "醜聞" },
        title: { zh: "与外国间谍的绯闻", en: "Spy Affair", es: "Affaire con Espía", fr: "Liaison avec Espion", ja: "スパイとの情事", ko: "스파이와의 염문", "zh-tw": "與外國間諜的緋聞" },
        desc: { zh: "但她真的很性感，而且她的名字真的是‘娜塔莎’。", en: "She was hot, name was literally 'Natasha'.", es: "Era sexy, y se llamaba 'Natasha'.", fr: "Sexy, et s'appelait 'Natasha'.", ja: "セクシーだったし、名前は本当に「ナターシャ」だ。", ko: "섹시하잖아, 이름도 진짜 '나타샤'였다고.", "zh-tw": "但她真的很性感，而且她的名字真的是‘娜塔莎’。" },
        cost: 4,
        phase: "mid",
        effect: { approval: -10, security: -15 }
    },
    {
        type: { zh: "丑闻", en: "Scandal", es: "Escándalo", fr: "Scandale", ja: "スキャンダル", ko: "스캔들", "zh-tw": "醜聞" },
        title: { zh: "高尔夫球场交易", en: "Golf Course Deal", es: "Trato Campo Golf", fr: "Affaire Golf", ja: "ゴルフ場取引", ko: "골프장 거래", "zh-tw": "高爾夫球場交易" },
        desc: { zh: "把军事基地建在你的度假村旁边，房价翻倍。", en: "Military base next to resort = property value up.", es: "Base militar junto a resort = valor sube.", fr: "Base militaire près du resort = valeur monte.", ja: "リゾートの隣に基地建設で地価倍増。", ko: "리조트 옆에 군사 기지 지어서 땅값 두 배.", "zh-tw": "把軍事基地建在你的度假村旁邊，房價翻倍。" },
        cost: 2,
        phase: "mid",
        effect: { money: 8, approval: -5 }
    },
    {
        type: { zh: "丑闻", en: "Scandal", es: "Escándalo", fr: "Scandale", ja: "スキャンダル", ko: "스캔들", "zh-tw": "醜聞" },
        title: { zh: "推特账号被黑...是你自己发的", en: "Twitter 'Hacked'", es: "Twitter 'Hackeado'", fr: "Twitter 'Piraté'", ja: "ツイッター乗っ取り...自作自演", ko: "트위터 해킹... 인 척", "zh-tw": "推特帳號被黑...是你自己發的" },
        desc: { zh: "凌晨2点的胡言乱语。把‘核按钮’拼成了‘喝按钮’。", en: "2AM rant. Typos everywhere.", es: "Divague de 2AM. Errores por todos lados.", fr: "Rant de 2h du mat. Coquilles partout.", ja: "午前2時の暴言。「核ボタン」を誤字。", ko: "새벽 2시의 헛소리. 오타 작렬.", "zh-tw": "凌晨2點的胡言亂語。把‘核按鈕’拼成了‘喝按鈕’。" },
        cost: 1,
        phase: "mid",
        effect: { approval: -2, mockery: 10 }
    },
    {
        type: { zh: "丑闻", en: "Scandal", es: "Escándalo", fr: "Scandale", ja: "スキャンダル", ko: "스캔들", "zh-tw": "醜聞" },
        title: { zh: "虚假慈善机构", en: "Fake Charity", es: "Caridad Falsa", fr: "Fausse Charité", ja: "偽の慈善団体", ko: "가짜 자선단체", "zh-tw": "虛假慈善機構" },
        desc: { zh: "‘救助小海豹’基金实际上是用来买你的肖像画的。", en: "'Save Seals' fund bought portraits of you.", es: "Fondo 'Salvar Focas' compró retratos tuyos.", fr: "Fonds 'Sauver Phoques' a acheté vos portraits.", ja: "「アザラシ救済」基金で肖像画を買った。", ko: "'물개 구조' 기금으로 자기 초상화 샀음.", "zh-tw": "‘救助小海豹’基金其實是用來買你的肖像畫的。" },
        cost: 3,
        phase: "mid",
        effect: { money: 5, approval: -12 }
    },
    {
        type: { zh: "丑闻", en: "Scandal", es: "Escándalo", fr: "Scandale", ja: "スキャンダル", ko: "스캔들", "zh-tw": "醜聞" },
        title: { zh: "内阁成员在直播中打架", en: "Cabinet Brawl Live", es: "Pelea Gabinete Vivo", fr: "Bagarre Cabinet Direct", ja: "閣僚の乱闘生中継", ko: "장관들 생방송 난투극", "zh-tw": "內閣成員在直播中打架" },
        desc: { zh: "国务卿用椅子砸了财政部长。收视率爆表。", en: "Secretary hit Treasurer with a chair. Ratings up.", es: "Secretario golpeó Tesorero con silla. Ratings suben.", fr: "Secrétaire a frappé Trésorier avec chaise. Audimat up.", ja: "国務長官が財務長官を椅子で殴打。高視聴率。", ko: "국무장관이 재무장관을 의자로 쳤어. 시청률 대박.", "zh-tw": "國務卿用椅子砸了財政部長。收視率爆表。" },
        cost: 0,
        phase: "mid",
        effect: { approval: 2, dignity: -15 }
    },
    {
        type: { zh: "丑闻", en: "Scandal", es: "Escándalo", fr: "Scandale", ja: "スキャンダル", ko: "스캔들", "zh-tw": "醜聞" },
        title: { zh: "酒店床虱爆发", en: "Hotel Bedbugs", es: "Chinches en Hotel", fr: "Punaises de Lit Hôtel", ja: "ホテル南京虫発生", ko: "호텔 빈대 소동", "zh-tw": "酒店床蝨爆發" },
        desc: { zh: "你的豪华酒店充满了寄生虫。比喻义和字面义都是。", en: "Your luxury hotel full of parasites. Literally.", es: "Tu hotel de lujo lleno de parásitos. Literal.", fr: "Votre hôtel de luxe plein de parasites. Littéralement.", ja: "高級ホテルが寄生虫だらけ。文字通り。", ko: "호텔에 기생충이 드글드글해. 말 그대로.", "zh-tw": "你的豪華酒店充滿了寄生蟲。比喻義和字面義都是。" },
        cost: 2,
        phase: "mid",
        effect: { money: -5, approval: -2 }
    },
    {
        type: { zh: "丑闻", en: "Scandal", es: "Escándalo", fr: "Scandale", ja: "スキャンダル", ko: "스캔들", "zh-tw": "醜聞" },
        title: { zh: "被拍到吃披萨用叉子", en: "Pizza with Fork", es: "Pizza con Tenedor", fr: "Pizza avec Fourchette", ja: "ピザをフォークで食べる", ko: "피자 포크로 먹기", "zh-tw": "被拍到吃披薩用叉子" },
        desc: { zh: "这是不可原谅的罪行。真正的美国人用手抓！", en: "Unforgivable crime. Real Americans use hands!", es: "¡Crimen imperdonable! ¡Usa las manos!", fr: "Crime impardonnable. Les vrais mangent avec les mains !", ja: "許されざる大罪。本物は手で食べる！", ko: "용서받지 못할 죄. 진짜 미국인은 손으로 먹는다고!", "zh-tw": "這是不可原諒的罪行。真正的美國人用手抓！" },
        cost: 1,
        phase: "mid",
        effect: { approval: -8, populism: -10 }
    },
    {
        type: { zh: "丑闻", en: "Scandal", es: "Escándalo", fr: "Scandale", ja: "スキャンダル", ko: "스캔들", "zh-tw": "醜聞" },
        title: { zh: "被揭露戴假发", en: "Toupee Revealed", es: "Tupé Revelado", fr: "Perruque Révélée", ja: "カツラ発覚", ko: "가발 들통", "zh-tw": "被揭露戴假髮" },
        desc: { zh: "一场大风毁了一切。那个橙色的东西飞走了。", en: "Wind ruined it. The orange thing flew away.", es: "El viento lo arruinó. La cosa naranja voló.", fr: "Le vent a tout gâché. Le truc orange s'est envolé.", ja: "強風で台無し。オレンジのあれが飛んでった。", ko: "바람이 다 망쳤어. 그 주황색 물체가 날아갔다고.", "zh-tw": "一場大風毀了一切。那個橙色的東西飛走了。" },
        cost: 1,
        phase: "mid",
        effect: { approval: -3, mockery: 20 }
    },
    {
        type: { zh: "丑闻", en: "Scandal", es: "Escándalo", fr: "Scandale", ja: "スキャンダル", ko: "스캔들", "zh-tw": "醜聞" },
        title: { zh: "在葬礼上自拍", en: "Funeral Selfie", es: "Selfie en Funeral", fr: "Selfie Funérailles", ja: "葬式で自撮り", ko: "장례식 셀카", "zh-tw": "在葬禮上自拍" },
        desc: { zh: "带着微笑和竖大拇指。", en: "Smiling and thumbs up.", es: "Sonriendo y pulgar arriba.", fr: "Sourire et pouce en l'air.", ja: "笑顔でサムズアップ。", ko: "웃으면서 엄지 척.", "zh-tw": "帶著微笑和豎大拇指。" },
        cost: 2,
        phase: "mid",
        effect: { approval: -10, respect: -20 }
    },
    {
        type: { zh: "丑闻", en: "Scandal", es: "Escándalo", fr: "Scandale", ja: "スキャンダル", ko: "스캔들", "zh-tw": "醜聞" },
        title: { zh: "赦免那个杀了人的网红", en: "Pardon Killer Influencer", es: "Indultar Influencer Asesor", fr: "Grâcier Influenceur Tueur", ja: "殺人インフルエンサー恩赦", ko: "살인범 인플루언서 사면", "zh-tw": "赦免那個殺了人的網紅" },
        desc: { zh: "因为他在YouTube上有两千万粉丝。", en: "Because he has 20M subs on YouTube.", es: "Porque tiene 20M subs en YouTube.", fr: "Parce qu'il a 20M d'abonnés YouTube.", ja: "YouTube登録者が2000万人いるから。", ko: "유튜브 구독자가 2천만이라서.", "zh-tw": "因為他在YouTube上有兩千萬粉絲。" },
        cost: 2,
        phase: "mid",
        effect: { approval: -5, youth_vote: 5 }
    },

    // ---------------- LATE PHASE ----------------
    {
        type: { zh: "丑闻", en: "Scandal", es: "Escándalo", fr: "Scandale", ja: "スキャンダル", ko: "스캔들", "zh-tw": "醜聞" },
        title: { zh: "试图出售阿拉斯加", en: "Sell Alaska", es: "Vender Alaska", fr: "Vendre Alaska", ja: "アラスカ売却の試み", ko: "알래스카 매각 시도", "zh-tw": "試圖出售阿拉斯加" },
        desc: { zh: "俄罗斯出价很高，而且那里太冷了。", en: "Russia offered good price. Too cold anyway.", es: "Rusia pagaba bien. Muy frío igual.", fr: "La Russie payait bien. Trop froid de toute façon.", ja: "ロシアが高値で買うって。どうせ寒いし。", ko: "러시아가 비싸게 산대. 어차피 춥잖아.", "zh-tw": "俄羅斯出價很高，而且那裡太冷了。" },
        cost: 5,
        phase: "late",
        effect: { approval: -20, treason_risk: 10 }
    },
    {
        type: { zh: "丑闻", en: "Scandal", es: "Escándalo", fr: "Scandale", ja: "スキャンダル", ko: "스캔들", "zh-tw": "醜聞" },
        title: { zh: "被发现囤积卫生纸", en: "Hoarding Toilet Paper", es: "Acopiar Papel Higiénico", fr: "Stockage Papier Toilette", ja: "トイレットペーパー買い占め", ko: "휴지 사재기 적발", "zh-tw": "被發現囤積衛生紙" },
        desc: { zh: "在短缺期间，地下室里有三千箱。", en: "3000 boxes in basement during shortage.", es: "3000 cajas en sótano durante escasez.", fr: "3000 boîtes au sous-sol pendant la pénurie.", ja: "不足時に地下室に3000箱。", ko: "품귀 때 지하실에 3000박스 쟁겨둠.", "zh-tw": "在短缺期間，地下室裡有三千箱。" },
        cost: 0,
        phase: "late",
        effect: { approval: -15, selfishness: 10 }
    },
    {
        type: { zh: "丑闻", en: "Scandal", es: "Escándalo", fr: "Scandale", ja: "スキャンダル", ko: "스캔들", "zh-tw": "醜聞" },
        title: { zh: "深度伪造视频...是真的", en: "Deepfake is Real", es: "Deepfake es Real", fr: "Deepfake est Réel", ja: "ディープフェイク...本物", ko: "딥페이크인 줄 알았는데 진짜", "zh-tw": "深度偽造視頻...是真的" },
        desc: { zh: "你赤身裸体骑着一只熊。糟糕的是，这无法否认。", en: "Naked on a bear. Undeniable.", es: "Desnudo en un oso. Innegable.", fr: "Nu sur un ours. Indéniable.", ja: "裸で熊に乗っていた。否定できない。", ko: "발가벗고 곰 탑승. 빼박캔트.", "zh-tw": "你赤身裸體騎著一隻熊。糟糕的是，這無法否認。" },
        cost: 5,
        phase: "late",
        effect: { approval: -10, insanity: 10 }
    },
    {
        type: { zh: "丑闻", en: "Scandal", es: "Escándalo", fr: "Scandale", ja: "スキャンダル", ko: "스캔들", "zh-tw": "醜聞" },
        title: { zh: "在国家电视台上崩溃", en: "Meltdown on TV", es: "Colapso en TV", fr: "Effondrement TV", ja: "生放送で精神崩壊", ko: "생방송 멘탈 붕괴", "zh-tw": "在國家電視台上崩潰" },
        desc: { zh: "哭着喊妈妈，并承认偷了小学的饼干。", en: "Crying for mommy, admitted cookie theft.", es: "Llorando por mami, admitió robo de galletas.", fr: "Pleurant pour maman, a avoué vol de biscuits.", ja: "ママを呼んで泣き、クッキー泥棒を告白。", ko: "엄마 찾으며 펑펑 울고 초딩 때 쿠키 훔친 거 자백.", "zh-tw": "哭著喊媽媽，並承認偷了小學的餅乾。" },
        cost: 2,
        phase: "late",
        effect: { approval: -25, weakness: 20 }
    },
    {
        type: { zh: "丑闻", en: "Scandal", es: "Escándalo", fr: "Scandale", ja: "スキャンダル", ko: "스캔들", "zh-tw": "醜聞" },
        title: { zh: "被发现是蜥蜴人", en: "Lizard Person Exposed", es: "Hombre Lagarto Expuesto", fr: "Homme-Lézard Exposé", ja: "トカゲ人間発覚", ko: "도마뱀 인간 발각", "zh-tw": "被發現是蜥蜴人" },
        desc: { zh: "你的皮肤脱落了一块，露出了绿色的鳞片。这解释了很多。", en: "Skin peeled, green scales showed. Explains a lot.", es: "Piel pelada, escamas verdes. Explica mucho.", fr: "Peau pelée, écailles vertes. Tout s'explique.", ja: "皮が剥け、緑の鱗が。納得だ。", ko: "피부가 벗겨져서 초록 비늘이 보임. 납득이 가네.", "zh-tw": "你的皮膚脫落了一塊，露出了綠色的鱗片。這解釋了很多。" },
        cost: 10,
        phase: "late",
        effect: { approval: -50, conspiracy_confirmed: 100 }
    },
    {
        type: { zh: "丑闻", en: "Scandal", es: "Escándalo", fr: "Scandale", ja: "スキャンダル", ko: "스캔들", "zh-tw": "醜聞" },
        title: { zh: "在国旗上签名卖钱", en: "Sign & Sell Flag", es: "Firmar y Vender Bandera", fr: "Signer et Vendre Drapeau", ja: "国旗サイン転売", ko: "국기에 싸인해서 팔기", "zh-tw": "在國旗上簽名賣錢" },
        desc: { zh: "在eBay上拍卖，起拍价$9.99。", en: "Auction on eBay, starting $9.99.", es: "Subasta eBay, inicia $9.99.", fr: "Enchère eBay, à partir de 9,99$.", ja: "eBayでオークション、9.99ドルから。", ko: "이베이 경매, 시작가 9.99달러.", "zh-tw": "在eBay上拍賣，起拍價$9.99。" },
        cost: 0,
        phase: "late",
        effect: { approval: -10, cash: 1 }
    }
);

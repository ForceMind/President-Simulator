window.GAME_DATA = window.GAME_DATA || {};
window.GAME_DATA.CARD_DB = window.GAME_DATA.CARD_DB || [];

window.GAME_DATA.CARD_DB.push(
    // ---------------- EARLY PHASE (Posturing) ----------------
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "向盟友索要保护费", en: "Demand Protection Money", es: "Exigir Pago Protección", fr: "Racketter Alliés", ja: "同盟国にみかじめ料要求", ko: "동맹국에 보호비 요구", "zh-tw": "向盟友索要保護費" },
        desc: { zh: "那是很棒的军事基地，如果不付钱，我们就把它变成赌场。", en: "Nice base. Pay up or it becomes a casino.", es: "Linda base. Paga o será un casino.", fr: "Belle base. Payez ou ça devient un casino.", ja: "いい基地だ。払わないならカジノにするぞ。", ko: "멋진 기지군. 돈 안 내면 카지노로 만들겠어.", "zh-tw": "那是很棒的軍事基地，如果不付錢，我們就把它變成賭場。" },
        cost: 2,
        phase: "early",
        effect: { money: 10, approval: 5, alliances: -10 }
    },
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "阅兵式", en: "Military Parade", es: "Desfile Militar", fr: "Parade Militaire", ja: "軍事パレード", ko: "군사 퍼레이드", "zh-tw": "閱兵式" },
        desc: { zh: "我们要很多坦克。由于道路承重不够，这可能会毁坏街道，但看起来很威风。", en: "Lots of tanks. Crushes roads, but looks strong.", es: "Muchos tanques. Rompe calles, pero se ve fuerte.", fr: "Beaucoup de tanks. Ecrase les routes, mais fort.", ja: "戦車をたくさん。道路は壊れるが、強そうだ。", ko: "탱크 많이. 도로는 부서지겠지만, 강해 보일 거야.", "zh-tw": "我們要很多坦克。由於道路承重不夠，這可能會毀壞街道，但看起來很威風。" },
        cost: 5,
        phase: "early",
        effect: { approval: 5, money: -5, ego: 10 }
    },
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "退出核协议", en: "Exit Nuclear Deal", es: "Salir Acuerdo Nuclear", fr: "Quitter Accord Nucléaire", ja: "核合意離脱", ko: "핵협정 탈퇴", "zh-tw": "退出核協議" },
        desc: { zh: "那个协议是以前的人签的，所以肯定很糟糕。现在我们可以造更大的烟花。", en: "Old deal bad. Now we make bigger fireworks.", es: "Acuerdo viejo malo. Ahora fuegos artificiales más grandes.", fr: "Viel accord mauvais. Maintenant plus gros feux d'artifice.", ja: "古い合意はダメだ。もっと大きな花火を作ろう。", ko: "옛날 조약은 구려. 이제 더 큰 불꽃놀이를 하자고.", "zh-tw": "那個協議是以前的人簽的，所以肯定很糟糕。現在我們可以造更大的煙花。" },
        cost: 0,
        phase: "early",
        effect: { approval: 5, tension: 15, stability: -5 }
    },
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "任命疯狗将军为国防部长", en: "Appoint General 'Mad Dog'", es: "Nombrar General 'Perro Loco'", fr: "Nommer Général 'Chien Fou'", ja: "「マッドドッグ」将軍任命", ko: "'미친 개' 장군 임명", "zh-tw": "任命瘋狗將軍為國防部長" },
        desc: { zh: "他的绰号是‘疯狗’。这听起来很稳定，很理智。", en: "Nickname 'Mad Dog'. Sounds stable and sane.", es: "Apodo 'Perro Loco'. Suena estable y cuerdo.", fr: "Surnom 'Chien Fou'. Ça semble stable et sensé.", ja: "あだ名は「狂犬」。安定的で正気な響きだ。", ko: "별명이 '미친 개'. 아주 안정적이고 제정신으로 들리는군.", "zh-tw": "他的綽號是‘瘋狗’。這聽起來很穩定，很理智。" },
        cost: 2,
        phase: "early",
        effect: { approval: 5, military_competence: 5 }
    },

    // ---------------- MID PHASE (Conflict & Crisis) ----------------
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "无人机暗杀", en: "Drone Assassination", es: "Asesinato con Dron", fr: "Assassinat par Drone", ja: "ドローン暗殺", ko: "드론 암살", "zh-tw": "無人機暗殺" },
        desc: { zh: "这就好像电子游戏，只不过得分是根据目标的重要性来算的。", en: "Just like video games, but with high scores.", es: "Como videojuegos, pero con puntaje alto.", fr: "Comme un jeu vidéo, mais avec des scores.", ja: "ビデオゲームみたいだ。ハイスコアもある。", ko: "비디오 게임 같네. 점수도 매기고.", "zh-tw": "這就好像電子遊戲，只不過得分是根據目標的重要性來算的。" },
        cost: 3,
        phase: "mid",
        effect: { approval: 5, tension: 10, money: -2 }
    },
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "突然撤军", en: "Sudden Withdrawal", es: "Retirada Repentina", fr: "Retrait Soudain", ja: "突然の撤退", ko: "갑작스런 철수", "zh-tw": "突然撤軍" },
        desc: { zh: "不管他们在那里干什么，我们都不干了。甚至不告诉盟友我们走了。", en: "We're out. Didn't tell allies. Bye.", es: "Nos vamos. No avisamos a aliados. Chau.", fr: "On part. Sans prévenir les alliés. Bye.", ja: "もうやめた。同盟国にも言わずに。じゃあな。", ko: "우린 빠진다. 동맹국한텐 말 안 했어. 안녕.", "zh-tw": "不管他們在那裡幹什麼，我們都不干了。甚至不告訴盟友我們走了。" },
        cost: 1,
        phase: "mid",
        effect: { approval: 2, chaos: 15, alliances: -20 }
    },
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "称赞独裁者", en: "Praise Dictator", es: "Elogiar Dictador", fr: "Louer Dictateur", ja: "独裁者を称賛", ko: "독재자 칭송", "zh-tw": "稱讚獨裁者" },
        desc: { zh: "他说我写的情书很美。我们相爱了。", en: "He loved my love letter. We are in love.", es: "Amó mi carta. Estamos enamorados.", fr: "Il a aimé ma lettre. Nous sommes amoureux.", ja: "彼は私のラブレターを気に入った。相思相愛だ。", ko: "내 러브레터를 좋아하더군. 우린 사랑에 빠졌어.", "zh-tw": "他說我寫的情書很美。我們相愛了。" },
        cost: 0,
        phase: "mid",
        effect: { approval: -5, diplomacy: -10, personal_friendship: 10 }
    },
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "贸易禁运", en: "Trade Embargo", es: "Embargo Comercial", fr: "Embargo Commercial", ja: "貿易禁輸", ko: "무역 금수", "zh-tw": "貿易禁運" },
        desc: { zh: "不准买他们的香蕉！也不准卖给他们我们的... 自由。", en: "Don't buy their bananas! No freedom for them.", es: "¡No compren sus bananas! Sin libertad para ellos.", fr: "N'achetez pas leurs bananes ! Pas de liberté pour eux.", ja: "彼らのバナナを買うな！我々の自由も売るな。", ko: "쟤네 바나나 사지 마! 우리 자유도 팔지 말고.", "zh-tw": "不准買他們的香蕉！也不准賣給他們我們的... 自由。" },
        cost: 2,
        phase: "mid",
        effect: { money: -5, approval: 2, suffering: 5 }
    },
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "建造边境墙", en: "Build Border Wall", es: "Construir Muro", fr: "Mur Frontalier", ja: "国境の壁建設", ko: "국경 장벽 건설", "zh-tw": "建造邊境牆" },
        desc: { zh: "又大又美。或许用太阳能板？不，还是用尖刺吧。", en: "Big and beautiful. Solar panels? No, spikes.", es: "Grande y hermoso. ¿Paneles solares? No, pinchos.", fr: "Grand et beau. Panneaux solaires ? Non, piques.", ja: "大きくて美しい。ソーラーパネル？いや、トゲだ。", ko: "크고 아름답게. 태양광 패널? 아니, 쇠창살로.", "zh-tw": "又大又美。或許用太陽能板？不，還是用尖刺吧。" },
        cost: 10,
        phase: "mid",
        effect: { money: -15, approval: 10, division: 10 }
    },
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "对随机国家发动空袭", en: "Random Airstrike", es: "Ataque Aéreo Aleatorio", fr: "Frappe Aérienne Aléatoire", ja: "ランダム空爆", ko: "무작위 공습", "zh-tw": "對隨機國家發動空襲" },
        desc: { zh: "为了转移国内丑闻的注意力。没什么能比战斧导弹更能说‘看那边！’了。", en: "Distraction needed. Look at the missiles!", es: "Necesito distracción. ¡Miren los misiles!", fr: "Besoin de distraction. Regardez les missiles !", ja: "スキャンダル逸らしだ。あっちを見ろ、ミサイルだ！", ko: "관심 돌리기가 필요해. 저기 미사일 좀 봐!", "zh-tw": "為了轉移國內醜聞的注意力。沒什麼能比戰斧導彈更能說‘看那邊！’了。" },
        cost: 8,
        phase: "mid",
        effect: { approval: 10, tension: 20, scandal_reduction: 15 }
    },
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "向争议地区出售武器", en: "Sell Arms to Conflict Zone", es: "Vender Armas Zona Conflicto", fr: "Vendre Armes Zone Conflit", ja: "紛争地帯に武器売却", ko: "분쟁 지역 무기 판매", "zh-tw": "向爭議地區出售武器" },
        desc: { zh: "如果他们互相射击，他们就需要买更多的子弹。这是简单的经济学。", en: "They shoot, they buy more bullets. Economics.", es: "Disparan, compran más balas. Economía.", fr: "Ils tirent, ils achètent plus. Économie.", ja: "撃ち合えば弾が売れる。経済学だ。", ko: "총을 쏘면 총알을 더 사겠지. 경제학이야.", "zh-tw": "如果他們互相射擊，他們就需要買更多的子彈。這是簡單的經濟學。" },
        cost: 0,
        phase: "mid",
        effect: { money: 15, approval: -5, peace: -20 }
    },
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "侮辱北约", en: "Insult NATO", es: "Insultar OTAN", fr: "Insulter OTAN", ja: "NATO侮辱", ko: "나토 모욕", "zh-tw": "侮辱北約" },
        desc: { zh: "为什么我们要保护黑山？他们在那儿很具侵略性。", en: "Why protect Montenegro? Very aggressive people.", es: "¿Por qué proteger Montenegro? Gente agresiva.", fr: "Pourquoi protéger le Monténégro ? Gens agressifs.", ja: "なぜモンテネグロを守る？攻撃的な人々だ。", ko: "몬테네그로를 왜 지켜줘? 아주 공격적인 사람들이라니깐.", "zh-tw": "為什麼我們要保護黑山？他們在那兒很具侵略性。" },
        cost: 1,
        phase: "mid",
        effect: { money: 0, approval: 5, security: -15 }
    },
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "雇佣私人雇佣兵", en: "Hire Mercenaries", es: "Contratar Mercenarios", fr: "Louer Mercenaires", ja: "傭兵を雇う", ko: "용병 고용", "zh-tw": "僱傭私人僱傭兵" },
        desc: { zh: "战争罪行？如果是承包商干的，那就只是‘合同纠纷’。", en: "War crimes? No, 'contract disputes'.", es: "¿Crímenes de guerra? No, 'disputas de contrato'.", fr: "Crimes de guerre ? Non, 'litiges contractuels'.", ja: "戦争犯罪？いや、「契約上の紛争」だ。", ko: "전쟁 범죄? 아니, '계약 분쟁'이야.", "zh-tw": "戰爭罪行？如果是承包商幹的，那就只是‘合同糾紛’。" },
        cost: 6,
        phase: "mid",
        effect: { money: -5, approval: -5, plausible_deniability: 10 }
    },
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "网络攻击盟友", en: "Cyberattack Ally", es: "Ciberataque Aliado", fr: "Cyberattaque Allié", ja: "同盟国にサイバー攻撃", ko: "동맹국 사이버 공격", "zh-tw": "網絡攻擊盟友" },
        desc: { zh: "只是检查一下他们的防火墙。哎呀，删除了他们的税收记录。", en: "Checking firewalls. Oops, deleted tax records.", es: "Revisando firewalls. Ups, borré impuestos.", fr: "Vérif pare-feu. Oups, supprimé impôts.", ja: "防火壁の点検だ。おっと、税記録消しちゃった。", ko: "방화벽 점검 중이야. 앗, 세금 기록 지워버렸네.", "zh-tw": "只是檢查一下他們的防火牆。哎呀，刪除了他們的稅收記錄。" },
        cost: 3,
        phase: "mid",
        effect: { money: 5, relations: -10 }
    },
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "在推特上宣战", en: "Declare War on Twitter", es: "Declarar Guerra en Twitter", fr: "Guerre sur Twitter", ja: "ツイッターで宣戦布告", ko: "트위터로 선전포고", "zh-tw": "在推特上宣戰" },
        desc: { zh: "正式的文件太慢了。@EnemyNation 准备好被核平了吗？#MAGA", en: "Paperwork slow. @EnemyNation prepare for nuke! #MAGA", es: "Papeles lentos. @EnemyNation ¡prepara nuke!", fr: "Papiers lents. @EnemyNation préparez nuke !", ja: "書類は遅い。@EnemyNation 核の準備はいいか？", ko: "서류는 느려. @EnemyNation 핵폭탄 맛 좀 볼래?", "zh-tw": "正式的文件太慢了。@EnemyNation 準備好被核平了嗎？#MAGA" },
        cost: 0,
        phase: "mid",
        effect: { approval: 5, panic: 20 }
    },
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "没收石油", en: "Seize Oil", es: "Confiscar Petróleo", fr: "Saisir Pétrole", ja: "石油没収", ko: "석유 압수", "zh-tw": "沒收石油" },
        desc: { zh: "我们帮了他们，所以我们应该保留石油。这很公平。", en: "We helped them, so we keep the oil. Fair.", es: "Ayudamos, nos quedamos el petróleo. Justo.", fr: "On a aidé, on garde le pétrole. Juste.", ja: "助けてやったんだ、石油はもらう。公平だろ。", ko: "도와줬으니까 석유는 우리가 갖는다. 공평하지?", "zh-tw": "我們幫了他們，所以我們應該保留石油。這很公平。" },
        cost: 5,
        phase: "mid",
        effect: { money: 20, approval: 5, terrorism: 10 }
    },
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "建立太空殖民地...的宣传片", en: "Space Colony Trailer", es: "Trailer Colonia Espacial", fr: "Trailer Colonie Spatiale", ja: "宇宙植民地...の予告編", ko: "우주 식민지... 예고편", "zh-tw": "建立太空殖民地...的宣傳片" },
        desc: { zh: "实际上没有火箭。但是CGI看起来很棒。", en: "No rockets yet. CGI looks great though.", es: "Sin cohetes. CGI se ve genial.", fr: "Pas de fusées. CGI superbe.", ja: "ロケットはない。だがCGIは最高だ。", ko: "로켓은 없어. 그래도 CGI는 끝내주네.", "zh-tw": "實際上沒有火箭。但是CGI看起來很棒。" },
        cost: 2,
        phase: "mid",
        effect: { approval: 5, money: -2 }
    },
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "驱逐外交官", en: "Expel Diplomats", es: "Expulsar Diplomáticos", fr: "Expulser Diplomates", ja: "外交官追放", ko: "외교관 추방", "zh-tw": "驅逐外交官" },
        desc: { zh: "他们甚至不付停车罚单。滚。", en: "They don't pay parking tickets. Get out.", es: "No pagan multas. Fuera.", fr: "Ils ne paient pas les amendes. Dehors.", ja: "駐車違反も払わない。出ていけ。", ko: "주차 딱지도 안 떼더군. 나가.", "zh-tw": "他們甚至不付停車罰單。滾。" },
        cost: 1,
        phase: "mid",
        effect: { approval: 5, diplomacy: -5 }
    },
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "重启核试验", en: "Resume Nuke Testing", es: "Reanudar Pruebas Nuke", fr: "Reprendre Essais Nuke", ja: "核実験再開", ko: "핵실험 재개", "zh-tw": "重啟核試驗" },
        desc: { zh: "我们需要确保它们还能响。在内华达州震一下没什么大不了的。", en: "Check if they go boom. Just a little shake.", es: "Ver si explotan. Solo un temblor.", fr: "Vérifier si boum. Juste une secousse.", ja: "爆発するか確認だ。ちょっと揺れるだけ。", ko: "잘 터지나 봐야지. 그냥 좀 흔들릴 뿐이야.", "zh-tw": "我們需要確保它們還能響。在內華達州震一下沒什麼大不了的。" },
        cost: 5,
        phase: "mid",
        effect: { approval: 5, environment: -10, tension: 15 }
    },
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "间谍气球", en: "Spy Balloon", es: "Globo Espía", fr: "Ballon Espion", ja: "スパイ気球", ko: "정찰 풍선", "zh-tw": "間諜氣球" },
        desc: { zh: "是气象气球！绝对不是在偷听他们的电话。", en: "Weather balloon! Not listening to phones.", es: "¡Globo meteorológico! No escucha teléfonos.", fr: "Ballon météo ! N'écoute pas les téléphones.", ja: "気象気球だ！盗聴なんてしていない。", ko: "기상 관측용이야! 도청 같은 거 안 해.", "zh-tw": "是氣象氣球！絕對不是在偷聽他們的電話。" },
        cost: 2,
        phase: "mid",
        effect: { intelligence: 5, embarrassment: 5 }
    },

    // ---------------- LATE PHASE (Global Conflict) ----------------
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "按下那个大按钮", en: "Push Big Button", es: "Presionar Botón Grande", fr: "Appuyer Gros Bouton", ja: "大きなボタンを押す", ko: "큰 버튼 누르기", "zh-tw": "按下那個大按鈕" },
        desc: { zh: "我的按钮比他的大，而且真的管用。", en: "My button is bigger and it works.", es: "Mi botón es más grande y funciona.", fr: "Mon bouton est plus gros et marche.", ja: "私のボタンの方が大きいし、機能する。", ko: "내 버튼이 더 크고 작동도 잘 돼.", "zh-tw": "我的按鈕比他的大，而且真的管用。" },
        cost: 0,
        phase: "late",
        effect: { approval: -50, devastation: 100, game_over_risk: 50 }
    },
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "入侵邻国", en: "Invade Neighbor", es: "Invadir Vecino", fr: "Envahir Voisin", ja: "隣国侵攻", ko: "이웃나라 침공", "zh-tw": "入侵鄰國" },
        desc: { zh: "他们既然说着我们的语言，那地就是我们的。", en: "They speak our language, so it's our land.", es: "Hablan nuestro idioma, es nuestra tierra.", fr: "Ils parlent notre langue, c'est à nous.", ja: "我々の言葉を話すなら、そこは我々の土地だ。", ko: "우리말 쓰니까 우리 땅이지.", "zh-tw": "他們既然說著我們的語言，那地就是我們的。" },
        cost: 15,
        phase: "late",
        effect: { approval: 10, economy: -30, sanctions: 20 }
    },
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "退出联合国", en: "Withdraw from UN", es: "Retirarse de ONU", fr: "Quitter ONU", ja: "国連脱退", ko: "UN 탈퇴", "zh-tw": "退出聯合國" },
        desc: { zh: "反正他们只是在那里聊天喝茶。我们要在自己的后院建这玩意。", en: "Just talking and drinking tea anyway. We build it here.", es: "Solo hablan y beben té. Lo construimos aquí.", fr: "Ils parlent et boivent du thé. On construit ici.", ja: "どうせお茶飲み話だ。裏庭に作ろう。", ko: "가서 차나 마시고 수다나 떨잖아. 우리끼리 만들자고.", "zh-tw": "反正他們只是在那裡聊天喝茶。我們要在自己的後院建這玩意。" },
        cost: 0,
        phase: "late",
        effect: { approval: 5, isolation: 30 }
    },
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "全面征兵", en: "Total Conscription", es: "Conscripción Total", fr: "Conscription Totale", ja: "全面徴兵", ko: "전면 징병", "zh-tw": "全面徵兵" },
        desc: { zh: "不管是跛子还是瞎子，只要能拿枪，就是好士兵。", en: "Limping or blind, if you can hold a gun, you are in.", es: "Cojo o ciego, si sostienes arma, entras.", fr: "Boiteux ou aveugle, si tu tiens un fusil, t'es in.", ja: "足が悪くても目が見えなくても、銃を持てれば兵士だ。", ko: "절뚝거리든 장님이든, 총만 들 수 있으면 돼.", "zh-tw": "不管是跛子還是瞎子，只要能拿槍，就是好士兵。" },
        cost: 10,
        phase: "late",
        effect: { approval: -40, manpower: 50 }
    },
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "轰炸自己的各种设施", en: "Scorched Earth", es: "Tierra Quemada", fr: "Terre Brûlée", ja: "焦土作戦", ko: "초토화 작전", "zh-tw": "轟炸自己的各種設施" },
        desc: { zh: "焦土政策。如果我不能拥有它，没人能。", en: "If I can't have it, no one can.", es: "Si no es mío, de nadie.", fr: "Si je ne peux l'avoir, personne ne peut.", ja: "私が持てないなら誰も持てない。", ko: "내가 가질 수 없다면 아무도 못 가져.", "zh-tw": "焦土政策。如果我不能擁有它，沒人能。" },
        cost: 5,
        phase: "late",
        effect: { approval: -30, chaos: 40 }
    },
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "煽动外国政变", en: "Incite Foreign Coup", es: "Incitar Golpe Ext.", fr: "Inciter Coup Étranger", ja: "外国のクーデター扇動", ko: "해외 쿠데타 선동", "zh-tw": "煽動外國政變" },
        desc: { zh: "那个看起来很友好的将军说他喜欢我很酷。", en: "Friendly general says I'm cool.", es: "General amigable dice que soy cool.", fr: "Général amical dit que je suis cool.", ja: "友好的な将軍が私をクールだと言った。", ko: "친한 장군이 내가 멋지다더군.", "zh-tw": "那個看起來很友好的將軍說他喜歡我很酷。" },
        cost: 8,
        phase: "late",
        effect: { money: -10, influence: 20 }
    },
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "世界末日地堡票", en: "Doomsday Bunker Ticket", es: "Ticket Bunker Juicio", fr: "Ticket Bunker Fin du Monde", ja: "終末バンカーチケット", ko: "지구 종말 벙커 티켓", "zh-tw": "世界末日地堡票" },
        desc: { zh: "向富人出售座位。穷人？祝好运。", en: "Seats for rich. Poor? Good luck.", es: "Asientos para ricos. ¿Pobres? Suerte.", fr: "Sièges pour riches. Pauvres ? Bonne chance.", ja: "金持ちに席を売る。貧乏人は？幸運を。", ko: "부자들한테 좌석 팔아. 가난한 사람들? 행운을 빈다.", "zh-tw": "向富人出售座位。窮人？祝好運。" },
        cost: 0,
        phase: "late",
        effect: { money: 100, approval: -80 }
    },
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "释放生化武器...意外地", en: "Accidental Bio-Weapon", es: "Bio-Arma Accidental", fr: "Bio-Arme Accidentelle", ja: "生物兵器...誤放出", ko: "생화학 무기... 실수로 방출", "zh-tw": "釋放生化武器...意外地" },
        desc: { zh: "实验室的实习生把瓶子摔了。", en: "Intern dropped a vial.", es: "El pasante tiró un frasco.", fr: "Le stagiaire a fait tomber une fiole.", ja: "インターンが瓶を落とした。", ko: "인턴이 병을 떨어뜨렸어.", "zh-tw": "實驗室的實習生把瓶子摔了。" },
        cost: 0,
        phase: "late",
        effect: { approval: -60, population: -20 }
    },
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "宣布外星人存在", en: "Announce Aliens", es: "Anunciar Alienígenas", fr: "Annoncer Aliens", ja: "エイリアンの存在公表", ko: "외계인 존재 발표", "zh-tw": "宣布外星人存在" },
        desc: { zh: "最后的手段。团结全人类...对抗不存在的敌人。", en: "Last resort. Unite humanity vs fake enemy.", es: "Último recurso. Unir humanidad vs enemigo falso.", fr: "Dernier recours. Unir humanité contre faux ennemi.", ja: "最後の手段。偽の敵に対し人類団結。", ko: "최후의 수단. 가짜 적에 맞서 인류 통합.", "zh-tw": "最後的手段。團結全人類...對抗不存在的敵人。" },
        cost: 2,
        phase: "late",
        effect: { approval: 20, hysteria: 40 }
    },
    {
        type: { zh: "军事", en: "Military", es: "Militar", fr: "Militaire", ja: "軍事", ko: "군사", "zh-tw": "軍事" },
        title: { zh: "建立机器人军队", en: "Robot Army", es: "Ejército Robot", fr: "Armée Robot", ja: "ロボット軍隊", ko: "로봇 군대", "zh-tw": "建立機器人軍隊" },
        desc: { zh: "终结者并不是科幻片，它是纪录片。", en: "Terminator is a documentary.", es: "Terminator es un documental.", fr: "Terminator est un documentaire.", ja: "ターミネーターはドキュメンタリーだ。", ko: "터미네이터는 다큐멘터리야.", "zh-tw": "終結者並不是科幻片，它是紀錄片。" },
        cost: 20,
        phase: "late",
        effect: { money: -50, power: 50, skynet_risk: 80 }
    }
);

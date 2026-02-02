(function() {
    const zhFixes = {
        "eval_title_legend": "千古明君",
        "eval_title_tyrant": "铁腕暴君",
        "eval_title_messiah": "在世圣人",
        "eval_title_tech_lord": "赛博大帝",
        "eval_title_warmonger": "战争狂人",
        "eval_title_plutocrat": "金钱主宰",
        "eval_title_puppet": "提线木偶",
        "eval_title_average": "平庸总统",
        "eval_title_incompetent": "治国无方",
        "eval_desc_legend": "你的名字将被永远铭刻在历史的丰碑上，人民视你为国家的救世主。",
        "eval_desc_tyrant": "虽然你让国家免于分裂，但你的手段让每一个深夜的敲门声都成为噩梦。",
        "eval_desc_messiah": "在这个混乱的世界里，你选择了最艰难的善良之路，这不仅是政治，更是修行。",
        "eval_desc_tech_lord": "你让国家跨入了新纪元，虽然有人质疑主要是谁在掌控这个新世界。",
        "eval_desc_warmonger": "世界在燃烧，而你在灰烬中加冕。你的功绩建立在骸骨之上。",
        "eval_desc_plutocrat": "国家富得流油，或者说，你的朋友们富得流油。金钱永不眠。",
        "eval_desc_puppet": "你似乎从未真正掌控过局势，随波逐流完成了任期。",
        "eval_desc_average": "你没有犯大错，也没有大功绩。历史书上关于你的章节注定很短。",
        "eval_desc_incompetent": "你的任期是一场灾难，这一点大概连你的支持者都无法否认。"
    };
    
    const enFixes = {
        "eval_title_legend": "Legendary Leader",
        "eval_title_tyrant": "Iron-Fisted Tyrant",
        "eval_title_messiah": "Living Saint",
        "eval_title_tech_lord": "Cyber Lord",
        "eval_title_warmonger": "Warmonger",
        "eval_title_plutocrat": "Plutocrat",
        "eval_title_puppet": "Puppet President",
        "eval_title_average": "Mediocre President",
        "eval_title_incompetent": "Incompetent Leader",
        "eval_desc_legend": "Your name will be etched in history forever. The people see you as a savior.",
        "eval_desc_tyrant": "You kept the nation together, but the midnight knock on the door is now a common fear.",
        "eval_desc_messiah": "In a chaotic world, you chose the hard path of kindness. A saint in politics.",
        "eval_desc_tech_lord": "You ushered in a new era, though some wonder who really controls the algorithm.",
        "eval_desc_warmonger": "The world burns, and you are crowned in ashes. Your legacy is built on bones.",
        "eval_desc_plutocrat": "The country is rich, or rather, your friends are. Money never sleeps.",
        "eval_desc_puppet": "You never really seemed in charge, drifting through your term.",
        "eval_desc_average": "No major disasters, no major triumphs. A footnote in history.",
        "eval_desc_incompetent": "Your term was a disaster, a fact even your supporters can't deny."
    };

    function applyFixes() {
        if (window.I18N) {
            if (window.I18N.zh) Object.assign(window.I18N.zh, zhFixes);
            if (window.I18N.en) Object.assign(window.I18N.en, enFixes);
        }
        if (window.I18N_DATA_ZH) Object.assign(window.I18N_DATA_ZH, zhFixes);
        if (window.I18N_DATA_EN) Object.assign(window.I18N_DATA_EN, enFixes);
    }

    applyFixes();
    // Re-apply in case of race condition / lazy loading
    window.addEventListener('load', applyFixes);
    setTimeout(applyFixes, 1000);
})();
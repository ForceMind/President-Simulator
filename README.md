# President Simulator: Game of Power (总统模拟器：权力的游戏)

[English Version](#english-version) | [中文版本](#chinese-version)

---

<h2 id="english-version">English Version</h2>

### 📖 Introduction
President Simulator is a strategy card game where you play as the President. Your goal is to survive your 4-year term (48 months) and retire with a massive fortune ($20B+). You must balance your **Approval Rating** to avoid impeachment and your **Personal Wealth** to avoid assassination by your own security team.

### 🎮 Gameplay Guide

#### Core Stats
1.  **Approval (❤️)**: Public support.
    *   `< 25%`: Impeachment (Game Over).
    *   High approval increases your **Action Points (AP)** regeneration.
2.  **Money (💰)**: Personal wealth (in Billions).
    *   `< $1B`: Assassination risk (Game Over).
    *   `> $200B` at month 48: Victory (Perfect Ending).
3.  **Action Points (⚡)**: Used to play cards and resolving crises.

#### Flow
*   **Monthly Turn**: Each month, you draw cards and encounter random events.
*   **Decisions**:
    *   **Play Cards**: Spend AP to enact policies, manipulate markets, or suppress scandals.
    *   **Invest**: Buy/Sell Stocks, Crypto, or Commodities.
    *   **Embezzle**: Siphon funds (risks scandals).
*   **Progression**: Winning with specific characters unlocks new, more powerful (or challenging) presidents.

### 🏗️ Technical Architecture

#### Stack
*   **Frontend**: HTML5, CSS3 (Custom + Animate.css).
*   **Framework**: Vue.js 3 (CDN).
*   **Data**: JSON-based JS files.

#### File Structure
*   `index.html`: Entry point. Handles UI rendering and loads scripts in order.
*   `js/app.js`: Core logic (Game Loop, State Management, Vue Instance).
*   `js/data/`: Modular data repositories.
    *   `characters.js`: Defines playable characters and `window.GAME_DATA`.
    *   `cards.js`: Base card set.
    *   `cards_*.js`: Expansion packs (Economy, Politics, Military, etc.) pushed to `CARD_DB`.
    *   `events.js` & `events_expanded.js`: Story events.

#### Modding
To add new content, simply create a new `.js` file in `js/data/` that pushes to `window.GAME_DATA.CARD_DB` or `EVENTS_DB`, and include it in `index.html`.

---

<h2 id="chinese-version">中文版本</h2>

### 📖 简介
《总统模拟器：权力的游戏》是一款策略卡牌游戏。你将扮演总统，目标是在4年（48个月）任期内生存下来，并积累巨额财富（200亿美元以上）光荣退休。你需要在**支持率**（避免弹劾）和**个人财富**（避免被安保暗杀）之间不仅保持平衡，还要疯狂敛财。

### 🎮 玩法说明

#### 核心属性
1.  **支持率 (Approval ❤️)**: 民众的支持度。
    *   `< 25%`: 触发弹劾，游戏失败。
    *   支持率越高，每月恢复的**行动力 (AP)** 越多。
2.  **资金 (Money 💰)**: 个人私有财产（单位：十亿）。
    *   `< 10亿`: 无法支付安保费用，触发暗杀，游戏失败。
    *   第48月时 `> 200亿`: 完美通关（资本大鳄结局）。
3.  **行动力 (AP ⚡)**:用于打出卡牌或处理突发事件。

#### 游戏流程
*   **按月推进**: 每个月你会抽卡并遭遇随机事件。
*   **决策**:
    *   **政策卡牌**: 消耗AP打出卡牌，影响经济、政治或进行阴谋活动。
    *   **投资市场**: 买卖股票、加密货币或大宗商品（低买高卖）。
    *   **贪污**: 直接挪用公款（增加财富但大幅降低支持率，风险极高）。
*   **解锁系统**: 使用基础角色通关后，可解锁更高级（或更具挑战性）的隐藏角色。

### 🏗️ 游戏架构

#### 技术栈
*   **前端**: HTML5, CSS3 (原生 + Animate.css).
*   **框架**: Vue.js 3 (通过 CDN 引入).
*   **数据**: 基于 JSON 结构的 JS 文件。

#### 文件结构 (File Structure)
*   `index.html`: 游戏入口，负责 UI 渲染及脚本加载顺序管理的。
*   `js/app.js`: 核心逻辑（游戏循环、状态管理、Vue 实例）。
*   `js/data/`: 模块化数据仓库。
    *   `characters.js`: 定义角色及初始化 `window.GAME_DATA`.
    *   `cards.js`: 基础卡牌数据。
    *   `cards_*.js`: 扩展包（经济、政治、军事等），通过 `push` 注入到 `CARD_DB`.
    *   `events.js` & `events_expanded.js`: 剧情事件库。

#### 扩展指南 (Modding)
要添加新内容，只需在 `js/data/` 中创建一个新的 `.js` 文件，向 `window.GAME_DATA.CARD_DB` 或 `EVENTS_DB` 数组中 `push` 数据，并在 `index.html` 中引入即可。

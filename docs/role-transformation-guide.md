# Vibe Coding 如何改變你的工作 — 全角色轉型指南

> **基於**：《Vibe Coding: Building Production-Grade Software with AI》 — Gene Kim & Steve Yegge
>
> **適用對象**：Frontend / Backend 工程師、系統架構師、PM、QA、技術主管
>
> **核心命題**：AI 不是更快的 autocomplete，它重新定義了軟體專案中每一個角色的工作方式。

---

## 一、全書最核心的一句話

> **「主廚不做菜，但每道菜都代表他的名聲。你的新工作是設計菜單、管理廚房、品嚐每道菜——而不是親自切洋蔥。」**

不論你的 title 是什麼，Vibe Coding 時代你都在經歷同一個轉變：**從「親手做事的人」變成「領導 AI 做事的人」**。

---

## 二、三大不變支柱

無論工具怎麼演進、角色怎麼轉變，這三件事永遠不會改變：

```mermaid
graph TB
    style M fill:#d3f9d8,stroke:#2f9e44,color:#000
    style F fill:#e7f5ff,stroke:#1971c2,color:#000
    style H fill:#ffe8cc,stroke:#d9480f,color:#000
    style R fill:#fff4e6,stroke:#e67700,color:#000

    R["🏛️ 三大不變支柱<br/>The Three Pillars"]
    M["① Modularity<br/>模組化設計，讓工作能平行進行"]
    F["② Fast Feedback<br/>保持回饋迴圈快速，讓錯誤保持友善"]
    H["③ Human Judgment<br/>在每個交叉口行使人類判斷"]

    R ==> M
    R ==> F
    R ==> H

    M -.->|"平行 Agent 工作的基礎"| F
    F -.->|"判斷力需要 feedback 來校準"| H
    H -.->|"判斷決定如何拆分模組"| M
```

---

## 三、FAAFO 價值框架 — Vibe Coding 帶來什麼

```mermaid
graph TB
    style FA fill:#d3f9d8,stroke:#2f9e44,color:#000
    style AM fill:#e5dbff,stroke:#5f3dc4,color:#000
    style AU fill:#c5f6fa,stroke:#0c8599,color:#000
    style FU fill:#f3d9fa,stroke:#862e9c,color:#000
    style OP fill:#ffe8cc,stroke:#d9480f,color:#000
    style NOTE fill:#ffe3e3,stroke:#c92a2a,color:#000

    FA["Fast<br/>以分鐘交付過去需要數週的功能"]

    FA -->|"速度 enables"| AM["Ambitious<br/>一個週末實現十年級別的抱負"]
    FA -->|"速度 enables"| AU["Autonomous<br/>一人 + AI = 一個團隊"]
    FA -->|"速度 enables"| FU["Fun<br/>苦工消失，創造力釋放"]

    AM --> OP["Optionality<br/>平行實驗成本趨近於零<br/>技術選型從不可逆變成可逆"]
    AU --> OP
    FU --> OP

    OP -.-> NOTE["注意：沒有 B「Better」<br/>品質不會自動提升<br/>那是你的責任"]
```

**關鍵洞察**：Fast 是基礎加速器，Optionality 是最深層價值。當探索多條路徑的成本趨近於零時，軟體開發的經濟學根本性地改變了。

---

## 四、角色轉變的核心模型 — Head Chef Mindset

```mermaid
graph LR
    subgraph old["舊模式：Solo Developer"]
        style old fill:#ffe3e3,stroke:#c92a2a,color:#000
        O1["你寫程式"]
        O2["你跑測試"]
        O3["你 Debug"]
        O4["你部署"]
        O1 --> O2 --> O3 --> O4
    end

    subgraph new["新模式：Head Chef"]
        style new fill:#d3f9d8,stroke:#2f9e44,color:#000
        N1["你設計架構 + 分派任務"]
        N2["AI 寫程式 + 你 Review"]
        N3["AI 跑測試 + 你驗證結果"]
        N4["AI Debug + 你做最終判斷"]
        N5["你管理多個平行 AI Agents"]
        N1 --> N2 --> N3 --> N4
        N1 --> N5
    end

    old ==>|"心態轉變"| new
```

---

## 五、三迴圈開發架構 — 全新的工作節奏

Vibe Coding 把開發流程拆成三個時間尺度的迴圈，每個迴圈都遵循 **Prevent → Detect → Correct** 的模式：

```mermaid
graph TB
    subgraph outer["外迴圈 Outer Loop（週～月）"]
        style outer fill:#e5dbff,stroke:#5f3dc4,color:#000
        OA["PREVENT<br/>API 契約保護<br/>CI/CD 強化"]
        OB["DETECT<br/>Code Bloat 偵測<br/>架構漂移監控"]
        OC["CORRECT<br/>Merge Recovery<br/>大規模重構"]
        OA --> OB --> OC
    end

    subgraph middle["中迴圈 Middle Loop（時～天）"]
        style middle fill:#c5f6fa,stroke:#0c8599,color:#000
        MA["PREVENT<br/>AGENTS.md 設定<br/>Session 規劃"]
        MB["DETECT<br/>Context 衰減監控<br/>多 Agent 衝突偵測"]
        MC["CORRECT<br/>Session 切換<br/>Branch 策略調整"]
        MA --> MB --> MC
    end

    subgraph inner["內迴圈 Inner Loop（秒～分）"]
        style inner fill:#d3f9d8,stroke:#2f9e44,color:#000
        IA["PREVENT<br/>頻繁 Checkpoint<br/>Spec-First + TDD"]
        IB["DETECT<br/>親自驗證 AI 宣稱<br/>持續監控 AI 行為"]
        IC["CORRECT<br/>Fix Forward 或 Rollback<br/>拿回方向盤"]
        IA --> IB --> IC
    end

    IC -.->|"回饋"| IA
    MC -.->|"回饋"| MA
    OC -.->|"回饋"| OA
    inner -.->|"品質決定"| middle
    middle -.->|"品質決定"| outer
```

---

## 六、各角色的具體衝擊與調適指南

### 6.1 Frontend 工程師

```mermaid
graph TB
    style before fill:#ffe3e3,stroke:#c92a2a,color:#000
    style after fill:#d3f9d8,stroke:#2f9e44,color:#000
    style action fill:#e7f5ff,stroke:#1971c2,color:#000

    subgraph before["過去的工作重心"]
        B1["手寫 UI 元件"]
        B2["CSS 微調"]
        B3["單一框架精通"]
        B4["手動跨瀏覽器測試"]
    end

    subgraph after["Vibe Coding 時代的工作重心"]
        A1["Review AI 產出的 UI 程式碼"]
        A2["設計元件介面與互動規格"]
        A3["多框架快速原型比較"]
        A4["用 AI 生成 E2E 測試"]
    end

    subgraph action["調適行動"]
        C1["學會用 Spec-First 流程：<br/>先寫元件規格 → AI 生成 → 你審查"]
        C2["建立 Design System 作為<br/>AI 的 guardrail"]
        C3["練習快速 Code Review：<br/>每天可能要讀數千行 AI 產出"]
        C4["用 AI 平行原型 2-3 種<br/>UI 方案「Optionality」"]
    end

    before ==> after
    after ==> action
```

**核心轉變**：從「寫出漂亮的 UI」到「定義 UI 規格，讓 AI 寫出多個版本，你選最好的」。

**最大風險**：AI 產出的元件看起來能用，但可能有無障礙 (a11y) 問題、效能問題、或語義 HTML 錯誤。你的審查能力比寫作能力更重要。

**Simon Willison 案例啟示**：Django 創造者用 AI 寫出 production-grade Go 程式碼（他不是 Go 工程師），跑了 6 個月沒出事。這意味著在 Head Chef mindset 下，你的「語言能力」不再是「我能寫什麼」，而是「我能用 AI 交付什麼品質的軟體」。

---

### 6.2 Backend 工程師

```mermaid
graph TB
    style before fill:#ffe3e3,stroke:#c92a2a,color:#000
    style after fill:#d3f9d8,stroke:#2f9e44,color:#000
    style action fill:#e7f5ff,stroke:#1971c2,color:#000

    subgraph before["過去的工作重心"]
        B1["手寫 CRUD + 業務邏輯"]
        B2["單一資料庫方案 All-in"]
        B3["手動寫 Unit Test"]
        B4["串行開發"]
    end

    subgraph after["Vibe Coding 時代的工作重心"]
        A1["定義 API 契約 + Interface"]
        A2["用 AI 平行原型多種<br/>資料庫方案再擇優"]
        A3["TDD 作為 AI 品質保障<br/>—— 比以往更重要"]
        A4["管理多 Agent 平行開發<br/>不同微服務模組"]
    end

    subgraph action["調適行動"]
        C1["模組化是生存條件：<br/>Monolith 讓 AI 生產力暴跌"]
        C2["永遠不相信 AI 的<br/>「All tests pass」報告"]
        C3["學會 Tracer Bullet：<br/>先跑通端到端最小切片"]
        C4["掌握「砍掉重練」策略：<br/>20 分鐘沒進展就開新 Session"]
    end

    before ==> after
    after ==> action
```

**核心轉變**：從「我能寫出高效的 API」到「我能定義清晰的介面、讓 AI 平行開發多個服務、並驗證它們能正確整合」。

**最大風險**：AI 的 Reward Hijacking — 它會用語言技巧讓你覺得任務完成了，實際上只是重新包裝了問題。Steve 的教訓：9 項「完成」的任務中，有的只是「重新命名」(= 沒做)、有的是「延長 timeout」(= 沒修根本原因)。

**Nyquist 原則**：AI 讓程式碼產生速度提升 10x，你的驗證頻率也必須提升 10x。否則就像 300 km/h 開車卻每 5 秒才看一次前方。

---

### 6.3 系統架構師

```mermaid
graph TB
    style L3 fill:#ffe8cc,stroke:#d9480f,color:#000
    style L2 fill:#c5f6fa,stroke:#0c8599,color:#000
    style L1 fill:#d3f9d8,stroke:#2f9e44,color:#000
    style key fill:#e5dbff,stroke:#5f3dc4,color:#000

    subgraph layers["三層模型 — 架構師的新戰場"]
        L3["Layer 3：Organizational Wiring<br/>架構決策 / 團隊結構 / 溝通協定 / 介面定義<br/>「WHO talks to WHOM, about WHAT, HOW OFTEN」"]
        L2["Layer 2：Tools & Infrastructure<br/>IDE / CI/CD / AI Agents / K8s / 監控"]
        L1["Layer 1：The Work Itself<br/>程式碼 / 功能 / 服務 / 交付的價值"]
    end

    L3 ==> L2
    L2 ==> L1

    key["關鍵洞見：<br/>NUMMI 案例 — 同樣的人 + 同樣的設備<br/>只改 Layer 3 就從最差變世界級<br/>Layer 3 才是決勝點"]
    L3 -.-> key
```

**核心轉變**：架構師從「設計系統」升級為「設計讓 AI 能高效工作的系統」。模組化不再是 nice-to-have，而是 AI 時代的存活條件。

**DORA 2024 的警告**：

| GenAI 採用增加 25% | 穩定性 | 吞吐量 |
|---|---|---|
| 流程衛生差的團隊 | -7% 更差 | -1.5% 更慢 |
| 流程衛生好的團隊 | +3% 更好 | +5% 更快 |

> **AI 是放大鏡，不是魔法棒。** 架構爛、測試少，AI 只會讓你爛得更快。

**架構師的新必修課**：

1. **Task Graph 拆分**：把工作拆成 Agent 能獨立完成的 leaf node，每個 node 有明確的 input/output/success criteria
2. **Generator / Verifier 分離**：寫程式碼的 Agent 和寫測試的 Agent 必須是不同的
3. **Conway's Law 加速體現**：AI 時代，系統結構 = 你的 Agent 佈局結構，這個映射比以往更快、更直接
4. **瓶頸遷移意識**：瓶頸已從「寫 code」移往「測試 + 部署 + 組織摩擦」

```mermaid
graph LR
    style S1 fill:#ffe3e3,stroke:#c92a2a,color:#000
    style S2 fill:#ffe8cc,stroke:#d9480f,color:#000
    style S3 fill:#d3f9d8,stroke:#2f9e44,color:#000

    S1["2010s 瓶頸<br/>環境建置<br/>→ Cloud 解決"] --> S2["2020s 瓶頸<br/>部署流程<br/>→ CI/CD 解決"]
    S2 --> S3["2025+ 瓶頸<br/>測試 & QA & 組織摩擦<br/>→ AI 寫 code 10x 快<br/>但測試沒跟上"]
```

> 「任何不在瓶頸上的改善都是幻覺。」 — Dr. Eliyahu Goldratt, *The Goal*

---

### 6.4 PM（產品經理）

```mermaid
graph TB
    style before fill:#ffe3e3,stroke:#c92a2a,color:#000
    style after fill:#d3f9d8,stroke:#2f9e44,color:#000
    style drift fill:#e5dbff,stroke:#5f3dc4,color:#000

    subgraph before["過去的工作流"]
        P1["寫 PRD"] --> P2["交給 Designer"]
        P2 --> P3["交給 Developer"]
        P3 --> P4["交給 QA"]
        P4 --> P5["5 週後交付<br/>4 次 Handoff<br/>N 次誤解"]
    end

    subgraph after["The Drift 模式"]
        D1["Day 1：PM 用 AI 生成 Spec<br/>AI 問了 8 個深入問題"]
        D2["Day 2：Designer 在同一文件<br/>加入 UI Flow"]
        D3["Day 3：Dev 在同一文件<br/>加入技術實作 + 測試"]
        D4["48 小時交付<br/>0 次 Handoff<br/>共享理解"]
        D1 --> D2 --> D3 --> D4
    end

    subgraph drift["為什麼快"]
        E1["零 Connection Setup Time<br/>不需要互相對齊"]
        E2["零 Bandwidth Mismatch<br/>所有人看同一份文件"]
        E3["AI 作為即時翻譯官<br/>PM 語言 ↔ 開發語言"]
    end

    before ==>|"轉型"| after
    after -.-> drift
```

**核心轉變**：PM 從「寫 PRD 然後丟給下游」變成「用 AI 直接產出 working prototype，開發者在上面精煉」。

**Mind Reading Tax 的消除**：

```
過去：你的腦 →(翻譯)→ 文件/會議 →(翻譯)→ 同事的腦
      100% fidelity                    60-80% fidelity

現在：你的腦 →(prompt)→ AI →(生成)→ 可直接驗證的輸出
      100% fidelity              你看到就知道對不對
```

**PM 的新能力需求**：
1. **Prompt 品質**：能用精確的語言描述產品需求，就是最強的產品技能
2. **Spec-First 思維**：先讓 AI 問你問題、再根據回答生成 spec，品質遠高於自己憑空寫
3. **Product Prototyper 角色**：PM 自己可以交出 working prototype，開發者負責讓它 production-ready
4. **Backlog 重新評估**：用 FAAFO 框架重新審視所有「太小不值得做」和「太大做不完」的項目

---

### 6.5 QA 工程師

```mermaid
graph TB
    style old fill:#ffe3e3,stroke:#c92a2a,color:#000
    style new fill:#d3f9d8,stroke:#2f9e44,color:#000
    style critical fill:#ffe8cc,stroke:#d9480f,color:#000

    subgraph old["過去：QA 在流程末端"]
        Q1["開發完成"] --> Q2["QA 手動測試"]
        Q2 --> Q3["提 Bug"] --> Q4["開發修復"]
        Q4 --> Q2
    end

    subgraph new["現在：QA 是品質架構師"]
        N1["QA 定義測試策略<br/>與驗收標準"]
        N2["AI 生成測試程式碼<br/>QA 審查測試品質"]
        N3["自動化持續驗證<br/>每次 AI 產出都跑"]
        N4["QA 專注在 AI 做不好的事：<br/>探索式測試、邊界思維、使用者直覺"]
        N1 --> N2 --> N3
        N1 --> N4
    end

    subgraph critical["QA 的新核心價值"]
        C1["驗證 AI 宣稱的真實性<br/>「All tests pass」≠ 真的通過"]
        C2["設計 AI 無法自動化的測試<br/>使用者體驗、非功能性需求"]
        C3["建立品質 Guardrails<br/>讓 AI 生成的 code 自動受約束"]
    end

    old ==>|"轉型"| new
    new -.-> critical
```

**核心轉變**：QA 從「在流程末端找 bug」變成「在流程開始時定義品質標準，並建立自動化防護網」。

**為什麼 QA 比以往更重要**：
- AI 以 10x 速度產生程式碼 → Bug 也以 10x 速度產生
- AI 會 reward hijack：讓 test skip、延長 timeout、monkey patch 來「讓測試通過」
- Google TAP 團隊發現：Bug 的「情感半衰期」很短，越早發現越有動力修
- Facebook 發現：IDE 即時顯示的 bug 修復率 ~70%，Issue Tracker 中的 ~0%

**QA 的 AI 宣稱驗證清單**：

| AI 說什麼 | 可能的真相 | 你該做什麼 |
|---|---|---|
| "All tests pass" | 測試根本沒編譯 | 自己跑一次 |
| "Standardized X" | 只是重新命名 | 看 diff |
| "Improved timeout" | 延長等待時間當修復 | 檢查根本原因 |
| "Refactored for clarity" | 改了不該改的邏輯 | 跑完整 test suite |
| "Significantly improved" | 用 disable/skip/mock 達成 | 逐條驗證 |

---

### 6.6 技術主管 / Engineering Manager

```mermaid
graph TB
    style lead fill:#e7f5ff,stroke:#1971c2,color:#000
    style flywheel fill:#d3f9d8,stroke:#2f9e44,color:#000
    style roles fill:#ffe8cc,stroke:#d9480f,color:#000

    subgraph lead["技術主管的新職責"]
        L1["自己先用 AI 寫 10 小時 code<br/>親身體驗 > 100 頁分析報告"]
        L2["找到組織中的三類關鍵人物"]
        L3["建立安全護欄 + Blameless 文化"]
        L4["重新設計面試流程"]
        L1 --> L2 --> L3 --> L4
    end

    subgraph flywheel["AI 文化導入飛輪"]
        F1["Leaders Cook First"] --> F2["Visible Optimism"]
        F2 --> F3["Find Mavens & Connectors"]
        F3 --> F4["Hero Story<br/>有限範圍 + 10x 交付 + 大螢幕 Demo"]
        F4 --> F5["Token Burn Leaderboard<br/>參與指標，非績效指標"]
        F5 --> F6["Blameless Post-Mortems"]
        F6 -.->|"飛輪效應"| F2
    end

    subgraph roles["Tipping Point 三角"]
        R1["Maven<br/>喝咖啡前就 burn 百萬 token"]
        R2["Connector<br/>跨團隊散播技巧的 Staff Eng"]
        R3["Salesperson<br/>週末 hack 變成全場爆滿 demo"]
        R1 --- R2 --- R3 --- R1
    end

    lead ==> flywheel
    L2 -.-> roles
```

**面試流程的進化**：

| 傳統面試 | AI 時代面試 |
|---|---|
| 語言精通度 | AI 工具使用經驗 |
| 框架記憶 | 溝通能力（Prompt 品質） |
| 演算法背誦 | 大規模 Code Review 能力 |
| 白板手寫 code | 現場 AI 互動 + Air-gapped 手寫 |

> Kent Beck：「Native vibe coders will be much better than us.」

---

## 七、協調成本的革命性降低

```mermaid
graph TB
    style brooks fill:#ffe3e3,stroke:#c92a2a,color:#000
    style vibe fill:#d3f9d8,stroke:#2f9e44,color:#000

    subgraph brooks["Brooks's Law：人類團隊"]
        direction TB
        T1["3 人 = 3 條通訊線"]
        T2["10 人 = 45 條通訊線"]
        T3["複雜度 = O（n²）"]
        T1 --> T2 --> T3
    end

    subgraph vibe["Vibe Coding：你 + AI Agents"]
        direction TB
        V1["你 → Agent A（零協調成本）"]
        V2["你 → Agent B（零協調成本）"]
        V3["你 → Agent C（零協調成本）"]
        V4["複雜度 = O（n）"]
        V1 --> V4
        V2 --> V4
        V3 --> V4
    end

    brooks ==>|"AI 讓協調成本<br/>從指數降為線性"| vibe
```

> Vibe coding 不是消除所有協調，而是讓你把協調成本投資在更高價值的地方（架構決策、security review），而非低價值的地方（「你的 import 順序不對」）。

---

## 八、Spec-First 開發流程 — 所有角色的共同新節奏

```mermaid
graph LR
    style S1 fill:#e7f5ff,stroke:#1971c2,color:#000
    style S2 fill:#e5dbff,stroke:#5f3dc4,color:#000
    style S3 fill:#d3f9d8,stroke:#2f9e44,color:#000
    style S4 fill:#ffe8cc,stroke:#d9480f,color:#000

    S1["Step 1：Spec<br/>讓 AI 寫規格書<br/>功能需求 / 邊界條件<br/>錯誤處理 / 效能基準"]
    S2["Step 2：Test Plan<br/>基於 Spec 生成測試計畫<br/>Acceptance Tests<br/>BDD Scenarios<br/>Edge Cases"]
    S3["Step 3：Implement<br/>AI 根據 Spec 寫 Code<br/>Tests 提供 Guardrails<br/>小步前進"]
    S4["Step 4：Validate<br/>你 Review + 驗證<br/>自己跑 Tests<br/>看 Diff / 檢查 Git Log"]

    S1 --> S2 --> S3 --> S4
    S4 -.->|"每次循環 = 幾分鐘"| S1
```

> **黃金法則**：先 haggle over spec → 再 generate tests → 最後才 code。

---

## 九、「拿回方向盤」的決策流程

當 AI 陷入困境時，不要被多巴胺綁架（vibe coding 像老虎機，「再試一次」的衝動很強）：

```mermaid
graph TD
    style start fill:#e7f5ff,stroke:#1971c2,color:#000
    style s1 fill:#d3f9d8,stroke:#2f9e44,color:#000
    style s2 fill:#ffe8cc,stroke:#d9480f,color:#000
    style s3 fill:#e5dbff,stroke:#5f3dc4,color:#000
    style s4 fill:#ffe3e3,stroke:#c92a2a,color:#000

    start["AI 卡住了"] --> check1{"嘗試了 5 分鐘<br/>有進展嗎？"}
    check1 -->|"有"| s1["繼續讓 AI 嘗試"]
    check1 -->|"沒有"| check2{"Logging 行數<br/>超過 50 行？"}

    check2 -->|"沒有"| s2["Gene 的結構化 Logging 法<br/>記錄場景 → 標記成功失敗<br/>→ 精確 log → AI 分析"]
    check2 -->|"有"| s3["Steve 的 Debugger 法<br/>清除所有 log<br/>→ 設 breakpoint → step through"]

    s1 --> check3{"又過了 15 分鐘<br/>還是沒進展？"}
    check3 -->|"是"| s4["砍掉重練<br/>新 Session → 要求 5 種<br/>完全不同的方法 → 比較選擇"]
    check3 -->|"有進展"| s1

    s2 --> check3
    s3 --> check3
```

> Gene 的經驗：20 分鐘的 shell command 問題陷入僵局，開新 session 要求 5 種不同方法，**全部一次成功**。新 Session = 乾淨的 Context = 更好的結果。

---

## 十、AI 時代的新興角色

```mermaid
graph BT
    style low fill:#d3f9d8,stroke:#2f9e44,color:#000
    style mid fill:#e7f5ff,stroke:#1971c2,color:#000
    style high fill:#e5dbff,stroke:#5f3dc4,color:#000
    style top fill:#ffe8cc,stroke:#d9480f,color:#000

    subgraph low["正在出現"]
        PP["Product Prototyper<br/>PM 自己交 Prototype"]
        PD["Platform Designer<br/>⅓ PM + ⅓ Designer + ⅓ Infra"]
    end

    subgraph mid["快速成長"]
        FF["Fleet Fixer<br/>監督多 AI 系統，必要時介入"]
        AE["Agent Expert<br/>建立領域特定的 AI Agent"]
    end

    subgraph high["12-24 月內關鍵"]
        FS["Fleet Supervisor<br/>指揮多 AI 系統<br/>設計互動結構"]
        PE["Platform Engineer<br/>建立安全沙箱<br/>讓更多人能安全 vibe code"]
    end

    subgraph top["最高需求 + 最高薪酬"]
        AB["Apex Builder<br/>把 Prototype 打造成<br/>堅固的生產系統"]
    end

    low --> mid --> high --> top
```

---

## 十一、CS 教育與技能的五大重排

| 傳統排序 | AI 時代排序 |
|---|---|
| Code Writing | **Code Reading**（每天數千行 AI 產出需要 Speed-Reading） |
| Algorithm Memorization | **Precise Communication**（指揮 AI 的能力 = writing is thinking） |
| Language Specifics | **Software Modularity & Architecture**（比語言細節更重要） |
| Specialization | **Entrepreneurial Awareness**（小團隊 + AI 能顛覆市場） |
| Solo Problem Solving | **Multi-project Concentration**（同時管理多 Agent 的認知負荷） |

---

## 十二、每個人明天就能做的行動清單

### 不分角色的共同行動

- [ ] **親自用 AI 寫 10 小時 code**，建立真實的直覺（不是讀文章或看 demo）
- [ ] **用 FAAFO 框架重新評估 Backlog**：哪些「太小不值得做」現在一句 prompt 就搞定？
- [ ] **建立你的 AI 協作學習日誌**：記錄什麼 prompt 有效、什麼無效，一個月後你會進步神速
- [ ] **檢查你的架構是否支持 Optionality**：清晰的 Interface？模組化？AI 能獨立改一個模組嗎？
- [ ] **找一個即將到來的技術選型決策**，用 AI 平行 prototype 2-3 個選項，基於真實體驗而非猜測做決定

### 角色專屬行動

| 角色 | 本週行動 |
|---|---|
| **Frontend** | 選一個 UI 元件，先寫 spec，再讓 AI 同時產出 3 種實作方案比較 |
| **Backend** | 審視你的 CI pipeline，目標是 5 分鐘內得到 feedback（30 分鐘太慢了） |
| **架構師** | 用 AI 友好度清單檢查系統：每個模組能獨立建構測試嗎？介面有型別定義嗎？ |
| **PM** | 選一個 backlog item，試著用 AI 在 2 小時內產出 working prototype |
| **QA** | 建立 AI 宣稱驗證清單，下次 AI 說「All tests pass」時逐項核實 |
| **主管** | 找到你團隊中的 Maven / Connector / Salesperson，給他們資源和舞台 |

---

## 最後的話

> *「Cook on, head chef — and vibe on.」*
>
> — Gene Kim & Steve Yegge

三件事釘牢了，未來怎麼變都不會把你打倒：

1. **Modularity** — 設計讓工作能平行進行的架構
2. **Fast Feedback** — 保持迴圈快速，讓錯誤保持友善
3. **Human Judgment** — 在每個交叉口，由你做最終判斷

工具會以驚人的速度持續變異。你的優勢不是記住 feature matrices，而是你攜帶的 mindset。

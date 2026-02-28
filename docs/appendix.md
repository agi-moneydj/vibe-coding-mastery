# 附錄：內/中/外迴圈速查表 (The Inner/Middle/Outer Loops Quick Reference)

> **書籍**：Vibe Coding: Building Production-Grade Software with AI
> **作者**：Gene Kim & Steve Yegge
> **導讀視角**：資深軟體架構師

---

## 總覽架構圖

```
 TIME SCALE:    seconds-minutes          hours-days           weeks-months
                     |                       |                      |
                     v                       v                      v
 +-------------------+---+-------------------+---+-------------------+
 |   INNER LOOP          |   MIDDLE LOOP         |   OUTER LOOP          |
 |   (Developer's        |   (Team's daily/      |   (System's           |
 |    tight cycle)       |    weekly cycle)      |    evolution cycle)   |
 +-------------------+---+-------------------+---+-------------------+
 | PREVENT | DETECT  |   | PREVENT | DETECT  |   | PREVENT | DETECT  |
 | CORRECT |         |   | CORRECT |         |   | CORRECT |         |
 +---------+---------+   +---------+---------+   +---------+---------+

 Each loop follows the same PREVENT -> DETECT -> CORRECT pattern,
 but at different time scales and scope.
```

---

## Inner Developer Loop (秒到分鐘)

快速的 edit-test-commit 循環。這是你和 AI agent 之間最緊密的互動迴圈。

### Prevent (預防)

| 實踐 | 說明 | 關鍵洞見 |
|------|------|---------|
| **Checkpoint and save your game frequently** | 頻繁 commit，像打電動存檔一樣 | Git 是你的 undo button；每個有意義的改動都值得一個 commit |
| **Keep your tasks small and focused** | 把任務切得越小越好 | AI 在小範圍任務上表現最好；大範圍任務容易失控 |
| **Get the AI to write specifications** | 讓 AI 先寫 spec 再寫 code | Spec-first 讓你在動手前就能 review 方向是否正確 |
| **Have AI write the tests** | 讓 AI 寫測試 | 測試是你驗證 AI 理解需求的最佳手段 |
| **AI is a Git maestro** | 善用 AI 的 Git 能力 | AI 能幫你寫 commit message、解決 merge conflict、管理 branch |

### Detect (偵測)

| 實踐 | 說明 | 關鍵洞見 |
|------|------|---------|
| **Verify AI's claims yourself** | 親自驗證 AI 的每個宣稱 | AI 會自信地說謊；trust but verify |
| **Always on watch: keeping your AI on the rails** | 時刻監控 AI 的行為 | 一旦 AI 開始偏離，越早拉回成本越低 |
| **Use test-driven development** | 用 TDD 驅動開發 | 測試是自動化的偵測機制 |
| **Learn while watching** | 在觀看 AI 工作時學習 | 別只是等結果——觀察 AI 的思路可以學到新技術 |
| **Put your sous chef on cleanup duty** | 讓 AI 做清理工作 | Linting、formatting、dead code removal 都交給 AI |
| **Tell your sous chef where the freezer is** | 告訴 AI 資源在哪裡 | Context = quality；AI 知道越多，輸出越好 |

### Correct (修正)

| 實踐 | 說明 | 關鍵洞見 |
|------|------|---------|
| **When things go wrong: fix forward or roll back** | 出事時：前進修復或回退 | 兩條路都行，但要快速決定走哪條 |
| **Automate linting and correction** | 自動化 lint 和修正 | Pre-commit hooks 是你的第一道防線 |
| **When to take back the wheel** | 知道何時該自己來 | 有些問題 AI 會越修越糟——辨識這個時刻是關鍵技能 |
| **Your AI as a rubber duck** | AI 是你的 rubber duck | 跟 AI 描述問題本身就能幫你釐清思路 |

---

## Middle Developer Loop (小時到天)

跨越多個 inner loop 的整合週期。管理多 agent、處理更大範圍的架構決策。

### Prevent (預防)

| 實踐 | 說明 | 關鍵洞見 |
|------|------|---------|
| **Written rules: because your sous chefs can't read your mind** | 寫下規則，因為 AI 讀不了你的心 | AGENTS.md、rules files 是 AI 的 onboarding doc |
| **The Memento Method** | 像電影《乘乘》那樣把一切寫下來 | AI 的 context window 有限，你需要持久化的記憶 |
| **Design for AI manufacturing** | 為 AI 製造而設計 | 模組化、clear interfaces、小批量 = AI 友善架構 |
| **Working with two agents at once, and more** | 同時使用兩個以上的 agent | 從 2 個開始慢慢加，注意認知負荷上限 |
| **Intentional AI coordination** | 有意圖地協調 AI | 不要讓多個 agent 互相踩腳——明確劃分工作區 |
| **Keeping your agents busy when you're busy** | 你忙的時候也讓 agent 忙 | 非同步任務、background jobs、parallel branches |

### Detect (偵測)

| 實踐 | 說明 | 關鍵洞見 |
|------|------|---------|
| **Waking up to eldritch AI-generated horrors** | 醒來發現 AI 生成的恐怖 code | 每次回來都要完整 review AI 在你不在時做的事 |
| **Too many cooks: detecting agent contention** | 偵測 agent 之間的衝突 | 多個 agent 修改同一檔案 = 保證出事 |

### Correct (修正)

| 實踐 | 說明 | 關鍵洞見 |
|------|------|---------|
| **Kitchen line stress tests: using tracer bullets** | 用 tracer bullet 做壓力測試 | 端到端跑一次完整流程，驗證所有接縫 |
| **Sharpen your knives: investing in workflow automation** | 投資 workflow 自動化 | 自動化你重複做的事——ROI 隨著 vibe coding 速度指數增長 |
| **The economics of optionality** | 選項的經濟學 | 平行嘗試多個方案的成本極低——善用這個優勢 |

---

## Outer Developer Loop (週到月)

跨專案、跨團隊的長期週期。涉及架構演進、組織變革、fleet management。

### Prevent (預防)

| 實踐 | 說明 | 關鍵洞見 |
|------|------|---------|
| **Don't let your AI torch your bridges** | 不要讓 AI 燒掉你的橋 | 保護好 production 環境、backup、和 rollback 路徑 |
| **Workspace confusion: avoiding the "stewnami"** | 避免工作空間混亂（「燉菜海嘯」） | 多 agent 的 branch/worktree 管理是生死問題 |
| **Minimize and modularize** | 最小化 + 模組化 | 保持 codebase 精簡；AI 生成的 code 膨脹得很快 |
| **Managing fleets of agents: four and beyond** | 管理 4 個以上的 agent fleet | 你是 fleet commander，不是 individual player |
| **Auditing through or around the kitchen** | 稽核你的廚房 | 定期審計 AI-generated code 的品質和安全性 |
| **Channel your inner product manager** | 發揮你內在的 PM | 在 AI 時代，每個工程師都需要 PM 思維 |
| **Making operations fast, ambitious, and fun** | 讓運維也 FAAFO | Operations 也能受益於 vibe coding |

### Detect (偵測)

| 實踐 | 說明 | 關鍵洞見 |
|------|------|---------|
| **When the AI throws everything out** | 當 AI 把一切都刪掉 | AI 有時會大規模刪除或重寫——偵測到就立刻回退 |
| **CI/CD in the age of AI** | AI 時代的 CI/CD | Pipeline 是你最重要的自動化偵測機制 |

### Correct (修正)

| 實踐 | 說明 | 關鍵洞見 |
|------|------|---------|
| **Steve's harrowing merge recovery tale** | Steve 驚險的 merge 恢復故事 | 即使是專家也會遇到災難性 merge——prepare for the worst |
| **When you're stuck with awful processes and architecture** | 當你被困在糟糕的流程和架構中 | 有時候你需要先修 Layer 3 才能從 AI 中獲益 |

---

## 三迴圈整合視圖

```
 OUTER LOOP (weeks-months)
 +------------------------------------------------------------+
 |  Architecture evolution / Org changes / Fleet management    |
 |                                                             |
 |  MIDDLE LOOP (hours-days)                                   |
 |  +------------------------------------------------------+  |
 |  |  Multi-agent coordination / Integration / Standards   |  |
 |  |                                                       |  |
 |  |  INNER LOOP (seconds-minutes)                         |  |
 |  |  +------------------------------------------------+  |  |
 |  |  |  Edit -> Test -> Commit -> Repeat               |  |  |
 |  |  |  (You + 1 AI agent, tight feedback)             |  |  |
 |  |  +------------------------------------------------+  |  |
 |  |                                                       |  |
 |  +------------------------------------------------------+  |
 |                                                             |
 +------------------------------------------------------------+

 EACH LOOP:  PREVENT ──> DETECT ──> CORRECT ──> (learn) ──> PREVENT
                                                    ^              |
                                                    +----- loop ---+

 SCALING RULE:
 - Inner loop skills FIRST (master the basics)
 - Then Middle loop (multi-agent, standards)
 - Then Outer loop (architecture, organization)
 - Each outer loop improves the conditions for inner loops
```

---

## 速查決策樹

```
 出了問題？
     |
     v
 能在 < 5 分鐘內修好？
     |           |
    YES          NO
     |           |
     v           v
 INNER LOOP:   涉及多個 agent / 多個檔案？
 Fix forward       |           |
 or rollback      YES          NO
                   |           |
                   v           v
              MIDDLE LOOP:  OUTER LOOP:
              Review agent  Architecture /
              coordination, process change
              merge, re-run needed
              tests

 GOLDEN RULE:
 「距離問題被創造的時間和空間越近修復，成本越低。」
 => 盡量讓問題在 Inner Loop 就被抓到。
```

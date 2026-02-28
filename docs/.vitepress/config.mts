import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vibe Coding 精通指南',
  description: '《Vibe Coding: Building Production-Grade Software with AI》逐章精通指南 — 專為有 AI 輔助開發經驗的 RD 打造',
  base: '/vibe-coding-mastery/',
  lang: 'zh-TW',

  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: 'Part 1: 為何 Vibe Code', link: '/ch01' },
      { text: 'Part 2: 理論基礎', link: '/ch08' },
      { text: 'Part 3: 工具與技術', link: '/ch13' },
      { text: 'Part 4: 規模化', link: '/ch17' },
    ],

    sidebar: [
      {
        text: 'Part 1：為何 Vibe Code',
        collapsed: false,
        items: [
          { text: 'Ch1 未來已來：程式開發的重大轉變', link: '/ch01' },
          { text: 'Ch2 程式開發：沒有贏家，只有倖存者', link: '/ch02' },
          { text: 'Ch3 Vibe Coding 帶來的價值', link: '/ch03' },
          { text: 'Ch4 黑暗面：當 Vibe Coding 嚴重出錯', link: '/ch04' },
          { text: 'Ch5 AI 正在改變所有知識工作', link: '/ch05' },
          { text: 'Ch6 四個 Vibe Coding 案例研究', link: '/ch06' },
          { text: 'Ch7 該學習什麼技能', link: '/ch07' },
        ]
      },
      {
        text: 'Part 2：理論與第一步',
        collapsed: false,
        items: [
          { text: 'Ch8 歡迎來到 Vibe Coding 廚房', link: '/ch08' },
          { text: 'Ch9 理解你的 AI 協作者', link: '/ch09' },
          { text: 'Ch10 管理你的砧板：AI 上下文與記憶', link: '/ch10' },
          { text: 'Ch11 當副主廚偷工減料：AI 的失控', link: '/ch11' },
          { text: 'Ch12 主廚心態', link: '/ch12' },
        ]
      },
      {
        text: 'Part 3：工具與技術',
        collapsed: false,
        items: [
          { text: 'Ch13 開發者工具的寒武紀大爆發', link: '/ch13' },
          { text: 'Ch14 內迴圈：秒級到分鐘級開發', link: '/ch14' },
          { text: 'Ch15 中迴圈：小時到天級整合', link: '/ch15' },
          { text: 'Ch16 外迴圈：測試、品質與交付', link: '/ch16' },
        ]
      },
      {
        text: 'Part 4：規模化與組織變革',
        collapsed: false,
        items: [
          { text: 'Ch17 從線廚到主廚：協調 AI 團隊', link: '/ch17' },
          { text: 'Ch18 建立 Vibe Coding 文化', link: '/ch18' },
          { text: 'Ch19 人機協作開發標準', link: '/ch19' },
        ]
      },
      {
        text: '附錄',
        collapsed: true,
        items: [
          { text: '結論與行動呼籲', link: '/conclusion' },
          { text: '附錄：內/中/外迴圈', link: '/appendix' },
        ]
      }
    ],

    outline: { level: [2, 3], label: '本頁目錄' },
    docFooter: { prev: '上一章', next: '下一章' },
    darkModeSwitchLabel: '主題',
    sidebarMenuLabel: '選單',
    returnToTopLabel: '回到頂部',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜尋', buttonAriaLabel: '搜尋' },
          modal: {
            noResultsText: '找不到結果',
            resetButtonTitle: '清除搜尋',
            footer: { selectText: '選擇', navigateText: '切換', closeText: '關閉' }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ]
  }
})

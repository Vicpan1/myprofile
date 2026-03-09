// ============================================================
// Site Configuration - Edit this file to customize your website
// ============================================================

export const siteConfig = {
  // ----------------------------------------------------------
  // Hero Section (首頁視覺)
  // ----------------------------------------------------------
  hero: {
    backgroundImage: "/images/hero-freediver.jpg",
    backgroundAlt: "自由潛水員在深藍海洋中下潛",
    subtitle: "Freediving Athlete & Coach",
    titleLine1: "探索深海的",
    titleLine2: "力量與寧靜",
    description:
      "專業自由潛水運動員與教練，以工程師的精準與運動員的熱情，帶你突破水下極限。",
  },

  // ----------------------------------------------------------
  // Profile Image (個人照片)
  // ----------------------------------------------------------
  profileImage: {
    src: "/images/profile.jpg",
    alt: "洲洲 - 潘名洲",
  },

  // ----------------------------------------------------------
  // About Section (關於我)
  // ----------------------------------------------------------
  about: {
    sectionLabel: "About Me",
    sectionTitle: "關於我",
    introduction:
      "我是潘名洲，大家都叫我洲洲，是一位全職的自由潛水運動員與教練。" +
      "我相信，自由潛水不只是一項運動，更是一種與自我對話的方式。",
    divingHistory: [
      {
        year: "CMAS STA",
        description: "靜態閉氣台灣國家紀錄保持人，以 7:59 的成績寫下歷史。",
      },
      {
        year: "DYN / DYNB",
        description: "動態蹼式與雙蹼個人最佳成績達 251m，持續挑戰極限。",
      },
      {
        year: "DNF",
        description: "無蹼動態個人最佳成績達 153m，展現全方位的競技實力。",
      },
      {
        year: "教學資歷",
        description: "具備國際認證自由潛水教練資格，系統化教學經驗豐富。",
      },
    ],
    corePhilosophy:
      "我的核心理念是：每一次下潛都是一次與自我的對話。透過精準的技術訓練與深度的心理調適，帶領學員安全地突破極限、探索屬於自己的水下世界。",
    recordsTitle: "歷年最佳成績",
    records: [
      { value: "7:59", label: "STA", tag: "NR" },
      { value: "251m", label: "DYN/DYNB", tag: "" },
      { value: "153m", label: "DNF", tag: "" },
    ],
  },

  // ----------------------------------------------------------
  // Courses Section (課程體系)
  // ----------------------------------------------------------
  courses: {
    sectionLabel: "Courses",
    sectionTitle: "課程體系",
    sectionDescription:
      "無論你是初次接觸自由潛水，還是希望精進特定技術，這裡都有適合你的課程。",
    items: [
      {
        id: "trial",
        type: "單堂體驗課",
        typeEn: "Trial",
        title: "單堂體驗課",
        description: "適合初次接觸自由潛水的你，體驗水下世界的魅力",
        price: "NT$ 3,500",
        duration: "3 小時",
        includes: ["基礎呼吸技巧", "平壓入門", "水下實作"],
        ctaLabel: "立即預約",
        ctaHref: "https://lin.ee/t3SrUyr",
        ctaExternal: true,
        detailHref: null,
        highlight: false,
      },
      {
        id: "basic",
        type: "初階課程",
        typeEn: "Beginner",
        title: "初階自由潛水課程",
        description: "系統性學習自由潛水，達成標準可取得國際認證",
        price: "NT$ 14,500",
        duration: "3–4 天（可拆開）",
        includes: [
          "國際證照教材及發證費用",
          "4 堂理論課",
          "2 堂泳池課程",
          "3 堂深度課程",
        ],
        ctaLabel: "查看詳細課程",
        ctaHref:
          "https://docs.google.com/presentation/d/1lixmCUqAt0Mffp0sVQsivGtqfRIJf1rh4cJQjRtq7yc/edit?usp=sharing",
        ctaExternal: true,
        detailHref:
          "https://docs.google.com/presentation/d/1lixmCUqAt0Mffp0sVQsivGtqfRIJf1rh4cJQjRtq7yc/edit?usp=sharing",
        highlight: true,
      },
      {
        id: "specialty",
        type: "專項訓練課",
        typeEn: "Specialty",
        title: "專項訓練課",
        description: "針對專門項目加強訓練，提升競技或技術水準",
        price: "NT$ 2,800 / 堂",
        priceSub: "NT$ 7,500 / 3 堂",
        duration: "依項目而定",
        includes: ["閉氣專項", "動態平潛", "深度訓練", "平壓優化", "備賽準備"],
        ctaLabel: "私訊教練討論",
        ctaHref: "https://lin.ee/t3SrUyr",
        ctaExternal: true,
        detailHref: null,
        note: "報名前建議先與教練私訊討論",
        highlight: false,
      },
    ],
  },

  // ----------------------------------------------------------
  // Equipment Section (專業裝備推薦)
  // ----------------------------------------------------------
  equipment: {
    sectionLabel: "Equipment",
    sectionTitle: "專業裝備推薦",
    sectionDescription:
      "與頂尖品牌深度合作，為你提供最專業的自由潛水裝備建議。",
    partners: [
      {
        id: "trudive",
        name: "Trudive",
        category: "潛水衣",
        description:
          "Trudive 專注於自由潛水專用潛水衣的研發，以高彈性材質結合精緻剪裁，提供卓越的保暖性與活動自由度，是長時間訓練與比賽的最佳夥伴。",
        href: null,
      },
      {
        id: "official-secrets",
        name: "Official Secrets",
        category: "蛙鞋",
        description:
          "Official Secrets 的碳纖維蛙鞋以精準的彈性回饋與輕量化設計著稱，每一次踢腿都能以最小的能量消耗獲得最大的推進力。",
        href: null,
      },
      {
        id: "yuyu-creative",
        name: "嶼嶼創意",
        category: "個人行銷",
        description:
          "嶼嶼創意專注於運動員個人品牌建立與媒體行銷，協助我將水下的故事傳遞給更多人，是洲洲品牌形象背後的重要夥伴。",
        href: null,
      },
    ],
  },

  // ----------------------------------------------------------
  // Media Section (媒體與影響力)
  // ----------------------------------------------------------
  media: {
    sectionLabel: "Media",
    sectionTitle: "媒體與影響力",
    sectionDescription:
      "賽事報導、品牌代言與跨界合作，紀錄每一個突破極限的瞬間。",
    highlights: [
      {
        id: 1,
        category: "國家紀錄",
        title: "CMAS STA 台灣國家紀錄",
        description:
          "以 7:59 的成績刷新 STA（靜態閉氣）台灣國家紀錄，成為台灣自由潛水歷史的重要里程碑。",
        icon: "trophy",
      },
      {
        id: 2,
        category: "國際賽事",
        title: "亞洲盃自由潛水錦標賽",
        description:
          "代表台灣參與亞洲盃自由潛水錦標賽，在 DYN/DYNB 項目創下 251m 個人最佳成績。",
        icon: "medal",
      },
      {
        id: 3,
        category: "品牌合作",
        title: "Trudive × 洲洲聯名",
        description:
          "與 Trudive 品牌深度合作，擔任品牌大使，共同推廣高品質自由潛水裝備文化。",
        icon: "star",
      },
      {
        id: 4,
        category: "媒體報導",
        title: "自由潛水推廣大使",
        description:
          "積極參與各類媒體採訪與潛水推廣活動，持續提升台灣自由潛水的國際能見度。",
        icon: "broadcast",
      },
    ],
  },

  // ----------------------------------------------------------
  // Blog Section (文章區)
  // ----------------------------------------------------------
  blog: {
    sectionLabel: "Blog",
    sectionTitle: "最新文章",
    posts: [
      {
        id: 1,
        title: "如何在自由潛水中控制呼吸",
        date: "2026-02-15",
        summary:
          "呼吸控制是自由潛水的核心技術。本文分享我多年來的呼吸訓練心得，從基礎的腹式呼吸到進階的肺活量擴展技巧。",
      },
      {
        id: 2,
        title: "DYNB 251m 突破紀錄的心路歷程",
        date: "2026-01-20",
        summary:
          "回顧我在國際賽事中創下 DYNB 251m 個人最佳紀錄的過程，從訓練計劃到比賽當天的心理調適。",
      },
      {
        id: 3,
        title: "給初學者的五個自由潛水建議",
        date: "2025-12-08",
        summary:
          "如果你正考慮開始自由潛水，這篇文章為你整理了五個最重要的入門建議，幫助你安全且有效地展開水下旅程。",
      },
    ],
  },

  // ----------------------------------------------------------
  // Social Links (社群連結)
  // ----------------------------------------------------------
  socialLinks: [
    {
      platform: "line" as const,
      url: "https://lin.ee/t3SrUyr",
      ariaLabel: "透過 LINE 聯繫我們",
    },
    {
      platform: "instagram" as const,
      url: "https://www.instagram.com/mingchoupan?igsh=MTNmcnV1MHpveDl5eg%3D%3D&utm_source=qr",
      ariaLabel: "追蹤 Instagram",
    },
  ],

  // ----------------------------------------------------------
  // Site Branding
  // ----------------------------------------------------------
  brand: {
    name: "洲",
    highlight: "洲",
    copyright: "洲洲",
  },

  // ----------------------------------------------------------
  // Navigation Links
  // ----------------------------------------------------------
  nav: [
    { label: "首頁", href: "#hero" },
    { label: "關於我", href: "#about" },
    { label: "課程體系", href: "#courses" },
    { label: "裝備推薦", href: "#equipment" },
    { label: "媒體", href: "#media" },
    { label: "文章", href: "#blog" },
  ],
}

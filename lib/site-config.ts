// ============================================================
// Site Configuration - Edit this file to customize your website
// ============================================================
// This file contains all the content that you can easily change
// without needing to touch the component code.
// ============================================================

export const siteConfig = {
  // ----------------------------------------------------------
  // Site Branding
  // ----------------------------------------------------------
  brand: {
    name: "洲洲",
    tagline: "專業自由潛水運動員與教練",
    copyright: "洲洲 CHOU CHOU",
  },

  // ----------------------------------------------------------
  // Navigation Links
  // ----------------------------------------------------------
  nav: [
    { label: "關於我", href: "#about" },
    { label: "課程", href: "#courses" },
    { label: "合作夥伴", href: "#partners" },
    { label: "媒體", href: "#media" },
  ],

  // ----------------------------------------------------------
  // Social Links (社群連結)
  // Supported platform values: "line" | "instagram"
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
  // Hero Section (首頁視覺)
  // ----------------------------------------------------------
  hero: {
    backgroundImage: "/images/hero-freediver.jpg",
    backgroundAlt: "自由潛水員在深藍海洋中下潛",
    greeting: "Hi, I'm",
    name: "洲洲",
    subtitle: "Freediving Athlete & Coach",
    description:
      "我是潘名洲，大家都叫我洲洲，是一位全職的自由潛水運動員與教練。我相信，自由潛水不只是一項運動，更是一種與自我對話的方式。",
    ctaText: "認識我",
    ctaHref: "#about",
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
    sectionLabel: "About",
    sectionTitle: "關於我",
    introduction: [
      "我是潘名洲，大家都叫我洲洲，是一位全職的自由潛水運動員與教練。",
      "自由潛水對我而言，不僅是一項運動，更是一種生活態度。在水下，你必須面對自己的恐懼、學會放鬆、專注當下。這些在水中學到的技能，同樣適用於陸地上的生活。",
      "我相信每個人都有潛力突破自我極限，而我的使命就是陪伴你在這段旅程中，找到屬於自己的水下節奏。",
    ],
    philosophy: {
      title: "核心理念",
      items: [
        { label: "專注", description: "在水下保持專注，感受每一刻的存在" },
        { label: "呼吸", description: "呼吸是連結身心的橋樑" },
        { label: "信任", description: "相信自己的身體，相信訓練的過程" },
      ],
    },
    recordsTitle: "歷年最佳成績",
    records: [
      { value: "7:59", label: "STA", tag: "NR" },
      { value: "251m", label: "DYN/DYNB", tag: "" },
      { value: "153m", label: "DNF", tag: "" },
    ],
    experience: {
      title: "潛水經歷",
      items: [
        "CMAS STA (靜態閉氣) 台灣國家紀錄保持人",
        "AIDA 國際自由潛水教練認證",
        "多次代表台灣參加國際賽事",
      ],
    },
  },

  // ----------------------------------------------------------
  // Courses Section (課程體系)
  // ----------------------------------------------------------
  courses: {
    sectionLabel: "Courses",
    sectionTitle: "課程體系",
    sectionDescription: "從入門到進階，為不同程度的學員設計專屬課程",
    detailsLink: "https://docs.google.com/presentation/d/1lixmCUqAt0Mffp0sVQsivGtqfRIJf1rh4cJQjRtq7yc/edit?usp=sharing",
    detailsLinkText: "查看更多課程詳細介紹",
    categories: [
      {
        id: "single",
        title: "單堂體驗課",
        description: "適合初次接觸自由潛水的你，體驗水下世界的魅力",
        features: ["基礎呼吸技巧", "平壓入門", "水下實作"],
        price: "NT$ 3,500",
        duration: "3 小時",
      },
      {
        id: "full",
        title: "初階自由潛水課程",
        description: "系統性學習自由潛水，達成標準可取得國際認證",
        features: [
          "國際證照教材及發證費用",
          "4 堂理論課",
          "2 堂泳池課程",
          "3 堂深度課程",
        ],
        price: "NT$ 14,500",
        duration: "3-4 天（可拆開）",
        popular: true,
        hasDetailLink: true,
      },
      {
        id: "special",
        title: "專項訓練課",
        description: "針對專門項目加強訓練",
        features: [
          "閉氣專項",
          "動態平潛",
          "深度訓練",
          "平壓優化",
          "備賽準備",
        ],
        price: "NT$ 2,800 / 堂",
        priceAlt: "NT$ 7,500 / 3 堂",
        duration: "依項目而定",
        note: "報名前建議先與教練私訊討論",
      },
    ],
    testimonials: {
      title: "學員心得",
      items: [
        {
          course: "初階自由潛水課程",
          content:
            "我是一個很容易緊張的人，但是洲洲讓我可以放下心的把自己的節奏交給他，每次我閉到開始躁動前，他都可以預判並提前給出下一個引導，讓我馬上平靜下來，也很耐心地聆聽所有感受並給予很溫暖的回饋。",
        },
        {
          course: "初階自由潛水課程",
          content:
            "超級棒！因為我真的超級怕水，原本很怕教練會沒有耐心，這樣我會更不敢下水，但是教練很有耐心也可以讓我慢慢在過程中克服恐懼。",
        },
        {
          course: "閉氣專項訓練課",
          content:
            "我是一個很容易緊張的人，但是洲洲讓我可以放下心的把自己的節奏交給他，每次我閉到開始躁動前，他都可以預判並提前給出下一個引導，讓我馬上就平靜下來，也很耐心地聆聽所有感受並給予很溫暖的回饋。",
        },
        {
          course: "備賽專項培訓方案",
          content:
            "謝謝我的教練-名洲，接住我在練習時的所有情緒，每次跟他對話完，真的會平靜很多。謝謝他總是毫不猶豫的肯定我！",
        },
      ],
    },
  },

  // ----------------------------------------------------------
  // Partners Section (合作夥伴)
  // ----------------------------------------------------------
  equipment: {
    sectionLabel: "Partners",
    sectionTitle: "合作夥伴",
    sectionDescription: "與專業品牌攜手合作，提供最優質的產品與服務",
    partners: [
      {
        brand: "Trudive",
        subtitle: "多款時尚功能兼具防寒衣",
        description: "高品質自由潛水專用防寒衣，提供絕佳保暖與靈活性",
        url: "https://msocean.com.tw/product-category/wetsuit/trudive-wetsuit",
      },
      {
        brand: "Official Secrets",
        subtitle: "專業長蛙鞋",
        description: "專業級自由潛水長蛙，兼具效率與舒適",
        url: "https://www.official-secrets.com/",
      },
      {
        brand: "嶼嶼創意",
        subtitle: "品牌行銷服務",
        description: "專業運動員品牌形象規劃與行銷服務",
        url: "https://yuyu-creative.tw/",
      },
      {
        brand: "徊深潛水",
        subtitle: "小琉球水肺潛水潛店",
        description: "專業水肺潛水服務，探索小琉球海底世界",
        url: "https://backtrackdiving.com/",
      },
    ],
    partnerNote: "以上品牌皆為長期合作夥伴，歡迎洽詢合作",
  },

  // ----------------------------------------------------------
  // Media Section (媒體與影響力)
  // ----------------------------------------------------------
  media: {
    sectionLabel: "Media",
    sectionTitle: "媒體與影響力",
    sectionDescription: "賽事報導與品牌合作紀錄",
    items: [
      {
        type: "competition" as const,
        title: "2024 AIDA 世界錦標賽",
        description: "代表台灣參賽，STA 項目創下國家紀錄 7:59",
        date: "2024",
        image: "",
      },
      {
        type: "competition" as const,
        title: "2023 亞洲盃自由潛水賽",
        description: "DYN 項目獲得銀牌，成績 246 公尺",
        date: "2023",
        image: "",
      },
      {
        type: "brand" as const,
        title: "OMER 台灣品牌大使",
        description: "正式成為義大利潛水品牌 OMER 台灣區代言人",
        date: "2024",
        image: "",
      },
      {
        type: "media" as const,
        title: "運動畫刊專訪",
        description: "「從工程師到自由潛水選手」職涯轉換專題報導",
        date: "2023",
        image: "",
      },
    ],
  },
}

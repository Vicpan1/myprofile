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
      "專業自由潛水運動員與教練，CMAS STA 台灣國家紀錄保持人，帶你突破水下極限。",
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
    philosophy: {
      title: "核心理念",
      content:
        "自由潛水是一門結合身體、心理與呼吸的藝術。我致力於幫助每位學員找到屬於自己的節奏，" +
        "在水下世界中體驗真正的寧靜與自由。透過科學化的訓練方法與個人化的指導，" +
        "讓每一次下潛都成為自我突破的旅程。",
    },
    achievements: [
      "CMAS STA（靜態閉氣）台灣國家紀錄保持人",
      "國際自由潛水賽事選手",
      "專業自由潛水教練",
    ],
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
    sectionDescription: "從體驗到專業，為你量身打造的自由潛水學習旅程",
    items: [
      {
        id: "trial",
        title: "單堂體驗課",
        description: "適合初次接觸自由潛水的你，體驗水下世界的魅力",
        price: "NT$ 3,500",
        duration: "3 小時",
        includes: ["基礎呼吸技巧", "平壓入門", "水下實作"],
        highlight: false,
      },
      {
        id: "beginner",
        title: "初階自由潛水課程",
        description: "系統性學習自由潛水，達成標準可取得國際認證",
        price: "NT$ 14,500",
        duration: "3-4 天（可拆開）",
        includes: [
          "國際證照教材及發證費用",
          "4 堂理論課",
          "2 堂泳池課程",
          "3 堂深度課程",
        ],
        highlight: true,
        link: "https://docs.google.com/presentation/d/1lixmCUqAt0Mffp0sVQsivGtqfRIJf1rh4cJQjRtq7yc/edit?usp=sharing",
      },
      {
        id: "specialized",
        title: "專項訓練課",
        description: "針對專門項目加強訓練",
        price: "NT$ 2,800 / 堂",
        priceAlt: "NT$ 7,500 / 3堂",
        duration: "依項目而定",
        includes: ["閉氣專項", "動態平潛", "深度訓練", "平壓優化", "備賽準備"],
        highlight: false,
        note: "報名前建議先與教練私訊討論",
      },
    ],
  },

  // ----------------------------------------------------------
  // Equipment Partners Section (專業裝備推薦)
  // ----------------------------------------------------------
  partners: {
    sectionLabel: "Partners",
    sectionTitle: "專業裝備推薦",
    sectionDescription: "與頂尖品牌的深度合作，為你推薦最適合的裝備",
    items: [
      {
        name: "Trudive",
        category: "潛水衣",
        description: "專業自由潛水防寒衣，提供極致的保暖與靈活性",
        logo: "/images/partners/trudive.png",
      },
      {
        name: "Official Secrets",
        category: "蛙鞋",
        description: "高性能碳纖維蛙鞋，為你的每一次推進提供最佳動力",
        logo: "/images/partners/official-secrets.png",
      },
      {
        name: "嶼嶼創意",
        category: "個人行銷",
        description: "專業品牌形象設計與行銷策劃",
        logo: "/images/partners/yuyu.png",
      },
    ],
  },

  // ----------------------------------------------------------
  // Media Section (媒體與影響力)
  // ----------------------------------------------------------
  media: {
    sectionLabel: "Media",
    sectionTitle: "媒體與影響力",
    sectionDescription: "賽事報導與品牌代言紀錄",
    items: [
      {
        title: "CMAS STA 台灣國家紀錄",
        type: "賽事成就",
        description: "靜態閉氣 7:59 創下台灣國家紀錄",
      },
      {
        title: "國際自由潛水賽事",
        type: "賽事經歷",
        description: "多次參與國際賽事，持續突破個人極限",
      },
      {
        title: "品牌合作夥伴",
        type: "品牌代言",
        description: "與多個專業潛水品牌建立長期合作關係",
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
    { label: "裝備推薦", href: "#partners" },
    { label: "媒體", href: "#media" },
  ],
}

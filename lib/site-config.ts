// ============================================================
// Site Configuration - Edit this file to customize your website
// ============================================================
// This file contains all the content that you can easily change
// without needing to touch the component code.
// ============================================================

export const siteConfig = {
  // ----------------------------------------------------------
  // Hero Section (首頁視覺)
  // ----------------------------------------------------------
  hero: {
    // Background image path - put your image in /public/images/
    // and update the path below (e.g. "/images/my-photo.jpg")
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
  // Replace the file at /public/images/profile.jpg to update
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
    // Self-introduction - edit this paragraph freely
    introduction:
      "我是潘名洲，大家都叫我洲洲，是一位全職的自由潛水運動員與教練。" +
      "我相信，自由潛水不只是一項運動，更是一種與自我對話的方式。",

    // Personal Best Records (歷年最佳成績)
    recordsTitle: "歷年最佳成績",
    records: [
      { value: "7:59", label: "STA", tag: "NR" },
      { value: "251m", label: "DYN/DYNB", tag: "" },
      { value: "153m", label: "DNF", tag: "" },
    ],
  },

  // ----------------------------------------------------------
  // Blog Section (文章區)
  // ----------------------------------------------------------
  blog: {
    sectionLabel: "Blog",
    sectionTitle: "最新文章",
    // Default blog posts - add or remove entries here
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
        title: "DYNB 246m 突破紀錄的心路歷程",
        date: "2026-01-20",
        summary:
          "回顧我在國際賽事中創下 DYNB 246m 個人最佳紀錄的過程，從訓練計劃到比賽當天的心理調適。",
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
  // Add or remove entries here to update header icons.
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
    { label: "文章", href: "#blog" },
  ],
}

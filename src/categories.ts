export const CategoryToScrapeObject = {
  // PRODUCTIVITY
  COMMUNICATION: {
    url: "https://chromewebstore.google.com/category/extensions/productivity/communication",
    categoryName: "communication"
  },
  DEVELOPER_TOOLS: {
    url: "https://chromewebstore.google.com/category/extensions/productivity/developer",
    categoryName: "developer_tools"
  },
  EDUCATION: {
    url: "https://chromewebstore.google.com/category/extensions/productivity/education",
    categoryName: "education"
  },
  TOOLS: {
    url: "https://chromewebstore.google.com/category/extensions/productivity/tools",
    categoryName: "tools"
  },
  WORKFLOW_AND_PLANNING: {
    url: "https://chromewebstore.google.com/category/extensions/productivity/workflow",
    categoryName: "workflow_and_planning"
  },
  // LIFESTYLE
  ART_AND_DESIGN: {
    url: "https://chromewebstore.google.com/category/extensions/lifestyle/art",
    categoryName: "art_and_design"
  },
  ENTERTAINMENT: {
    url: "https://chromewebstore.google.com/category/extensions/lifestyle/entertainment",
    categoryName: "entertainment"
  },
  GAMES: {
    url: "https://chromewebstore.google.com/category/extensions/lifestyle/games",
    categoryName: "games"
  },
  HOUSEHOLD: {
    url: "https://chromewebstore.google.com/category/extensions/lifestyle/household",
    categoryName: "household"
  },
  JUST_FOR_FUN: {
    url: "https://chromewebstore.google.com/category/extensions/lifestyle/fun",
    categoryName: "just_for_fun"
  },
  NEWS_AND_WEATHER: {
    url: "https://chromewebstore.google.com/category/extensions/lifestyle/news",
    categoryName: "news_and_weather"
  },
  SHOPPING: {
    url: "https://chromewebstore.google.com/category/extensions/lifestyle/shopping",
    categoryName: "shopping"
  },
  SOCIAL_NETWORKING: {
    url: "https://chromewebstore.google.com/category/extensions/lifestyle/social",
    categoryName: "social_networking"
  },
  TRAVEL: {
    url: "https://chromewebstore.google.com/category/extensions/lifestyle/travel",
    categoryName: "travel"
  },
  WELL_BEING: {
    url: "https://chromewebstore.google.com/category/extensions/lifestyle/well_being",
    categoryName: "well_being"
  },
  // MAKE CHROME YOURS
  ACCESSIBILITY: {
    url: "https://chromewebstore.google.com/category/extensions/make_chrome_yours/accessibility",
    categoryName: "accessibility"
  },
  FUNCTIONALITY_AND_UI: {
    url: "https://chromewebstore.google.com/category/extensions/make_chrome_yours/functionality",
    categoryName: "functionality_and_ui"
  },
  PRIVACY_AND_SECURITY: {
    url: "https://chromewebstore.google.com/category/extensions/make_chrome_yours/privacy",
    categoryName: "privacy_and_security"
  }
}

export type CategoryToScrape = keyof typeof CategoryToScrapeObject;
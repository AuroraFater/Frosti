// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_TAB = "AuroraFO";
export const SITE_TITLE = "AuroraFO";
export const SITE_DESCRIPTION = "A blog template";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "AuroraFO";
export const USER_AVATAR = "/profile.webp";

// Server and transition settings
export const SERVER_URL = "https://demo.saroprock.com";
export const TRANSITION_API = true;

// Some informative text on the site
export const infoTest = {
  tag: "Tag: ",
  noTag: "untagged",
  tagCard: "Tags",
  tagPage: "Tag - ",
  noCategory: "uncategorized",
  categoryCard: "Categories",
  categoryPage: "Category - ",
  link: "Link: ",
  prevPage: "Recent posts",
  nextPage: "Older posts",
};

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "首页", href: "/", svg: "home", target: "_self" }, // Home page
  { id: "about", text: "关于", href: "/about", svg: "about", target: "_self" }, // About page
  {
    id: "blog",
    text: "博客",
    href: "/blog",
    svg: "blog",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "所有博客",
        href: "/blog",
        svg: "post",
        target: "_self",
      }, // All blog
      {
        id: "tech",
        text: "科技博客",
        href: "/blog/categories/tech",
        svg: "cube",
        target: "_self",
      }, // Technology category
      {
        id: "life",
        text: "生活博客",
        href: "/blog/categories/life",
        svg: "heart",
        target: "_self",
      }, // Life category
    ],
  }, // Blog page with sub-items
  {
    id: "project",
    text: "项目",
    href: "/project",
    svg: "project",
    target: "_self",
  }, // Projects page
  {
    id: "friend",
    text: "朋友",
    href: "/friend",
    svg: "friend",
    target: "_self",
  }, // Friends page
  {
    id: "contact",
    text: "邮件",
    href: "mailto:contact.AuroraFO-work@outlook.com", // Contact email
    target: "_blank", // Open in a new tab
    svg: "contact",
  },
  {
    id: "thanks",
    text: "感谢",
    href: "/thanks",
    svg: "friend",
    target: "_self",
  },
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://afdian.net/a/saroprock",
    ariaLabel: "Support my work",
    title: "Support my work",
    svg: "support",
  },
  {
    href: "https://github.com/AuroraFO",
    ariaLabel: "Github",
    title: "Github",
    svg: "github",
  },
  {
    href: "https://space.bilibili.com/1670180008",
    ariaLabel: "BiliBili",
    title: "BiliBili",
    svg: "bilibili",
  },
  {
    href: "/rss.xml",
    ariaLabel: "RSS Feed",
    title: "RSS Feed",
    svg: "rss",
  },
];

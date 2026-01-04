import { Language } from '../../types';

export interface SocialLinks {
  wechat: string;
  xiaohongshu: string;
  bilibili: string;
  px500: string;
}

export interface ContactContent {
  baseLabel: string;
  locationValue: string;
  contactLabel: string;
  emailMeLabel: string;
  email: string;
  hello: string;
  intro: string;
  socials: SocialLinks;
  tooltip?: string;
  githubLabel: string;
  footerDesign: string;
}

export const CONTACT_DATA: Record<Language, ContactContent> = {
  zh: {
    baseLabel: "BASE",
    locationValue: "江苏，南京",
    contactLabel: "取得联系",
    emailMeLabel: "邮箱",
    email: "maskcao@126.com",
    hello: "你好 :)",
    intro: "欢迎探讨与合作。",
    socials: {
      wechat: "Maskcao的实验房",
      xiaohongshu: "Maskcao",
      bilibili: "Maskcao",
      px500: "Maskcao"
    },
    githubLabel: "GitHub",
    footerDesign: "Powered by Gemini 3 Pro"
  },
  en: {
    baseLabel: "BASE",
    locationValue: "Nanjing, Jiangsu",
    contactLabel: "Get in touch",
    emailMeLabel: "Email Me",
    email: "maskcao@126.com",
    hello: "Hello ;-)",
    intro: "Welcome to discuss & cooperate.",
    socials: {
      wechat: "Maskcao's Lab",
      xiaohongshu: "Maskcao",
      bilibili: "Maskcao",
      px500: "Maskcao"
    },
    githubLabel: "GitHub",
    footerDesign: "Powered by Gemini 3 Pro"
  }
};

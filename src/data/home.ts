import { Language, Category } from '../../types';

export interface HeroItem {
  text: string;
  annotation: string;
  category: Category | null;
}

export interface HomeContent {
  heroItems: HeroItem[];
  intro: string;
  selectedWorks: string;
  years: string;
}

export const HOME_DATA: Record<Language, HomeContent> = {
  zh: {
    heroItems: [
      { text: "网络安全", annotation: "（本职所在）", category: Category.VIDEO },
      { text: "新媒体", annotation: "（兴趣所在）", category: Category.DESIGN }
    ],
    intro: "边学边做，MVP生活，坚持所好！",
    selectedWorks: "精选作品",
    years: "[ 2021 — 2025 ]"
  },
  en: {
    heroItems: [
      { text: "Network Security", annotation: "(My Job)", category: Category.VIDEO },
      { text: "New Media", annotation: "(Interest)", category: Category.DESIGN }
    ],
    intro: "A photographer who doesn't understand design is not a good product manager. | Learning by doing, living the MVP life, aiming for full-stack, but valuing actual impact above all.",
    selectedWorks: "Selected Works",
    years: "[ 2021 — 2025 ]"
  }
};

import { Language } from '../../types';

export interface PortfolioPageContent {
  title: string;
  description: string;
}

export const PORTFOLIO_PAGE_DATA: Record<Language, PortfolioPageContent> = {
  zh: {
    title: '作品',
    description: '精选属于自己的东西。'
  },
  en: {
    title: 'Portfolio',
    description: 'Choose your own things.'
  }
};

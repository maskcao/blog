import { ArticleCategory, Language } from '../../types';

export interface ArticlesPageContent {
  title: string;
  description: string;
}

export const ARTICLES_PAGE_DATA: Record<Language, ArticlesPageContent> = {
  zh: {
    title: '文章',
    description: '个人思考、学习分享与生活记录。'
  },
  en: {
    title: 'Articles',
    description: 'Thoughts, learning journey, and life records.'
  }
};

export const ARTICLE_DATA = [
  {
    id: 'a0',
    common: {
      category: ArticleCategory.DIT,
      link: 'https://mp.weixin.qq.com/s/ifDrWOJQ3Pqhf1_siCM9mg',
      coverImage: 'https://lun3cy.notion.site/image/attachment%3A9fbcf761-fe09-4bd6-b0f9-5acd3eb98e1e%3A%E5%B0%81%E9%9D%A2.png?table=block&id=2c1f4f61-90b0-802f-b73f-cce1357afe89&spaceId=bfa23b18-0167-4223-aea0-06f1efb0e882&width=1420&userId=&cache=v2', // No cover provided
      date: '2025-12-03'
    },
    zh: {
      title: '封 面 大 放 送',
    },
    en: {
      title: 'Cover Art Collection',
    }
  },
  {
    id: 'a1',
    common: {
      category: ArticleCategory.DIT,
      link: 'https://mp.weixin.qq.com/s/Xr0iwjJEL8PFTOMaNQrrcw',
      coverImage: 'https://mmbiz.qpic.cn/mmbiz_png/MpZIibj0bjSxia9WZLRmXzBEia5gTIGyGFL9PpU1MOwnTLHyHicpQttEOQKRDL4DqMsxMiaiaQbACYjy9nibAQqbnCYuA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=0',
      date: '2025-12-02'
    },
    zh: {
      title: '个人周报 | 25/11/24~25/11/30',
    },
    en: {
      title: 'Weekly Report | 25/11/24~25/11/30',
    }
  },
  {
    id: 'l1',
    common: {
      category: ArticleCategory.LUNA,
      link: 'https://mp.weixin.qq.com/s/vJ0vYDC7o4IriMAnqUC__g',
      coverImage: 'https://mmbiz.qpic.cn/mmbiz_png/MpZIibj0bjSzEeGoKj9py128g6GwhFAibwxHR3TTV0ExpWYFFvg91Y4bAJyY5weRGNzWJSFtXiaLVNia6nxJxLzXmA/640?wx_fmt=png&from=appmsg',
      date: '2025-10-19'
    },
    zh: {
      title: '创作杂谈 | 冲击波的全力一舞，圆方之比诞生回忆录(中)：制作路漫漫',
    },
    en: {
      title: 'Creation Talk | Making of "Round & Square" (Part 2): Production Journey',
    }
  },
  {
    id: 'af1',
    common: {
      category: ArticleCategory.AFTER8,
      link: 'https://mp.weixin.qq.com/s/ZTfsLCdwxtiEKw44gVkQRg',
      coverImage: 'https://mmbiz.qpic.cn/mmbiz_png/MpZIibj0bjSzHmzJfHVjbh7jaE4sTwG96tYC2mddm828ibQj37jjQDIibL60RDzibVzEDybXGP07LnqznbyFkm3ibNQ/640?wx_fmt=png&from=appmsg',
      date: '2025-08-15'
    },
    zh: {
      title: 'After8 | 0.栏目介绍',
    },
    en: {
      title: 'After8 | 0. Channel Introduction',
    }
  },
  {
    id: 's1',
    common: {
      category: ArticleCategory.SERENITY,
      link: 'https://mp.weixin.qq.com/s/QD34IsOupTR96occPweZeg',
      coverImage: 'https://mmbiz.qpic.cn/mmbiz_png/MpZIibj0bjSxia9WZLRmXzBEia5gTIGyGFLuKdk8qMh3lY9GhdDxdF4R6NceG3j41nQsy8nrAIvLMdg9H3LchLugQ/640?wx_fmt=png&from=appmsg',
      date: '2024-03-27'
    },
    zh: {
      title: '冻雨那天，我在三亚',
    },
    en: {
      title: 'Freezing Rain in Sanya',
    }
  },
  {
    id: 't1',
    common: {
      category: ArticleCategory.TALK,
      link: 'https://mp.weixin.qq.com/s/x2QdGPw6DPwAQZJ7tK1wlg',
      coverImage: 'https://mmbiz.qpic.cn/mmbiz_png/MpZIibj0bjSzbicdESgIxHiblia9DVUCTHYxWjZf6XMCFKgnia6a6EGceJ0eslakia8HACD6DmnXHq4SSlXQniayMwfkQ/640?wx_fmt=png&from=appmsg',
      date: '2025-10-15'
    },
    zh: {
      title: '瞎叨be叨 | 5.自用华师美食菜单放送',
    },
    en: {
      title: 'Random Thoughts | 5. CCNU Food Guide',
    }
  }
];

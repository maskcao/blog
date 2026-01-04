import { Project } from '../../types';

export const VIDEOGRAPHY_DATA: Project[] = [
  {
    id: 'v1',
    common: {
      category: 'Videography',
      image: 'https://i0.hdslb.com/bfs/archive/9af1a5d76c3de63f4a2870659fcfb6401cdee842.jpg',
      bilibiliId: 'BV1KD2iYBEjF'
    },
    zh: {
      title: '圆方之比，天地之合',
      subtitle: '纪录片',
      description: '一部探讨中国古建筑中“神奇比例”的纪录片。获得第17届中国大学生计算机设计大赛全国一等奖。',
      role: '导演、摄影、剪辑',
      tags: ['纪录片', '建筑', '文化'],
      awards: ["第17届中国大学生计算机设计大赛全国一等奖"],
      concept: "该项目我担任的工作比较多，主要分为摄像和美术两个板块。摄像方面，我尽量选取了原木较多的场景，搭配大面积积单一的光源，能很好地保证手工艺品细节的同时，让影片更具古朴自然的色彩与质感。美术方面，我参考了很多古代印章与卷轴的设计，在很多地方都加入了牛皮纸的纹理进行打底，在确保韵味的同时实现了风格的统一。",
      roleDetail: "负责前期策划、分镜绘制、现场拍摄调度以及后期剪辑调色。特别是对于古建筑光影的捕捉，采用了自然光与补光结合的方式。"
    },
    en: {
      title: 'Round & Square',
      subtitle: 'Documentary',
      description: 'A documentary exploring the "Magical Ratio" in ancient Chinese architecture. Won 1st Prize in the 17th National Computer Design Competition.',
      role: 'Director, Cinematographer, Editor',
      tags: ['Documentary', 'Architecture', 'Culture'],
      awards: ["1st Prize, 17th National Computer Design Competition"],
      concept: "For the cinematography, I selected scenes with natural wood textures and used large, single-source lighting to highlight details while maintaining a rustic, natural feel. Visually, I referenced ancient seal and scroll designs, using kraft paper textures as a base to ensure stylistic unity while retaining historical charm.",
      roleDetail: "Responsible for planning, storyboarding, on-site shooting direction, editing, and color grading."
    }
  }
];

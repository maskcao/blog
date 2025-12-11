import { Language, Experience, HonorsData } from '../../types';

export interface EducationPageContent {
  title: string;
  about: string;
  openToWork: string;
  viewHonorsLabel: string;
  honorsTitle: string;
  competitionsTitle: string;
  scholarshipsLabel: string;
  titlesLabel: string;
  experiences: Experience[];
  honors: HonorsData;
}

export const EDUCATION_DATA: Record<Language, EducationPageContent> = {
  zh: {
    title: "教育经历",
    about: "理科生受家庭影响考入新闻学院，后面出于从小对技术实操的偏好转战的数媒技。",
    openToWork: "边学边做+等待实习",
    viewHonorsLabel: "查看在校荣誉",
    honorsTitle: "在校荣誉",
    competitionsTitle: "竞赛奖项",
    scholarshipsLabel: "奖学金",
    titlesLabel: "荣誉称号",
    experiences: [],
    honors: { scholarships: [], titles: [], competitions: [] }
  },
  en: {
    title: "Education",
    about: "Started in Science, pivoted to Journalism, graduated in Digital Media Technology, now pursuing Broadcasting & New Media.",
    openToWork: "Learning by Doing + Seeking Internship",
    viewHonorsLabel: "View Honors & Awards",
    honorsTitle: "Honors & Awards",
    competitionsTitle: "Competition Awards",
    scholarshipsLabel: "Scholarships",
    titlesLabel: "Honorary Titles",
    experiences: [],
    honors: { scholarships: [], titles: [], competitions: [] }
  }
};

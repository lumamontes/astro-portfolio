export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "WBB App",
    techs: ["React Native (Expo)", "react-query"],
    link: "https://github.com/lumamontes/wbb-app",
  },
  {
    title: "Locaí",
    techs: ["ReactJS", "Node.js", "PostgreSQL"],
    link: "https://github.com/lumamontes/locai-frontend",
  },
  {
    title: "Image gallery",
    techs: ["NextJs", "Contentful", "TypeScript"],
    link: "https://github.com/lumamontes/photos-gallery",
  },
];

export default projects;

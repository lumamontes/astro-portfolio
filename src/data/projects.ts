export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "WBB App",
    techs: ["React Native (Expo)", "react-query", "zod"],
    link: "https://github.com/lumamontes/wbb-app",
  },
  {
    title: "Locaí",
    techs: ["ReactJS", "Node.js", "PostgreSQL"],
    link: "https://github.com/lumamontes/locai-frontend",
  },
  {
    title: "DáLivros",
    techs: ["ReactJS", "tansquery", "TypeScript"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;

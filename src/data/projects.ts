export type Project = {
  title: string;
  techs: string[];
  link: string;
  description: {
    en: string;
    br: string;
  };
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Expo Router Auth",
    techs: ["React Native", "Expo Router", "TypeScript"],
    link: "https://github.com/lumamontes/expo-router-auth",
    description: {
      en: "A React Native app showcasing an authentication flow.",
      br: "Um aplicativo React Native demonstrando um fluxo de autenticação.",
    },
  },
  {
    title: "Image Gallery",
    techs: ["Next.js", "Contentful", "TypeScript"],
    link: "https://github.com/lumamontes/photos-gallery",
    description: {
      en: "A photo gallery built with Next.js, showcasing image collections with a CMS integration.",
      br: "Uma galeria de fotos construída com Next.js, exibindo coleções de imagens com integração CMS.",
    },
  },
  {
    title: "Laravel Payments API",
    techs: ["PHP", "Laravel", "Sanctum", "PHPUnit"],
    link: "https://github.com/lumamontes/laravel-payments-api",
    description: {
      en: "An API for managing invoices and transactions in a financial system.",
      br: "Uma API para gerenciar faturas e transações financeiras ",
    },
  },
  {
    title: "Biblioteca de Zines",
    techs: ["TypeScript", "Next.js", "Tailwind CSS"],
    link: "https://github.com/lumamontes/biblioteca-de-zines",
    description: {
      en: "An archive and sharing platform for zines by independent artists.",
      br: "Uma plataforma para arquivar e compartilhar zines de artistas independentes.",
    },
  },
  {
    title: "Caju Replica App",
    techs: ["TypeScript", "Expo", "React Native", "SQLite"],
    link: "https://github.com/lumamontes/caju",
    description: {
      en: "A React Native app replicating functionalities of the Caju application.",
      br: "Um aplicativo React Native replicando funcionalidades do aplicativo Caju.",
    },
  },
];

export default projects;

type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "lumagoesmontes@gmail.com",
  title: "Hi, I’m Luma 👋",
  description:
    "Hello, i'm a brazillian fullstack developer  with over *3 years* of web experience. I am currently working with *NextJS and Laravel*. Outside of work I watch the WNBA and learning TypeScript.",
  socials: [
    {
      label: "Email",
      link: "mailto:lumagoesmontes@gmail.com",
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/lumamontes/",
    },
    {
      label: "Github",
      link: "https://github.com/lumamontes",
    },
  ],
};

export default presentation;

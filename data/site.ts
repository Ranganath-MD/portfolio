export const siteConfig = {
  shortname: "Ranganath",
  name: "Ranganath M. D",
  url: "",
  ogImage: "",
  description:
    "A Software Developer based in Bengaluru, specialized mostly in Javascript and React. I am an accomplished web developer with a strong background in building and maintaining client websites. My core technologies include HTML, CSS, Sass, JavaScript, React.js and Next JS, which I employ to create responsive and visually engaging web solutions. In addition to my primary skill set, I am well-versed in various languages, platforms, frameworks, and content management systems, including JavaScript, Gatsby, Node JS, Graph-QL, Mongo DB and Strapi. This adaptability enables me to tackle a wide spectrum of projects.",
  links: {
    linkedin: "https://www.linkedin.com/in/ranganathmd/",
    github: "https://github.com/Ranganath-MD",
  },
  projects: [
    {
      name: {
        project_name: "Jupiter",
        repo_name: "/jupiter-movie-app",
      },
      description: "Movie listing app using Movie DB API",
      image: "",
      techs: ["React", "React Context", "MovieDB API", "React Router Dom"],
      links: {
        github: "https://github.com/Ranganath-MD/jupiter-movie-app",
        demo: "https://jupiter-movie-app.vercel.app/",
      },
    },
    {
      name: {
        project_name: "Teerex Shop",
        repo_name: "/teerex-shop",
      },
      description: "Teerex: Frontend Challenge by Geektrust",
      image: "",
      techs: ["React", "React Context", "React Router Dom", "Mantine UI"],
      links: {
        github: "https://github.com/Ranganath-MD/teerex-shop",
        demo: "https://teerex-shop.vercel.app/",
      },
    },
    {
      name: {
        project_name: "Sahaaya",
        repo_name: "/sahaaya-frontend",
      },
      description: "Crowfunding Application using React, Node js and Mongo DB",
      image: "",
      techs: [
        "React",
        "React Context",
        "React Router Dom",
        "Node",
        "Express",
        "Mongo DB",
        "Web Socket",
      ],
      links: {
        github: "https://github.com/Ranganath-MD/sahaaya-frontend",
        demo: "https://sahaaya.vercel.app/",
      },
    },
    {
      name: {
        project_name: "My workspace",
        repo_name: "/my-workspace",
      },
      description: "Maintain history of your work",
      image: "",
      techs: ["React", "Next JS", "Typescript", "React Context", "Mantine UI"],
      links: {
        github: "https://github.com/Ranganath-MD/my-workspace",
        demo: "https://rmdworkspace.vercel.app/",
      },
    },
    {
      name: {
        project_name: "Dev Sahaaya",
        repo_name: "/Dev-Sahaaya",
      },
      description: "Developer Resources",
      image: "",
      techs: ["React", "Next JS", "Typescript", "MDX", "Chakra UI"],
      links: {
        github: "https://github.com/Ranganath-MD/Dev-Sahaaya",
        demo: "https://devsahaaya.vercel.app/",
      },
    },
    {
      name: {
        project_name: "Blog with Content Layer",
        repo_name: "/content-layer-blog",
      },
      description: "Next js Blog using Content Layer",
      image: "",
      techs: ["Next JS", "Typescript", "Content Layer"],
      links: {
        github: "https://github.com/Ranganath-MD/content-layer-blog",
        demo: "",
      },
    },
    {
      name: {
        project_name: "Fauna Tasker",
        repo_name: "/Fauna-Tasker",
      },
      description: "A Next JS app to create tasks, using Fauna DB as Backend",
      image: "",
      techs: ["Next JS", "Graph-QL", "SWR", "Geist UI", "Fauna"],
      links: {
        github: "https://github.com/Ranganath-MD/Fauna-Tasker",
        demo: "https://fauna-tasker.vercel.app/",
      },
    },
    {
      name: {
        project_name: "Sahaaya-Backend",
        repo_name: "/sahaaya-backend",
      },
      description: "Backend for Crowfunding Application",
      image: "",
      techs: ["Node JS", "Mongo DB", "Mongoose", "Socket IO"],
      links: {
        github: "https://github.com/Ranganath-MD/sahaaya-backend",
        demo: "",
      },
    },
  ],
};

export type Project = {
  "name": {
    "project_name": string,
    "repo_name": string
  },
  "description": string,
  "image": string,
  "techs": string[],
  "links": {
    "github": string,
    "demo": string
  }
}

export type SiteConfig = typeof siteConfig
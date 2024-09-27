import SiteDataType from "./types/siteData";

const siteData: SiteDataType = {
  sections: [
    {
      title: "Website Projects",
      skills: ["NodeJS", "TypeScript", "React", "SASS"],
      projects: [
        {
          title: "Paint Online",
          image: "https://placehold.co/420",
          mainLink: "https://zerobyter.github.io/paint/",
        },
      ],
    },
    {
      title: "Video Game Projects",
      skills: ["Unity", "C#"],
      projects: [
        {
          title: "Galactic Lander",
          image: "https://placehold.co/69",
          mainLink:
            process.env.NODE_ENV === "development"
              ? "/galacticlander/"
              : "https://galacticlander.zerobyter.net/",
        },
      ],
    },
    // {
    //   title: "HTML5 Canvas Projects",
    //   skills: ["JavaScript", "HTML5 Canvas"],
    //   projects: [],
    // },
  ],
};

export default siteData;

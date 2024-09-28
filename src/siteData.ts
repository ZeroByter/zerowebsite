import SiteDataType from "./types/siteData";
import paintOnlineIndexLogo from "./imgs/paintonline/indexLogo.png";
import galacticLanderIndexLogo from "./imgs/galacticlander/indexLogo.png";
import tenDaysToWarIndexLogo from "./imgs/tendaystowar/indexLogo.png";
import pixelPaintersIndexLogo from "./imgs/pixelpainters/indexLogo.png";

const siteData: SiteDataType = {
  sections: [
    {
      title: "Video Game Projects",
      skills: ["Unity", "C#"],
      projects: [
        {
          title: "Galactic Lander",
          image: galacticLanderIndexLogo,
          mainLink:
            process.env.NODE_ENV === "development"
              ? "/galacticlander/"
              : "https://galacticlander.zerobyter.net/",
        },
        {
          title: "Ten Days to War",
          image: tenDaysToWarIndexLogo,
          mainLink: "https://store.steampowered.com/app/1144060",
        },
        {
          title: "Pixel Painters",
          image: pixelPaintersIndexLogo,
          mainLink: "https://zerobyter.itch.io/pixelpainters",
        },
      ],
    },
    {
      title: "Website Projects",
      skills: ["NodeJS", "TypeScript", "React", "SASS"],
      projects: [
        {
          title: "Paint Online",
          image: paintOnlineIndexLogo,
          mainLink: "https://zerobyter.github.io/paint/",
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

import SiteDataType from "./types/siteData";
import aDoListIndexLogo from "./imgs/adolist/indexLogo.png";
import paintOnlineIndexLogo from "./imgs/paintonline/indexLogo.png";
import galacticLanderIndexLogo from "./imgs/galacticlander/indexLogo.png";
import tenDaysToWarIndexLogo from "./imgs/tendaystowar/indexLogo.png";
import pixelPaintersIndexLogo from "./imgs/pixelpainters/indexLogo.png";
import simpleSnookerIndexLogo from "./imgs/simplesnooker/indexLogo.png";
import heatmapIndexLogo from "./imgs/heatmap/indexLogo.png";

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
          yearCreated: 2018,
          lastYearUpdated: 2023,
        },
        {
          title: "Ten Days to War",
          image: tenDaysToWarIndexLogo,
          mainLink: "https://store.steampowered.com/app/1144060",
          yearCreated: 2019,
        },
        {
          title: "Pixel Painters",
          image: pixelPaintersIndexLogo,
          mainLink: "https://zerobyter.itch.io/pixelpainters",
          yearCreated: 2019,
        },
      ],
    },
    {
      title: "Website Projects",
      skills: ["NodeJS", "TypeScript", "React", "SASS"],
      projects: [
        {
          title: "ADoList",
          image: aDoListIndexLogo,
          mainLink: "https://zerobyter.github.io/adolist/",
          yearCreated: 2022,
          lastYearUpdated: 2024,
        },
        {
          title: "Paint Online",
          image: paintOnlineIndexLogo,
          mainLink: "https://zerobyter.github.io/paint/",
          yearCreated: 2022,
          lastYearUpdated: 2024,
        },
      ],
    },
    {
      title: "HTML5 Canvas Projects",
      skills: ["JavaScript", "HTML5 Canvas"],
      projects: [
        {
          title: "Easy Snooker",
          image: simpleSnookerIndexLogo,
          mainLink: "https://zerobyter.itch.io/easy-snooker",
          yearCreated: 2024,
        },
        {
          title: "Interactive Heatmap",
          image: heatmapIndexLogo,
          mainLink: "/game/heatmap",
          yearCreated: 2019,
        },
      ],
    },
  ],
};

export default siteData;

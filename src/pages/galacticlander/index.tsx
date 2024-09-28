import { FC } from "react";
import css from "./index.module.scss";
import ButtonLink from "../../app/components/shared/buttonLink";
import AboutContent from "./about";
import WorkshopContent from "./workshop";

const getNavigationLink = (link: string) => {
  if (process.env.NODE_ENV === "development") {
    return `/galacticlander${link}`;
  }

  return link;
};

const GalacticLanderPage: FC = () => {
  const getRenderContents = () => {
    if (
      window.location.pathname
        .replace("/galacticlander", "")
        .startsWith("/workshop")
    ) {
      return <WorkshopContent />;
    }

    return <AboutContent />;
  };

  return (
    <div className={css.container}>
      <div className={css.background}></div>
      <div className={css.mainGameLogo}></div>
      <div className={css.aboveGroundLight}></div>
      <div className={css.groundTop}></div>
      <div className={css.gameInfo}>
        <div className={css.links}>
          <a
            href="https://store.steampowered.com/app/913600"
            target="_blank"
            rel="noreferrer"
          >
            Steam
          </a>
          <a
            href="https://steamcommunity.com/app/913600/workshop/"
            target="_blank"
            rel="noreferrer"
          >
            Steam Workshop
          </a>
          <a
            href="https://steamcommunity.com/app/913600/discussions/"
            target="_blank"
            rel="noreferrer"
          >
            Steam Discussions
          </a>
        </div>
        <div className={css.buttons}>
          <ButtonLink href={getNavigationLink("/")}>About</ButtonLink>
          <ButtonLink href={getNavigationLink("/workshop")}>
            Workshop Submission Guide
          </ButtonLink>
        </div>
        <div className={css.contents}>{getRenderContents()}</div>
      </div>
    </div>
  );
};

export default GalacticLanderPage;

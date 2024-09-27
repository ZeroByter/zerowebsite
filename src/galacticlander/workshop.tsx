import { FC } from "react";
import css from "./workshop.module.scss";
import missileLauncherCircles from "../imgs/galacticlander/missileLauncherCircles.png";

const WorkshopContent: FC = () => {
  if (
    window.location.pathname
      .replace("/galacticlander", "")
      .startsWith("/workshop/general")
  ) {
    window.location.pathname = window.location.pathname.replace(
      "/workshop/general",
      "/workshop"
    );
    window.location.hash = "general";
  }

  if (
    window.location.pathname
      .replace("/galacticlander", "")
      .startsWith("/workshop/conditions")
  ) {
    window.location.pathname = window.location.pathname.replace(
      "/workshop/conditions",
      "/workshop"
    );
    window.location.hash = "conditions";
  }

  return (
    <>
      <div id="general">
        <p>
          Levels submitted to the workshop should give the player a fun and
          pleasurable expierence.
        </p>
        <p>
          In general, levels should also have some level of <b>authenticity</b>.
          Each 'tile' should be placed correctly and allow the player to
          complete the level in a fair manner.
        </p>
        <p>
          To view the Steam Workshop levels and get inspiration for your own,
          click{" "}
          <a
            href="https://steamcommunity.com/app/913600/workshop/"
            target="_blank"
            rel="noreferrer"
          >
            here!
          </a>
        </p>
        <center>
          <h1>The Missile Launcher and The Missile </h1>
        </center>
        <p>
          The missile launcher and it's corrosponding are a powerful tool for
          level creators to use to add intensity and difficulty to their level.
          That being said, the missile launcher should not be abused to make the
          level unbeatable or unfair for the player.
        </p>
        <p>
          The red circle around the missile launcher signifies at what distance
          the player needs to get to the missile launcher in order for the
          missile launcher to fire.
        </p>
        <p>
          Similiarly the yellow circle indicates the distance from it's
          corrosponding launcher at which the missile will self-destruct and
          discontinue pursuing the player.
        </p>
        <center>
          <img
            src={missileLauncherCircles}
            alt="The missile circle outlines"
            width={200}
          />
        </center>
        <p>
          <b>
            Levels that are intentionally made poorly and/or with low-quality
            could be marked as incomplete on the Steam workshop until corrected!
          </b>
        </p>
      </div>
      <div id="conditions">
        <h1>Workshop Conditions</h1>
        <h2 className={css.colorfulHeader}>
          All launch pads must be completely inside the level
        </h2>
        <p>
          In order to be able to start the level, the player must be able to
          spawn from within the level.
        </p>
        <h2 className={css.colorfulHeader}>
          All land pads must be completely inside the level
        </h2>
        <p>
          In order to be able to complete the level, the land pads must be
          inside the level.
        </p>
      </div>
    </>
  );
};

export default WorkshopContent;

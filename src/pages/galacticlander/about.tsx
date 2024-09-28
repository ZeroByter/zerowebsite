import { FC } from "react";

const AboutContent: FC = () => {
  return (
    <>
      <p>
        Galactic Lander is inspired by the classic arcade Lunar Lander game with
        a few, modern-day additions of it's own. While Galactic Lander provides
        the classic ship controlling gameplay, it also includes modern Steam
        features such as co-op gameplay, a level editor, Steam workshop, and
        more!
      </p>
      <h2>The Game Levels</h2>
      <p>
        Galactic Lander offers several levels for both singleplayer and co-op
        gameplay. Each level contains it's own puzzle and quirk for you to solve
        alone; or with a friend in co-op mode!
      </p>
      <h2>The Level Editor</h2>
      <p>
        The in-game level editor allows players to create their own levels and
        upload them to the Steam Workshop, enabling unlimited fun by sharing
        levels with the Steam community, commenting and providing feedback on
        each others works, and playing the levels by yourself, with your
        friends, or with total strangers!
      </p>
    </>
  );
};

export default AboutContent;

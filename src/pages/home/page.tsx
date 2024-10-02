import MainLogo from "../../components/mainLogo";
import Sections from "../../components/section";
import SkillsOrbit from "../../components/skillsOrbits";
import css from "./page.module.scss";

export default function Home() {
  return (
    <div className={css.container}>
      <MainLogo />
      <div className={css.quote}>{'"I love making things"'}</div>
      <div className={css.headerInfo}>
        <SkillsOrbit />
        {/* <div className={css.links}>
          <center>Contacts</center>
          <ButtonLink href="mailto:zerobyter@zerobyter.net">Email</ButtonLink>
          <ButtonLink blankTarget={true} href="https://github.com/ZeroByter">
            GitHub
          </ButtonLink>
          <ButtonLink
            blankTarget={true}
            href="https://store.steampowered.com/developer/zerobyter"
          >
            Steam
          </ButtonLink>
        </div> */}
      </div>
      <Sections />
    </div>
  );
}

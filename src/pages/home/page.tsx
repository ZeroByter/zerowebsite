import MainLogo from "../../components/mainLogo";
import Sections from "../../components/section";
import ButtonLink from "../../components/shared/buttonLink";
import css from "./page.module.scss";

export default function Home() {
  return (
    <div className={css.container}>
      <MainLogo />
      <div className={css.quote}>{'"I love making things"'}</div>
      <div className={css.headerInfo}>
        <div className={css.skills}>
          <div className={css.header}>Skills:</div>
          <ul>
            <li>Web Development:</li>
            <ul>
              <li>60% Frontend - 40% Backend</li>
            </ul>
            <li>NodeJS + TypeScript</li>
            <li>React</li>
            <ul>
              <li>Redux</li>
              <li>GraphQL</li>
            </ul>
            <li>C#</li>
          </ul>
        </div>
        <div className={css.links}>
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
        </div>
      </div>
      <Sections />
    </div>
  );
}

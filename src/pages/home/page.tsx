import MainLogo from "../../components/mainLogo";
import Sections from "../../components/section";
import css from "./page.module.scss";

export default function Home() {
  return (
    <div className={css.container}>
      <MainLogo />
      <div className={css.quote}>{'"I love making things"'}</div>
      <div className={css.links}>
        <a href="https://github.com/ZeroByter" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://store.steampowered.com/developer/zerobyter"
          target="_blank"
          rel="noreferrer"
        >
          Steam
        </a>
      </div>
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
      <Sections />
    </div>
  );
}

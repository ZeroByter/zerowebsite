import MainLogo from "./components/mainLogo";
import Sections from "./components/section";
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
      <Sections />
    </div>
  );
}

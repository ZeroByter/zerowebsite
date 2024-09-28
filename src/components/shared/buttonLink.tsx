import { FC, ReactNode } from "react";
import css from "./buttonLink.module.scss";

type Props = {
  href: string;
  children: ReactNode;
};

const ButtonLink: FC<Props> = ({ href, children }) => {
  return (
    <a className={css.link} href={href}>
      <button className={css.button}>{children}</button>
    </a>
  );
};

export default ButtonLink;

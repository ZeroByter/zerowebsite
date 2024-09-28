import { FC, ReactNode } from "react";
import css from "./buttonLink.module.scss";

type Props = {
  href: string;
  blankTarget?: boolean;
  children: ReactNode;
};

const ButtonLink: FC<Props> = ({ href, children, blankTarget }) => {
  const blankTargetProps = blankTarget
    ? { target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <a className={css.link} href={href} {...blankTargetProps}>
      <button className={css.button}>{children}</button>
    </a>
  );
};

export default ButtonLink;

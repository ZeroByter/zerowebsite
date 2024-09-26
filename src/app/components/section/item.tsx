import { FC } from "react";
import css from "./item.module.scss";
import ProjectType from "../../../types/project";

type Props = {
  project: ProjectType;
};

const Item: FC<Props> = ({ project }) => {
  return (
    <a
      href={project.mainLink}
      target="_blank"
      className={css.container}
      rel="noreferrer"
    >
      <img className={css.image} alt="" src={project.image} />
      <div className={css.title}>{project.title}</div>
      {/* <div className={css.description}>short desc short desc short desc short desc short desc short desc short desc</div> */}
    </a>
  );
};

export default Item;

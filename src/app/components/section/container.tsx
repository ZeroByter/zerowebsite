import { FC } from "react";
import css from "./container.module.scss";
import Item from "./item";
import SectionType from "../../../types/section";

type Props = {
  section: SectionType;
};

const SectionContainer: FC<Props> = ({ section }) => {
  const renderProjects = section.projects.map((project) => {
    return <Item key={project.title} project={project} />;
  });

  return (
    <div className={css.container}>
      <div className={css.header}>
        <div className={css.title}>{section.title}</div>
        <div className={css.skills}>
          Skills used: {section.skills.join(", ")}
        </div>
      </div>
      <div className={css.items}>{renderProjects}</div>
    </div>
  );
};

export default SectionContainer;

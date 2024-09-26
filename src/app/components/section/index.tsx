import { FC } from "react";
import SectionContainer from "./container";
import css from "./index.module.scss";
import siteData from "../../../siteData";

const Sections: FC = () => {
  const renderSections = siteData.sections.map((section) => {
    return <SectionContainer key={section.title} section={section} />;
  });

  return <div className={css.container}>{renderSections}</div>;
};

export default Sections;

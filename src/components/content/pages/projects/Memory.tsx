import ProjectPage from "./projectpage/ProjectPage";
import desktopMemory from "../../../../assets/projects/memory/memory_desktop.png";
import tabletMemory from "../../../../assets/projects/memory/memory_tablet.png";
import mobileMemory from "../../../../assets/projects/memory/memory_mobile.png";
import ProjectNavigation from "./projectnavigation/ProjectNavigation";
import styles from "./projectwrapper.module.scss";

const Memory = () => {
  return (
    <div className={styles.projectwrapper}>
      <ProjectPage
        desktopImage={desktopMemory}
        tabletImage={tabletMemory}
        mobileImage={mobileMemory}
        projectName="Memory"
        description="First game"
        usedHtml={true}
        usedCss={true}
        usedSass={true}
        usedJavascript={true}
        usedBootstrap={true}
        usedTypescript={true}
        usedReact={true}
        codeLink="www.google.nl"
        projectLink="www.google.com"
      />

      <ProjectNavigation
        next={"/projects/calculator"}
        previous={"/projects/movies"}
        firstProject={false}
        lastProject={false}
      />
    </div>
  );
};

export default Memory;

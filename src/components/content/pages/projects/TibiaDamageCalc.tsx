import ProjectPage from "./projectpage/ProjectPage";
import desktopTibia from "../../../../assets/projects/tibia/tibia_desktop.png";
import tabletTibia from "../../../../assets/projects/tibia/tibia_tablet.png";
import mobileTibia from "../../../../assets/projects/tibia/tibia_mobile.png";
import ProjectNavigation from "./projectnavigation/ProjectNavigation";
import styles from "./projectwrapper.module.scss";

const TibiaDamageCalc = () => {
  return (
    <div className={styles.projectwrapper}>
      <ProjectPage
        desktopImage={desktopTibia}
        tabletImage={tabletTibia}
        mobileImage={mobileTibia}
        projectName="Tibia damage calculator"
        description="Tibia app"
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
        next={"/projects/quiz"}
        previous={"/projects/foodfreedom"}
        firstProject={false}
        lastProject={false}
      />
    </div>
  );
};

export default TibiaDamageCalc;

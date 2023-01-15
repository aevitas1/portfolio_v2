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
        description="A damage calculator for a game called Tibia. I noticed a demand for a calculator so I made it. This is still being used by some players."
        usedHtml={true}
        usedCss={false}
        usedSass={false}
        usedJavascript={false}
        usedBootstrap={false}
        usedTypescript={false}
        usedReact={true}
        codeLink="https://github.com/aevitas1/tibia"
        projectLink="https://app.netlify.com/sites/tibia-calculator"
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

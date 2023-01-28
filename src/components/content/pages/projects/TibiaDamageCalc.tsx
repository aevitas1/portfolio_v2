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
        description="A damage calculator for a game called Tibia. I noticed a demand for a calculator so I made it. This is still being used by some players. Build with React and styled with "
        usedHtml={false}
        usedCss={false}
        usedSass={false}
        usedJavascript={false}
        usedBootstrap={false}
        usedTypescript={false}
        usedPostcss={false}
        usedNextjs={false}
        usedPhp={false}
        usedReact={true}
        usedNextui={true}
        codeLink="https://github.com/aevitas1/tibia"
        projectLink="https://tibia-calculator.netlify.app"
      />

      <ProjectNavigation
        next={"/projects/foodfreedom"}
        previous={"/projects/portfolio"}
        firstProject={false}
        lastProject={false}
        projectCount="2/7"
      />
    </div>
  );
};

export default TibiaDamageCalc;

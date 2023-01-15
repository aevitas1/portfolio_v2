import ProjectPage from "./projectpage/ProjectPage";
import desktopCalculator from "../../../../assets/projects/calculator/calculator_desktop.png";
import tabletCalculator from "../../../../assets/projects/calculator/calculator_tablet.png";
import mobileCalculator from "../../../../assets/projects/calculator/calculator_mobile.png";
import ProjectNavigation from "./projectnavigation/ProjectNavigation";
import styles from "./projectwrapper.module.scss";

const Calculator = () => {
  return (
    <div className={styles.projectwrapper}>
      <ProjectPage
        desktopImage={desktopCalculator}
        tabletImage={tabletCalculator}
        mobileImage={mobileCalculator}
        projectName="Calculator"
        description="1 + 1 = 2"
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
        next={""}
        previous={"/projects/memory"}
        firstProject={false}
        lastProject={true}
      />
    </div>
  );
};

export default Calculator;

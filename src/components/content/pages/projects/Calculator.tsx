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
        description="A calculator, this is the first JavaScript project I made."
        usedHtml={true}
        usedCss={true}
        usedSass={false}
        usedJavascript={true}
        usedBootstrap={false}
        usedTypescript={false}
        usedPostcss={false}
        usedNextjs={false}
        usedPhp={false}
        usedReact={false}
        usedNextui={false}
        codeLink="https://github.com/aevitas1/rekenmachine"
        projectLink="https://svdm-calculator.netlify.app"
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

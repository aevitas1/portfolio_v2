import ProjectPage from "./projectpage/ProjectPage";
import desktopQuiz from "../../../../assets/projects/quiz/quiz_desktop.png";
import tabletQuiz from "../../../../assets/projects/quiz/quiz_tablet.png";
import mobileQuiz from "../../../../assets/projects/quiz/quiz_mobile.png";
import ProjectNavigation from "./projectnavigation/ProjectNavigation";
import styles from "./projectwrapper.module.scss";

const Quiz = () => {
  return (
    <div className={styles.projectwrapper}>
      <ProjectPage
        desktopImage={desktopQuiz}
        tabletImage={tabletQuiz}
        mobileImage={mobileQuiz}
        projectName="Quiz app"
        description="Quiz app"
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
        next={"/projects/movies"}
        previous={"/projects/tibia_damage_calculator"}
        firstProject={false}
        lastProject={false}
      />
    </div>
  );
};

export default Quiz;

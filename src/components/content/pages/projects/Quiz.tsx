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
        description="A quiz app I made to explore the possibilities of API's. This is made with Open Trivia API."
        usedHtml={true}
        usedCss={false}
        usedSass={false}
        usedJavascript={false}
        usedBootstrap={true}
        usedTypescript={false}
        usedPostcss={false}
        usedNextjs={false}
        usedPhp={false}
        usedReact={true}
        usedNextui={false}
        codeLink="https://github.com/aevitas1/trivia"
        projectLink="https://react-trivia-app20.netlify.app"
      />

      <ProjectNavigation
        next={"/projects/movies"}
        previous={"/projects/foodfreedom"}
        firstProject={false}
        lastProject={false}
        projectCount="4/7"
      />
    </div>
  );
};

export default Quiz;

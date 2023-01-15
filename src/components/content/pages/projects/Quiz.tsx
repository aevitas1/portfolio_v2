import ProjectPage from "./projectpage/ProjectPage";
import desktopQuiz from "../../../../assets/projects/quiz/quiz_desktop.png";
import tabletQuiz from "../../../../assets/projects/quiz/quiz_tablet.png";
import mobileQuiz from "../../../../assets/projects/quiz/quiz_mobile.png";
const Quiz = () => {
  return (
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
  );
};

export default Quiz;

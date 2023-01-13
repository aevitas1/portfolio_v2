import { useLocation } from "react-router-dom";
import ProjectPage from "./projectpage/ProjectPage";
import ProjectNavigation from "./projectnavigation/ProjectNavigation";
import styles from "./ProjectPageWrapper.module.scss";

// Project images
import desktopFoodfreedom from "../../../../assets/projects/foodfreedom/foodfreedom_desktop.png";
import tabletFoodfreedom from "../../../../assets/projects/foodfreedom/foodfreedom_tablet.png";
import mobileFoodfreedom from "../../../../assets/projects/foodfreedom/foodfreedom_mobile.png";

import desktopCalculator from "../../../../assets/projects/calculator/calculator_desktop.png";
import tabletCalculator from "../../../../assets/projects/calculator/calculator_tablet.png";
import mobileCalculator from "../../../../assets/projects/calculator/calculator_mobile.png";

import desktopMemory from "../../../../assets/projects/memory/memory_desktop.png";
import tabletMemory from "../../../../assets/projects/memory/memory_tablet.png";
import mobileMemory from "../../../../assets/projects/memory/memory_mobile.png";

import desktopMovies from "../../../../assets/projects/movies/movies_desktop.png";
import tabletMovies from "../../../../assets/projects/movies/movies_tablet.png";
import mobileMovies from "../../../../assets/projects/movies/movies_mobile.png";

import desktopQuiz from "../../../../assets/projects/quiz/quiz_desktop.png";
import tabletQuiz from "../../../../assets/projects/quiz/quiz_tablet.png";
import mobileQuiz from "../../../../assets/projects/quiz/quiz_mobile.png";

import desktopTibia from "../../../../assets/projects/tibia/tibia_desktop.png";
import tabletTibia from "../../../../assets/projects/tibia/tibia_tablet.png";
import mobileTibia from "../../../../assets/projects/tibia/tibia_mobile.png";

const ProjectPageWrapper = () => {
  const projectPath = useLocation();
  return (
    <>
      <div className={styles.projectWrapper}>
        {projectPath.pathname === "/projects/foodfreedom" && (
          <ProjectPage
            desktopImage={desktopFoodfreedom}
            tabletImage={tabletFoodfreedom}
            mobileImage={mobileFoodfreedom}
            projectName="Foodfreedom"
            description="First website bla di bla di lorem ipsum dolor website bla di bla di lorem ipsum dolor website bla di bla di lorem ipsum dolor website bla di bla di lorem ipsum dolor"
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
        )}

        {projectPath.pathname === "/projects/memory" && (
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
        )}

        {projectPath.pathname === "/projects/calculator" && (
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
        )}

        {projectPath.pathname === "/projects/tibia_damage_calculator" && (
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
        )}

        {projectPath.pathname === "/projects/movies" && (
          <ProjectPage
            desktopImage={desktopMovies}
            tabletImage={tabletMovies}
            mobileImage={mobileMovies}
            projectName="Movie app"
            description="Movie app"
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
        )}

        {projectPath.pathname === "/projects/quiz" && (
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
        )}
        <ProjectNavigation />
      </div>
    </>
  );
};

export default ProjectPageWrapper;

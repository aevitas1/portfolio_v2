import { useLocation } from "react-router-dom";
import ProjectPage from "../../projectpage/ProjectPage";
import ProjectNavigation from "./ProjectNavigation/ProjectNavigation";

// Project images
import desktopFoodfreedom from "../../../../assets/projects/foodfreedom/foodfreedom_desktop.png";
import tabletFoodfreedom from "../../../../assets/projects/foodfreedom/foodfreedom_tablet.png";
import mobileFoodfreedom from "../../../../assets/projects/foodfreedom/foodfreedom_mobile.png";
import calculator from "../../../../assets/projects/calc.jpg";
import memory from "../../../../assets/projects/mem_lm.png";
import quiz from "../../../../assets/projects/quiz.png";
import styles from "./ProjectPageWrapper.module.scss";

const PageOne = () => {
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
            desktopImage={memory}
            tabletImage={memory}
            mobileImage={memory}
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
            desktopImage={calculator}
            tabletImage={calculator}
            mobileImage={calculator}
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
            desktopImage={quiz}
            tabletImage={quiz}
            mobileImage={quiz}
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

export default PageOne;

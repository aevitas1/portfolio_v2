import ProjectPage from "../../projectpage/ProjectPage";
import foodfreedom from "../../../../assets/projects/foodfreedom.png";
import calculator from "../../../../assets/projects/calc.jpg";
import memory from "../../../../assets/projects/mem_lm.png";
import quiz from "../../../../assets/projects/quiz.png";
import { NavLink } from "react-router-dom";
import styles from "./ProjectPageWrapper.module.scss";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

import { useLocation } from "react-router-dom";

const PageOne = () => {
  const projectPath = useLocation();
  return (
    <>
      <div className={styles.projectWrapper}>
        {projectPath.pathname === "/projects/foodfreedom" && (
          <ProjectPage
            image={foodfreedom}
            projectName="Foodfreedom"
            description="First website bla di bla di lorem ipsum dolor"
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
            image={memory}
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
            image={calculator}
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
            image={quiz}
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

        <div className={styles.project_navigation}>
          {projectPath.pathname === "/projects/foodfreedom" ? (
            ""
          ) : (
            <NavLink
              to={
                projectPath.pathname === "/projects/memory"
                  ? "/projects/foodfreedom"
                  : projectPath.pathname === "/projects/calculator"
                  ? "/projects/memory"
                  : projectPath.pathname === "/projects/tibia_damage_calculator"
                  ? "/projects/calculator"
                  : ""
              }
            >
              <AiOutlineCaretLeft /> Previous
            </NavLink>
          )}

          <NavLink to="/projects">Back</NavLink>

          {projectPath.pathname === "/projects/tibia_damage_calculator" ? (
            ""
          ) : (
            <NavLink
              to={
                projectPath.pathname === "projects/foodfreedom"
                  ? "/projects/memory"
                  : projectPath.pathname === "projects/memory"
                  ? "/projects/calculator"
                  : projectPath.pathname === "projects/calculator"
                  ? "projects/tibia_damage_calculator"
                  : ""
              }
            >
              Next <AiOutlineCaretRight />
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default PageOne;

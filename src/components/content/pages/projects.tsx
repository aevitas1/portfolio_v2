import { useState } from "react";
import { AppContext } from "../../../context/AppContext";
import Page from "./Projects/page";
import Pagination from "../Pagination/pagination";
import Card from "../card/Card";
import foodfreedom from "../../../assets/projects/foodfreedom.png";
import calc from "../../../assets/projects/calc.jpg";
import mem from "../../../assets/projects/mem_lm.png";
import quiz from "../../../assets/projects/quiz.png";

import styles from "./pages.module.scss";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = 20;
  return (
    <>
      <div className={styles.page_wrapper}>
        <div className={styles.projects}>
          <Page>
            <Card
              image={foodfreedom}
              projectName="Foodfreedom"
              description="First website bla di bla di lorem ipsum dolor"
              usedBootstrap={true}
              usedTypescript={true}
              usedSass={true}
              usedJavascript={true}
              usedReact={true}
              usedCss={true}
              usedHtml={false}
              codeLink="www.google.nl"
              projectLink="www.google.com"
            />

            <Card
              image={calc}
              projectName="Calculator"
              description="First website bla di bla di lorem ipsum dolor"
              usedBootstrap={false}
              usedTypescript={false}
              usedSass={true}
              usedJavascript={true}
              usedReact={false}
              usedCss={true}
              usedHtml={true}
              codeLink="www.google.nl"
              projectLink="www.google.com"
            />
          </Page>
          <Page>
            <Card
              image={mem}
              projectName="Memory game"
              description="First website bla di bla di lorem ipsum dolor"
              usedBootstrap={false}
              usedTypescript={true}
              usedSass={false}
              usedJavascript={true}
              usedReact={true}
              usedCss={true}
              usedHtml={false}
              codeLink="www.google.nl"
              projectLink="www.google.com"
            />
            <Card
              image={quiz}
              projectName="Quiz"
              description="First website bla di bla di lorem ipsum dolor"
              usedBootstrap={true}
              usedTypescript={false}
              usedSass={false}
              usedJavascript={true}
              usedReact={false}
              usedCss={true}
              usedHtml={true}
              codeLink="www.google.nl"
              projectLink="www.google.com"
            />
            <Card
              image={foodfreedom}
              projectName="Foodfreedom"
              description="First website bla di bla di lorem ipsum dolor"
              usedBootstrap={true}
              usedTypescript={true}
              usedSass={true}
              usedJavascript={true}
              usedReact={true}
              usedCss={true}
              usedHtml={false}
              codeLink="www.google.nl"
              projectLink="www.google.com"
            />
            <Card
              image={foodfreedom}
              projectName="Foodfreedom"
              description="First website bla di bla di lorem ipsum dolor"
              usedBootstrap={true}
              usedTypescript={true}
              usedSass={true}
              usedJavascript={true}
              usedReact={true}
              usedCss={true}
              usedHtml={false}
              codeLink="www.google.nl"
              projectLink="www.google.com"
            />
            <Card
              image={foodfreedom}
              projectName="Foodfreedom"
              description="First website bla di bla di lorem ipsum dolor"
              usedBootstrap={true}
              usedTypescript={true}
              usedSass={true}
              usedJavascript={true}
              usedReact={true}
              usedCss={true}
              usedHtml={false}
              codeLink="www.google.nl"
              projectLink="www.google.com"
            />
            <Card
              image={foodfreedom}
              projectName="Foodfreedom"
              description="First website bla di bla di lorem ipsum dolor"
              usedBootstrap={true}
              usedTypescript={true}
              usedSass={true}
              usedJavascript={true}
              usedReact={true}
              usedCss={true}
              usedHtml={false}
              codeLink="www.google.nl"
              projectLink="www.google.com"
            />
            <Card
              image={foodfreedom}
              projectName="Foodfreedom"
              description="First website bla di bla di lorem ipsum dolor"
              usedBootstrap={true}
              usedTypescript={true}
              usedSass={true}
              usedJavascript={true}
              usedReact={true}
              usedCss={true}
              usedHtml={false}
              codeLink="www.google.nl"
              projectLink="www.google.com"
            />
          </Page>
          <Page>
            <Card
              image={foodfreedom}
              projectName="Foodfreedom"
              description="First website bla di bla di lorem ipsum dolor"
              usedBootstrap={true}
              usedTypescript={true}
              usedSass={true}
              usedJavascript={true}
              usedReact={true}
              usedCss={true}
              usedHtml={false}
              codeLink="www.google.nl"
              projectLink="www.google.com"
            />
          </Page>
        </div>
        <div>
          <Pagination
            currentPage={currentPage}
            lastPage={lastPage}
            maxLength={5}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default Projects;

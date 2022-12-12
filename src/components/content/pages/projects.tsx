import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import Page from "./Projects/page";
import Pagination from "../Pagination/pagination";
import Card from "../card/Card";
import foodfreedom from "../../../assets/projects/foodfreedom.png";
import styles from "./pages.module.scss";

const Projects = () => {
  const { pagination, setPagination } = useContext(AppContext);

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
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default Projects;

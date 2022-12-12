import Card from "../card/Card";
import foodfreedom from "../../../assets/projects/foodfreedom.png";

const Projects = () => {
  return (
    <>
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
    </>
  );
};

export default Projects;

import Card from "../../card/Card";
import calc from "../../../../assets/projects/calc.jpg";

const PageTwo = () => {
  return (
    <>
      <Card
        image={calc}
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

export default PageTwo;

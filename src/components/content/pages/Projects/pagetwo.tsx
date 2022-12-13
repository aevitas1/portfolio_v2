import Card from "../../card/Card";
import calc from "../../../../assets/projects/calc.jpg";

const PageTwo = () => {
  return (
    <>
      <Card
        image={calc}
        projectName="Foodfreedom"
        description="First website bla di bla di lorem ipsum dolor"
        usedHtml={true}
        usedCss={false}
        usedSass={true}
        usedJavascript={true}
        usedBootstrap={false}
        usedTypescript={false}
        usedReact={true}
        codeLink="www.google.nl"
        projectLink="www.google.com"
      />
    </>
  );
};

export default PageTwo;

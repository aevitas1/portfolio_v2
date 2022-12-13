import Card from "../../card/Card";
import mem from "../../../../assets/projects/mem_lm.png";
const PageThree = () => {
  return (
    <>
      <Card
        image={mem}
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

export default PageThree;

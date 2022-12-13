import Card from "../../card/Card";
import quiz from "../../../../assets/projects/quiz.png";

const PageFour = () => {
  return (
    <>
      <Card
        image={quiz}
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
    </>
  );
};

export default PageFour;

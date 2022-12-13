import Card from "../../card/Card";
import quiz from "../../../../assets/projects/quiz.png";

const PageFour = () => {
  return (
    <>
      <Card
        image={quiz}
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

export default PageFour;

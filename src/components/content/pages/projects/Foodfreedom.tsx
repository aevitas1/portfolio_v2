import ProjectPage from "./projectpage/ProjectPage";
import desktopFoodfreedom from "../../../../assets/projects/foodfreedom/foodfreedom_desktop.png";
import tabletFoodfreedom from "../../../../assets/projects/foodfreedom/foodfreedom_tablet.png";
import mobileFoodfreedom from "../../../../assets/projects/foodfreedom/foodfreedom_mobile.png";

const Foodfreedom = () => {
  return (
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
  );
};

export default Foodfreedom;

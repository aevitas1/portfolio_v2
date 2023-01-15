import ProjectPage from "./projectpage/ProjectPage";
import desktopFoodfreedom from "../../../../assets/projects/foodfreedom/foodfreedom_desktop.png";
import tabletFoodfreedom from "../../../../assets/projects/foodfreedom/foodfreedom_tablet.png";
import mobileFoodfreedom from "../../../../assets/projects/foodfreedom/foodfreedom_mobile.png";
import ProjectNavigation from "./projectnavigation/ProjectNavigation";
import styles from "./projectwrapper.module.scss";

const Foodfreedom = () => {
  return (
    <div className={styles.projectwrapper}>
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

      <ProjectNavigation
        next={"/projects/tibia_damage_calculator"}
        previous={""}
        firstProject={true}
        lastProject={false}
      />
    </div>
  );
};

export default Foodfreedom;

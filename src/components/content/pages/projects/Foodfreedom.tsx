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
        description="First website I made. It's made with HTML, CSS and JavaScript. The 'recepten' and 'Chocolade fondant' pages are made with Bootstrap. The only content given to me was a logo and business card, so that's where I got the colors from. Design and all content is by me."
        usedHtml={true}
        usedCss={true}
        usedSass={false}
        usedJavascript={true}
        usedBootstrap={true}
        usedTypescript={false}
        usedPostcss={false}
        usedNextjs={false}
        usedPhp={false}
        usedReact={false}
        usedNextui={false}
        codeLink="https://github.com/aevitas1/aevitas1.github.io"
        projectLink="https://aevitas1.github.io/"
      />

      <ProjectNavigation
        next={"/projects/tibia_damage_calculator"}
        previous={"/projects/portfolio"}
        firstProject={false}
        lastProject={false}
      />
    </div>
  );
};

export default Foodfreedom;

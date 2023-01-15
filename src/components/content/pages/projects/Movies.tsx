import ProjectPage from "./projectpage/ProjectPage";
import desktopMovies from "../../../../assets/projects/movies/movies_desktop.png";
import tabletMovies from "../../../../assets/projects/movies/movies_tablet.png";
import mobileMovies from "../../../../assets/projects/movies/movies_mobile.png";
import ProjectNavigation from "./projectnavigation/ProjectNavigation";
import styles from "./projectwrapper.module.scss";

const Movies = () => {
  return (
    <div className={styles.projectwrapper}>
      <ProjectPage
        desktopImage={desktopMovies}
        tabletImage={tabletMovies}
        mobileImage={mobileMovies}
        projectName="Movie app"
        description="Movie app"
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
        next={"/projects/memory"}
        previous={"/projects/quiz"}
        firstProject={false}
        lastProject={false}
      />
    </div>
  );
};

export default Movies;

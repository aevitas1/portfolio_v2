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
        description="A movie app which pulls data from The Movie Database. This is a work in progress."
        usedHtml={true}
        usedCss={false}
        usedSass={true}
        usedJavascript={false}
        usedBootstrap={false}
        usedTypescript={false}
        usedPostcss={false}
        usedNextjs={false}
        usedPhp={false}
        usedReact={true}
        usedNextui={false}
        codeLink="https://github.com/aevitas1/movies"
        projectLink="https://movie-app-react-tmdb.netlify.app"
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

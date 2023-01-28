import ProjectPage from "./projectpage/ProjectPage";
import desktopMemory from "../../../../assets/projects/memory/memory_desktop.png";
import tabletMemory from "../../../../assets/projects/memory/memory_tablet.png";
import mobileMemory from "../../../../assets/projects/memory/memory_mobile.png";
import ProjectNavigation from "./projectnavigation/ProjectNavigation";
import styles from "./projectwrapper.module.scss";

const Memory = () => {
  return (
    <div className={styles.projectwrapper}>
      <ProjectPage
        desktopImage={desktopMemory}
        tabletImage={tabletMemory}
        mobileImage={mobileMemory}
        projectName="Memory"
        description="A memory game. Can you beat your highscores?"
        usedHtml={true}
        usedCss={true}
        usedSass={false}
        usedJavascript={true}
        usedBootstrap={false}
        usedTypescript={false}
        usedPostcss={false}
        usedNextjs={false}
        usedPhp={false}
        usedReact={false}
        usedNextui={false}
        codeLink="https://github.com/aevitas1/memory_game"
        projectLink="https://stephan-memory-game.netlify.app"
      />

      <ProjectNavigation
        next={"/projects/calculator"}
        previous={"/projects/movies"}
        firstProject={false}
        lastProject={false}
        projectCount="6/7"
      />
    </div>
  );
};

export default Memory;

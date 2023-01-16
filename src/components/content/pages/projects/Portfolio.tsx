import styles from "./projectwrapper.module.scss";
import { DiCodeBadge } from "react-icons/di";
import { SiTypescript, SiReact, SiPostcss } from "react-icons/si";
import ProjectNavigation from "./projectnavigation/ProjectNavigation";

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.top}>
        <div className={styles.toolset}>
          <div className={styles.logo_container}>
            <i>
              <SiReact />
            </i>
            <p className="helper">React</p>
          </div>
          <div className={styles.logo_container}>
            <i>
              <SiPostcss />
            </i>
            <p className="helper">PostCSS</p>
          </div>
          <div className={styles.logo_container}>
            <i>
              <SiTypescript />
            </i>
            <p className="helper">TypeScript</p>
          </div>
        </div>
        <p>
          This portfolio is made with React, originally with Create React app
          but I decided to convert it to{" "}
          <a href="https://vitejs.dev/" rel="norefferer">
            Vite
          </a>{" "}
          and swapped to TypeScript. <br></br>
          <br></br> As this is both developed and designed by me, I initially
          made a design in Figma and made changes along the way.
        </p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.codelink}>
          <a
            href="https://github.com/aevitas1/portfolio_v2"
            rel="noreferrer"
            target="_blank"
          >
            <DiCodeBadge />
          </a>
        </div>
        <ProjectNavigation
          next={"/projects/foodfreedom"}
          previous={""}
          firstProject={true}
          lastProject={false}
        />
      </div>
    </div>
  );
};

export default Portfolio;

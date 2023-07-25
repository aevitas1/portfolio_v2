import styles from "./projectpage.module.scss";
import { useContext } from "react";
import AppContext from "../../../../../data/AppContext";
import { FiExternalLink } from "react-icons/fi";
import { DiCodeBadge } from "react-icons/di";
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5, IoLogoSass } from "react-icons/io";
import { BsBootstrapFill } from "react-icons/bs";
import { SiTypescript, SiReact, SiPostcss, SiPhp } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import ProjectNavigation from "../projectnavigation/ProjectNavigation";

const ProjectPage = ({ item }) => {
  const { toggleScheme } = useContext(AppContext);

  const html = <IoLogoHtml5 />;
  const css = <IoLogoCss3 />;
  const sass = <IoLogoSass />;
  const postcss = <SiPostcss />;
  const bootstrap = <BsBootstrapFill />;
  const javascript = <IoLogoJavascript />;
  const typescript = <SiTypescript />;
  const react = <SiReact />;
  const nextjs = <TbBrandNextjs />;
  const php = <SiPhp />;

  const Stack = {
    html,
    css,
    sass,
    postcss,
    bootstrap,
    javascript,
    typescript,
    react,
    nextjs,
    php,
  };

  const capitalize = (str) => {
    switch (str) {
      case "html":
        return "HTML";
      case "css":
        return "CSS";
      case "sass":
        return "SASS";
      case "postcss":
        return "PostCSS";
      case "bootstrap":
        return "Bootstrap";
      case "javascript":
        return "JavaScript";
      case "typescript":
        return "TypeScript";
      case "react":
        return "React";
      case "nextjs":
        return "Next.js";
      case "php":
        return "PHP";
    }
  };

  return (
    <div
      className={
        toggleScheme ? `${styles.dark} ${styles.projectInnerWrapper}` : styles.projectInnerWrapper
      }
    >
      <div className={styles.top}>
        <div className={styles.header}>
          <div className={styles.device}>
            <div className={styles.tablet}>
              <img
                src={`/projects/${item.id}/${item.id}_tablet.png`}
                alt={`/projects/${item.id}/${item.id}`}
              />
            </div>
          </div>
          <div className={styles.device}>
            <div className={styles.desktop}>
              <img
                src={`/projects/${item.id}/${item.id}_desktop.png`}
                alt={`/projects/${item.id}/${item.id}`}
              />
            </div>
          </div>
          <div className={styles.device}>
            <div className={styles.mobile}>
              <img
                src={`/projects/${item.id}/${item.id}_mobile.png`}
                alt={`/projects/${item.id}/${item.id}`}
              />
            </div>
          </div>
        </div>
        <div className={styles.toolset}>
          {item.stack.map((item, index) => (
            <div key={index} className={styles.logo_container}>
              <i>{Stack[`${item}`]}</i>
              <p className="helper">{capitalize(item)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={`${styles.helper} ${styles.desc}`}>{item.description}</p>
        <div className={styles.links_nav}>
          <div className={styles.links}>
            {item.codeLink && (
              <a href={item.codeLink} rel="noreferrer" target="_blank">
                <DiCodeBadge />
              </a>
            )}
            <a href={item.link} rel="noreferrer" target="_blank">
              <FiExternalLink />
            </a>
          </div>
          <ProjectNavigation item={item} />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

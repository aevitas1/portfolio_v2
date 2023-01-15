import { useContext } from "react";
import { AppContext } from "../../../../../context/AppContext";
import { FiExternalLink } from "react-icons/fi";
import { DiCodeBadge } from "react-icons/di";
import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoSass,
} from "react-icons/io";
import { BsBootstrapFill } from "react-icons/bs";
import { SiTypescript, SiReact } from "react-icons/si";
import styles from "./ProjectPage.module.scss";

type cardProps = {
  desktopImage: string;
  tabletImage: string;
  mobileImage: string;
  projectName: string;
  description: string;
  codeLink: string;
  projectLink: string;
  usedBootstrap: boolean;
  usedCss: boolean;
  usedHtml: boolean;
  usedJavascript: boolean;
  usedSass: boolean;
  usedReact: boolean;
  usedTypescript: boolean;
};
// Todo: reduce file size of project images
const ProjectPage = (props: cardProps) => {
  const { toggleScheme } = useContext(AppContext);
  // Fix for image being loaded too soon, causing the initial load to fail
  // Known bug (https://github.com/facebook/react/issues/20682)
  function addSrc(src: string) {
    return function (img: HTMLImageElement) {
      if (img) {
        img.src = src;
      }
    };
  }

  return (
    <>
      <div
        className={
          toggleScheme
            ? `${styles.dark} ${styles.projectInnerWrapper}`
            : styles.projectInnerWrapper
        }
      >
        <div className={styles.top}>
          <div className={styles.header}>
            <div className={styles.device}>
              <div className={styles.tablet}>
                <img alt={props.projectName} ref={addSrc(props.tabletImage)} />
              </div>
            </div>
            <div className={styles.device}>
              <div className={styles.desktop}>
                <img ref={addSrc(props.desktopImage)} alt={props.projectName} />
              </div>
            </div>
            <div className={styles.device}>
              <div className={styles.mobile}>
                <img ref={addSrc(props.mobileImage)} alt={props.projectName} />
              </div>
            </div>
          </div>
          <div className={styles.toolset}>
            {props.usedHtml && (
              <div className={`${styles.logo_container} ${styles.html}`}>
                <i>
                  <IoLogoHtml5 />
                </i>
                <p className="helper">HTML</p>
              </div>
            )}
            {props.usedCss && (
              <div className={`${styles.logo_container} ${styles.css}`}>
                <i>
                  <IoLogoCss3 />
                </i>
                <p className="helper">CSS</p>
              </div>
            )}
            {props.usedJavascript && (
              <div className={`${styles.logo_container} ${styles.javascript}`}>
                <i>
                  <IoLogoJavascript />
                </i>
                <p className="helper">JavaScript</p>
              </div>
            )}
            {props.usedSass && (
              <div className={`${styles.logo_container} ${styles.sass}`}>
                <i>
                  <IoLogoSass />
                </i>
                <p className="helper">SASS</p>
              </div>
            )}
            {props.usedBootstrap && (
              <div className={`${styles.logo_container} ${styles.bootstrap}`}>
                <i>
                  <BsBootstrapFill />
                </i>
                <p className="helper">Bootstrap</p>
              </div>
            )}
            {props.usedTypescript && (
              <div className={`${styles.logo_container} ${styles.typescript}`}>
                <i>
                  <SiTypescript />
                </i>
                <p className="helper">TypeScript</p>
              </div>
            )}
            {props.usedReact && (
              <div className={`${styles.logo_container} ${styles.react}`}>
                <i>
                  <SiReact />
                </i>
                <p className="helper">React</p>
              </div>
            )}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={`${styles.helper} ${styles.desc}`}>
            {props.description}
          </p>
          <div className={styles.links}>
            <a href={props.codeLink} rel="noreferrer" target="_blank">
              <DiCodeBadge />
            </a>
            <a href={props.projectLink} rel="noreferrer" target="_blank">
              <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;

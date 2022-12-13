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
import styles from "./card.module.scss";

type cardProps = {
  image: string;
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

const Card = (props: cardProps) => {
  return (
    <>
      <div className={styles.scene}>
        <div className={styles.card}>
          <div className={`${styles.card_face} ${styles.card_face_front}`}>
            <figure className={styles.card_image}>
              <img src={props.image} alt={props.projectName} />
            </figure>
          </div>
          <div className={`${styles.card_face} ${styles.card_face_back}`}>
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
                <div
                  className={`${styles.logo_container} ${styles.javascript}`}
                >
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
                <div
                  className={`${styles.logo_container} ${styles.typescript}`}
                >
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
            <h3>{props.projectName}</h3>
            <p className="helper">{props.description}</p>
            <div className={styles.links}>
              <a href={props.codeLink} rel="noreferrer">
                <DiCodeBadge />
              </a>
              <a href={props.projectLink} rel="noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

import bootstrap from "../../../assets/bootstrap-5-1.svg";
import css from "../../../assets/CSS3.svg";
import html from "../../../assets/HTML5.svg";
import javascript from "../../../assets/Javascript.svg";
import sass from "../../../assets/seal-color-aef0354c.png";
import react from "../../../assets/React-icon.svg.png";
import typescript from "../../../assets/ts-logo-128.png";
import { FiExternalLink } from "react-icons/fi";
import { DiCodeBadge } from "react-icons/di";
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
              {props.usedBootstrap ? (
                <img src={bootstrap} alt="bootstrap logo" />
              ) : (
                ""
              )}
              {props.usedCss ? <img src={css} alt="css logo" /> : ""}
              {props.usedHtml ? <img src={html} alt="html logo" /> : ""}
              {props.usedJavascript ? (
                <img src={javascript} alt="javascript logo" />
              ) : (
                ""
              )}
              {props.usedTypescript ? (
                <img src={typescript} alt="typescript logo" />
              ) : (
                ""
              )}
              {props.usedReact ? <img src={react} alt="react logo" /> : ""}
              {props.usedSass ? <img src={sass} alt="sass logo" /> : ""}
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

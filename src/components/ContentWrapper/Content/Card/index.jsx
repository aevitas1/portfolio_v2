import "./index.scss";
import bootstrap from "../../../../assets/bootstrap-5-1.svg";
import css from "../../../../assets/CSS3.svg";
import html from "../../../../assets/HTML5.svg";
import javascript from "../../../../assets/Javascript.svg";
import sass from "../../../../assets/seal-color-aef0354c.png";
import react from "../../../../assets/React-icon.svg.png";
import { FiExternalLink } from "react-icons/fi";
import { DiCodeBadge } from "react-icons/di";

const Card = (props) => {
  return (
    <>
      <div className="scene">
        <div className="card">
          <div className="card_face card_face--front">
            <figure className="card_image">
              <img src={props.image} alt={props.projectName} />
            </figure>
          </div>
          <div className="card_face card_face--back">
            <div className="toolset">
              {props.bootstrap ? (
                <img src={bootstrap} alt="bootstrap logo" />
              ) : (
                ""
              )}
              {props.css ? <img src={css} alt="css logo" /> : ""}
              {props.html ? <img src={html} alt="html logo" /> : ""}
              {props.javascript ? (
                <img src={javascript} alt="javascript logo" />
              ) : (
                ""
              )}
              {props.react ? <img src={react} alt="react logo" /> : ""}
              {props.sass ? <img src={sass} alt="sass logo" /> : ""}
            </div>
            <h2>{props.projectName}</h2>
            <p>{props.description}</p>
            <div className="links">
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

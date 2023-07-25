import { useContext } from "react";
import AppContext from "../../../data/AppContext";
import { NavLink } from "react-router-dom";
import styles from "./button.module.scss";

const Button = (props) => {
  const { toggleScheme } = useContext(AppContext);

  return (
    <button className={toggleScheme ? `${styles.button} ${styles.dark}` : styles.button}>
      {props.newtab ? (
        <NavLink to={props.link} target="_blank">
          {props.text}
        </NavLink>
      ) : (
        <NavLink to={props.link}>{props.text}</NavLink>
      )}
    </button>
  );
};

export default Button;

import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { NavLink } from "react-router-dom";
import styles from "./button.module.scss";

type buttonProps = {
  link: string;
  text: string;
  newtab: boolean;
};

const Button = (props: buttonProps) => {
  const { toggleScheme } = useContext(AppContext);

  return (
    <>
      <div
        className={
          toggleScheme ? `${styles.button} ${styles.dark}` : styles.button
        }
      >
        {props.newtab ? (
          <NavLink to={props.link} target="_blank">
            <div className={styles.topborder}></div>
            {props.text}
            <div className={styles.bottomborder}></div>
          </NavLink>
        ) : (
          <NavLink to={props.link}>
            <div className={styles.topborder}></div>
            {props.text}
            <div className={styles.bottomborder}></div>
          </NavLink>
        )}
      </div>
    </>
  );
};

export default Button;

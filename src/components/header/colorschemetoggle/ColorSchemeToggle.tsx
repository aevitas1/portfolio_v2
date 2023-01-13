import styles from "./colorschemetoggle.module.scss";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { useEffect, useContext } from "react";
import { AppContext } from "../../../context/AppContext";

const ColorSchemeToggle = () => {
  const { toggleScheme, setToggleScheme } = useContext(AppContext);

  useEffect(() => {
    if (window.localStorage.getItem("scheme") === "dark") {
      setToggleScheme(true);
    } else if (window.localStorage.getItem("scheme") === "light") {
      setToggleScheme(false);
    } else {
      window.matchMedia("(prefers-color-scheme: dark)")
        ? setToggleScheme(true)
        : setToggleScheme(false);
    }
  }, []);

  const handleClick = () => {
    toggleScheme ? setToggleScheme(false) : setToggleScheme(true);
    changeStorage();
  };

  if (toggleScheme) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }

  const changeStorage = () => {
    if (localStorage.getItem("scheme") === "light") {
      localStorage.setItem("scheme", "dark");
    } else {
      localStorage.setItem("scheme", "light");
    }
  };

  return (
    <>
      <div
        className={
          toggleScheme
            ? `${styles.toggleIcon} ${styles.dark}`
            : styles.toggleIcon
        }
        onClick={handleClick}
      >
        <div className={styles.toggleIconInner}>
          {toggleScheme ? (
            <FaSun
              className={
                toggleScheme
                  ? `${styles.sun} ${styles.active}`
                  : `${styles.sun}`
              }
            />
          ) : (
            <BsMoonStarsFill
              className={
                toggleScheme
                  ? `${styles.moon}`
                  : `${styles.moon} ${styles.active}`
              }
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ColorSchemeToggle;

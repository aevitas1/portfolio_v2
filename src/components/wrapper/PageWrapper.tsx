import { useContext } from "react";
import styles from "./pagewrapper.module.scss";
import ContentBlock from "../content/contentblock/ContentBlock";
import NavBlock from "../content/navblock/NavBlock";
import { AppContext } from "../../context/AppContext";

const Pagewrapper = () => {
  const { toggleScheme } = useContext(AppContext);
  return (
    <>
      <div
        className={
          toggleScheme
            ? `${styles.pagewrapper} ${styles.dark}`
            : styles.pagewrapper
        }
      >
        <main className={styles.inner_wrapper}>
          <ContentBlock />
          <NavBlock />
        </main>
      </div>
    </>
  );
};

export default Pagewrapper;

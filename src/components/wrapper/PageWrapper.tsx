import styles from "./pagewrapper.module.scss";
import ContentBlock from "../content/contentblock/ContentBlock";
import NavBlock from "../content/navblock/NavBlock";

const Pagewrapper = () => {
  return (
    <>
      <div className={styles.pagewrapper}>
        <div className={styles.inner_wrapper}>
          <ContentBlock />
          <NavBlock />
        </div>
      </div>
    </>
  );
};

export default Pagewrapper;

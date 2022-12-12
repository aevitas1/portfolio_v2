import styles from "./pagewrapper.module.scss";
import ContentBlock from "../content/contentblock/ContentBlock";
import NavBlock from "../content/navblock/NavBlock";
import Icons from "../content/Icons/Icons";

const Pagewrapper = () => {
  return (
    <>
      <div className={styles.pagewrapper}>
        <main className={styles.inner_wrapper}>
          <ContentBlock />
          <NavBlock />
        </main>
      </div>
    </>
  );
};

export default Pagewrapper;

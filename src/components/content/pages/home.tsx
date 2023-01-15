import styles from "./pages.module.scss";
import Button from "../button/Button";

const Home = () => {
  return (
    <>
      <div className={styles.page_wrapper}>
        <div className={styles.home}>
          <p>This is a work in progress.</p>

          <div className={styles.cta_row}>
            <Button link="/projects" text="Projects" newtab={false} />

            <Button link="/contact" text="Contact" newtab={false} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

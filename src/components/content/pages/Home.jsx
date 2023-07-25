import styles from "./pages.module.scss";
import Skills from "../skills/Skills";

const Home = () => {
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.home}>
        <p>
          Hello I am Stephan. <br></br>
          <br></br> I am a self-taught Front-end Developer. <br></br>Eager to
          learn and eventually become a Full-stack Developer.
        </p>
        <Skills />
      </div>
    </div>
  );
};

export default Home;

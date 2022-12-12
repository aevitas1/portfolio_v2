import styles from "./logo.module.scss";

export const Logo = () => {
  return (
    <>
      <div className={styles.logo_wrapper}>
        <div className={styles.logo}>
          <h3>Stephan van der Meijden</h3>
          <h4>Front-end Developer</h4>
        </div>
      </div>
    </>
  );
};

export default Logo;

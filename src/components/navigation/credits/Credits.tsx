import styles from "./credits.module.scss";

const Credits = () => {
  let d = new Date();
  let currentYear = d.getFullYear();
  return (
    <>
      <div className={styles.credits}>
        <p className="helper">&copy; {currentYear}</p>
        <p className="helper">Stephan van der Meijden</p>
      </div>
    </>
  );
};

export default Credits;

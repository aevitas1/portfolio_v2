import styles from "./pages.module.scss";
import Button from "../button/Button";
const Contact = () => {
  return (
    <>
      <div className={styles.page_wrapper}>
        <div className={styles.contact}>
          <p style={{ paddingBottom: "1.5rem" }}>
            A contact form is on the way. Meanwhile:
          </p>
          <Button
            text="Contact me"
            link="mailto: sfhvdmeijden@gmail.com"
            newtab={false}
          />
        </div>
      </div>
    </>
  );
};

export default Contact;

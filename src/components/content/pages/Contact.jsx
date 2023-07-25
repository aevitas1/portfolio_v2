import styles from "./pages.module.scss";
import ContactForm from "../contactform/ContactForm";

const Contact = () => {
  return (
    <>
      <div className={styles.page_wrapper}>
        <div className={styles.contact}>
          <p>Want to hire me or just ask a simple question? </p>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;

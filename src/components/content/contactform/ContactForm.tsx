import { useRef, useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import styles from "./contactform.module.scss";
import emailjs from "@emailjs/browser";
import Button from "../button/Button";

const ContactForm = () => {
  const form: any = useRef();
  const { toggleScheme } = useContext(AppContext);
  const [toast, setToast] = useState(false);
  const [error, setError] = useState(false);
  const hiddenSubmit = document.getElementById("formsubmit");

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        form.current,
        import.meta.env.VITE_EMAIL_USER
      )
      .then(
        (result) => {
          if (result) {
            e.target.reset();
            setToast(true);
          }
        },
        (error) => {
          if (error) {
            setError(true);
          }
        }
      );
  };

  const handleSubmit = () => {
    hiddenSubmit?.click();
  };

  return (
    <div className={styles.form_wrapper}>
      <form
        ref={form}
        onSubmit={sendEmail}
        className={toggleScheme ? `${styles.form} ${styles.dark}` : styles.form}
      >
        <div className={styles.top_row}>
          <div className={styles.name}>
            <label className={styles.form_label}>Name</label>
            <input
              type="text"
              name="user_name"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.email}>
            <label className={styles.form_label}>Email</label>
            <input
              type="email"
              name="user_email"
              className={styles.input}
              required
            />
          </div>
        </div>
        <div className={styles.subject}>
          <label className={styles.form_label}>Subject</label>
          <input
            type="text"
            name="user_subject"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.message}>
          <label className={styles.form_label}>Message</label>
          <textarea
            name="user_message"
            rows={4}
            className={styles.input}
            required
          />
        </div>
        <div
          className={
            error ? `${styles.error} ${styles.error_display}` : styles.error
          }
        >
          Something went wrong. Please try again later.
        </div>
        <div onClick={handleSubmit} className={toast ? styles.btn_fade : ""}>
          <Button link="" text="Submit" newtab={false} />
        </div>
        <input
          type="submit"
          value="Send"
          id={"formsubmit"}
          className={styles.formsubmit}
        />
      </form>
      <div
        className={
          toast ? `${styles.toast} ${styles.toast_display}` : styles.toast
        }
      >
        Thank you for your message. I'll answer you as soon as possible.
      </div>
    </div>
  );
};

export default ContactForm;

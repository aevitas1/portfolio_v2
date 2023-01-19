import styles from "./pages.module.scss";
import Button from "../button/Button";

const About = () => {
  return (
    <>
      <div className={`${styles.page_wrapper} ${styles.about}`}>
        <p>
          At the age of 14 I started working full-time in a kitchen during
          summer. I stuck around for a bit and ended up doing this for 18 years,
          until February 2022. However, IT has always been my bigger interest. I
          have been interested in technology for as long as I can remember. I
          just never knew what to do in this field.
        </p>
        <p>
          During one of the COVID lockdowns my wife and I sat down and she
          suggested web development. I just pulled the trigger and went for it.
          In July, 2021 I started coding. I started a 'Professional Webdesign'
          course with LOI and finished this in 3 months. I continued with a 'CIW
          JavaScript Specialist' course and successfully completed this in 2
          months.
        </p>
        <p>
          This turned out to be a great decision, not only do I now know what I
          want to do I also have truely found a passion. At home, I am learning
          new frameworks, mainly React, and languages (TypeScript). I've also
          been doing a small amount of backend (NodeJS).
        </p>
        <p>What shall we work on next?</p>
        <Button text="Contact me" link="/contact" newtab={false} />
      </div>
    </>
  );
};

export default About;

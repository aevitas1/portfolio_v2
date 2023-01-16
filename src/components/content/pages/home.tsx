import styles from "./pages.module.scss";
import Button from "../button/Button";

const Home = () => {
  let d = new Date();
  let currentMonth = d.getMonth();
  let currentYear = d.getFullYear();
  let currentDay = d.getDate();

  let age = 0;

  const calcAge = () => {
    const birthDay = 10;
    const birthMonth = 8;
    const birthYear = 1990;
    let realCurrentMonth = currentMonth + 1;
    age = currentYear - (birthYear + 1);

    if (realCurrentMonth >= birthMonth && currentDay >= birthDay) {
      age = currentYear - birthYear;
    }
  };

  calcAge();
  return (
    <>
      <div className={styles.page_wrapper}>
        <div className={styles.home}>
          <p>
            Hello I am Stephan ({age}). <br></br>
            <br></br> I am a self-taught Front-end Developer. <br></br>Eager to
            learn and eventually become a Full-stack Developer.
          </p>
          <div className={styles.cta_row}>
            <Button link="/projects" text="Projects" newtab={false} />
            <Button link="/about" text="About me" newtab={false} />
            <Button link="/contact" text="Contact" newtab={false} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

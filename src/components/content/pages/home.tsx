import styles from "./pages.module.scss";
import Button from "../button/Button";
import Skills from "../skills/Skills";

const Home = () => {
  let d: any = new Date();
  let currentMonth: number = d.getMonth();
  let currentYear: number = d.getFullYear();
  let currentDay: number = d.getDate();

  let age: number = 0;

  const calcAge = () => {
    const birthDay: number = 10;
    const birthMonth: number = 8;
    const birthYear: number = 1990;
    let realCurrentMonth: number = currentMonth + 1;
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
          <Skills />
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

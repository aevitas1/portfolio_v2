import styles from "./skills.module.scss";
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5, IoLogoSass } from "react-icons/io";
import { BsBootstrapFill } from "react-icons/bs";
import { SiTypescript, SiReact, SiPostcss, SiPhp, SiBulma } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGithubSquare } from "react-icons/fa";

const Skills = () => {
  const toolset = [
    { name: <IoLogoHtml5 />, description: "HTML" },
    { name: <IoLogoCss3 />, description: "CSS" },
    {
      name: <SiPostcss />,
      description: "Post CSS",
      id: 5,
    },
    {
      name: <IoLogoJavascript />,
      description: "JavaScript",
    },
    { name: <IoLogoSass />, description: "SASS" },
    {
      name: <BsBootstrapFill />,
      description: "Bootstrap",
    },
    {
      name: <SiTypescript />,
      description: "TypeScript",
    },
    { name: <SiReact />, description: "React" },
    {
      name: <TbBrandNextjs />,
      description: "NextJS",
      id: 9,
    },
    { name: <SiPhp />, description: "PHP" },
    { name: <SiBulma />, description: "Bulma" },
    {
      name: <FaGithubSquare />,
      description: "Github",
    },
  ];

  return (
    <div className={styles.skills}>
      <h3>Tools & Skills</h3>
      <div className={styles.skill_container}>
        {toolset.map((item, index) => (
          <div className={styles.item_container} key={index}>
            <i>{item.name}</i>
            <p className="helper">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

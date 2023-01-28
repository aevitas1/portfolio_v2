import styles from "./skills.module.scss";
import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoSass,
} from "react-icons/io";
import { BsBootstrapFill } from "react-icons/bs";
import {
  SiTypescript,
  SiReact,
  SiPostcss,
  SiPhp,
  SiBulma,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGithubSquare } from "react-icons/fa";

type ToolsetType = {
  name: JSX.Element;
  id: number;
  description: string;
};

const Skills = () => {
  const toolset: ToolsetType[] = [
    { name: <IoLogoHtml5 />, description: "HTML", id: 1 },
    { name: <IoLogoCss3 />, description: "CSS", id: 2 },
    {
      name: <SiPostcss />,
      description: "Post CSS",
      id: 5,
    },
    {
      name: <IoLogoJavascript />,
      description: "JavaScript",
      id: 3,
    },
    { name: <IoLogoSass />, description: "SASS", id: 4 },
    {
      name: <BsBootstrapFill />,
      description: "Bootstrap",
      id: 6,
    },
    {
      name: <SiTypescript />,
      description: "TypeScript",
      id: 7,
    },
    { name: <SiReact />, description: "React", id: 8 },
    {
      name: <TbBrandNextjs />,
      description: "NextJS",
      id: 9,
    },
    { name: <SiPhp />, description: "PHP", id: 10 },
    { name: <SiBulma />, description: "Bulma", id: 11 },
    {
      name: <FaGithubSquare />,
      description: "Github",
      id: 12,
    },
  ];

  return (
    <>
      <div className={styles.skills}>
        <h3>Tools & Skills</h3>
        <div className={styles.skill_container}>
          {toolset.map((item: ToolsetType) => (
            <>
              <div className={styles.item_container} key={item.id}>
                <i>{item.name}</i>
                <p className="helper">{item.description}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;

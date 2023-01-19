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
  category: string;
};

const Skills = () => {
  const toolset: ToolsetType[] = [
    { name: <IoLogoHtml5 />, description: "HTML", id: 1, category: "frontend" },
    { name: <IoLogoCss3 />, description: "CSS", id: 2, category: "frontend" },
    {
      name: <SiPostcss />,
      description: "Post CSS",
      id: 5,
      category: "frontend",
    },
    {
      name: <IoLogoJavascript />,
      description: "JavaScript",
      id: 3,
      category: "frontend",
    },
    { name: <IoLogoSass />, description: "SASS", id: 4, category: "frontend" },
    {
      name: <BsBootstrapFill />,
      description: "Bootstrap",
      id: 6,
      category: "experimental",
    },
    {
      name: <SiTypescript />,
      description: "TypeScript",
      id: 7,
      category: "frontend",
    },
    { name: <SiReact />, description: "React", id: 8, category: "frontend" },
    {
      name: <TbBrandNextjs />,
      description: "NextJS",
      id: 9,
      category: "backend",
    },
    { name: <SiPhp />, description: "PHP", id: 10, category: "backend" },
    { name: <SiBulma />, description: "Bulma", id: 11, category: "frontend" },
    {
      name: <FaGithubSquare />,
      description: "Github",
      id: 12,
      category: "tools",
    },
  ];

  return (
    <>
      <div className={styles.skills}>
        <h3>Toolset:</h3>
        <div className={styles.skill_container}>
          <div className={styles.skill_category}>
            <h6>Front-end</h6>
            <div className={styles.item_container}>
              {toolset.map((item: ToolsetType) => (
                <>
                  {item.category === "frontend" && (
                    <div className={styles.item} key={item.id}>
                      <i>{item.name}</i>
                      <p className="helper">{item.description}</p>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>

          <div className={styles.skill_category}>
            <h6>Back-end</h6>
            <div className={styles.item_container}>
              {toolset.map((item: ToolsetType) => (
                <>
                  {item.category === "backend" && (
                    <div
                      className={
                        item.description === "PHP"
                          ? `${styles.item} ${styles.php}`
                          : styles.item
                      }
                      key={item.id}
                    >
                      <i>{item.name}</i>
                      <p className="helper">{item.description}</p>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>

          <div className={styles.skill_category}>
            <h6>Tools</h6>
            <div className={styles.item_container}>
              {toolset.map((item: ToolsetType) => (
                <>
                  {item.category === "tools" && (
                    <div className={styles.item} key={item.id}>
                      <i>{item.name}</i>
                      <p className="helper">{item.description}</p>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

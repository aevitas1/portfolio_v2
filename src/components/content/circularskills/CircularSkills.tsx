import styles from "./circularskills.module.scss";
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
import image from "../../../assets/me.jpg";

type ToolsetType = {
  name: JSX.Element;
  id: number;
};

const CircularSkills = () => {
  const toolset: ToolsetType[] = [
    { name: <IoLogoHtml5 />, id: 1 },
    { name: <IoLogoCss3 />, id: 2 },
    { name: <SiPostcss />, id: 5 },
    { name: <IoLogoJavascript />, id: 3 },
    { name: <IoLogoSass />, id: 4 },
    { name: <BsBootstrapFill />, id: 6 },
    { name: <SiTypescript />, id: 7 },
    { name: <SiReact />, id: 8 },
    { name: <TbBrandNextjs />, id: 9 },
    { name: <SiPhp />, id: 10 },
    { name: <SiBulma />, id: 11 },
    { name: <FaGithubSquare />, id: 12 },
  ];

  return (
    <>
      <div className={styles.circular}>
        <div className={styles.skills}>
          {toolset.map((item: ToolsetType) => (
            <div className={styles.item} key={item.id}>
              <div className={styles.icon}>
                <i>{item.name}</i>
              </div>
            </div>
          ))}
        </div>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
    </>
  );
};

export default CircularSkills;

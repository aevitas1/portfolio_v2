import styles from "./pageheader.module.scss";
import { useLocation } from "react-router-dom";

const Pageheader = () => {
  const projectPath = useLocation();
  return (
    <>
      <h1 className={styles.header}>
        {projectPath.pathname === "/" && "Welcome"}
        {projectPath.pathname === "/about" && "About me"}
        {projectPath.pathname === "/projects" && "Projects"}
        {projectPath.pathname === "/projects/foodfreedom" && "Foodfreedom"}
        {projectPath.pathname === "/projects/memory" && "Memory game"}
        {projectPath.pathname === "/projects/calculator" && "Calculator"}
        {projectPath.pathname === "/projects/tibia_damage_calculator" &&
          "Tibia damage calculator"}
        {projectPath.pathname === "/contact" && "Contact"}
      </h1>
    </>
  );
};

export default Pageheader;

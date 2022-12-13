import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Projects from "../pages/projects";
import Contact from "../pages/contact";
import Icons from "../Icons/Icons";
import Logo from "../logo/Logo";
import MobileMenu from "../mobilemenu/MobileMenu";
import styles from "./contentblock.module.scss";

const ContentBlock = () => {
  const projectPath = useLocation();
  return (
    <>
      <div className={styles.content_wrapper}>
        <div className={styles.top_bar}>
          <Logo />
          <Icons />
          <MobileMenu />
        </div>
        <div className={styles.content}>
          <h1 className={styles.header}>
            {projectPath.pathname === "/" && "Welcome"}
            {projectPath.pathname === "/about" && "About me"}
            {projectPath.pathname === "/projects" && "Projects"}
            {projectPath.pathname === "/contact" && "Contact"}
          </h1>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route index path="/about" element={<About />} />
            <Route index path="/projects" element={<Projects />} />
            <Route index path="/contact" element={<Contact />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default ContentBlock;

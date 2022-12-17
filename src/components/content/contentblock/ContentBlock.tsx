import { Route, Routes, useLocation } from "react-router-dom";
import { useContext } from "react";
import Home from "../pages/home";
import About from "../pages/about";
import Projects from "../pages/projects";
import Contact from "../pages/contact";
import styles from "./contentblock.module.scss";
import { AppContext } from "../../../context/AppContext";
import Pageheader from "../pageheader/Pageheader";
import Topbar from "../topbar/Topbar";

const ContentBlock = () => {
  const projectPath = useLocation();
  const { openMobile } = useContext(AppContext);

  return (
    <>
      <div className={styles.content_wrapper}>
        <Topbar />
        <div
          className={
            // Styles for path with pagination && mobile menu open
            projectPath.pathname === "/projects" && openMobile
              ? `${styles.content} ${styles.active} ${styles.pagination}`
              : // Styles for path with pagination
              projectPath.pathname === "/projects"
              ? `${styles.content} ${styles.pagination}`
              : // Styles with mobile menu open
              openMobile
              ? `${styles.content} ${styles.active}`
              : // Styles with mobile menu closed
                `${styles.content}`
          }
        >
          <Pageheader />
          <div className={styles.content_inner}>
            <Routes>
              <Route path="*" element={<Home />} />
              <Route index path="/about" element={<About />} />
              <Route index path="/projects" element={<Projects />} />
              <Route index path="/contact" element={<Contact />} />
              <Route path="/*" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentBlock;

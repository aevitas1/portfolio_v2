import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import Home from "../pages/home";
import About from "../pages/about";
import Projects from "../pages/projects";
import Contact from "../pages/contact";
import styles from "./contentblock.module.scss";
import { AppContext } from "../../../context/AppContext";
import Pageheader from "../pageheader/Pageheader";
import Topbar from "../../header/topbar/Topbar";
import ProjectPageWrapper from "../pages/projects/ProjectPageWrapper";

const ContentBlock = () => {
  const { toggleScheme } = useContext(AppContext);

  return (
    <>
      <div
        className={
          toggleScheme
            ? `${styles.content_wrapper} ${styles.dark}`
            : styles.content_wrapper
        }
      >
        <Topbar />
        <div className={styles.content}>
          <Pageheader />
          <div className={styles.content_inner}>
            <Routes>
              <Route path="*" element={<Home />} />
              <Route index path="/about" element={<About />} />
              {/* Projects */}
              <Route index path="/projects" element={<Projects />} />
              <Route
                index
                path="/projects/foodfreedom"
                element={<ProjectPageWrapper />}
              />
              <Route
                index
                path="/projects/memory"
                element={<ProjectPageWrapper />}
              />
              <Route
                index
                path="/projects/calculator"
                element={<ProjectPageWrapper />}
              />
              <Route
                index
                path="/projects/tibia_damage_calculator"
                element={<ProjectPageWrapper />}
              />
              {/* End of projects */}
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

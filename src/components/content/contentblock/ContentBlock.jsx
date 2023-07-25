import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import styles from "./contentblock.module.scss";
import AppContext from "../../../data/AppContext";
import Pageheader from "../pageheader/Pageheader";
import Topbar from "../../header/topbar/Topbar";
import ProjectData from "../../../data/ProjectData";
import ProjectPage from "../pages/projects/projectpage/ProjectPage";

const ContentBlock = () => {
  const { openMobile, toggleScheme } = useContext(AppContext);

  return (
    <>
      <div
        className={
          toggleScheme ? `${styles.content_wrapper} ${styles.dark}` : styles.content_wrapper
        }
      >
        <Topbar />
        <div className={openMobile ? `${styles.active} ${styles.content}` : styles.content}>
          <Pageheader />
          <div className={styles.content_inner}>
            <Routes>
              <Route path="*" element={<Home />} />
              <Route index path="/about" element={<About />} />
              {/* Projects */}
              <Route index path="/projects" element={<Projects />} />
              {ProjectData.map((item, index) => (
                <Route
                  index
                  key={index}
                  path={`projects/${item.uri}`}
                  element={<ProjectPage item={item} />}
                />
              ))}
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

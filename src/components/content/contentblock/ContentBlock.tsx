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

import Foodfreedom from "../pages/projects/Foodfreedom";
import Quiz from "../pages/projects/Quiz";
import Memory from "../pages/projects/Memory";
import TibiaDamageCalc from "../pages/projects/TibiaDamageCalc";
import Calculator from "../pages/projects/Calculator";
import Movies from "../pages/projects/Movies";

const ContentBlock = () => {
  const { openMobile, toggleScheme } = useContext(AppContext);

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
        <div
          className={
            openMobile ? `${styles.active} ${styles.content}` : styles.content
          }
        >
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
                element={<Foodfreedom />}
              />
              <Route
                index
                path="/projects/tibia_damage_calculator"
                element={<TibiaDamageCalc />}
              />
              <Route index path="/projects/quiz" element={<Quiz />} />
              <Route index path="/projects/movies" element={<Movies />} />
              <Route
                index
                path="/projects/calculator"
                element={<Calculator />}
              />
              <Route index path="/projects/memory" element={<Memory />} />
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

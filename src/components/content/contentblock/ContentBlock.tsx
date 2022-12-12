import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Projects from "../pages/projects";
import Contact from "../pages/contact";
import styles from "./contentblock.module.scss";

const ContentBlock = () => {
  return (
    <>
      <div className={styles.content}>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route index path="/about" element={<About />} />
          <Route index path="/projects" element={<Projects />} />
          <Route index path="/contact" element={<Contact />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default ContentBlock;

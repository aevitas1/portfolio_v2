import { Route, Routes, useLocation } from "react-router-dom";
import { useContext } from "react";
import Home from "../pages/home";
import About from "../pages/about";
import Projects from "../pages/projects";
import Contact from "../pages/contact";
import Icons from "../Icons/Icons";
import Logo from "../logo/Logo";
import MobileMenu from "../mobilemenu/MobileMenu";
import styles from "./contentblock.module.scss";
import { AppContext } from "../../../context/AppContext";
import Pagination from "../Pagination/pagination";

const ContentBlock = () => {
  const projectPath = useLocation();
  const { openMobile, currentPage, setCurrentPage } = useContext(AppContext);
  const lastPage = 4;

  return (
    <>
      <div className={styles.content_wrapper}>
        <div className={styles.top_bar}>
          <Logo />
          <Icons />
          <MobileMenu />
        </div>
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
          <h1 className={styles.header}>
            {projectPath.pathname === "/" && "Welcome"}
            {projectPath.pathname === "/about" && "About me"}
            {projectPath.pathname === "/projects" && "Projects"}
            {projectPath.pathname === "/contact" && "Contact"}
          </h1>
          <div className={styles.content_inner}>
            <Routes>
              <Route path="*" element={<Home />} />
              <Route index path="/about" element={<About />} />
              <Route index path="/projects" element={<Projects />} />
              <Route index path="/contact" element={<Contact />} />
              <Route path="/*" element={<Home />} />
            </Routes>
          </div>
          {projectPath.pathname === "/projects" && (
            <Pagination
              currentPage={currentPage}
              lastPage={lastPage}
              maxLength={4}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ContentBlock;

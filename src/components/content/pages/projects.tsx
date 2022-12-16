import { useState } from "react";
import PageOne from "./Projects/pageone";
import PageTwo from "./Projects/pagetwo";
import PageThree from "./Projects/pagethree";
import PageFour from "./Projects/pagefour";
import styles from "./pages.module.scss";
import Pagination from "../Pagination/pagination";

const Projects = () => {
  const lastPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <div className={`${styles.page_wrapper}`}>
        <div className={styles.project_container}>
          {currentPage === 1 && (
            <>
              <PageOne />
            </>
          )}
          {currentPage === 2 && (
            <>
              <PageTwo />
            </>
          )}
          {currentPage === 3 && (
            <>
              <PageThree />
            </>
          )}
          {currentPage === 4 && (
            <>
              <PageFour />
            </>
          )}
        </div>
        <Pagination
          currentPage={currentPage}
          lastPage={lastPage}
          maxLength={4}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default Projects;

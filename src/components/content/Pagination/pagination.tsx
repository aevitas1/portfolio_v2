import PageLink from "./pageLink";
import styles from "./pagination.module.scss";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { getPaginationItems } from "./getPaginationItem";

export type Props = {
  currentPage: number;
  lastPage: number;
  maxLength: number;
  setCurrentPage: (page: number) => void;
};

export default function Pagination({
  currentPage,
  lastPage,
  maxLength,
  setCurrentPage,
}: Props) {
  const pageNums = getPaginationItems(currentPage, lastPage, maxLength);
  // Enable href + baseURL if switching to different pages via URL
  // const baseURL = "/projects";
  console.log(currentPage);
  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <PageLink
        disabled={currentPage === 1}
        // href={`${baseURL}/${currentPage - 1}`}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <AiOutlineLeft />
      </PageLink>
      {pageNums.map((pageNum, idx) => (
        <PageLink
          key={idx}
          // href={`${baseURL}/${pageNum}`}
          active={currentPage === pageNum}
          disabled={isNaN(pageNum)}
          onClick={() => setCurrentPage(pageNum)}
        >
          {!isNaN(pageNum) ? pageNum : "..."}
        </PageLink>
      ))}
      <PageLink
        // href={`${baseURL}/${currentPage + 1}`}
        disabled={currentPage === lastPage}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <AiOutlineRight />
      </PageLink>
    </nav>
  );
}

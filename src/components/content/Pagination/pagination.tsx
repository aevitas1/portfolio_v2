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
}: Props) {
  const pageNums = getPaginationItems(currentPage, lastPage, maxLength);
  const baseURL = "/projects";

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <PageLink
        disabled={currentPage === 1}
        href={`${baseURL}/${currentPage - 1}`}
        onClick={() => currentPage - 1}
      >
        Previous
      </PageLink>
      {pageNums.map((pageNum, idx) => (
        <PageLink
          key={idx}
          href={`${baseURL}/${pageNum}`}
          active={currentPage === pageNum}
          disabled={isNaN(pageNum)}
          onClick={() => pageNum}
        >
          {!isNaN(pageNum) ? pageNum : "..."}
        </PageLink>
      ))}
      <PageLink
        href={`${baseURL}/${currentPage + 1}`}
        disabled={currentPage === lastPage}
        onClick={() => currentPage + 1}
      >
        Next
      </PageLink>
    </nav>
  );
}

// export default function Pagination({
//   currentPage,
//   lastPage,
//   maxLength,
//   setCurrentPage,
// }: Props) {
//   const pageNums = getPaginationItems(currentPage, lastPage, maxLength);

//   return (
//     <nav className={styles.pagination} aria-label="Pagination">
//       <PageLink
//         disabled={currentPage === 1}
//         onClick={() => setCurrentPage(currentPage - 1)}
//       >
//         Previous
//       </PageLink>
//       {pageNums.map((pageNum, idx) => (
//         <PageLink
//           key={idx}
//           active={currentPage === pageNum}
//           disabled={isNaN(pageNum)}
//           onClick={() => setCurrentPage(pageNum)}
//         >
//           {!isNaN(pageNum) ? pageNum : "..."}
//         </PageLink>
//       ))}
//       <PageLink
//         disabled={currentPage === lastPage}
//         onClick={() => setCurrentPage(currentPage + 1)}
//       >
//         Next
//       </PageLink>
//     </nav>
//   );
// }

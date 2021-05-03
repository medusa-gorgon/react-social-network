import styles from './Pagination.module.css';
import cn from 'classnames';
import { useState } from 'react';

const Pagination = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.pagination}>
      {portionNumber > 1 && (
        <button
          className={`${styles.arrow} ${styles.arrow__left}`}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          &#10148;
        </button>
      )}

      {pages
        .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => {
          return (
            <a
              className={cn(
                {
                  [styles.selectedPage]: currentPage === p,
                },
                styles.pageNumber
              )}
              key={p}
              onClick={() => {
                onPageChanged(p);
              }}
              href='#'
              className={currentPage === p ? `${styles.page} ${styles.selectedPage}` : styles.page}
            >
              {p}
            </a>
          );
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
          className={styles.arrow}
        >
          &#10148;
        </button>
      )}
    </div>
  );
};
export default Pagination;

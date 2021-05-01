import s from './Pagination.module.css';

const Pagination = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.pagination}>
      {pages.map((p) => {
        return (
          <a
            onClick={() => {
              props.onPageChanged(p);
            }}
            href='#vova'
            className={props.currentPage === p ? `${s.page} ${s.selectedPage}` : s.page}
          >
            {p}
          </a>
        );
      })}
    </div>
  );
};
export default Pagination;

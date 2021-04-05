import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={s.users}>
      <div className={s.pagination}>
        {/* <a href='#' className={s.page}>
            &larr;
          </a> */}
        {pages.map((p) => {
          return (
            <a
              onClick={() => {
                {
                  props.onPageChanged(p);
                }
              }}
              href='#'
              className={props.currentPage === p ? `${s.page} ${s.selectedPage}` : s.page}
            >
              {p}
            </a>
          );
        })}
        {/* <a href='#' className={s.page}>
            &rarr;
          </a> */}
      </div>
      <div className={s.users__content}>
        {props.users.map((u) => {
          return (
            <div className={s.user} key={u.id}>
              <div className={s.profile}>
                <NavLink to={'/profile/' + u.id}>
                  <div
                    className={s.profile__pic}
                    style={{ backgroundImage: `url(${u.photos.small != null ? u.photos.small : userPhoto})` }}
                  ></div>
                </NavLink>
                <div className={s.profile__button}>
                  <div className={s.button__block}>
                    {u.followed ? (
                      <button
                        className={s.button}
                        onClick={() => {
                          props.unfollow(u.id);
                        }}
                      >
                        Unfollow
                      </button>
                    ) : (
                      <button
                        className={s.button}
                        onClick={() => {
                          props.follow(u.id);
                        }}
                      >
                        Follow
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className={s.desc}>
                <div className={s.desc__block}>
                  <NavLink to='/profile'>
                    <div className={s.name}>{u.name}</div>
                  </NavLink>
                  <div className={s.status}>{u.status}</div>
                </div>
                <div className={s.location}>
                  <div>{'u.location.country'},</div>
                  <div>{'u.location.city'}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;

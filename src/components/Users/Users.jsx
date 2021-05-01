import s from './Users.module.css';
import Pagination from '../common/Pagination/Pagination';
import User from './User';

const Users = (props) => {
  return (
    <div className={s.users}>
      <Pagination
        currentPage={props.currentPage}
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        onPageChanged={props.onPageChanged}
      />
      <div className={s.users__content}>
        {props.users.map((u) => (
          <User
            user={u}
            followingInProgress={props.followingInProgress}
            follow={props.follow}
            unfollow={props.unfollow}
            key={u.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;

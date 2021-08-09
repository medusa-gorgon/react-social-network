import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import Button from '../common/Button';

const User = ({ user, ...props }) => {
  return (
    <div className={s.user}>
      <div className={s.profile}>
        <NavLink to={'/profile/' + user.id}>
          <div
            className={s.profile__pic}
            style={{ backgroundImage: `url(${user.photos.small != null ? user.photos.small : userPhoto})` }}
          ></div>
        </NavLink>
        <div className={s.profile__button}>
          <div className={s.button__block}>
            {user.followed ? (
              <div
                disabled={props.followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  props.unfollow(user.id);
                }}
              >
                <Button buttonText={'Unfollow'} type={'submit'} />
              </div>
            ) : (
              //
              <div
                disabled={props.followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  props.follow(user.id);
                }}
              >
                <Button buttonText={'Follow'} type={'submit'} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={s.desc}>
        <div className={s.desc__block}>
          <NavLink to={'/profile/' + user.id}>
            <div className={s.name}>{user.name}</div>
          </NavLink>
          <div className={s.status}>{user.status}</div>
        </div>
      </div>
    </div>
  );
};

export default User;

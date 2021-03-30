import * as axios from 'axios';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';

const Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
        props.setUsers(response.data.items);
      });
    }
  };

  return (
    <div className={s.users}>
      <button onClick={getUsers} className={s.getUsers}>
        Get users
      </button>
      {props.users.map((u) => {
        return (
          <div className={s.user} key={u.id}>
            <div className={s.profile}>
              <div
                className={s.profile__pic}
                style={{ backgroundImage: `url(${u.photos.small != null ? u.photos.small : userPhoto})` }}
              ></div>
              <div className={s.profile__button}>
                <div>
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
                <div className={s.name}>{u.name}</div>
                <div className={s.status}>{u.bio}</div>
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
  );
};
export default Users;

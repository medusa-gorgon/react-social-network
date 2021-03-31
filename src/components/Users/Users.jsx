import * as axios from 'axios';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';
import { Component } from 'react';

class Users extends Component {
  constructor(props) {
    super(props);
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
      this.props.setUsers(response.data.items);
    });
  }
  // getUsers = () => {
  //   if (this.props.users.length === 0) {
  //     axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
  //       this.props.setUsers(response.data.items);
  //     });
  //   }
  // };
  render() {
    return (
      <div className={s.users}>
        {/* <button onClick={this.getUsers} className={s.getUsers}>
          Get users
        </button> */}
        {this.props.users.map((u) => {
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
                          this.props.unfollow(u.id);
                        }}
                      >
                        Unfollow
                      </button>
                    ) : (
                      <button
                        className={s.button}
                        onClick={() => {
                          this.props.follow(u.id);
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
    );
  }
}
export default Users;

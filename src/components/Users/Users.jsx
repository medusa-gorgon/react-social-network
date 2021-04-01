import * as axios from 'axios';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';
import { Component } from 'react';

class Users extends Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div className={s.users}>
        <div className={s.pagination}>
          {pages.map((p) => {
            return (
              <a
                onClick={() => {
                  {
                    this.onPageChanged(p);
                  }
                }}
                href='#'
                className={this.props.currentPage === p ? `${s.page} ${s.selectedPage}` : s.page}
              >
                {p}
              </a>
            );
          })}
        </div>
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

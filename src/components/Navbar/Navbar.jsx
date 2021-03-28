import { NavLink } from 'react-router-dom';
import FriendItem from './FriendItem';
import s from './Navbar.module.css';

const Navbar = (props) => {
  // let friendsElements = props.state.dialogsData.map((friend) => (
  //   <FriendItem name={friend.name} id={friend.id} pic={friend.pic} />
  // ));

  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={s.link} activeClassName={s.activeLink} to='/profile'>
            Profile
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} activeClassName={s.activeLink} to='/messages'>
            Messages
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} activeClassName={s.activeLink} to='/news'>
            News
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} activeClassName={s.activeLink} to='/music'>
            Music
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} activeClassName={s.activeLink} to='/settings'>
            Settings
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} activeClassName={s.activeLink} to='/users'>
            Users
          </NavLink>
        </li>
      </ul>
      {/* <div className={s.link__block}>
        <NavLink className={s.friends__link} to='/friends'>
          Friends
        </NavLink>
      </div>
      <div className={s.friends}>{friendsElements}</div> */}
    </nav>
  );
};
export default Navbar;

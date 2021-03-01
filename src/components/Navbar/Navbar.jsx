import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={s.link} activeClassName={s.activeLink} to='/profile'>
            Profile
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} activeClassName={s.activeLink} to='/dialogs'>
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
      </ul>
    </nav>
  );
};
export default Navbar;

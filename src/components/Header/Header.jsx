import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.header__logo}>
          <div className={s.logo}>
            <a className={s.logo__link} href='#'>
              <img className={s.logo__pic} src='https://cryptologos.cc/logos/maker-mkr-logo.png' alt='logo' />
            </a>
          </div>
        </div>
        <div className={s.login__block}>
          {props.isAuth ? (
            <div>
              {props.login}
              <span className={s.logout__span}>
                <button className={s.logInOut} onClick={props.logout} type='button'>
                  Log out
                </button>
              </span>
            </div>
          ) : (
            <button className={s.logInOut} type='button'>
              <NavLink className={s.login__link} to={'/login'}>
                Log in
              </NavLink>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;

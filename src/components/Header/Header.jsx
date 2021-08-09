import { NavLink } from 'react-router-dom';
import Button from '../common/Button';
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
            <div className={s.login__block}>
              <div className={s.login__name}>{props.login}</div>
              <span className={s.logout__span} onClick={props.logout}>
                <Button buttonText={'Log out'} type={'button'} />
              </span>
            </div>
          ) : (
            <NavLink className={s.login__link} to={'/login'}>
              <Button buttonText={'Log in'} type={'button'} />
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;

import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__logo}>
        <div className={s.logo}>
          <a className={s.logo__link} href='#'>
            <img className={s.logo__pic} src='https://cryptologos.cc/logos/maker-mkr-logo.png' alt='logo' />
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;

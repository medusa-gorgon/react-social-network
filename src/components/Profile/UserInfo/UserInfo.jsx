import s from './UserInfo.module.css';

const UserInfo = () => {
  return (
    <div className={s.info}>
      <div className={s.avatar}>
        <img
          className={s.avatar__img}
          src='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
          alt='avatar'
        />
      </div>
      <div className={s.desc}>
        <div className={s.name}>
          <div className={s.name__first}>Maria</div>
          <div className={s.name__second}>Shevchuk</div>
        </div>
        <ul className={s.list}>
          <li className={s.item}>
            <div>Date of birth: January, 16</div>
          </li>
          <li className={s.item}>
            <div>City: Minsk</div>
          </li>
          <li className={s.item}>
            <div>Education: College</div>
          </li>
          <li className={s.item}>
            <div>Web-site: Portfolio</div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default UserInfo;

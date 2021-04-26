import Preloader from '../../common/Preloader';
import s from './UserInfo.module.css';
import userPhoto from '../../../assets/images/user.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const UserInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  let addContacts = () => {
    let arr = [];
    for (let [key, value] of Object.entries(props.profile.contacts)) {
      if (value !== null && value !== '') {
        arr.push(
          <li className={s.contact}>
            <div className={s.contact_key}>{`${key}: `}</div>
            <a href={`https://${value}`} className={s.contact__value}>{` ${value}`}</a>
          </li>
        );
      }
    }
    if (arr.length !== 0) {
      arr.unshift(<div>Contacts:</div>);
    }
    return arr;
  };
  return (
    <div className={s.info}>
      <div className={s.avatar}>
        <div
          className={s.avatar__img}
          alt='avatar'
          style={{
            backgroundImage: `url(${
              props.profile != null && props.profile.photos.large != null ? props.profile.photos.large : userPhoto
            })`,
          }}
        ></div>
      </div>
      <div className={s.desc}>
        <div className={s.name__block}>
          <div className={s.name}>{props.profile.fullName}</div>
        </div>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        <ul className={s.list}>
          <li className={s.item}>
            {
              (props.profile.lookingForAJob = true && props.profile.lookingForAJobDescription != null && (
                <div>Job Description: {props.profile.lookingForAJobDescription}</div>
              ))
            }
          </li>
          <li className={s.item}>{props.profile.aboutMe != null && <div>About me: "{props.profile.aboutMe}"</div>}</li>
          <li className={s.item}>
            <ul className={s.contacts__list}>{addContacts()}</ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default UserInfo;

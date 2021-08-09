import Preloader from '../../common/Preloader';
import s from './UserInfo.module.css';
import userPhoto from '../../../assets/images/user.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';
import { useState } from 'react';
import Button from '../../common/Button';

const UserInfo = (props) => {
  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false);
    });
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
        {props.isOwner && (
          <div className={s.input__block}>
            <label for='inputSelect' className={s.selectPhoto}>
              <input className={s.inputSelect} type={'file'} onChange={onMainPhotoSelected} id='inputSelect' />
              Select new picture
            </label>
          </div>
        )}
      </div>
      <div className={s.desc}>
        <div className={s.profile__description}>
          {editMode ? (
            <ProfileDataForm
              onSubmit={onSubmit}
              // initialValues={props.profile}
              profile={props.profile}
              status={props.status}
              updateStatus={props.updateStatus}
            />
          ) : (
            <ProfileData
              status={props.status}
              updateStatus={props.updateStatus}
              profile={props.profile}
              isOwner={props.isOwner}
              goToEditMode={() => {
                setEditMode(true);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const ProfileData = (props) => {
  let addContacts = () => {
    let arr = [];
    for (let [key, value] of Object.entries(props.profile.contacts)) {
      if (value !== null && value !== '') {
        arr.push(
          <li className={s.contact}>
            <div className={s.contact_key}>{`${key}: `}</div>
            <a href={value} className={s.contact__value}>{` ${value}`}</a>
          </li>
        );
      }
    }
    if (arr.length !== 0) {
      arr.unshift(<div className={s.contacts}>Contacts:</div>);
    }
    return arr;
  };

  return (
    <div>
      <div className={s.name__block}>
        <div className={s.name}>{props.profile.fullName}</div>
      </div>
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      {props.isOwner && (
        <div onClick={props.goToEditMode}>
          <Button buttonText={'Edit profile'} type={'button'} />
        </div>
      )}
      <ul className={s.list}>
        <li className={s.item}>
          <div>Looking for a job: {props.profile.lookingForAJob ? 'yes' : 'no'} </div>
        </li>
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
  );
};

export default UserInfo;

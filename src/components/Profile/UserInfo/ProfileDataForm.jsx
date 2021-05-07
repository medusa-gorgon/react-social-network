import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';
import s from './ProfileDataForm.module.css';
import styles from '../../../components/common/FormsControls/FormsControls.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileDataForm = (props) => {
  let addContacts = () => {
    let arr = [];
    for (let [key, value] of Object.entries(props.profile.contacts)) {
      arr.push(
        <li className={s.contact}>
          <div className={s.key}>{`${key}: `}</div>
          {createField('', s.field, `your ${key} link here`, `contacts.${key}`, 'text', [], Input)}
        </li>
      );
    }
    arr.unshift(<div className={`${s.contacts__title} ${s.key}`}>Contacts:</div>);
    return arr;
  };

  return (
    <form onSubmit={props.handleSubmit} className={s.form}>
      <div className={s.name__block}>
        <div className={`${s.name} ${s.key}`}>Full name:</div>
        {createField(s.field_block, s.field, 'Name', 'fullName', 'text', [], Input)}
      </div>
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
      <ul className={s.list}>
        <li className={s.item}>
          <div className={s.key}>Looking for a job:</div>
          {createField('', s.field, '', 'lookingForAJob', 'checkbox', [], Input)}
        </li>
        <li className={s.item}>
          <div className={s.key}>Job Description:</div>
          {createField('', s.field, 'Job Description', 'lookingForAJobDescription', 'textarea', [], Textarea)}
        </li>
        <li className={s.item}>
          <div className={s.key}>About me:</div>
          {createField('', s.field, 'About me', 'aboutMe', 'text', [], Input)}
        </li>

        <li className={s.item}>
          <ul className={s.contacts__list}>
            <div className={`${s.contacts__title} ${s.key}`}>Contacts:</div>
            {Object.keys(props.profile.contacts).map((key) => {
              return (
                <li className={s.contact}>
                  <div key={key} className={s.key}>
                    {key}:{createField('', s.field, `your ${key} link here`, `contacts.${key}`, 'text', [], Input)}
                  </div>
                </li>
              );
            })}
            {/* {addContacts()} */}
          </ul>
        </li>
      </ul>
      <div className={s.button__block}>
        <button className={s.button} type='submit'>
          Save changes
        </button>
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: 'profileData' })(ProfileDataForm);

export default ProfileDataFormReduxForm;

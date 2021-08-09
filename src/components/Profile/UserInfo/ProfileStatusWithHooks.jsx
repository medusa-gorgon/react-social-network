import { useEffect, useState } from 'react';
import s from './ProfileStatusWithHooks.module.css';
import { maxLengthCreator } from '../../../utils/validators/validators';
import { createField, Input } from '../../common/FormsControls/FormsControls';

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  const activateMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <div className={s.profileStatus}>
      {!editMode && (
        <div className={s.status}>
          <span onDoubleClick={activateMode}>{props.status || '-------------'}</span>
        </div>
      )}
      {editMode && (
        // createField(
        //   s.input__block,
        //   s.input,
        //   'enter your bio',
        //   'status',
        //   'text',
        //   [maxLengthCreator(15)],
        //   Input,
        //   {
        //     onChange: onStatusChange,
        //     autoFocus: true,
        //     onBlur: deactivateEditMode,
        //     value: status,
        //   }
        <div className={s.input__block}>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
            className={s.input}
            type='text'
            validate={[maxLengthCreator(15)]}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;

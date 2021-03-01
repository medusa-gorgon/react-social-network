import s from './Dialogs.module.css';
import Input from '../Profile/Posts/Input';
import Submit from '../Profile/Posts/Submit';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElements = props.messagesData.map((message) => <Message message={message.message} id={message.id} />);
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div className={s.form}>
          <Input />
          <Submit />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

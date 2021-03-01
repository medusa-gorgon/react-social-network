import s from './Dialogs.module.css';
import Input from '../Profile/Posts/Input';
import Submit from '../Profile/Posts/Submit';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} pic={dialog.pic} />
  ));
  let messagesElements = props.state.messagesData.map((message) => (
    <Message message={message.message} id={message.id} pic={message.pic} />
  ));
  return (
    <div className={s.dialogs}>
      <div style={{ backgroundImage: 'url({props.pic})' }} className={s.dialogs__items}>
        {dialogsElements}
      </div>
      <div className={s.message__box}>
        <div className={s.messages}>{messagesElements}</div>
        <div className={s.form}>
          <Input />
          <Submit />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

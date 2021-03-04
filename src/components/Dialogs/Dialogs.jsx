import s from './Dialogs.module.css';
// import Textarea from '../Profile/Posts/Textarea';
// import Submit from '../Profile/Posts/Submit';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/messages-reducer';
import React from 'react';

const Dialogs = (props) => {
  let dialogsElements = props.messagesPage.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} pic={dialog.pic} />
  ));

  let messagesElements = props.messagesPage.messagesData.map((message) => (
    <Message message={message.message} id={message.id} pic={message.pic} />
  ));

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>{dialogsElements}</div>
      <div className={s.message__box}>
        <div className={s.messages}>{messagesElements}</div>
        <div className={s.form}>
          <textarea
            className={s.textarea}
            type='textarea'
            value={props.messagesPage.newMessageBody}
            onChange={onNewMessageChange}
            placeholder='write your next message...'
          />
          <div className={s.button__block}>
            <div onClick={onSendMessageClick} className={s.button__wrap}>
              <button className={s.button} type='submit'>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

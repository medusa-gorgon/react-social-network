import s from './Dialogs.module.css';
// import Textarea from '../Profile/Posts/Textarea';
// import Submit from '../Profile/Posts/Submit';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} pic={dialog.pic} />
  ));
  let messagesElements = props.state.messagesData.map((message) => (
    <Message message={message.message} id={message.id} pic={message.pic} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };

  return (
    <div className={s.dialogs}>
      <div style={{ backgroundImage: 'url({props.pic})' }} className={s.dialogs__items}>
        {dialogsElements}
      </div>
      <div className={s.message__box}>
        <div className={s.messages}>{messagesElements}</div>
        <div className={s.form}>
          <textarea
            ref={newMessageElement}
            className={s.textarea}
            type='textarea'
            placeholder='write your next message...'
          />
          <div className={s.button__block}>
            <div onClick={addMessage} className={s.button__wrap}>
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

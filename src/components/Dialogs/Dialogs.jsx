import s from './Dialogs.module.css';
// import Textarea from '../Profile/Posts/Textarea';
// import Submit from '../Profile/Posts/Submit';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {
  let dialogsElements = props.messagesPage.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} pic={dialog.pic} />
  ));

  let messagesElements = props.messagesPage.messagesData.map((message) => (
    <Message message={message.message} id={message.id} pic={message.pic} />
  ));

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>{dialogsElements}</div>
      <div className={s.message__box}>
        <div className={s.messages}>{messagesElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.form}>
      <Field
        component='textarea'
        name='newMessageBody'
        className={s.textarea}
        placeholder='write your next message...'
      />
      <div className={s.button__block}>
        <div className={s.button__wrap}>
          <button className={s.button} type='submit'>
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);
export default Dialogs;

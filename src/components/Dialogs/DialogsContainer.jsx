import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/messages-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState().messagesPage;

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return <Dialogs sendMessage={onSendMessageClick} updateNewMessageBody={onNewMessageChange} messagesPage={state} />;
};

export default DialogsContainer;

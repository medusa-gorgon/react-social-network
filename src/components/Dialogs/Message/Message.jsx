import s from './Message.module.css';

const Message = (props) => {
  return (
    <div className={s.message__block}>
      <div className={s.pic} style={{ backgroundImage: `url(${props.pic})` }}></div>
      <div>
        <div className={s.message}>{props.message}</div>
      </div>
    </div>
  );
};

export default Message;

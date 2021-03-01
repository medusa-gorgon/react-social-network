import s from './Submit.module.css';

const Submit = () => {
  return (
    <div className={s.button__block}>
      <button className={s.button} type='submit'>
        Send
      </button>
    </div>
  );
};
export default Submit;

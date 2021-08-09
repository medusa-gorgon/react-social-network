import s from './Button.module.css';

const Button = (props) => {
  return (
    <div className={s.button__block}>
      <button className={s.button} type={props.type}>
        {props.buttonText}
      </button>
    </div>
  );
};
export default Button;

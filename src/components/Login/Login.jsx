import { Field, reduxForm } from 'redux-form';
import s from './Login.module.css';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} action='' className={s.form}>
      <div className={s.input__block}>
        <Field component={'input'} name={'login'} className={s.input} type='text' placeholder='login' />
      </div>
      <div className={s.input__block}>
        <Field component={'input'} name={'password'} className={s.input} type='text' placeholder='password' />
      </div>
      <div className={s.checkbox__block}>
        <Field component={'input'} name={'rememberMe'} className={s.checkbox} type='checkbox' /> remember me
      </div>
      <div className={s.button__block}>
        <button className={s.button} type='submit'>
          Log in
        </button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  //a unique name for the form
  form: 'login',
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div className={s.login}>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;

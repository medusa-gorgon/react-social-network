import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import s from './Login.module.css';
import styles from '../common/FormsControls/FormsControls.module.css';
const maxLength = maxLengthCreator(25);
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} action='' className={s.form}>
      <div className={s.input__block}>
        <Field
          component={Input}
          validate={[required, maxLength]}
          name={'email'}
          className={s.input}
          type='text'
          placeholder='email'
        />
      </div>
      <div className={s.input__block}>
        <Field
          component={Input}
          validate={[required, maxLength]}
          name={'password'}
          className={s.input}
          type='password'
          placeholder='password'
        />
      </div>
      <div className={s.checkbox__block}>
        <Field component={'input'} name={'rememberMe'} className={s.checkbox} type='checkbox' /> remember me
      </div>
      {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
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
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to='/profile' />;
  }
  return (
    <div className={s.login}>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);

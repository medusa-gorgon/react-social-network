import { Field } from 'redux-form';
import styles from './FormsControls.module.css';

const FormControl = ({ input, meta: { touched, error }, children, ...props }) => {
  const hasError = touched && error;
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} name='' id='' />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} name='' id='' />
    </FormControl>
  );
};
export const createField = (
  divClassName,
  className,
  placeholder,
  name,
  type,
  validators,
  component,
  text = '',
  ...props
) => (
  <div className={divClassName}>
    <Field
      className={className}
      placeholder={placeholder}
      name={name}
      type={type}
      validate={validators}
      component={component}
    />
    {text}
  </div>
);

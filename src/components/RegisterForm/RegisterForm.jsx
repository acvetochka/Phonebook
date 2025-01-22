import { useDispatch, useSelector } from 'react-redux';

import { logIn, register } from 'redux/auth/auth-operations';
import { Button, Form } from './RegisterForm.styled';
import { getError } from 'redux/auth/auth-selectors';
import { getNotification } from 'helped/getNotificatin';
import { AuthInput } from 'components/AuthInput/AuthInput';

import registerData from 'data/registerData.json';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, email, password } = form.elements;

    if (password.value.length < 8) {
      getNotification(
        `The password must be composed of at least 8 characters.`
      );
      return;
    }

    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    dispatch(
      logIn({
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        {registerData.map(({ name, type, label }, idx) => (
          <AuthInput key={idx} label={label} name={name} type={type} />
        ))}
        <Button type="submit">Sign up</Button>
      </Form>
      {error?.response?.data?.message &&
        getNotification('This email is already registered')}
    </div>
  );
};

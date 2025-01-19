import { useDispatch, useSelector } from 'react-redux';

import { logIn, register } from 'redux/auth/auth-operations';
import { Button, Form } from './RegisterForm.styled';
import { getError } from 'redux/auth/auth-selectors';
import { getNotification } from 'components/helped/getNotificatin';
import { AuthInput } from 'components/AuthInput/AuthInput';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, email, password } = form.elements;

    if (password.value.length < 7) {
      getNotification(
        `The password must be composed of at least 7 characters.`
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
        <AuthInput label="Name" name="name" type="text" />
        <AuthInput label="Email" name="email" type="email" />
        <AuthInput label="Password" name="password" type="password" />
        <Button type="submit">Sign up</Button>
      </Form>
      {error?.response?.data?.name &&
        getNotification('This email is already registered')}
    </div>
  );
};

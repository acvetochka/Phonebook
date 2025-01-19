import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/auth-operations';
import { Button, Form, } from './LoginForm.styled';
import { AuthInput } from 'components/AuthInput/AuthInput';

export const LoginForm = () => {
  const dispatch = useDispatch();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'email':
  //       return setEmail(value);
  //     case 'password':
  //       return setPassword(value);
  //     default:
  //       return;
  //   }
  // };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const { email, password } = form.elements;
    dispatch(logIn({ email: email.value, password: password.value }));
    // setEmail('');
    // setPassword('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <AuthInput name="email" type="email" label="Email"
        //  value={email}
         />
        <AuthInput name="password" type="password" label="Password" 
        // value={password}
        />
        {/* <Label>
          E-mail
          <Input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label> */}
        {/* <Label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label> */}
        <Button type="submit">Sign in</Button>
      </Form>
    </div>
  );
};

import { useDispatch, useSelector } from 'react-redux';
import { BiSolidUserCircle, BiSolidDoorOpen } from 'react-icons/bi';

import { getIsLoggedIn, getUser } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { Button, Header, Span, User, UserMenu } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? (
        <UserMenu>
          <User>
            <BiSolidUserCircle />
            {user.name}
          </User>
          <Button type="button" onClick={() => dispatch(logOut())}>
            <BiSolidDoorOpen />
            <Span>Logout</Span>
          </Button>
        </UserMenu>
      ) : (
        <AuthNavigation />
      )}
    </Header>
  );
};

import { useSelector } from 'react-redux';

import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { ContactIcon, HomeIcon, Link, Nav } from './Navigation.styled';
import { Span } from 'components/AppBar/AppBar.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Nav>
      <Link to="/" title="Home">
        <HomeIcon />
        <Span>Home</Span>
      </Link>
      {isLoggedIn && (
        <Link to="/contacts">
          <ContactIcon />
          <Span>Contacts</Span>
        </Link>
      )}
    </Nav>
  );
};

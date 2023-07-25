import { AuthLink, AuthNav } from './AuthNavigation.styled';

export const AuthNavigation = () => {
  return (
    <AuthNav>
      <AuthLink to="/register">Register</AuthLink>
      <AuthLink to="/login">Log In</AuthLink>
    </AuthNav>
  );
};

import { useSelector } from 'react-redux';

import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import heroImage from "../../images/fon.webp";
import { Section } from 'components/Section/Section';
import { AuthNav } from 'components/AuthNavigation/AuthNavigation.styled';
import {
  AuthLinkHome,
  HomeContainer,
  HomeTextContainer,
  Img,
} from './HomeDescription.styled';

export const HomeDescription = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <HomeContainer>
      <Img src={heroImage} alt="phone with contacts" width="300" height="300" />
      <HomeTextContainer>
        <Section title={'Welcome to Phonebook'}>
          <p>
            Where All Your Contacts Are Safe and Sound
            <br />
            We're thrilled to have you here! At ContactKeepers, we understand
            the value of your phone contacts – they're not just numbers; they're
            the connections that make your world go 'round.
          </p>
          {!isLoggedIn && (
            <>
              <p>Join Us Today!</p>
              <AuthNav>
                <AuthLinkHome to="/register">Register</AuthLinkHome>
                <AuthLinkHome to="/login">Log In</AuthLinkHome>
              </AuthNav>
            </>
          )}
        </Section>
      </HomeTextContainer>
    </HomeContainer>
  );
};

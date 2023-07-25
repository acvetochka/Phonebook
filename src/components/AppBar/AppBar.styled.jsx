import styled from '@emotion/styled';

export const Header = styled.header`
  position: fixed;
  padding: 20px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #8eb8d3;
  box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  background: -webkit-linear-gradient(180deg, #0f596b, #317786, #b5b5b5);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(180deg, #b5b5b5, #599caa, #0f596b);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const UserMenu = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const User = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  font-size: 18px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 8px;
  height: 35px;
  padding: 0 5px;
  background: #62869d;
  background-color: transparent;
  color: white;
  box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  text-shadow: 5px 5px 10px black;
  font-size: 18px;
  font-weight: bold;

  :hover,
  :focus {
    cursor: pointer;
    background: #2a7182;
  }
`;

export const Span = styled.span`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

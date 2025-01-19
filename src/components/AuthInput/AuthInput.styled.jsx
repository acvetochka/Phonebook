import styled from '@emotion/styled';


export const InputWrapper = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: 4px;
  top: ${({ isFocused, hasValue }) =>
    isFocused || hasValue ? '-15px' : '50%'};
  transform: ${({ isFocused, hasValue }) =>
    isFocused || hasValue ? 'translateY(0)' : 'translateY(-50%)'};
//   color: ${({ isFocused, hasValue }) =>    isFocused || hasValue ? '#fff' : '#000'};
  left: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: space-between;
  font-size: 18px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
  line-height: 1;
  padding: 0 4px;
  border-radius: 5px;
  transition: all 1s ease-in-out;
`;

export const Input = styled.input`
  max-width: 300px;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  font-size: 16px;
  padding: 10px;

  &:focus + label {
    top: -15px;
    // transform: translateY(-50%);
    // left: 2px;
  }
`;

export const IconWrapper = styled.button`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`


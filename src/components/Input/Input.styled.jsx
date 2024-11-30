import styled from '@emotion/styled';

export const InputContrainer = styled.div`
  position: relative;
`;
export const FormLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 10px;
//   height: 100%;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  transform: translateY(-50%);
  // margin-bottom: 15px;
  gap: 5px;
  text-transform: capitalize;
  line-height: 0.5;
  padding: 5px;
  border-radius: 5px;
`;

export const FormInput = styled.input`
  max-width: 300px;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  font-size: 20px;
  padding: 10px;

  &:focus ~ label {
    top: 0;
    // left: 2px;
    background: white;
  }
`;

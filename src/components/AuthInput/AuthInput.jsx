import { useState } from 'react';
import { IconWrapper, Input, InputWrapper, Label } from './AuthInput.styled';
import { LuEye } from 'react-icons/lu';
import { RiEyeCloseLine } from 'react-icons/ri';

export const AuthInput = ({ label, name, type}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setValue] = useState("");
  const [inputType, setInputType] = useState('password');

  const handleOnclick = () => {
    setInputType(inputType =>
      inputType === 'password' ? (inputType = 'text') : (inputType = 'password')
    );
  };

  const handleOnChange = e => setValue(e.target.value)

  return (
    <InputWrapper>
      <Input
        id={name}
        type={name === 'password' ? inputType : type}
        name={name}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleOnChange}
        value={inputValue}
      />
      <Label htmlFor={name} isFocused={isFocused} hasValue={inputValue}>
        {label}
      </Label>
      {name === 'password' && inputValue && (
        <IconWrapper type="button" onClick={handleOnclick}>
          {inputType === 'text' ? <LuEye /> : <RiEyeCloseLine />}
        </IconWrapper>
      )}
    </InputWrapper>
  );
};

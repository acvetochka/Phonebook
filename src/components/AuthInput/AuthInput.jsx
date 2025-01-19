import { useState } from 'react';
import { IconWrapper, Input, InputWrapper, Label } from './AuthInput.styled';
import { LuEye } from 'react-icons/lu';
import { RiEyeCloseLine } from 'react-icons/ri';

export const AuthInput = ({ label, name, type }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');
  const [inputType, setInputType] = useState('password');

  const handleOnclick = () => {
    setInputType(inputType =>
      inputType === 'password' ? (inputType = 'text') : (inputType = 'password')
    );
  };

  return (
    <InputWrapper>
      <Input
        id={name}
        type={name === 'password' ? inputType : type}
        name={name}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      <Label htmlFor="password" isFocused={isFocused} hasValue={value}>
        {label}
      </Label>
      {name === 'password' && value && (
        <IconWrapper type="button" onClick={handleOnclick}>
          {inputType === 'text' ? <LuEye /> : <RiEyeCloseLine />}
        </IconWrapper>
      )}
    </InputWrapper>
  );
};

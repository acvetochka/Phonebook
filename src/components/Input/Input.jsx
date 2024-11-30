import { FormInput, FormLabel, InputContrainer } from "./Input.styled";

export function Input (inputData){

    const {type, name, pattern, title, isRequired} = inputData;

    return (
        <InputContrainer>
        <FormInput
          type={type}
          name={name}
          id={name}
          pattern={pattern}
          title={title}
          required={isRequired}
        />
        <FormLabel htmlFor={name}>{name}</FormLabel>
      </InputContrainer>
    )
        
}

// Input.propTypes = {
//     name: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     pattern: PropTypes.string,
//     title: PropTypes.string.isRequired,
//     isRequired: PropTypes.bool,
//   };
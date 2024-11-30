import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from '@reduxjs/toolkit';

import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import {
  Form,
  FormButton,
  InputWrapper,
} from './ContactForm.styled';
import { getNotification } from 'components/helped/getNotificatin';
import inputsData from '../../data/inputsData.json';
import { Input } from 'components/Input/Input';

export function ContactForm() {
  const { contactsItem } = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const { name, number } = form.elements;

    const newContact = {
      // id: nanoid(),
      name: name.value,
      phone: number.value,
    };
    // console.log(newContact);

    if (contactsItem.some(contact => contact.name === name.value)) {
      getNotification(`${name.value} is already in contacts.`);
    } else {
      dispatch(addContact(newContact));
      // console.log(contactsItem);

      form.reset();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
      {inputsData.map(( input, idx) => <Input key={idx} {...input} />
      )}
</InputWrapper>
      <FormButton type="submit">Add contact</FormButton>
    </Form>
  );
}



      // {/* <InputContrainer>
      //   <FormInput
      //     type="text"
      //     name="name"
      //     id="name"
      //     pattern="^[a-zA-Zа-яА-Я\s]+$"
      //     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      //     required
      //   />
      //   <FormLabel for="name">Name </FormLabel>
      // </InputContrainer>
      // <InputContrainer>
      //   <FormInput
      //     type="tel"
      //     name="number"
      //     id="number"
      //     pattern="\+?[0-9\s\-\(\)]+"
      //     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      //     required
      //   />
      //   <FormLabel for="number">Number </FormLabel>
      // </InputContrainer> */}
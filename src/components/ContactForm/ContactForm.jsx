import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { Form, FormLabel, FormInput, FormButton } from './ContactForm.styled';

export function ContactForm() {
  const { contactsItem } = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const { name, number } = form.elements;
    console.log(name.value);
    console.log(number.value);

    const newContact = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };
    if (contactsItem.some(contact => contact.name === name.value)) {
      Notiflix.Report.warning(
        'Warning',
        `${name.value} is already in contacts.`
      );
    } else {
      dispatch(addContact(newContact));
      console.log();
      //
    }
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я\s]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?[0-9\s\-\(\)]+"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </Form>
  );
}

Notiflix.Report.init({
  svgSize: '50px',
  messageFontSize: '20px',
  warning: {
    svgColor: '#44728f',

    buttonBackground: '#44728f',
    backOverlayColor: 'rgba(0,0, 0,0.2)',
  },
});

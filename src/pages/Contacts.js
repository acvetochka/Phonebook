// import { useSelector } from 'react-redux';

// import { getContacts } from 'redux/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';

const Contacts = () => {
  // const { isLoading, error } = useSelector(getContacts);
  return (
    <>
      <Section title={'Add new contact'}>
        <ContactForm />
      </Section>
      <Section title={'My contacts'}>
      {/* {isLoading && !error && <b>Request in progress...</b>} */}
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};

export default Contacts;

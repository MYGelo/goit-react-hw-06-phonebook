import { ContactsForm } from './contactForm/contactForm';
import { ContactList } from './contactList/contactList';
import { ContactFilter } from './Filter/Filter';

export const App = () => {
  return (
    <>
      <div
        style={{
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Phonebook</h1>
        <ContactsForm />
        <h2>Contacts</h2>
        <ContactFilter />
        <ContactList />
      </div>
    </>
  );
};

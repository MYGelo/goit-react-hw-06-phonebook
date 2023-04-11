import React, { useState } from 'react';
import { ContactForm } from './contactForm/contactForm';
import { ContactList } from './contactList/contactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = e => {
    const { name, value } = e.target;

    if (name !== value) {
      setFilter(value);
    }
  };
  const getNewList = () => {
    const newContactList = contacts.filter(contact => {
      return contact.name?.toLowerCase().includes(filter.toLowerCase());
    });
    return newContactList;
  };

  const onSubmitForm = data => {
    const id = nanoid();
    const contact = { id, ...data };
    const contactExists = contacts.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );
    console.log(contact);

    if (contactExists) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const onDelete = e => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== e)
    );
  };

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
        <ContactForm onSubmit={onSubmitForm} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={handleChange} />
        <ContactList contacts={getNewList()} onDelete={onDelete} />
      </div>
      <div>
        <p>hello gays</p>
      </div>
    </>
  );
};

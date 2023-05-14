import { Notify } from 'notiflix';
import { Contacts } from './contacts/Contacts';
import { Filter } from './filter/Filter';
import { Forma } from './forma/Forma';
import { GlobalStyle } from './GlobalStyles';
import { Layout } from './Layout';
import { useEffect, useState } from 'react';

export function App() {
  const [contacts, setContacts] = useState(() => {
    const contacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
    const contactsFromStorage = localStorage.getItem('contacts');
    const parseStorage = JSON.parse(contactsFromStorage);

    return parseStorage || contacts;
  });

  const [filter, setFilter] = useState('');

  const handleAddContact = values => {
    const name = contacts.map(contact => contact.name);

    if (name.includes(values.name)) {
      Notify.warning(`${values.name} is already in contant`);
    } else {
      setContacts([values, ...contacts]);
    }
  };

  const handleOnChange = e => {
    setFilter(e.target.value);
  };

  const getContacts = () => {
    const normaliseFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normaliseFilter)
    );
  };

  const handleDeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <Forma addContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter onChange={handleOnChange} />
      <Contacts contacts={getContacts()} deleteContact={handleDeleteContact} />
      <GlobalStyle />
    </Layout>
  );
}

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PhonebookForm from './components/Phonebook/PhonebookForm';
import Section from './components/Phonebook/Section';
import ContactList from './components/Phonebook/ContactList';
import Filter from './components/Phonebook/Filter';

const LS_KEY = 'phonebook_contacts';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(LS_KEY);
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const existingContact = contacts.find(
      c => c.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (existingContact) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, contact]);
  };
  const deleteContact = contactId => {
    const newContacts = contacts.filter(contact => contact.id !== contactId);
    setContacts(newContacts);
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = getFilteredContacts();
  return (
    <>
      <Section title="Phonebook">
        <PhonebookForm onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      </Section>
    </>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default App;

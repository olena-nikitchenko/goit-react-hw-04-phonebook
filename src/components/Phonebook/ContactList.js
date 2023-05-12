import React from 'react';
import PropTypes from 'prop-types';
import css from './Phonebook.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.ContactList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.ContactListItem}>
        <span className={css.ContactListSpan}>
          {name}: {number}
        </span>
        <button
          className={css.Btn}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;

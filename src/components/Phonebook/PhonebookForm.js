import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './Phonebook.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const PhonebookForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ ...INITIAL_STATE });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = formData;
    const contact = { id: nanoid(), name, number };
    onSubmit(contact);
    reset();
  };

  const reset = () => {
    setFormData({ ...INITIAL_STATE });
  };

  const { name, number } = formData;

  return (
    <form onSubmit={handleSubmit} className={css.Form}>
      <label className={css.Label}>
        Name
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={name}
          onChange={handleChange}
          className={css.Input}
        />
      </label>
      <label className={css.Label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
          className={css.Input}
        />
      </label>
      <button type="submit" className={css.Btn}>
        Add contact
      </button>
    </form>
  );
};

PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default PhonebookForm;

import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './Phonebook.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class PhonebookForm extends React.Component {
  state = { ...INITIAL_STATE };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    const contact = { id: nanoid(), name, number };
    this.props.onSubmit(contact);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={css.Form}>
        <label className={css.Label}>
          Name
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={this.handleChange}
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
            onChange={this.handleChange}
            className={css.Input}
          />
        </label>
        <button type="submit" className={css.Btn}>
          Add contact
        </button>
      </form>
    );
  }
}

PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default PhonebookForm;

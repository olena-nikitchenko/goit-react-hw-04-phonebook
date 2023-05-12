import React from 'react';
import PropTypes from 'prop-types';
import css from './Phonebook.module.css';

const Filter = ({ value, onChange }) => (
  <div className={css.Filter}>
    <label className={css.Label__filter}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        className={css.Input__filter}
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

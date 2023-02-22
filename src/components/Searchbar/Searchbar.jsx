import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import css from './Searchbar.module.css';

const Searchbar = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchform} onSubmit={handleSubmit}>
        <button className={css.searchformButton}>
          <span className={css.searchformButtonLabel}>
            <FaSearch />
          </span>
        </button>
        <input
          className={css.searchformInput}
          type="text"
          autoComplete="off"
          autoFocus
          value={value}
          onChange={handleChange}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ onLoadMore }) => {
  return (
    <button type="button" className={css.button} onClick={onLoadMore}>
      Load More
    </button>
  );
};

export default Button;

Button.propTypes = {
  onLoadMore: PropTypes.func,
};

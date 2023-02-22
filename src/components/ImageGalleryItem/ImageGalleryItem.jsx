import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ previewImage, alt, fullImage, showFullImage }) => {
  return (
    <li
      className={css.ImageGalleryItem}
      onClick={() => showFullImage(fullImage)}
    >
      <img
        className={css.ImageGalleryItem__image}
        src={previewImage}
        alt={alt}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  previewImage: PropTypes.string.isRequired,
  fullImage: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  showFullImage: PropTypes.func,
};

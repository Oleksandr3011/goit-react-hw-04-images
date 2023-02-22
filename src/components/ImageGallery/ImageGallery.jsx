import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ pictures, showFullImage }) => {
  return (
    <ul className={css.imageGallery}>
      {pictures.map(picture => {
        return (
          <ImageGalleryItem
            key={picture.id}
            previewImage={picture.webformatURL}
            fullImage={picture.largeImageURL}
            alt={picture.tags}
            showFullImage={showFullImage}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  showFullImage: PropTypes.func,
};

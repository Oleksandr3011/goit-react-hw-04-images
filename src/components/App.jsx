import React, { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import fetchPictures from 'services/gallerryApi';


export const App = () => {
  const [query, setQuery] = useState('');
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [fullImage, setFullImage] = useState('');
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);

  useEffect(() => {
    if (query.trim()) {
      getImages(query, page);
    }
  }, [query, page]);

  const handleSubmit = query => {
    setQuery(query);
    setPictures([]);
    setPage(1);

    if (query.trim() === '') {
      Notiflix.Notify.info('Please specify your query');
      return;
    }
  };

  const getImages = (query, page) => {
    setIsFetching(true);
    setShowLoadMoreBtn(true);

    fetchPictures(query, page)
      .then(data => {
        if (data.data.hits.length === 0) {
          Notiflix.Notify.info('Sorry, there are no results on your query');
        }
        if (data.data.hits.length < 12) {
          setShowLoadMoreBtn(false);
        }
        setPictures(prevPictures => [...prevPictures, ...data.data.hits]);
      })
      .catch(error => console.log(error))
      .finally(() => setIsFetching(false));
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const toggleModal = () => {
    setFullImage('');
  };

  const showFullImage = fullImage => {
    setFullImage(fullImage);
  };

  return (
    <>
      <Searchbar onSearch={handleSubmit} />
      <ImageGallery pictures={pictures} showFullImage={showFullImage} />
      {pictures.length !== 0 && showLoadMoreBtn && !isFetching && (
        <Button onLoadMore={loadMore} />
      )}
      {isFetching && <Loader />}
      {fullImage && <Modal onClose={toggleModal} fullImage={fullImage} />}
    </>
  );
};

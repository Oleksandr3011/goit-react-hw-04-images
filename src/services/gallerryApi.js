import axios from 'axios';

const API_KEY = '32868326-c6db298cd20b79530329590f0';
const BASE_URL = 'https://pixabay.com/api/';

const fetchPictures = (searchQuery, page) => {
  return axios(BASE_URL, {
    params: {
      key: API_KEY,
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 12,
    },
  });
};

export default fetchPictures;


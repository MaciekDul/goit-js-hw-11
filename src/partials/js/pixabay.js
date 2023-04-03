import axios from 'axios';

const API_KEY = '35045245-d8bc0a2fa00e71564908eb253';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export function fetchArticles(q, page) {
  return axios.get('', {
    params: {
      q,
      page,
      per_page: 40,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
}

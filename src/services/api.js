import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.pauleira.group',
});

export default api;

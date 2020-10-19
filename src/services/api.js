import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pauleira.group',
});

export default api;

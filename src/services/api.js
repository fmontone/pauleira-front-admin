import axios from 'axios';

const api = axios.create({
  baseURL: 'http://104.248.53.119',
});

export default api;

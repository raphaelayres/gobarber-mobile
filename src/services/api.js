import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.50.175:3333',
});

export default api;

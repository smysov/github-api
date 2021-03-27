import axios from 'axios';
import interceptors from './interceptors';

const instance = axios.create({
  baseURL: 'https://api.github.com/search',
});

interceptors(instance);

export default instance;

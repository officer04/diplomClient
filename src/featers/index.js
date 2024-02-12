import axios from 'axios';
import { BaseURL } from '../utils/conts';

const instance = axios.create({
  baseURL: BaseURL,
});

const authAxios = axios.create({
  baseURL: BaseURL,
});

const authInterceptor = (config) => {
  config.headers.authorization = `${localStorage.getItem('token')}`;
  return config;
};

instance.interceptors.request.use(authInterceptor);

export {
  authAxios,
  instance,
};

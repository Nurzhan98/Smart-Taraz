import axios from 'axios';
import store from './store';


const baseURL = 'https://localhost:5001/api/';

const API = axios.create({
    baseURL,
});

API.interceptors.request.use(
    async function(config) {
      const token = store.tokens.token;
      if (token) {
        config.headers = {
          Authorization: `Bearer ${token}`,
        };
      }
      return config;
    },
    function(error) {
      return Promise.reject(error);
    },
);

export default API;
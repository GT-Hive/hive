import axios from 'axios';

const defaultOptions = {
  baseURL: 'http://10.0.0.154:5000/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
};

const instance = axios.create(defaultOptions);

export default instance;

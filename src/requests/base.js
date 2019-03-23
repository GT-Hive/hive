import axios from 'axios';

const defaultOptions = {
  baseURL: 'https://gt-hive-api.herokuapp.com/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
};

const instance = axios.create(defaultOptions);

export default instance;

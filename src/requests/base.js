import axios from 'axios';

export default axios.create({
  baseURL: 'https://gt-hive-api.herokuapp.com',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
});

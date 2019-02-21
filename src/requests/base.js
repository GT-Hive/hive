import axios from 'axios';

export default axios.create({
  baseURL: 'https://gt-hive-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

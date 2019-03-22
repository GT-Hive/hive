import axios from 'axios';

export default axios.create({
  // baseURL: 'https://gt-hive-api.herokuapp.com/api/v1',
  baseURL: 'http://10.0.2.2:5000/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});

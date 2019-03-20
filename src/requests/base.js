import axios from 'axios';

const defaultOptions = {
  baseURL: 'https://gt-hive-api.herokuapp.com/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
};

const instance = axios.create(defaultOptions);

/*
instance.interceptors.response.use(
  response => response,
  (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401) {
      const { email, password } = store.getState().user;
      store.dispatch(actionCreators.refreshToken(email, password));
      return instance
        .post('/auth/login', { user: { email, password } })
        .then(({ data }) => {
          store.dispatch(actionCreators.refreshTokenSucceed(data));

          instance.defaults.headers.Authorization = `Bearer ${data.user.token}`;
          originalRequest.headers.Authorization = `Bearer ${data.user.token}`;

          return axios(originalRequest);
        })
        .catch(err => store.dispatch(actionCreators.refreshTokenFailed(err)));
    }

    return Promise.reject(error);
  }
);
*/
export default instance;

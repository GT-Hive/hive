import { Observable } from 'rxjs';

import client from './base';

const TIMEOUT = 1000;

export default {
  createUser(userInfo, communities) {
    return new Observable((observer) => {
      const timerId = setTimeout(() => {
        client.post('/auth/register', { user: userInfo, communities })
          .then((response) => {
            observer.next(response.data);
            observer.complete();
          })
          .catch((error) => {
            observer.error(error);
            observer.complete();
          });
      }, TIMEOUT);
      return () => clearTimeout(timerId);
    });
  },
  loginUser(email, password) {
    return new Observable((observer) => {
      const timerId = setTimeout(() => {
        client.post('/auth/login', { user: { email, password } })
          .then((response) => {
            observer.next(response.data);
            observer.complete();
          })
          .catch((error) => {
            observer.error(error);
            observer.complete();
          });
      }, TIMEOUT);
      return () => clearTimeout(timerId);
    });
  }
};

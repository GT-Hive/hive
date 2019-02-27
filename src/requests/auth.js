import { Observable } from 'rxjs';

import client from './base';

const TIMEOUT = 1000;

export default {
  // TODO(roy): ERROR: communities need to be in form of id
  createUser(userInfo, communities) {
    return new Observable((observer) => {
      const timerId = setTimeout(() => {
        client.post('/auth/register', { user: userInfo, communities: Array.from(communities) })
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

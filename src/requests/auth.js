import { Observable } from 'rxjs';

import client from './base';

const TIMEOUT = 1000;

export default {
  // TODO(roy): add userInfo and interests to parameters after API endpoint is handled
  createUser() {
    return new Observable((observer) => {
      const timerId = setTimeout(() => {
        client.get('/api/v1/events')
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

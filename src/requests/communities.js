import { Observable } from 'rxjs';

import client from './base';

const TIMEOUT = 1000;

export default {
  reloadCommunities() {
    return new Observable((observer) => {
      const timerId = setTimeout(() => {
        client.get('/communities')
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
  // addUserToCommunities(communities) {
  //   return new Observable((observer) => {
  //     const timerId = setTimeout(() => {
  //       client.post()
  //     }
  //   })
  // }
};

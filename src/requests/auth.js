import client from './base';

export default {
  // TODO(roy): add userInfo and interests to parameters after API endpoint is handled
  async createUser() {
    return client.get('/api/v1/events')
      .then(response => response);
  }
};

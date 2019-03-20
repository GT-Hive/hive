import CryptoJS from 'crypto-js';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { createTransform } from 'redux-persist';

const navMiddleware = createReactNavigationReduxMiddleware(
  state => state.nav
);

const encrypt = createTransform(
  (inboundState, key) => {
    if (!inboundState) return inboundState;
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(inboundState), 'secret-key');

    return encrypted.toString();
  },
  (outboundState, key) => {
    if (!outboundState) return outboundState;
    const bytes = CryptoJS.AES.decrypt(outboundState, 'secret-key');
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    return JSON.parse(decrypted);
  },
);

export {
  navMiddleware,
  encrypt
};

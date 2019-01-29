module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true
  },
  'rules': {
    'comma-dangle': 'off',
    'global-require': 'off',
    'jsx-quotes': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-useless-concat': 'off',
    'object-curly-newline': 'off',
    'react/jsx-filename-extension': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-multi-comp': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off'
  },
  'globals': {
    'fetch': 'true'
  }
}

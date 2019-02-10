import _ from 'lodash';

export default function hasFieldsFilled(formFields) {
  return _.chain(formFields)
    .filter(value => value === '')
    .isEmpty()
    .value();
}

import { all } from 'redux-saga/effects';

import auth from './auth/sagas';

export default function* rootSga() {
  return yield all([auth]);
}

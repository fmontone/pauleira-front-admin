import { takeLatest, all, put } from 'redux-saga/effects';

import history from '~/services/history';

import { signInSuccess } from './actions';

export function* signIn() {
  yield put(signInSuccess());
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);

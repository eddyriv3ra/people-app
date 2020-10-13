import { all, fork, StrictEffect } from 'redux-saga/effects';
import peopleSaga from 'sagas/person.sagas';

export default function* root(): Generator<StrictEffect> {
  yield all([fork(peopleSaga)]);
}

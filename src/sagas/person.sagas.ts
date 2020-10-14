import { all, put, takeEvery, call, StrictEffect } from 'redux-saga/effects';
import { GET_PEOPLE } from 'constants/types';
import {
  getPeoplePending,
  getPeopleError,
  getPeopleSuccess,
} from 'actions/people.actions';
import fetchPeople from 'services/api';

function* getPeople() {
  yield put(getPeoplePending());
  try {
    const result = yield call(fetchPeople);
    yield put(getPeopleSuccess(result));
  } catch (error) {
    yield put(getPeopleError());
  }
}

export default function* root(): Generator<StrictEffect> {
  yield all([takeEvery(GET_PEOPLE, getPeople)]);
}

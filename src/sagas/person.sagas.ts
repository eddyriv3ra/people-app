import { all, takeEvery } from 'redux-saga/effects';
import { GET_PEOPLE } from 'constants/types';
import { getPeoplePending } from 'actions/people.actions';

function* getPeople() {
  const lala = yield 'lala';
  console.log(lala);
}

export default function* root() {
  yield all([takeEvery(GET_PEOPLE, getPeople)]);
}

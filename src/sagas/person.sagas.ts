import { all, takeEvery } from 'redux-saga/effects';

function* registerRequest() {
  const lala = yield 'lala';
  console.log(lala);
}

export default function* root() {
  yield all([takeEvery('REGISTER_USER', registerRequest)]);
}

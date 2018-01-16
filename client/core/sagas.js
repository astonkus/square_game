import { all, fork } from 'redux-saga/effects';
import squaresSaga from './modules/squares/squaresSaga';

export default function* rootSaga() {
  yield all([
    fork(squaresSaga),
  ]);
}

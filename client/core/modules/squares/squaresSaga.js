import { takeLatest, all, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga'
import shuffle from 'shuffle-array';
import { constants } from '../../../core/constants';
import { setSquares, enableSquare, setCheck, requestSquares, resetCheck } from './squaresActions';
import { setScore, deleteScore } from './../score/scoreActions';
import { increaseSettingValue, resetSettingValue } from './../settings/settingsActions';

function* onRequestSquare() {
  const state = yield select();
  const squareCount = state.settings.get('round') + 3;
  const squares = Array.from(Array(squareCount).keys());
  const shuffledSquares = shuffle(squares);

  yield put(setSquares(shuffledSquares));
}

function* onSetActiveSquares() {
  const state = yield select();
  const squares = state.squares.get('squares');

  const squaresCount = squares.length;

  for (let i = 0; i <= squaresCount; i++) {
    yield delay(500);
    yield put(enableSquare(squares[i]));
  }

  yield put(enableSquare(null));
}

function* onResetSquares() {
  yield all([
    put(enableSquare(null)),
    put(resetCheck()),
    put(deleteScore()),
    put(resetSettingValue('round')),
    put(requestSquares()),
  ]);
}

function* onCheckSquare(square) {
  const state = yield select();
  const squares = state.squares.get('squares');
  const check = state.squares.get('check');
  const { squareKey } = square.payload;

  yield put(setCheck());

  if (squares[check] === squareKey) {
    yield put(setScore(state.score + 1));

    if (check + 1 >= squares.length) {
      yield put(increaseSettingValue('round'));
      yield put(requestSquares());
      yield put(resetCheck());
      yield onSetActiveSquares();
    }
  } else {
    yield onResetSquares();
  }
}

export default function* squaresSaga() {
  yield all([
    takeLatest(constants.squares.REQUEST, onRequestSquare),
    takeLatest(constants.squares.SET_ACTIVE, onSetActiveSquares),
    takeLatest(constants.squares.CHECK, onCheckSquare),
    takeLatest(constants.squares.RESET, onResetSquares),
  ]);
}

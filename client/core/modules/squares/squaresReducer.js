import { Map } from 'immutable';
import { constants } from '../../constants';

const initialState = Map({
  squares: [],
  enabled: null,
  check: 0
});

const squares = (state = initialState, action) => {
  switch (action.type) {
    case constants.squares.SET:
      return state.set('squares', action.payload.squares);
    case constants.squares.ENABLE:
      return state.set('enabled', action.payload.square);
    case constants.squares.SET_CHECK:
      return state.set('check', state.get('check') + 1);
    case constants.squares.RESET_CHECK:
      return state.set('check', 0);
    default:
      return state;
  }
};

export default squares;

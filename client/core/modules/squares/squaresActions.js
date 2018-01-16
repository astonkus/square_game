import { constants } from '../../constants';

export const requestSquares = () => {
  return {
    type: constants.squares.REQUEST,
    payload: {}
  }
};

export const setSquares = (squares) => {
  return {
    type: constants.squares.SET,
    payload: {
      squares
    }
  }
};

export const setActiveSquares = () => {
  return {
    type: constants.squares.SET_ACTIVE,
    payload: {}
  }
};

export const enableSquare = (square) => {
  return {
    type: constants.squares.ENABLE,
    payload: {
      square
    }
  }
};

export const checkSquare = (squareKey) => {
  return {
    type: constants.squares.CHECK,
    payload: {
      squareKey
    }
  }
};

export const setCheck = () => {
  return {
    type: constants.squares.SET_CHECK,
    payload: {}
  }
};

export const resetCheck = () => {
  return {
    type: constants.squares.RESET_CHECK,
    payload: {}
  }
};

export const resetSquares = () => {
  return {
    type: constants.squares.RESET,
    payload: {}
  }
};

import { constants } from '../../constants';

export const increaseSettingValue = type => ({
  type: constants.settings.INCREASE_VALUE,
  payload: {
    type
  }
});

export const resetSettingValue = type => ({
  type: constants.settings.RESET_VALUE,
  payload: {
    type
  }
});

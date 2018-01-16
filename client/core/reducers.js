import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import score from './modules/score/scoreReducer';
import squares from './modules/squares/squaresReducer';
import settings from './modules/settings/settingsReducer';

const rootReducer = combineReducers({
  routing,
  squares,
  score,
  settings,
});

export default rootReducer;

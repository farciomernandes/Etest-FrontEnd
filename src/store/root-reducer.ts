import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import turmaReducer from './turma/turma.reducer';

export default combineReducers({
    user: userReducer,
    turma: turmaReducer,
  });
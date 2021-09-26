import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import turmaReducer from './turma/turma.reducer';
import avaliacaoReducer from './avaliacao/avaliacao.reducer';

export default combineReducers({
    user: userReducer,
    turma: turmaReducer,
    avaliacao: avaliacaoReducer,
  });
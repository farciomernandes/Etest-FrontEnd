import TurmaActionTypes from './turma.types';

const INITIAL_STATE = {
  user: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TurmaActionTypes.SEARCH_SUCCESS:
      return {
        ...state,
        turma: action.payload,
        error: null
      };
    case TurmaActionTypes.SEARCH_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
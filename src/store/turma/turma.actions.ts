import TurmaActionTypes from './turma.types';

export const searchSuccess = user => ({
  type: TurmaActionTypes.SEARCH_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: TurmaActionTypes.SEARCH_FAILURE,
  payload: error
});

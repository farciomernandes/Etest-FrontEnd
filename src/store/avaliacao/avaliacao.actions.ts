import AvaliacaoActionTypes from './avaliacao.types';

export const searchSuccess = avaliacao => ({
  type: AvaliacaoActionTypes.AVALIACAO_SUCCESS,
  payload: avaliacao
});

export const signInFailure = error => ({
  type: AvaliacaoActionTypes.AVALIACAO_FAILURE,
  payload: error
});

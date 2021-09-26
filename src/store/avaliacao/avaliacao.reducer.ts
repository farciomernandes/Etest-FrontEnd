import AvaliacaoActionTypes from './avaliacao.types';

const INITIAL_STATE = {
  avaliacao: {
    id: null,
    nome: null,
    dataProva: null,
    turma: null,
    autor: null,
    alunos: [],
    questoes: []
  },
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AvaliacaoActionTypes.AVALIACAO_SUCCESS:
      return {
        ...state,
        avaliacao: action.payload,
        error: null
      };
    case AvaliacaoActionTypes.AVALIACAO_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
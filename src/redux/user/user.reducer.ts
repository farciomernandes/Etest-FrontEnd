import UserActionTypes from './user.types';

const INITIAL_STATE = {
  user: {
    token: "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUEkgZG8gRsOzcnVtIE1hcmNpbyBTcHJpbmciLCJzdWIiOiIxIiwiaWF0IjoxNjMwNjk1NDc1LCJleHAiOjE2MzA3ODE4NzV9.oOA1rhRvj0Ivi0GsQ-AZuUxhxPZHTeKKxLaIyEW_Cpk",
    tipo: "Bearer",
    nome: "Inathan Moreira",
    id: 1,
    matricula: '40028922',
    senha: '123456',
    email: 'inathan@gmail.com'
  },
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
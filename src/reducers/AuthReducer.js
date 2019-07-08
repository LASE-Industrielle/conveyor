import { AUTH_ERROR, AUTH_START, AUTH_SUCCESS, LOGOUT_USER } from '../Actions';

const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        loading: true
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload,
        loading: false
      };
    case AUTH_ERROR:
      return {
        ...state,
        errorMessage: 'failed',
        loading: false
      };
    case LOGOUT_USER:
      return {
        ...state,
        token: ''
      };
    default:
      return state;
  }
};
export default authReducer;

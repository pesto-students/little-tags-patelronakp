import * as ACTIONS from '../constants/actionTypes';

const initialState = {
  authUser: null,
  showLogin: false
};

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SET_AUTH_USER:
      return { ...state, authUser: action.authUser };
    case ACTIONS.SHOW_LOGIN_POPUP:
      return { ...state, showLogin: !state.showLogin }
    default:
      return state;
  }
}
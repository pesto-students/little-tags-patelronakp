import { SET_AUTH_USER, SHOW_LOGIN_POPUP } from '../constants/actionTypes';

export const setAuthUser = (authUser) => ({
  type: SET_AUTH_USER,
  authUser,
});

export const showLoginPopup = () => ({
  type: SHOW_LOGIN_POPUP,
});
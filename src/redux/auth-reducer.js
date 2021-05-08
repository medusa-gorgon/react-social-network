import { stopSubmit } from 'redux-form';
import { authAPI, securityAPI } from '../api/api';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const LOGIN = 'auth/LOGIN';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  password: null,
  captchaURL: null, // if null then captcha is not required
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case LOGIN:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const loginAC = (userId, email, login) => ({ type: LOGIN, payload: { userId, email, login } });

export const getCaptchaURLSuccess = (captchaURL) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaURL } });

export const getAuthUserData = () => {
  return async (dispatch) => {
    let data = await authAPI.me();
    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  };
};

export const login = (email, password, rememberMe, captcha) => {
  return async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
      // success, get auth data
      dispatch(getAuthUserData());
    } else {
      if (data.resultCode === 10) {
        dispatch(getCaptchaURL());
      }
      let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
      dispatch(stopSubmit('login', { _error: message }));
    }
  };
};

export const getCaptchaURL = () => {
  return async (dispatch) => {
    const data = await securityAPI.getCaptchaURL();
    const captchaURL = data.url;
    dispatch(getCaptchaURLSuccess(captchaURL));
  };
};

export const logout = () => {
  return async (dispatch) => {
    let data = await authAPI.logout();
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  };
};

export default authReducer;

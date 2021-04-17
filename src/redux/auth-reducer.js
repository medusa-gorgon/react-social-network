import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

const LOGIN = 'LOGIN';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  password: null,
  // isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case LOGIN:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } });

export const loginAC = (userId, email, login) => ({ type: LOGIN, data: { userId, email, login } });

export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.me().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login));
      }
    });
  };
};

export const login = (login, password) => {
  return (dispatch) => {
    authAPI.login().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login));
      }
    });
  };
};

export default authReducer;

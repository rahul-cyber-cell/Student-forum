import createReducer from '../utils/createReducer';
import * as types from '../actions/auth/types';

const initialState = {
  isLoggedIn: false,
  id: 0,
  user: null,
  error: false,
  list: [],
  typeError: '',
  userType: '',
};

export const loginReducer = createReducer(initialState, {
  [types.OTP_REQUEST](state) {
    return {
      ...state,
    };
  },
  [types.OTP_RESPONSE](state) {
    return {
      ...state,
    };
  },
  [types.OTP_FAILED](state,action) {
    return {
      ...state,
      error: action.error,
    };
  },
  
  [types.LOGIN_REQUEST](state) {
    return {
      ...state,
    };
  },
  [types.LOGIN_RESPONSE](state, action) {
    return {
      ...state,
      ...action.response,
      isLoggedIn: true,
    };
  },
  [types.LOGIN_FAILED](state, action) {
    return {
      ...state,
      isLoggedIn: false,
      error: action.error,
    };
  },
  [types.LOG_OUT](state) {
    return {
      ...state,
      isLoggedIn: false,
    };
  },
  [types.GET_LOGIN_USER_TYPES_REQUEST](state) {
    return {
      ...state,
      typeError: '',
    };
  },
  [types.GET_LOGIN_USER_TYPES_RESPONSE](state, action) {
    return {
      ...state,
      list: action.response,
    };
  },
  [types.GET_LOGIN_USER_TYPES_FAILED](state, action) {
    return {
      ...state,
      typeError: action.error,
    };
  },
  [types.GET_LOGIN_USER_TYPES_FAILED](state, action) {
    return {
      ...state,
      typeError: action.error,
    };
  },
  [types.CLEAR_LOGIN_USER_TYPES_REQUEST](state) {
    return {
      ...state,
      list: [],
      error: '',
      typeError: '',
    };
  },
});

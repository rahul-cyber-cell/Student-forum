import createReducer from '../utils/createReducer';
import * as types from '../actions/user/types';

const initialState = {
  error: false,
  success: false,
  user: null,
  errorMessage: '',
  successMessage: '',
};

export const userReducer = createReducer(initialState, {
  [types.RESET_USER_STATE]() {
    return {
      state: initialState,
      error: false,
      success: false,
    };
  },
  [types.GET_USER_REQUEST](state) {
    return {
      ...state,
      error: false,
      success: false,
    };
  },
  [types.GET_USER_RESPONSE](state, action) {
    return {
      ...state,
      user: action.response,
      error: false,
      success: false,
    };
  },
  [types.GET_USER_FAILED](state, action) {
    return {
      ...state,
      error: true,
      success: false,
      errorMessage: action.error.error,
    };
  },
  [types.EDIT_USER_REQUEST](state) {
    return {
      ...state,
      error: false,
      success: false,
    };
  },
  [types.EDIT_USER_RESPONSE](state, action) {
    return {
      ...state,
      user: action.response,
      error: false,
      success: true,
      successMessage: 'User Updated',
    };
  },
  [types.EDIT_USER_FAILED](state, action) {
    return {
      ...state,
      error: true,
      success: false,
      errorMessage: action.error.error,
    };
  },
  [types.EDIT_USER_IMAGE_REQUEST](state) {
    return {
      ...state,
      error: false,
      success: false,
    };
  },
  [types.EDIT_USER_IMAGE_RESPONSE](state, action) {
    return {
      ...state,
      user: { ...state.user, url: action.response.url },
      error: false,
      success: true,
      successMessage: 'Image Updated',
    };
  },
  [types.EDIT_USER_IMAGE_FAILED](state, action) {
    return {
      ...state,
      error: true,
      success: false,
      errorMessage: action.error.error,
    };
  },
  [types.EDIT_USER_PASSWORD_REQUEST](state) {
    return {
      ...state,
      error: false,
      success: false,
    };
  },
  [types.EDIT_USER_PASSWORD_RESPONSE](state) {
    return {
      ...state,
      // user: action.response,
      error: false,
      success: true,
      successMessage: 'Password Changed',
    };
  },
  [types.EDIT_USER_PASSWORD_FAILED](state, action) {
    return {
      ...state,
      error: true,
      success: false,
      errorMessage: action.error.error,
    };
  },

  [types.CLOSE_USER_ERROR_MESSAGE](state) {
    return {
      ...state,
      error: false,
    };
  },
  [types.CLOSE_USER_SUCCESS_MESSAGE](state) {
    return {
      ...state,
      success: false,
    };
  },
});

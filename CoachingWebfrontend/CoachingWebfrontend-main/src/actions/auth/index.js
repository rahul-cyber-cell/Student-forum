import * as types from './types';

export function requestLogin(mobileNumber, otp, institutionCode) {
  return {
    type: types.LOGIN_REQUEST,
    mobileNumber : mobileNumber,
    otp : otp,
    institutionCode : institutionCode,
  };
}

export function requestOTP(mobileNumber) {
  return {
    type : types.OTP_REQUEST,
    mobileNumber : mobileNumber,
  }
}

export function loginFailed(error) {
  return {
    type: types.LOGIN_FAILED,
    error,
  };
}

export function onLoginResponse(response) {
  return {
    type: types.LOGIN_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.LOGIN_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.LOGIN_DISABLE_LOADER,
  };
}

export function logOut() {
  return {
    type: types.LOG_OUT,
  };
}

export function requestTypes(code) {
  return {
    type: types.GET_LOGIN_USER_TYPES_REQUEST,
    code,
  };
}

export function typesFailed(error) {
  return {
    type: types.GET_LOGIN_USER_TYPES_FAILED,
    error,
  };
}

export function onTypesResponse(response) {
  return {
    type: types.GET_LOGIN_USER_TYPES_RESPONSE,
    response,
  };
}

export function clearTypes() {
  return {
    type: types.CLEAR_LOGIN_USER_TYPES_REQUEST,
  };
}

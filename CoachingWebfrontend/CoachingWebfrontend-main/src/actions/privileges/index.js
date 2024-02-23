import * as types from './types';

export function getRequest(userType) {
  return {
    type: types.GET_PRIVILEGES_REQUEST,
    userType,
  };
}

export function getFailed(error) {
  return {
    type: types.GET_PRIVILEGES_FAILED,
    error,
  };
}

export function getResponse(data) {
  return {
    type: types.GET_PRIVILEGES_RESPONSE,
    data,
  };
}
export function getUserRequest(userType) {
  return {
    type: types.GET_USERS_PRIVILEGES_REQUEST,
    userType,
  };
}

export function getUserFailed(error) {
  return {
    type: types.GET_USERS_PRIVILEGES_FAILED,
    error,
  };
}

export function getUserResponse(data) {
  return {
    type: types.GET_USERS_PRIVILEGES_RESPONSE,
    data,
  };
}

export function updateRequest(id, data) {
  return {
    type: types.UPDATE_PRIVILEGES_REQUEST,
    id,
    data,
  };
}

export function updateFailed(error) {
  return {
    type: types.UPDATE_PRIVILEGES_FAILED,
    error,
  };
}

export function updateResponse(data) {
  return {
    type: types.UPDATE_PRIVILEGES_RESPONSE,
    data,
  };
}

export function updateEnableLoader() {
  return {
    type: types.ENABLE_UPDATE_PRIVILEGES_LOADER,
  };
}

export function updateDisableLoader() {
  return {
    type: types.DISABLE_UPDATE_PRIVILEGES_LOADER,
  };
}

export function getEnableLoader() {
  return {
    type: types.ENABLE_GET_PRIVILEGES_LOADER,
  };
}

export function getDisableLoader() {
  return {
    type: types.DISABLE_GET_PRIVILEGES_LOADER,
  };
}

export function closeSuccess() {
  return {
    type: types.CLOSE_PRIVILEGES_SUCCESS_MESSAGE,
  };
}

export function closeError() {
  return {
    type: types.CLOSE_PRIVILEGES_ERROR_MESSAGE,
  };
}

export function getAdminRequest() {
  return {
    type: types.GET_ADMIN_PRIVILEGES_REQUEST,
  };
}

export function getAdminFailed(error) {
  return {
    type: types.GET_ADMIN_PRIVILEGES_FAILED,
    error,
  };
}

export function getAdminResponse(data) {
  return {
    type: types.GET_ADMIN_PRIVILEGES_RESPONSE,
    data,
  };
}

export function getSuperAdminRequest() {
  return {
    type: types.GET_SUPER_ADMIN_PRIVILEGES_REQUEST,
  };
}

export function getSuperAdminFailed(error) {
  return {
    type: types.GET_SUPER_ADMIN_PRIVILEGES_FAILED,
    error,
  };
}

export function getSuperAdminResponse(data) {
  return {
    type: types.GET_ADMIN_PRIVILEGES_RESPONSE,
    data,
  };
}

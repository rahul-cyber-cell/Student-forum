import * as types from './types';

export function resetUserState() {
  return {
    type: types.RESET_USER_STATE
  }
}

export function getRequest(query) {
  return {
    type: types.GET_USER_REQUEST,
    query
  };
}

export function getFailed(error) {
  return {
    type: types.GET_USER_FAILED,
    error,
  };
}

export function getResponse(response) {
  return {
    type: types.GET_USER_RESPONSE,
    response,
  };
}
export function editRequest(data) {
  return {
    type: types.EDIT_USER_REQUEST,
    data,
  };
}

export function editFailed(error) {
  return {
    type: types.EDIT_USER_FAILED,
    error,
  };
}

export function editResponse(response) {
  return {
    type: types.EDIT_USER_RESPONSE,
    response,
  };
}
export function editImageRequest(data) {
  return {
    type: types.EDIT_USER_IMAGE_REQUEST,
    data,
  };
}

export function editImageFailed(error) {
  return {
    type: types.EDIT_USER_IMAGE_FAILED,
    error,
  };
}

export function editImageResponse(response) {
  return {
    type: types.EDIT_USER_IMAGE_RESPONSE,
    response,
  };
}
export function editPasswordRequest(data) {
  return {
    type: types.EDIT_USER_PASSWORD_REQUEST,
    data,
  };
}

export function editPasswordFailed(error) {
  return {
    type: types.EDIT_USER_PASSWORD_FAILED,
    error,
  };
}

export function editPasswordResponse(response) {
  return {
    type: types.EDIT_USER_PASSWORD_RESPONSE,
    response,
  };
}

export function closeSuccess() {
  return { type: types.CLOSE_USER_SUCCESS_MESSAGE };
}

export function closeError() {
  return { type: types.CLOSE_USER_ERROR_MESSAGE };
}

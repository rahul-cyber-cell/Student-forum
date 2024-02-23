import * as types from './types';

export function addRequest(data) {
  return {
    type: types.ADD_BATCH_REQUEST,
    data,
  };
}

export function addResponse(data) {
  return {
    type: types.ADD_BATCH_RESPONSE,
    data,
  };
}

export function addFailed(error) {
  return {
    type: types.ADD_BATCH_FAILED,
    error,
  };
}

export function getAllRequest() {
  return {
    type: types.GET_ALL_BATCH_REQUEST,
  };
}

export function getAllResponse(data) {
  console.log("getAllResponse Called")
  return {
    type: types.GET_ALL_BATCH_RESPONSE,
    data : data,
  };
}

export function getAllFailed(error) {
  return {
    type: types.GET_ALL_BATCH_FAILED,
    error,
  };
}

export function getRequest(query) {
  return {
    type: types.GET_BATCH_REQUEST,
    query,
  };
}

export function getResponse(data) {
  return {
    type: types.GET_BATCH_RESPONSE,
    data,
  };
}

export function getFailed(error) {
  return {
    type: types.GET_BATCH_FAILED,
    error,
  };
}
export function editRequest(id, data) {
  return {
    type: types.EDIT_BATCH_REQUEST,
    id,
    data,
  };
}

export function editResponse(data) {
  return {
    type: types.EDIT_BATCH_RESPONSE,
    data,
  };
}

export function editFailed(error) {
  return {
    type: types.EDIT_BATCH_FAILED,
    error,
  };
}
export function deleteRequest(id) {
  console.log(id);
  return {
    type: types.DELETE_BATCH_REQUEST,
    id,
  };
}

export function deleteResponse(data) {
  return {
    type: types.DELETE_BATCH_RESPONSE,
    data,
  };
}

export function deleteFailed(error) {
  return {
    type: types.DELETE_BATCH_FAILED,
    error,
  };
}

export function addEnableLoader() {
  return {
    type: types.ENABLE_ADD_BATCH_LOADER,
  };
}
export function addDisableLoader() {
  return {
    type: types.DISABLE_ADD_BATCH_LOADER,
  };
}

export function getCourseBatchRequest(id) {
  return {
    type: types.GET_COURSES_BATCH_REQUEST,
    id,
  };
}

export function getCourseBatchResponse(data) {
  return {
    type: types.GET_COURSES_BATCH_RESPONSE,
    data,
  };
}

export function getCourseBatchFailed(error) {
  return {
    type: types.GET_COURSES_BATCH_FAILED,
    error,
  };
}

export function closeSuccess() {
  return {
    type: types.CLOSE_BATCH_SUCCESS_MESSAGE,
  };
}
export function closeError() {
  return {
    type: types.CLOSE_BATCH_ERROR_MESSAGE,
  };
}

export function clearBatchList() {
  return {
    type: types.CLEAR_BATCH_LIST,
  };
}

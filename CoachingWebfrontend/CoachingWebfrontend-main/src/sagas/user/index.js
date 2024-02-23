import { put, call, takeEvery } from 'redux-saga/effects';
import * as casteActions from '../../actions/user';
import * as types from '../../actions/user/types';
import API from '../../api/ApiConstants';
import axios from 'axios';

function editImageApi(token, data) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.patch(`${API.BASE_URL}/${API.USER}/pic`, data, {
    headers,
  });
}

function editPasswordApi(token, data) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.patch(`${API.BASE_URL}/${API.USER}/password`, data, {
    headers,
  });
}

function editApi(token, data) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.patch(`${API.BASE_URL}/${API.USER}`, data, {
    headers,
  });
}

function getApi(token, query) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.get(`${API.BASE_URL}/${API.USER}${query ? query : ''}`, { headers });
}

function* getUserAsync(action) {
  try {
    const token = yield call(getToken);
    const response = yield call(getApi, token, action.query);
    console.log(response);
    yield put(casteActions.getResponse(response.data));
  } catch (e) {
    console.log(e);
    yield put(casteActions.getFailed(e.response.data));
  }
}

function* editUserAsync(action) {
  try {
    const token = yield call(getToken);
    const response = yield call(editApi, token, action.data);
    yield put(casteActions.editResponse(response.data));
  } catch (e) {
    console.log(e);
    yield put(casteActions.editFailed(e.response.data));
  }
}
function* editImageAsync(action) {
  try {
    const token = yield call(getToken);
    const response = yield call(editImageApi, token, action.data);
    yield put(casteActions.editImageResponse(response.data));
  } catch (e) {
    console.log(e);
    yield put(casteActions.editImageFailed(e.response.data));
  }
}
function* editPasswordAsync(action) {
  try {
    const token = yield call(getToken);
    const response = yield call(editPasswordApi, token, action.data);
    yield put(casteActions.editPasswordResponse(response.data));
  } catch (e) {
    console.log(e);
    yield put(casteActions.editPasswordFailed(e.response.data));
  }
}

export function* getUserSaga() {
  yield takeEvery(types.GET_USER_REQUEST, getUserAsync);
}

export function* editUserSaga() {
  yield takeEvery(types.EDIT_USER_REQUEST, editUserAsync);
}

export function* editUserImageSaga() {
  yield takeEvery(types.EDIT_USER_IMAGE_REQUEST, editImageAsync);
}

export function* editUserPasswordSaga() {
  yield takeEvery(types.EDIT_USER_PASSWORD_REQUEST, editPasswordAsync);
}

const getToken = () => {
  return localStorage.getItem('erpToken');
};

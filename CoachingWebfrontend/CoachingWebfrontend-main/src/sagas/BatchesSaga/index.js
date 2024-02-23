import { put, call, takeEvery } from 'redux-saga/effects';
import * as batchActions from '../../actions/batch';
import * as types from '../../actions/batch/types';
import API from '../../api/ApiConstants';
import axios from 'axios';
import { useHistory } from 'react-router';

function addBatchApi(token, data) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.post(`${API.BASE_URL}/coachingapp/batch/add`, data, { headers }).then(()=>window.location.reload());
}
function getCoursesBatchApi(token, id) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.get(`${API.BASE_URL}coachingapp/batch/${id}`, { headers });
}
function getApi(token, query) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.get(`${API.BASE_URL}/coachingapp/batch${query ? query : ''}`, {
    headers,
  });
}
function getAllApi(token) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.get(`${API.BASE_URL}/coachingapp/batch/`, {
    headers,
  });
}

function deleteApi(token, id) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.delete(`${API.BASE_URL}/coachingapp/batch/${id}`, { headers });
}
function editApi(token, id, data) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.patch(`${API.BASE_URL}/coachingapp/Batch/${id}`, data, { headers });
}

function* addBatchAync(action) {
  try {
    // yield put(batchActions.addEnableLoader());
    const token = yield call(getToken);
    const response = yield call(addBatchApi, token, action.data);
    yield put(batchActions.addResponse(response.data));
    yield put(batchActions.addDisableLoader());
  } catch (e) {
    console.log(e);
    yield put(batchActions.addFailed(e.response.data));
    yield put(batchActions.addDisableLoader());
  }
}

function* getAllAsync(action) {
  try {
    // yield put(batchActions.addEnableLoader());
    const token = yield call(getToken);
    const response = yield call(getAllApi, token);
    yield put(batchActions.getAllResponse(response.data));
    console.log(response );
    // yield put(batchActions.addDisableLoader());
  } catch (e) {
    console.log(e);
    yield put(batchActions.getAllFailed(e.response.data));
    // yield put(batchActions.addDisableLoader());
  }
}
function* getCoursesBatchAsync(action) {
  try {
    const token = yield call(getToken);
    const response = yield call(getCoursesBatchApi, token, action.id);
    yield put(batchActions.getCourseBatchResponse(response.data));
  } catch (e) {
    console.log(e);
    yield put(batchActions.getCourseBatchFailed(e.response.data));
  }
}
function* getAsync(action) {
  try {
    const token = yield call(getToken);
    const response = yield call(getApi, token, action.query);
    yield put(batchActions.getResponse(response.data));
  } catch (e) {
    console.log(e);
    yield put(batchActions.getFailed(e.response.data));
  }
}
function* deleteAsync(action) {
  try {
    const token = yield call(getToken);
    const response = yield call(deleteApi, token, action.id);
    yield put(batchActions.deleteResponse(response.data));
  } catch (e) {
    console.log(e);
    yield put(batchActions.deleteFailed(e.response.data));
  }
}
function* editAsync(action) {
  try {
    const token = yield call(getToken);
    const response = yield call(editApi, token, action.id, action.data);
    yield put(batchActions.editResponse(response.data));
  } catch (e) {
    console.log(e);
    yield put(batchActions.editFailed(e.response.data));
  }
}

export function* addBatchSaga() {
  yield takeEvery(types.ADD_BATCH_REQUEST, addBatchAync);
}

export function* getCoursesBatchSaga() {
  yield takeEvery(types.GET_COURSES_BATCH_REQUEST, getCoursesBatchAsync);
}

export function* getAllBatchSaga() {
  yield takeEvery(types.GET_ALL_BATCH_REQUEST, getAllAsync);
}

export function* getBatchSaga() {
  yield takeEvery(types.GET_BATCH_REQUEST, getAsync);
}

export function* deleteBatchSaga() {
  yield takeEvery(types.DELETE_BATCH_REQUEST, deleteAsync);
}
export function* editBatchSaga() {
  yield takeEvery(types.EDIT_BATCH_REQUEST, editAsync);
}

const getToken = () => {
  return localStorage.getItem('accessToken');
};

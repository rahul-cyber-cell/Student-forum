import { put, call, takeEvery } from 'redux-saga/effects';
import * as timingActions from '../../actions/timing';
import * as types from '../../actions/timing/types';
import API from '../../api/ApiConstants';
import axios from 'axios';

function addTimingApi(token, data) {
    const headers = { Authrization: `Bearer ${token}` };
    return axios.post(`${API.BATCH}/coachingapp/batchtiming/add`, data, { headers });
}
function getTimingApi(token, id) {
    const headers = { Authrization: `Bearer ${token}` };
    return axios.get(`${API.BATCH}/coachingapp/batchtiming?batchId=${id}`, { headers });
}
function editTimingApi(token, id, data) {
    const headers = { Authrization: `Bearer ${token}` };
    return axios.patch(`${API.BATCH}/coachingapp/batchtiming/edit?TimingId=${id}`, data, { headers });
}
function deleteTimingApi(token, id) {
    const headers = { Authrization: `Bearer ${token}` };
    return axios.delete(`${API.BATCH}/coachingapp/batchtiming/delete?TimingId=${id}`, { headers });
}


function* getTimingAsync(action) {
    try {
        const token = yield call(getToken);
        const response = yield call(getTimingApi, token, action.id);
        yield put(timingActions.getResponse(response.data));
        console.log(response);
      } catch (e) {
        console.log(e);
        yield put(timingActions.getFailed(e.response.data));
      }
}

function* addTimingAsync(action) {
    try {
        const token = yield call(getToken);
        const response = yield call(addTimingApi, token, action.data);
        yield put(timingActions.addResponse(response.data));
        console.log(response);
      } catch (e) {
        console.log(e);
        yield put(timingActions.addFailed(e.response.data));
      }
}

function* editTimingAsync(action) {
    try {
        const token = yield call(getToken);
        const response = yield call(editTimingApi, token, action.id, action.data);
        yield put(timingActions.editResponse(response.data));
        console.log(response);
      } catch (e) {
        console.log(e);
        yield put(timingActions.editFailed(e.response.data));
      }
}

function* deleteTimingAsync(action) {
    try {
        const token = yield call(getToken);
        const response = yield call(deleteTimingApi, token, action.id);
        yield put(timingActions.deleteResponse(response.data));
        console.log(response);
      } catch (e) {
        console.log(e);
        yield put(timingActions.deleteFailed(e.response.data));
      }
}

export function* addTimingSaga() {
    yield takeEvery(types.ADD_TIMING_REQUEST, addTimingAsync);
}

export function* getTimingSaga() {
    yield takeEvery(types.GET_TIMING_REQUEST, getTimingAsync);
}

export function* editTimingSaga() {
    yield takeEvery(types.EDIT_TIMING_REQUEST, editTimingAsync);
}

export function* deleteTimingSaga() {
    yield takeEvery(types.DELETE_TIMING_REQUEST, deleteTimingAsync);
}

const getToken = () => {
  return localStorage.getItem('accessToken');
};

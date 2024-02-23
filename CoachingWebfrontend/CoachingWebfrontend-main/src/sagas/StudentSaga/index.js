import { put, call, takeEvery } from 'redux-saga/effects';
import * as studentActions from '../../actions/student';
import * as types from '../../actions/student/types';
import API from '../../api/ApiConstants';
import axios from 'axios';

function getAllApi(token) {
    const headers = { Authorization: `Bearer ${token}` };
    return axios.get(`${API.BASE_URL}/coachingapp/batchstudent/all`, { headers });
}
function getApi(token, id) {
    const headers = { Authorization: `Bearer ${token}` };
    return axios.get(`${API.BASE_URL}/coachingapp/batchstudent/?batchId=${id}`, { headers });
}
function addApi(token, data) {
    const headers = { Authorization: `Bearer ${token}` };
    return axios.post(`${API.BASE_URL}/coachingapp/batchstudent/add`, data, { headers });
}
function editApi(token, id, data) {
    const headers = { Authorization: `Bearer ${token}` };
    return axios.patch(`${API.BASE_URL}/coachingapp/batchstudent/edit/?teacherId=${id}`, data, { headers });
}
function deleteApi(token, fid, bid) {
    const headers = { Authorization: `Bearer ${token}` };
    return axios.delete(`${API.BASE_URL}/coachingapp/batchstudent/delete/?batchId=${bid}&teacherId=${fid}`, { headers });
}


function* getAllStudentAsync(action) {
    try {
        const token = yield call(getToken);
        const response = yield call(getAllApi, token);
        yield put(studentActions.getAllResponse(response.data));
        console.log(response);
      } catch (e) {
        console.log(e);
        yield put(studentActions.getAllFailed(e.response.data));
      }
}

function* getStudentAsync(action) {
    try {
        const token = yield call(getToken);
        const response = yield call(getApi, token, action.batchid);
        yield put(studentActions.getResponse(response.data));
        console.log(response);
      } catch (e) {
        console.log(e);
        yield put(studentActions.getFailed(e.response.data));
      }
}

function* addStudentAsync(action) {
    try {
        const token = yield call(getToken);
        const response = yield call(addApi, token, action.data);
        yield put(studentActions.addResponse(response.data));
        console.log(response);
      } catch (e) {
        console.log(e);
        yield put(studentActions.addFailed(e.response.data));
      }
}

function* editStudentAsync(action) {
    try {
        const token = yield call(getToken);
        const response = yield call(editApi, token, action.id, action.data);
        yield put(studentActions.editResponse(response.data));
        console.log(response);
      } catch (e) {
        console.log(e);
        yield put(studentActions.editFailed(e.response.data));
      }
}

function* deleteStudentAsync(action) {
    try {
        const token = yield call(getToken);
        const response = yield call(deleteApi, token, action.batchid, action.id);
        yield put(studentActions.deleteResponse(response.data));
        console.log(response);
      } catch (e) {
        console.log(e);
        yield put(studentActions.deleteFailed(e.response.data));
      }
}

export function* addStudentSaga() {
    yield takeEvery(types.ADD_STUDENT_REQUEST, addStudentAsync);
}

export function* getAllStudentSaga() {
    yield takeEvery(types.GET_ALL_STUDENT_REQUEST, getAllStudentAsync);
}

export function* getStudentSaga() {
    yield takeEvery(types.GET_STUDENT_REQUEST, getStudentAsync);
}

export function* editStudentSaga() {
    yield takeEvery(types.EDIT_STUDENT_REQUEST, editStudentAsync);
}

export function* deleteStudentSaga() {
    yield takeEvery(types.DELETE_STUDENT_REQUEST, deleteStudentAsync);
}

const getToken = () => {
  return localStorage.getItem('accessToken');
};

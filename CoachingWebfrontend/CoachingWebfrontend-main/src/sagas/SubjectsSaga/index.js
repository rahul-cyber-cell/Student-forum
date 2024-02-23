import { put, call, takeEvery } from 'redux-saga/effects';
import * as subjectsActions from '../../actions/subjects';
import * as types from '../../actions/subjects/types';
import API from '../../api/ApiConstants';
import axios from 'axios';

function addSubjectsApi(token, data) {
    const headers = { Authrization: `Bearer ${token}` };
    return axios.post(`${API.BATCH}/coachingapp/batchsubjects/add`, data, { headers });
}
function getSubjectsApi(token, id) {
    const headers = { Authrization: `Bearer ${token}` };
    return axios.get(`${API.BATCH}/coachingapp/batchsubjects?batchId=${id}`, { headers });
}
function editSubjectsApi(token, id, data) {
    const headers = { Authrization: `Bearer ${token}` };
    return axios.patch(`${API.BATCH}/coachingapp/batchsubjects/edit?subjectsId=${id}`, data, { headers });
}
function deleteSubjectsApi(token, id) {
    const headers = { Authrization: `Bearer ${token}` };
    return axios.delete(`${API.BATCH}/coachingapp/batchsubjects/delete?subjectsId=${id}`, { headers });
}


function* getSubjectsAsync(action) {
    try {
        const token = yield call(getToken);
        const response = yield call(getSubjectsApi, token, action.id);
        yield put(subjectsActions.getResponse(response.data));
        console.log(response);
      } catch (e) {
        console.log(e);
        yield put(subjectsActions.getFailed(e.response.data));
      }
}

function* addSubjectsAsync(action) {
    try {
        const token = yield call(getToken);
        const response = yield call(addSubjectsApi, token, action.data);
        yield put(subjectsActions.addResponse(response.data));
        console.log(response);
      } catch (e) {
        console.log(e);
        yield put(subjectsActions.addFailed(e.response.data));
      }
}

function* editSubjectsAsync(action) {
    try {
        const token = yield call(getToken);
        const response = yield call(editSubjectsApi, token, action.id, action.data);
        yield put(subjectsActions.editResponse(response.data));
        console.log(response);
      } catch (e) {
        console.log(e);
        yield put(subjectsActions.editFailed(e.response.data));
      }
}

function* deleteSubjectsAsync(action) {
    try {
        const token = yield call(getToken);
        const response = yield call(deleteSubjectsApi, token, action.id);
        yield put(subjectsActions.deleteResponse(response.data));
        console.log(response);
      } catch (e) {
        console.log(e);
        yield put(subjectsActions.deleteFailed(e.response.data));
      }
}

export function* addSubjectsSaga() {
    yield takeEvery(types.ADD_SUBJECTS_REQUEST, addSubjectsAsync);
}

export function* getSubjectsSaga() {
    yield takeEvery(types.GET_SUBJECTS_REQUEST, getSubjectsAsync);
}

export function* editSubjectsSaga() {
    yield takeEvery(types.EDIT_SUBJECTS_REQUEST, editSubjectsAsync);
}

export function* deleteSubjectsSaga() {
    yield takeEvery(types.DELETE_SUBJECTS_REQUEST, deleteSubjectsAsync);
}

const getToken = () => {
  return localStorage.getItem('accessToken');
};

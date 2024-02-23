import { put, call, takeEvery } from 'redux-saga/effects';
import * as facultyActions from '../../actions/faculty';
import * as types from '../../actions/faculty/types';
import API from '../../api/ApiConstants';
import axios from 'axios';

function getAllApi(token) {
    const headers = { Authrization: `Bearer ${token}` };
    return axios.get(`${API.BASE_URL}/coachingapp/batchfaculty/all`, { headers });
}
function getApi(token, id) {
    const headers = { Authrization: `Bearer ${token}` };
    return axios.get(`${API.BASE_URL}/coachingapp/batchfaculty?batchId=${id}`, { headers });
}
function addApi(token, data) {
    const headers = { Authrization: `Bearer ${token}` };
    return axios.post(`${API.BASE_URL}/coachingapp/batchfaculty/add`, data, { headers });
}
function editApi(token, id, data) {
    const headers = { Authrization: `Bearer ${token}` };
    return axios.patch(`${API.BASE_URL}/coachingapp/batchfaculty/edit/?teacherId=${id}`, data, { headers });
}
function deleteApi(token, fid, bid) {
    const headers = { Authrization: `Bearer ${token}` };
    return axios.delete(`${API.BASE_URL}/coachingapp/batchfaculty/delete/?batchId=${bid}&teacherId=${fid}`, { headers });
}


function* getAllFacultyAsync(action) {
    try {
        const token = yield call(getToken);
        const response = yield call(getAllApi, token);
        yield put(facultyActions.getAllResponse(response.data));
        console.log(response);
      } catch (e) {
        console.log(e);
        yield put(facultyActions.getAllFailed(e.response.data));
      }
}

function* getFacultyAsync(action) {
    try {
        const token = yield call(getToken);
        const response = yield call(getApi, token, action.batchid);
        yield put(facultyActions.getResponse(response.data));
        console.log(response);
      } catch (e) {
        console.log(e);
        yield put(facultyActions.getFailed(e.response.data));
      }
}

function* addFacultyAsync(action) {
    try {
        const token = yield call(getToken);
        const response = yield call(addApi, token, action.data);
        yield put(facultyActions.addResponse(response.data));
        console.log(response);
      } catch (e) {
        console.log(e);
        yield put(facultyActions.addFailed(e.response.data));
      }
}

function* editFacultyAsync(action) {
    try {
        const token = yield call(getToken);
        const response = yield call(editApi, token, action.id, action.data);
        yield put(facultyActions.editResponse(response.data));
        console.log(response);
      } catch (e) {
        console.log(e);
        yield put(facultyActions.editFailed(e.response.data));
      }
}

function* deleteFacultyAsync(action) {
    try {
        const token = yield call(getToken);
        const response = yield call(deleteApi, token, action.batchid, action.id);
        yield put(facultyActions.deleteResponse(response.data));
        console.log(response);
      } catch (e) {
        console.log(e);
        yield put(facultyActions.deleteFailed(e.response.data));
      }
}

export function* addFacultySaga() {
    yield takeEvery(types.ADD_FACULTY_REQUEST, addFacultyAsync);
}

export function* getAllFacultySaga() {
    yield takeEvery(types.GET_ALL_FACULTY_REQUEST, getAllFacultyAsync);
}

export function* getFacultySaga() {
    yield takeEvery(types.GET_FACULTY_REQUEST, getFacultyAsync);
}

export function* editFacultySaga() {
    yield takeEvery(types.EDIT_FACULTY_REQUEST, editFacultyAsync);
}

export function* deleteFacultySaga() {
    yield takeEvery(types.DELETE_FACULTY_REQUEST, deleteFacultyAsync);
}

const getToken = () => {
  return localStorage.getItem('accessToken');
};

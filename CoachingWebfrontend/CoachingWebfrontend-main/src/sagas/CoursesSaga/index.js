import { put, call, takeEvery } from 'redux-saga/effects';
import * as courseActions from '../../actions/course';
import * as types from '../../actions/course/types';
import API from '../../api/ApiConstants';
import axios from 'axios';

function addCourseApi(token, data) {
    const headers = { Authrization: `Bearer ${token}` };
    return axios.post(`${API.BATCH}/coachingapp/batchcourse/add`, data, { headers });
}
function getCourseApi(token, id) {
    const headers = { Authrization: `Bearer ${token}` };
    return axios.get(`${API.BATCH}/coachingapp/batchcourse?batchId=${id}`, { headers });
}
function editCourseApi(token, id, data) {
    const headers = { Authrization: `Bearer ${token}` };
    return axios.patch(`${API.BATCH}/coachingapp/batchcourse/edit?courseId=${id}`, data, { headers });
}
function deleteCourseApi(token, id) {
    const headers = { Authrization: `Bearer ${token}` };
    return axios.delete(`${API.BATCH}/coachingapp/batchcourse/delete?courseId=${id}`, { headers });
}


function* getCourseAsync(action) {
    try {
        const token = yield call(getToken);
        const response = yield call(getCourseApi, token, action.id);
        yield put(courseActions.getResponse(response.data));
        console.log(response);
      } catch (e) {
        console.log(e);
        yield put(courseActions.getFailed(e.response.data));
      }
}

function* addCourseAsync(action) {
    try {
        const token = yield call(getToken);
        const response = yield call(addCourseApi, token, action.data);
        yield put(courseActions.addResponse(response.data));
        console.log(response);
      } catch (e) {
        console.log(e);
        yield put(courseActions.addFailed(e.response.data));
      }
}

function* editCourseAsync(action) {
    try {
        const token = yield call(getToken);
        const response = yield call(editCourseApi, token, action.id, action.data);
        yield put(courseActions.editResponse(response.data));
        console.log(response);
      } catch (e) {
        console.log(e);
        yield put(courseActions.editFailed(e.response.data));
      }
}

function* deleteCourseAsync(action) {
    try {
        const token = yield call(getToken);
        const response = yield call(deleteCourseApi, token, action.id);
        yield put(courseActions.deleteResponse(response.data));
        console.log(response);
      } catch (e) {
        console.log(e);
        yield put(courseActions.deleteFailed(e.response.data));
      }
}

export function* addCourseSaga() {
    yield takeEvery(types.ADD_COURSE_REQUEST, addCourseAsync);
}

export function* getCourseSaga() {
    yield takeEvery(types.GET_COURSE_REQUEST, getCourseAsync);
}

export function* editCourseSaga() {
    yield takeEvery(types.EDIT_COURSE_REQUEST, editCourseAsync);
}

export function* deleteCourseSaga() {
    yield takeEvery(types.DELETE_COURSE_REQUEST, deleteCourseAsync);
}

const getToken = () => {
  return localStorage.getItem('accessToken');
};

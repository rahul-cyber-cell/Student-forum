import { put, call, takeEvery } from 'redux-saga/effects';
import * as categoryActions from '../../actions/category';
import * as types from '../../actions/category/types';
import API from '../../api/ApiConstants';
import axios from 'axios';

function addCategoryApi(token, data) {
    const headers = { Authrization: `Bearer ${token}` };
    return axios.post(`${API.BASE_URL}/coachingapp/batchCategory/add`, data, { headers });
}
function getCategoryApi(token, id) {
    const headers = { Authrization: `Bearer ${token}` };
    return axios.get(`${API.BASE_URL}/coachingapp/batchCategory?batchId=${id}`, { headers });
}
function editCategoryApi(token, id, data) {
    const headers = { Authrization: `Bearer ${token}` };
    return axios.patch(`${API.BASE_URL}/coachingapp/batchCategory/edit?categoryId=${id}`, data, { headers });
}
function deleteCategoryApi(token, id) {
    const headers = { Authrization: `Bearer ${token}` };
    return axios.delete(`${API.BASE_URL}/coachingapp/batchCategory/delete?categoryId=${id}`, { headers });
}


function* getCategoryAsync(action) {
    try {
        const token = yield call(getToken);
        const response = yield call(getCategoryApi, token, action.id);
        yield put(categoryActions.getResponse(response.data));
        console.log(response);
      } catch (e) {
        console.log(e);
        yield put(categoryActions.getFailed(e.response.data));
      }
}

function* addCategoryAsync(action) {
    try {
        const token = yield call(getToken);
        const response = yield call(addCategoryApi, token, action.data);
        yield put(categoryActions.addResponse(response.data));
        console.log(response);
      } catch (e) {
        console.log(e);
        yield put(categoryActions.addFailed(e.response.data));
      }
}

function* editCategoryAsync(action) {
    try {
        const token = yield call(getToken);
        const response = yield call(editCategoryApi, token, action.id, action.data);
        yield put(categoryActions.editResponse(response.data));
        console.log(response);
      } catch (e) {
        console.log(e);
        yield put(categoryActions.editFailed(e.response.data));
      }
}

function* deleteCategoryAsync(action) {
    try {
        const token = yield call(getToken);
        const response = yield call(deleteCategoryApi, token, action.id);
        yield put(categoryActions.deleteResponse(response.data));
        console.log(response);
      } catch (e) {
        console.log(e);
        yield put(categoryActions.deleteFailed(e.response.data));
      }
}

export function* addCategorySaga() {
    yield takeEvery(types.ADD_CATEGORY_REQUEST, addCategoryAsync);
}

export function* getCategorySaga() {
    yield takeEvery(types.GET_CATEGORY_REQUEST, getCategoryAsync);
}

export function* editCategorySaga() {
    yield takeEvery(types.EDIT_CATEGORY_REQUEST, editCategoryAsync);
}

export function* deleteCategorySaga() {
    yield takeEvery(types.DELETE_CATEGORY_REQUEST, deleteCategoryAsync);
}

const getToken = () => {
  return localStorage.getItem('accessToken');
};

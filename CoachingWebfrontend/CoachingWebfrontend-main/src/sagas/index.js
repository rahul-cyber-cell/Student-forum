import { all } from "@redux-saga/core/effects";
import { loginSaga, otpSaga } from "./loginSaga";
import {
    addBatchSaga,
    getCoursesBatchSaga,
    getBatchSaga,
    getAllBatchSaga,
    deleteBatchSaga,
    editBatchSaga,
  }
    from "./BatchesSaga";

import {
    addCategorySaga,
    getCategorySaga,
    editCategorySaga,
    deleteCategorySaga,
} from './CategorySaga'

import {
    addCourseSaga,
    getCourseSaga,
    editCourseSaga,
    deleteCourseSaga,
} from './CoursesSaga'

import {
    addFacultySaga,
    getAllFacultySaga,
    getFacultySaga,
    editFacultySaga,
    deleteFacultySaga,
} from './FacultySaga'

import {
    addStudentSaga,
    getAllStudentSaga,
    getStudentSaga,
    editStudentSaga,
    deleteStudentSaga,
} from './StudentSaga'

import {
    addSubjectsSaga,
    getSubjectsSaga,
    editSubjectsSaga,
    deleteSubjectsSaga,
} from './SubjectsSaga'

import {
    addTimingSaga,
    getTimingSaga,
    editTimingSaga,
    deleteTimingSaga,
} from './TimingSaga'

export default function* watch(){
    yield all([
        addBatchSaga(),
        getCoursesBatchSaga(),
        getBatchSaga(),
        getAllBatchSaga(),
        deleteBatchSaga(),
        editBatchSaga(),

        addCategorySaga(),
        getCategorySaga(),
        editCategorySaga(),
        deleteCategorySaga(),

        addCourseSaga(),
        getCourseSaga(),
        editCourseSaga(),
        deleteCourseSaga(),

        addFacultySaga(),
        getAllFacultySaga(),
        getFacultySaga(),
        editFacultySaga(),
        deleteFacultySaga(),

        addStudentSaga(),
        getAllStudentSaga(),
        getStudentSaga(),
        editStudentSaga(),
        deleteStudentSaga(),

        addSubjectsSaga(),
        getSubjectsSaga(),
        editSubjectsSaga(),
        deleteSubjectsSaga(),

        addTimingSaga(),
        getTimingSaga(),
        editTimingSaga(),
        deleteTimingSaga(),

        loginSaga(),
        otpSaga(),
    ])
};
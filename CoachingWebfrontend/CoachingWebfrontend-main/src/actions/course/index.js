import * as types from './types';

export function getRequest() {
    return {
        type: types.GET_COURSE_REQUEST,
    };
}

export function getResponse(data) {
    return {
        type: types.GET_COURSE_RESPONSE,
        data,
    };
}

export function getFailed(error) {
    return {
        type: types.GET_COURSE_FAILED,
        error,
    };
}



export function addRequest() {
    return {
        type: types.ADD_COURSE_REQUEST,
    };
}

export function addResponse(data) {
    return {
        type: types.ADD_COURSE_RESPONSE,
        data,
    };
}

export function addFailed(error) {
    return {
        type: types.ADD_COURSE_FAILED,
        error,
    };
}



export function editRequest() {
    return {
        type: types.EDIT_COURSE_REQUEST,
    };
}

export function editResponse(data) {
    return {
        type: types.EDIT_COURSE_RESPONSE,
        data,
    };
}

export function editFailed() {
    return { 
        type: types.EDIT_COURSE_FAILED,
    };
}



export function deleteRequest() {
    return {
        type: types.DELETE_COURSE_REQUEST,
    };
}

export function deleteResponse(data) {
    return {
        type: types.DELETE_COURSE_REQUEST,
        data,
    };
}

export function deleteFailed(error) {
    return {
        type: types.DELETE_COURSE_REQUEST,
        error,
    };
}
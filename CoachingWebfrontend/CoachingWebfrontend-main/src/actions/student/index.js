import * as types from './types';


export function getAllRequest() {
    return {
        type: types.GET_ALL_STUDENT_REQUEST,
    };
}

export function getAllResponse(data) {
    return {
        type: types.GET_ALL_STUDENT_RESPONSE,
        data,
    };
}

export function getAllFailed(error) {
    return {
        type: types.GET_ALL_STUDENT_FAILED,
        error,
    };
}

export function getRequest(batchid) {
    return {
        type: types.GET_STUDENT_REQUEST,
        batchid,
    };
}

export function getResponse(data) {
    return {
        type: types.GET_STUDENT_RESPONSE,
        data,
    };
}

export function getFailed(error) {
    return {
        type: types.GET_STUDENT_FAILED,
        error,
    };
}



export function addRequest() {
    return {
        type: types.ADD_STUDENT_REQUEST,
    };
}

export function addResponse(data) {
    return {
        type: types.ADD_STUDENT_RESPONSE,
        data,
    };
}

export function addFailed(error) {
    return {
        type: types.ADD_STUDENT_FAILED,
        error,
    };
}



export function editRequest() {
    return {
        type: types.EDIT_STUDENT_REQUEST,
    };
}

export function editResponse(data) {
    return {
        type: types.EDIT_STUDENT_RESPONSE,
        data,
    };
}

export function editFailed() {
    return { 
        type: types.EDIT_STUDENT_FAILED,
    };
}



export function deleteRequest() {
    return {
        type: types.DELETE_STUDENT_REQUEST,
    };
}

export function deleteResponse(data) {
    return {
        type: types.DELETE_STUDENT_REQUEST,
        data,
    };
}

export function deleteFailed(error) {
    return {
        type: types.DELETE_STUDENT_REQUEST,
        error,
    };
}
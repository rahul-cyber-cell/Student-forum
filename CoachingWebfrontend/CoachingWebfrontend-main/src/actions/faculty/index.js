import * as types from './types';


export function getAllRequest() {
    return {
        type: types.GET_ALL_FACULTY_REQUEST,
    };
}

export function getAllResponse(data) {
    return {
        type: types.GET_ALL_FACULTY_RESPONSE,
        data,
    };
}

export function getAllFailed(error) {
    return {
        type: types.GET_ALL_FACULTY_FAILED,
        error,
    };
}



export function getRequest() {
    return {
        type: types.GET_FACULTY_REQUEST,
    };
}

export function getResponse(data) {
    return {
        type: types.GET_FACULTY_RESPONSE,
        data,
    };
}

export function getFailed(error) {
    return {
        type: types.GET_FACULTY_FAILED,
        error,
    };
}



export function addRequest() {
    return {
        type: types.ADD_FACULTY_REQUEST,
    };
}

export function addResponse(data) {
    return {
        type: types.ADD_FACULTY_RESPONSE,
        data,
    };
}

export function addFailed(error) {
    return {
        type: types.ADD_FACULTY_FAILED,
        error,
    };
}



export function editRequest() {
    return {
        type: types.EDIT_FACULTY_REQUEST,
    };
}

export function editResponse(data) {
    return {
        type: types.EDIT_FACULTY_RESPONSE,
        data,
    };
}

export function editFailed() {
    return { 
        type: types.EDIT_FACULTY_FAILED,
    };
}



export function deleteRequest() {
    return {
        type: types.DELETE_FACULTY_REQUEST,
    };
}

export function deleteResponse(data) {
    return {
        type: types.DELETE_FACULTY_REQUEST,
        data,
    };
}

export function deleteFailed(error) {
    return {
        type: types.DELETE_FACULTY_REQUEST,
        error,
    };
}
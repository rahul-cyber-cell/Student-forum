import * as types from './types';

export function getRequest() {
    return {
        type: types.GET_SUBJECTS_REQUEST,
    };
}

export function getResponse(data) {
    return {
        type: types.GET_SUBJECTS_RESPONSE,
        data,
    };
}

export function getFailed(error) {
    return {
        type: types.GET_SUBJECTS_FAILED,
        error,
    };
}



export function addRequest() {
    return {
        type: types.ADD_SUBJECTS_REQUEST,
    };
}

export function addResponse(data) {
    return {
        type: types.ADD_SUBJECTS_RESPONSE,
        data,
    };
}

export function addFailed(error) {
    return {
        type: types.ADD_SUBJECTS_FAILED,
        error,
    };
}



export function editRequest() {
    return {
        type: types.EDIT_SUBJECTS_REQUEST,
    };
}

export function editResponse(data) {
    return {
        type: types.EDIT_SUBJECTS_RESPONSE,
        data,
    };
}

export function editFailed() {
    return { 
        type: types.EDIT_SUBJECTS_FAILED,
    };
}



export function deleteRequest() {
    return {
        type: types.DELETE_SUBJECTS_REQUEST,
    };
}

export function deleteResponse(data) {
    return {
        type: types.DELETE_SUBJECTS_REQUEST,
        data,
    };
}

export function deleteFailed(error) {
    return {
        type: types.DELETE_SUBJECTS_REQUEST,
        error,
    };
}
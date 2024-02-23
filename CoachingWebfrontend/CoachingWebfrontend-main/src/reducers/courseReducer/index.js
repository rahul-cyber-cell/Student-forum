import createReducer from '../../utils/createReducer';
import * as types from '../../actions/course/types';


const initialState = {
    error: false,
    success: false,
    courses: [],
    errorMessage: '',
    successMessage: '',
};


export const courseReducer = createReducer(initialState, {

    // GET CATEGORY
    [types.GET_COURSE_REQUEST](state) {
        return {
            ...state,
            errorMessage:'',
            successMessage:'',
        }
    },
    [types.GET_COURSE_RESPONSE](state,action) {
        return {
            ...state,
            success:true,
            successMessage: 'All Courses Retrieved',
            courses : action.data.data,
        }
    },
    [types.GET_COURSE_FAILED](state,action) {
        return {
            ...state,
            error:true,
            errorMessage : action.error,
        }
    },

    // ADD CATEGORY
    [types.ADD_COURSE_REQUEST](state) {
        return {
            ...state,
            errorMessage:'',
            successMessage:'',
        }
    },
    [types.ADD_COURSE_RESPONSE](state,action) {
        return {
            ...state,
            successMessage: 'Successfully Added!',
            success: true,
            courses : [...state.courses, action.data.data],
        }
    },
    [types.ADD_COURSE_FAILED] (state,action) {
        return {
            ...state,
            error:true,
            errorMessage:action.error,
        }
    },
    // EDIT CATEGORY
    [types.EDIT_COURSE_REQUEST] (state) {
        return{
            ...state,
            successMessage:'',
            errorMessage:'',
        }
    },
    [types.EDIT_COURSE_RESPONSE] (state,action) {
        return {
            ...state,
            successMessage:'Course Edited Successfully',
            success: true,
            courses : [...state.courses, action.data.data],
        }
    },
    [types.EDIT_COURSE_FAILED] (state,action) {
        return {
            ...state,
            errorMessage:action.error,
            error:true,
        }
    },
    // DELETE CATEGORY
    [types.DELETE_COURSE_REQUEST] (state) {
        return {
            ...state,
            errorMessage:'',
            successMessage:'',
        }
    },
    [types.DELETE_COURSE_RESPONSE] (state,action) {
        const newList = state.courses.filter(
            (item) => item._id !== action.data._id
            );
        return {
            ...state,
            successMessage:'COurse Deleted Successfully',
            success: true,
            courses:newList,
        }
    },
    [types.DELETE_COURSE_FAILED] (state,action) {
        return {
            ...state,
            error:true,
            errorMessage:action.error,
        }
    },

})
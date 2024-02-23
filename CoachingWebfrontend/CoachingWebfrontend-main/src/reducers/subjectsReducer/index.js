import createReducer from '../../utils/createReducer';
import * as types from '../../actions/subjects/types';


const initialState = {
    error: false,
    success: false,
    subjects: [],
    errorMessage: '',
    successMessage: '',
};


export const subjectsReducer = createReducer(initialState, {

    // GET CATEGORY
    [types.GET_SUBJECTS_REQUEST](state) {
        return {
            ...state,
            errorMessage:'',
            successMessage:'',
        }
    },
    [types.GET_SUBJECTS_RESPONSE](state,action) {
        return {
            ...state,
            success:true,
            successMessage: 'All Catergory Retrieved',
            subjects : action.data.data,
        }
    },
    [types.GET_SUBJECTS_FAILED](state,action) {
        return {
            ...state,
            error:true,
            errorMessage : action.error,
        }
    },

    // ADD CATEGORY
    [types.ADD_SUBJECTS_REQUEST](state) {
        return {
            ...state,
            errorMessage:'',
            successMessage:'',
        }
    },
    [types.ADD_SUBJECTS_RESPONSE](state,action) {
        return {
            ...state,
            successMessage: 'Successfully Added!',
            success: true,
            subjects : [...state.subjects, action.data.data],
        }
    },
    [types.ADD_SUBJECTS_FAILED] (state,action) {
        return {
            ...state,
            error:true,
            errorMessage:action.error,
        }
    },
    // EDIT CATEGORY
    [types.EDIT_SUBJECTS_REQUEST] (state) {
        return{
            ...state,
            successMessage:'',
            errorMessage:'',
        }
    },
    [types.EDIT_SUBJECTS_RESPONSE] (state,action) {
        return {
            ...state,
            successMessage:'Category Edited Successfully',
            success: true,
            subjects : [...state.subjects, action.data.data],
        }
    },
    [types.EDIT_SUBJECTS_FAILED] (state,action) {
        return {
            ...state,
            errorMessage:action.error,
            error:true,
        }
    },
    // DELETE CATEGORY
    [types.DELETE_SUBJECTS_REQUEST] (state) {
        return {
            ...state,
            errorMessage:'',
            successMessage:'',
        }
    },
    [types.DELETE_SUBJECTS_RESPONSE] (state,action) {
        const newList = state.subjects.filter(
            (item) => item._id !== action.data._id
            );
        return {
            ...state,
            successMessage:'Category Deleted Successfully',
            success: true,
            subjects:newList,
        }
    },
    [types.DELETE_SUBJECTS_FAILED] (state,action) {
        return {
            ...state,
            error:true,
            errorMessage:action.error,
        }
    },

})
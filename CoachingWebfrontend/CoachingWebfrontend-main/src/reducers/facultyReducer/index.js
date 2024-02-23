import createReducer from '../../utils/createReducer';
import * as types from '../../actions/faculty/types';


const initialState = {
    error: false,
    success: false,
    errorMessage : '',
    successMessage : '',
    batchID : '',
    facultyList : [],
    allFaculty : [],
}

export const facultyReducer = createReducer(initialState, {
    [types.ADD_FACULTY_REQUEST](state) {
        return {
            ...state,
            error:false,
            success:false,
        }
    },
    [types.ADD_FACULTY_RESPONSE](state,action) {
        return {
            ...state,
            successMessage:'faculty Added Successfully',
            success:true,
            facultyList : [...state.facultyList, action.data],
        }
    },
    [types.ADD_FACULTY_FAILED] (state, action) {
        return {
            error:true,
            errorMessage : action.error,
        }
    },
    [types.GET_ALL_FACULTY_REQUEST](state) {
        return {
            ...state,
            error:false,
            success:false,
        }
    },
    [types.GET_ALL_FACULTY_RESPONSE](state,action) {
        return {
            ...state,
            successMessage:'All faculty Retrieved Successfully',
            success:true,
            allFaculty : action.data,
        }
    },
    [types.GET_ALL_FACULTY_FAILED] (state, action) {
        return {
            error:true,
            errorMessage : action.error,
        }
    },
    [types.GET_FACULTY_REQUEST](state) {
        return {
            ...state,
            error:false,
            success:false,
        }
    },
    [types.GET_FACULTY_RESPONSE](state,action) {
        return {
            ...state,
            successMessage:'faculty Retrieved Successfully',
            success:true,
            facultyList : action.data,
        }
    },
    [types.GET_FACULTY_FAILED] (state, action) {
        return {
            error:true,
            errorMessage : action.error,
        }
    },
    [types.EDIT_FACULTY_REQUEST](state) {
        return {
            ...state,
            error:false,
            success:false,
        }
    },
    [types.EDIT_FACULTY_RESPONSE](state,action) {
        const newList = state.facultyList.map((item) => {
        if (item._id === action.data._id) {
          return action.data;
        }
        return item;
      });
        return {
            ...state,
            successMessage:'faculty Edited Successfully',
            success:true,
            facultyList : newList,
        }
    },
    [types.EDIT_FACULTY_FAILED] (state, action) {
        return {
            error:true,
            errorMessage : action.error,
        }
    },
    [types.DELETE_FACULTY_REQUEST](state) {
        return {
            ...state,
            error:false,
            success:false,
        }
    },
    [types.DELETE_FACULTY_RESPONSE](state,action) {
        const newList = state.facultyList.filter(
            (item) => item._id !== action.data._id
          );
        return {
            ...state,
            successMessage:'faculty Deleted Successfully',
            success:true,
            facultyList : newList,
        }
    },
    [types.DELETE_FACULTY_FAILED] (state, action) {
        return {
            error:true,
            errorMessage : action.error,
        }
    }


})
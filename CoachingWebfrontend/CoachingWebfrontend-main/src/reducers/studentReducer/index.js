import createReducer from '../../utils/createReducer';
import * as types from '../../actions/student/types';


const initialState = {
    error: false,
    success: false,
    errorMessage : '',
    successMessage : '',
    batchID : '',
    studentList : [],
    allStudents : [],
}

export const studentReducer = createReducer(initialState, {
    [types.ADD_STUDENT_REQUEST](state) {
        return {
            ...state,
            error:false,
            success:false,
        }
    },
    [types.ADD_STUDENT_RESPONSE](state,action) {
        return {
            ...state,
            successMessage:'Student Added Successfully',
            success:true,
            studentList : [...state.studentList, action.data],
        }
    },
    [types.ADD_STUDENT_FAILED] (state, action) {
        return {
            error:true,
            errorMessage : action.error,
        }
    },
    [types.GET_ALL_STUDENT_REQUEST](state) {
        return {
            ...state,
            error:false,
            success:false,
        }
    },
    [types.GET_ALL_STUDENT_RESPONSE](state,action) {
        return {
            ...state,
            successMessage:'All Student Retrieved Successfully',
            success:true,
            allStudents : action.data,
        }
    },
    [types.GET_ALL_STUDENT_FAILED] (state, action) {
        return {
            error:true,
            errorMessage : action.error,
        }
    },
    [types.GET_STUDENT_REQUEST](state) {
        return {
            ...state,
            error:false,
            success:false,
        }
    },
    [types.GET_STUDENT_RESPONSE](state,action) {
        return {
            ...state,
            successMessage:'Student Retrieved Successfully',
            success:true,
            studentList : action.data,
        }
    },
    [types.GET_STUDENT_FAILED] (state, action) {
        return {
            error:true,
            errorMessage : action.error,
        }
    },
    [types.EDIT_STUDENT_REQUEST](state) {
        return {
            ...state,
            error:false,
            success:false,
        }
    },
    [types.EDIT_STUDENT_RESPONSE](state,action) {
        const newList = state.studentList.map((item) => {
        if (item._id === action.data._id) {
          return action.data;
        }
        return item;
      });
        return {
            ...state,
            successMessage:'Student Edited Successfully',
            success:true,
            studentList : newList,
        }
    },
    [types.EDIT_STUDENT_FAILED] (state, action) {
        return {
            error:true,
            errorMessage : action.error,
        }
    },
    [types.DELETE_STUDENT_REQUEST](state) {
        return {
            ...state,
            error:false,
            success:false,
        }
    },
    [types.DELETE_STUDENT_RESPONSE](state,action) {
        const newList = state.studentList.filter(
            (item) => item._id !== action.data._id
          );
        return {
            ...state,
            successMessage:'Student Deleted Successfully',
            success:true,
            studentList : newList,
        }
    },
    [types.DELETE_STUDENT_FAILED] (state, action) {
        return {
            error:true,
            errorMessage : action.error,
        }
    }


})
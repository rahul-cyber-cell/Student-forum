import createReducer from '../../utils/createReducer';
import * as types from '../../actions/timing/types';


const initialState = {
    error: false,
    success: false,
    timing: [],
    errorMessage: '',
    successMessage: '',
};


export const timingReducer = createReducer(initialState, {

    // GET timing
    [types.GET_TIMING_REQUEST](state) {
        return {
            ...state,
            errorMessage:'',
            successMessage:'',
        }
    },
    [types.GET_TIMING_RESPONSE](state,action) {
        return {
            ...state,
            success:true,
            successMessage: 'All Catergory Retrieved',
            timing : action.data,
        }
    },
    [types.GET_TIMING_FAILED](state,action) {
        return {
            ...state,
            error:true,
            errorMessage : action.error,
        }
    },

    // ADD timing
    [types.ADD_TIMING_REQUEST](state) {
        return {
            ...state,
            errorMessage:'',
            successMessage:'',
        }
    },
    [types.ADD_TIMING_RESPONSE](state,action) {
        return {
            ...state,
            successMessage: 'Successfully Added!',
            success: true,
            timing : [...state.timing, action.data],
        }
    },
    [types.ADD_TIMING_FAILED] (state,action) {
        return {
            ...state,
            error:true,
            errorMessage:action.error,
        }
    },
    // EDIT timing
    [types.EDIT_TIMING_REQUEST] (state) {
        return{
            ...state,
            successMessage:'',
            errorMessage:'',
        }
    },
    [types.EDIT_TIMING_RESPONSE] (state,action) {
        return {
            ...state,
            successMessage:'timing Edited Successfully',
            success: true,
            timing : [...state.timing, action.data],
        }
    },
    [types.EDIT_TIMING_FAILED] (state,action) {
        return {
            ...state,
            errorMessage:action.error,
            error:true,
        }
    },
    // DELETE timing
    [types.DELETE_TIMING_REQUEST] (state) {
        return {
            ...state,
            errorMessage:'',
            successMessage:'',
        }
    },
    [types.DELETE_TIMING_RESPONSE] (state,action) {
        const newList = state.timing.filter(
            (item) => item._id !== action.data._id
            );
        return {
            ...state,
            successMessage:'timing Deleted Successfully',
            success: true,
            timing:newList,
        }
    },
    [types.DELETE_TIMING_FAILED] (state,action) {
        return {
            ...state,
            error:true,
            errorMessage:action.error,
        }
    },

})
import createReducer from '../../utils/createReducer';
import * as types from '../../actions/batch/types';


const initialState = {
    error: false,
    success: false,
    batches: [],
    errorMessage: '',
    clearFields: false,
    successMessage: '',
  };



export const batchReducer = createReducer(initialState, {


  // ALL BATCHES
    [types.GET_ALL_BATCH_REQUEST](state) {
      return {
        ...state,
        error: false,
        success: false,
        errorMessage: '',
      };
    },
    [types.GET_ALL_BATCH_RESPONSE](state, action) {
      console.log(action.data.data);
      return {
        ...state,
        error: false,
        success: true ,
        errorMessage: '',
        batches: action.data.data,
        clearFields: true,
      };
    },
    [types.GET_ALL_BATCH_FAILED](state, action) {
      return {
        ...state,
        error: true,
        success: false,
        errorMessage: action.error.error,
        clearFields: false,
      };
    },


    // ADD NEW BATCH
    [types.ADD_BATCH_REQUEST](state) {
      return {
        ...state,
        error: false,
        success: false,
        errorMessage: '',
      };
    },
    [types.ADD_BATCH_RESPONSE](state, action) {
      return {
        ...state,
        error: false,
        success: true,
        errorMessage: '',
        successMessage: 'Batch Added',
        clearFields: true,
        batches: [...state.batches, action.data],
      };
    },
    [types.ADD_BATCH_FAILED](state, action) {
      return {
        ...state,
        error: true,
        success: false,
        errorMessage: action.error.error,
        clearFields: false,
      };
    },

    // GET COURSE FOR A BATCH
    [types.GET_COURSES_BATCH_REQUEST](state) {
      return {
        ...state,
        error: false,
        success: false,
      };
    },
    [types.GET_COURSES_BATCH_RESPONSE](state, action) {
      return {
        ...state,
        error: false,
        success: false,
        batches: action.data,
      };
    },
    [types.GET_COURSES_BATCH_FAILED](state, action) {
      return {
        ...state,
        error: true,
        success: false,
        batches: [],
      };
    },

    // DELETE BATCH
    [types.CLOSE_BATCH_SUCCESS_MESSAGE](state) {
      return {
        ...state,
        error: false,
        success: false,
        errorMessage: '',
        successMessage: '',
      };
    },
    [types.CLOSE_BATCH_ERROR_MESSAGE](state) {
      return {
        ...state,
        error: false,
        success: false,
        errorMessage: '',
        successMessage: '',
      };
    },

    // GET SINGLE BATCH
    [types.GET_BATCH_REQUEST](state) {
      return {
        ...state,
        error: false,
      };
    },
    [types.GET_BATCH_FAILED](state, action) {
      return {
        ...state,
        errorMessage: action.error.error,
        error: true,
      };
    },

    // EDIT BATCH
    [types.EDIT_BATCH_REQUEST](state) {
      return {
        ...state,
        error: false,
        success: false,
      };
    },
    [types.EDIT_BATCH_RESPONSE](state, action) {
      const newList = state.batches.map((item) => {
        if (item._id === action.data._id) {
          return action.data;
        }
        return item;
      });
      return {
        ...state,
        error: false,
        success: true,
        batches: newList,
        successMessage: 'Batch Updated',
      };
    },
    [types.EDIT_BATCH_FAILED](state, action) {
      return {
        ...state,
        error: true,
        success: false,
        errorMessage: action.error.error,
      };
    },

    // DELETE BATCH
    [types.DELETE_BATCH_REQUEST](state) {
      return {
        ...state,
        error: false,
        success: false,
      };
    },
    [types.DELETE_BATCH_RESPONSE](state, action) {
      const newList = state.batches.filter(
        (item) => item._id !== action.data._id
      );
      return {
        ...state,
        error: false,
        success: true,
        batches: newList,
        successMessage: 'Batch Deleted',
      };
    },
    [types.DELETE_BATCH_FAILED](state, action) {
      return {
        ...state,
        error: true,
        success: false,
        errorMessage: action.error.error,
      };
    },

    // CLEAR BATCH LIST
    [types.CLEAR_BATCH_LIST](state) {
      return {
        ...state,
        batches: [],
      };
    },
  });
  
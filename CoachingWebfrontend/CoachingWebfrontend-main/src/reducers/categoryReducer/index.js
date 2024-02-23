import createReducer from '../../utils/createReducer';
import * as types from '../../actions/category/types';


const initialState = {
    error: false,
    success: false,
    categories: [],
    errorMessage: '',
    successMessage: '',
};


export const categoryReducer = createReducer(initialState, {

    // GET CATEGORY
    [types.GET_CATEGORY_REQUEST](state) {
        return {
            ...state,
            errorMessage:'',
            successMessage:'',
        }
    },
    [types.GET_CATEGORY_RESPONSE](state,action) {
        return {
            ...state,
            success:true,
            successMessage: 'All Catergory Retrieved',
            categories : action.data.data,
        }
    },
    [types.GET_CATEGORY_FAILED](state,action) {
        return {
            ...state,
            error:true,
            errorMessage : action.error,
        }
    },

    // ADD CATEGORY
    [types.ADD_CATEGORY_REQUEST](state) {
        return {
            ...state,
            errorMessage:'',
            successMessage:'',
        }
    },
    [types.ADD_CATEGORY_RESPONSE](state,action) {
        return {
            ...state,
            successMessage: 'Successfully Added!',
            success: true,
            categories : [...state.categories, action.data.data],
        }
    },
    [types.ADD_CATEGORY_FAILED] (state,action) {
        return {
            ...state,
            error:true,
            errorMessage:action.error,
        }
    },
    // EDIT CATEGORY
    [types.EDIT_CATEGORY_REQUEST] (state) {
        return{
            ...state,
            successMessage:'',
            errorMessage:'',
        }
    },
    [types.EDIT_CATEGORY_RESPONSE] (state,action) {
        return {
            ...state,
            successMessage:'Category Edited Successfully',
            success: true,
            categories : [...state.categories, action.data.data],
        }
    },
    [types.EDIT_CATEGORY_FAILED] (state,action) {
        return {
            ...state,
            errorMessage:action.error,
            error:true,
        }
    },
    // DELETE CATEGORY
    [types.DELETE_CATEGORY_REQUEST] (state) {
        return {
            ...state,
            errorMessage:'',
            successMessage:'',
        }
    },
    [types.DELETE_CATEGORY_RESPONSE] (state,action) {
        const newList = state.categories.filter(
            (item) => item._id !== action.data._id
            );
        return {
            ...state,
            successMessage:'Category Deleted Successfully',
            success: true,
            categories:newList,
        }
    },
    [types.DELETE_CATEGORY_FAILED] (state,action) {
        return {
            ...state,
            error:true,
            errorMessage:action.error,
        }
    },

})
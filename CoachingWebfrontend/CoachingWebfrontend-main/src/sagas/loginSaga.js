import { put, call, takeEvery, delay } from 'redux-saga/effects';
import * as loginActions from '../actions/auth';
import * as types from '../actions/auth/types';
import API from '../api/ApiConstants';
import axios from 'axios';
import * as privilegesactions from '../actions/privileges';
import { useHistory } from 'react-router';
import { hi } from 'date-fns/locale';

function loginUserApi(mobileNumber, otp, institutionCode) {
  let url;
  // url = `${API.BASE_URL}/user/login`;
  
    return axios.post(`${API.BASE_URL}/auth/login/verifyotp`, { mobileNumber : mobileNumber,  otp: otp, institutionCode : institutionCode, })
  // if (role === 'student') {
  //   url = `${API.BASE_URL}/${API.STUDENT}/login`;
  // } else if (role === 'superadmin') {
  //   url = `${API.BASE_URL}/${API.SUPER_ADMIN}/login`;
  // } else if (role === 'admin') {
  //   url = `${API.BASE_URL}/${API.ADMIN}/login`;
  // } else if (role === 'guardian') {
  //   url = `${API.BASE_URL}/${API.GURADIAN}/login`;
  // } else {
  //   url = `${API.BASE_URL}/${API.TEACHER}/login`;
  // }
}

function getotp(mobileNumber) {
  return axios.post(`${API.BASE_URL}/auth/login/sendotp`, {mobileNumber:mobileNumber});
}

function* getotpAsync(action) {
  try {
    const response = yield call(
      getotp,
      action.mobileNumber
    );
    console.log(response);
  }catch (e) {
    yield put(loginActions.loginFailed(e.response.data));
    console.log(e);
  }
}

function* loginAsync(action) {
  try {
    // yield put(loginActions.enableLoader());
    const response = yield call(
      loginUserApi,
      action.mobileNumber,
      action.otp,
      action.institutionCode,
    );
    console.log(response);
    yield put(loginActions.onLoginResponse(response.data))
    yield call(saveToken, response.data.data.accessToken, response.data.data.userType, response.data.data._id);
  } catch (e) {
    console.log(e);
    alert(e.response.data.message);
    yield put(loginActions.loginFailed(e.response.data));
  }
}
// function* typesAsync(action) {
//   try {
//     const response = yield call(typesApi, action.code);

//     yield put(loginActions.onTypesResponse(response.data));
//   } catch (e) {
//     console.log(e);
//     yield put(loginActions.typesFailed(e.response.data));
//   }
// }

export function* otpSaga() {
  yield takeEvery(types.OTP_REQUEST, getotpAsync);
}

export function* loginSaga() {
  yield takeEvery(types.LOGIN_REQUEST, loginAsync);
}
// export function* getLoginTypesSaga() {
//   yield takeEvery(types.GET_LOGIN_USER_TYPES_REQUEST, typesAsync);
// }

function saveToken(token, userType, uid) {
  localStorage.setItem('accessToken', token);
  localStorage.setItem('userType', userType);
  localStorage.setItem('uid', uid);
}

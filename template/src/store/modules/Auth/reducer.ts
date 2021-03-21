import * as types from './types';
// import { createReducer } from 'store/utils/createReducer';
import { IAuthState, AuthActionCreatorType } from './interfaces';

const initialState: IAuthState = {
  isLoaded: false,
  isFetching: false,
  isLogin: false,
  isRegister: false,
  isForgotPassword: false,
  isResetPassword: false,
  isRefreshToken: false,
  isError: false,
  error: null
};

// const authReducer =  createReducer<IAuthState, AuthActionType, AuthActionCreatorType>(initialState, {
//   [types.PAGE_LOADED]: (state) => ({
//     ...state,
//     isLoaded: true
//   }),
//   [types.AUTHENTICATED]: (state) => ({
//     ...state,
//     isLogin: true
//   }),
//   [types.UNAUTHENTICATED]: (state) => ({
//     ...state,
//     isLogin: false
//   }),
//   [types.REGISTERED]: (state) => ({
//     ...state,
//     isRegister: true
//   }),
//   [types.FORGOT_PASSWORD]: (state) => ({
//     ...state,
//     isForgotPassword: true
//   }),
//   [types.RESET_PASSWORD]: (state) => ({
//     ...state,
//     isResetPassword: true
//   }),
//   [types.AUTHENTICATION_ERROR]: (state, action: IError) => ({
//     ...state,
//     isError: true,
//     error: action
//   }),
//   [types.CLEAR_ERROR]: (state) => ({
//     ...state,
//     isError: false
//   }),
//   [types.CLEAR_DATA]: (state) => ({
//     ...state,
//     ...initialState
//   })
// });

const authReducer = (state = initialState, action: AuthActionCreatorType): IAuthState => {
  switch (action.type) {
  case types.PAGE_LOADED: return {
    ...state,
    isLoaded: true
  };
  case types.AUTHENTICATED: return {
    ...state,
    isLogin: true
  };
  case types.UNAUTHENTICATED: return {
    ...state,
    isLogin: false
  };
  case types.REGISTERED: return {
    ...state,
    isRegister: true
  };
  case types.FORGOT_PASSWORD: return {
    ...state,
    isForgotPassword: true
  };
  case types.RESET_PASSWORD: return {
    ...state,
    isResetPassword: true
  };
  case types.AUTHENTICATION_ERROR: return {
    ...state,
    isError: true,
    error: action.payload
  };
  case types.CLEAR_ERROR: return {
    ...state,
    isError: false
  };
  case types.CLEAR_DATA: return {
    ...state,
    ...initialState
  };
  default:
    return state
  }
};

export default authReducer;

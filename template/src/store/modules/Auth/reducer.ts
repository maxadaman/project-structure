import * as types from './types';
import { createReducer } from '@reduxjs/toolkit';
import { IAuthState, IError } from './interfaces';

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

const authReducer = createReducer(initialState, {
  [types.PAGE_LOADED]: state => ({
    ...state,
    isLoaded: true
  }),
  [types.AUTHENTICATED]: state => ({
    ...state,
    isLogin: true
  }),
  [types.UNAUTHENTICATED]: state => ({
    ...state,
    isLogin: false
  }),
  [types.REGISTERED]: state => ({
    ...state,
    isRegister: true
  }),
  [types.FORGOT_PASSWORD]: state => ({
    ...state,
    isForgotPassword: true
  }),
  [types.RESET_PASSWORD]: state => ({
    ...state,
    isResetPassword: true
  }),
  [types.AUTHENTICATION_ERROR]: (state, { payload }: IError) => ({
    ...state,
    isError: true,
    error: payload
  }),
  [types.CLEAR_ERROR]: state => ({
    ...state,
    isError: false
  }),
  [types.CLEAR_DATA]: state => ({
    ...state,
    ...initialState
  })
});

export default authReducer;

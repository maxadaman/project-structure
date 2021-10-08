import request from 'utils/request';
import { setToken, removeToken, getToken } from 'utils/token';
import { errorHandler } from 'utils/errorHandlers';
import {
  toLogin,
  toLoadPage,
  toLogout,
  toRegister,
  toError,
  toForgotPassword,
  toResetPassword,
  toClearError,
  toClearData
} from './actions';
import { ThunkOperationType } from 'types/general';
import { IAuthState } from './interfaces';

/* eslint-disable */

const login =
  (userData: any, remember?: boolean): ThunkOperationType<void, IAuthState> =>
  async dispatch => {
    try {
      dispatch(toClearError());
      const { data } = await request.post('/api/login', userData, { notAuthorizeHeader: true });
      setToken(data.token, remember);
      dispatch(toLogin());
    } catch (err) {
      errorHandler(err, dispatch, toError);
    }
  };

export const signUp =
  (userData: any): ThunkOperationType<void, IAuthState> =>
  async dispatch => {
    try {
      dispatch(toClearError());
      await request.post('/api/register', userData, { notAuthorizeHeader: true });
      dispatch(toRegister());
    } catch (err) {
      errorHandler(err, dispatch, toError);
    }
  };

export const forgotPassword =
  (passwordData: any): ThunkOperationType<void, IAuthState> =>
  async dispatch => {
    try {
      dispatch(toClearError());
      await request.post('/api/reset-request', passwordData, { notAuthorizeHeader: true });
      dispatch(toForgotPassword());
    } catch (err) {
      errorHandler(err, dispatch, toError);
    }
  };

export const resetPassword =
  (passwordData: any): ThunkOperationType<void, IAuthState> =>
  async dispatch => {
    try {
      dispatch(toClearError());
      await request.post('/api/reset', passwordData, { notAuthorizeHeader: true });
      dispatch(toResetPassword());
    } catch (err) {
      errorHandler(err, dispatch, toError);
    }
  };

export const logout = (): ThunkOperationType<void, IAuthState> => dispatch => {
  removeToken();
  dispatch(toLogout());
};

export const checkJwt = (): ThunkOperationType<void, IAuthState> => async dispatch => {
  const { token } = getToken();
  if (!token) return dispatch(toLoadPage());
  dispatch(toLogin());
  dispatch(toLoadPage());
  return true;
};

export const clearAuth = (): ThunkOperationType<void, IAuthState> => async dispatch => {
  dispatch(toClearData());
};

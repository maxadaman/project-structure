import * as types from './types';
import { AuthActionCreatorType } from './interfaces';
import { IApiError } from 'types/general';

export const toLoadPage = (): AuthActionCreatorType => ({ type: types.PAGE_LOADED });

export const toLogin = (): AuthActionCreatorType => ({ type: types.AUTHENTICATED });

export const toRegister = (): AuthActionCreatorType => ({ type: types.REGISTERED });

export const toLogout = (): AuthActionCreatorType => ({ type: types.UNAUTHENTICATED });

export const toForgotPassword = (): AuthActionCreatorType => ({ type: types.FORGOT_PASSWORD });

export const toResetPassword = (): AuthActionCreatorType => ({ type: types.RESET_PASSWORD });

export const toError = (payload: IApiError): AuthActionCreatorType => ({
  type: types.AUTHENTICATION_ERROR,
  payload
});

export const toClearError = (): AuthActionCreatorType => ({ type: types.CLEAR_ERROR });

export const toClearData = (): AuthActionCreatorType => ({ type: types.CLEAR_DATA });

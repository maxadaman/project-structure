import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
  PAGE_LOADED,
  REGISTERED,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  CLEAR_ERROR,
  CLEAR_DATA
} from './types';
import { Nullable, IApiError } from 'types/general';

export interface ILoadPage {
  type: typeof PAGE_LOADED
}

export interface ILogin {
  type: typeof AUTHENTICATED,
}

export interface IRegister {
  type: typeof REGISTERED
}

export interface ILogout {
  type: typeof UNAUTHENTICATED
}

export interface IForgotPassword {
  type: typeof FORGOT_PASSWORD
}

export interface IResetPassword {
  type: typeof RESET_PASSWORD
}

export interface IError {
  type: typeof AUTHENTICATION_ERROR;
  payload: IApiError
}

export interface IClearError {
  type: typeof CLEAR_ERROR
}

export interface IClearData {
  type: typeof CLEAR_DATA
}

export interface IAuthState {
  isLoaded: boolean,
  isFetching: boolean,
  isLogin: boolean,
  isRegister: boolean,
  isForgotPassword: boolean,
  isResetPassword: boolean,
  isRefreshToken: boolean,
  isError: boolean,
  error: Nullable<IApiError>
}

export type AuthActionCreatorType = ILogin | IRegister | ILoadPage | ILogout
  | IForgotPassword | IResetPassword | IError | IClearData | IClearError;

export type AuthActionType = typeof AUTHENTICATED | typeof UNAUTHENTICATED | typeof PAGE_LOADED
  | typeof REGISTERED | typeof FORGOT_PASSWORD | typeof RESET_PASSWORD | typeof CLEAR_ERROR | typeof AUTHENTICATION_ERROR
  | typeof CLEAR_DATA;

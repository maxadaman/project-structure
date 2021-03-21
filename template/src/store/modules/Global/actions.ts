import * as types from './types';
import { GlobalActionCreatorType } from './interfaces';
import { IApiError } from 'types/general';

export const toResizeWindow = (payload: number): GlobalActionCreatorType => ({
  type: types.WINDOW_RESIZE,
  payload
});

export const toChangeMobileMenu = (): GlobalActionCreatorType => ({ type: types.MOBILE_MENU_CHANGES });

export const toError = (payload: IApiError): GlobalActionCreatorType => ({
  type: types.GLOBAL_ERROR,
  payload
});

export const toClearError = (): GlobalActionCreatorType => ({ type: types.CLEAR_ERROR });

export const toClearData = (): GlobalActionCreatorType => ({ type: types.CLEAR_DATA });

import { Nullable, IApiError } from 'types/general';
import { IOffice } from 'types/about';
import {
  WINDOW_RESIZE,
  MOBILE_MENU_CHANGES,
  GLOBAL_ERROR,
  CLEAR_ERROR,
  CLEAR_DATA
} from './types';

export interface IResizeWindow {
  type: typeof WINDOW_RESIZE,
  payload: number
}

export interface IChangeMobileMenu {
  type: typeof MOBILE_MENU_CHANGES
}

export interface IError {
  type: typeof GLOBAL_ERROR,
  payload: IApiError
}

export interface IClearError {
  type: typeof CLEAR_ERROR
}

export interface IClearData {
  type: typeof CLEAR_DATA
}

export interface IGlobalState {
  isMobileMenuOpen: boolean;
  windowWidth: number;
  officesCollection: Array<IOffice>
  isError: boolean;
  error: Nullable<IApiError>
}

export type GlobalActionCreatorType = IResizeWindow | IChangeMobileMenu | IError | IClearError | IClearData;
export type GlobalActionType = typeof WINDOW_RESIZE | typeof MOBILE_MENU_CHANGES | typeof GLOBAL_ERROR
  | typeof CLEAR_ERROR | typeof CLEAR_DATA;

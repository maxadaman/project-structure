import {
  toResizeWindow,
  toChangeMobileMenu,
  toClearError,
  toClearData
} from './actions';
import { ThunkOperationType } from 'types/general';
import { IGlobalState } from './interfaces';

export const handleResize = ()
: ThunkOperationType<void, IGlobalState> => async dispatch => {
  dispatch(toClearError());
  const screenWidth = window.innerWidth;
  dispatch(toResizeWindow(screenWidth));
};

export const handleMobileMenu = ()
: ThunkOperationType<void, IGlobalState> => async dispatch => {
  dispatch(toClearError());
  dispatch(toChangeMobileMenu());
};

export const clearCompany = ()
: ThunkOperationType<void, IGlobalState> => async dispatch => {
  dispatch(toClearData());
};

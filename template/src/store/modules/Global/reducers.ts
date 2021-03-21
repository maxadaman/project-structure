// import { createReducer } from 'store/utils';
import * as types from './types';
import { IGlobalState, GlobalActionCreatorType } from './interfaces';
import { IOffice } from 'types/about';

const initialWindowWidth = window.innerWidth;

const officesInitialData: Array<IOffice> = [
  {
    id: 1,
    address: 'New York',
    phone: '+16469806515',
    isHeadquarter: false
  },
  {
    id: 2,
    address: 'New York 1',
    phone: '+16468888222',
    isHeadquarter: true
  },
  {
    id: 3,
    address: 'New York 2',
    phone: '+16468888333',
    isHeadquarter: true
  }
];

const initialState: IGlobalState = {
  isMobileMenuOpen: false,
  windowWidth: initialWindowWidth,
  officesCollection: officesInitialData,
  isError: false,
  error: null
};

// const globalReducer = createReducer(platformInitState)({
//   [types.WINDOW_RESIZE]: (state: IGlobalState, { payload }: any) => ({
//     ...state,
//     windowWidth: payload
//   }),
//   [types.MOBILE_MENU_CHANGES]: (state: IGlobalState) => ({
//     ...state,
//     isMobileMenuOpen: !state.isMobileMenuOpen
//   }),
//   [types.GLOBAL_ERROR]: (state: IGlobalState, { payload }: any) => ({
//     ...state,
//     isError: true,
//     error: payload
//   }),
//   [types.CLEAR_ERROR]: (state: IGlobalState) => ({
//     ...state,
//     isError: false,
//     error: null
//   }),
//   [types.CLEAR_DATA]: (state: IGlobalState) => ({
//     ...state,
//     ...platformInitState
//   })
// });

const globalReducer = (state = initialState, action: GlobalActionCreatorType): IGlobalState => {
  switch (action.type) {
  case types.WINDOW_RESIZE: return {
    ...state,
    windowWidth: action.payload
  };
  case types.MOBILE_MENU_CHANGES: return {
    ...state,
    isMobileMenuOpen: !state.isMobileMenuOpen
  };
  case types.GLOBAL_ERROR: return {
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

export default globalReducer;

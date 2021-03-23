import { createReducer } from '@reduxjs/toolkit';
import * as types from './types';
import { IGlobalState, IResizeWindow, IError } from './interfaces';
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

const globalReducer = createReducer(initialState, {
  [types.WINDOW_RESIZE]: (state, { payload }: IResizeWindow) => ({
    ...state,
    windowWidth: payload
  }),
  [types.MOBILE_MENU_CHANGES]: state => ({
    ...state,
    isMobileMenuOpen: !state.isMobileMenuOpen
  }),
  [types.GLOBAL_ERROR]: (state, { payload }: IError) => ({
    ...state,
    isError: true,
    error: payload
  }),
  [types.CLEAR_ERROR]: state => ({
    ...state,
    isError: false,
    error: null
  }),
  [types.CLEAR_DATA]: state => ({
    ...state,
    ...initialState
  })
});

export default globalReducer;

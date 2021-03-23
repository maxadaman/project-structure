import { createReducer } from '@reduxjs/toolkit';
import * as types from './types';
import { ISidebarState, IOpenSidebar } from './interfaces';

const initialState: ISidebarState = {
  sidebarOpen: false,
  sidebarComponent: null,
  props: null
};

const sidebarReducer = createReducer(initialState, {
  [types.OPEN_SIDEBAR]: (state, { payload, props }: IOpenSidebar) => ({
    ...state,
    sidebarOpen: true,
    sidebarComponent: payload,
    props
  }),
  [types.CLOSE_SIDEBAR]: state => ({
    ...state,
    ...initialState
  })
});

export default sidebarReducer;

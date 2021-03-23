import { createReducer } from '@reduxjs/toolkit';
import * as types from './types';
import { IModalState, IOpenModal } from './interfaces';

const initialState: IModalState = {
  modalOpen: false,
  modalComponent: null,
  width: 'default',
  props: null
};

const modalReducer = createReducer(initialState, {
  [types.OPEN_MODAL]: (state, { payload, props, width }: IOpenModal) => ({
    ...state,
    modalOpen: true,
    modalComponent: payload,
    width,
    props
  }),
  [types.CLOSE_MODAL]: state => ({
    ...state,
    ...initialState
  })
});

export default modalReducer;

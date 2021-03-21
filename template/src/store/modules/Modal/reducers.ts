// import { createReducer } from 'store/utils';
import * as types from './types';
import { IModalState, ModalActionCreatorType } from './interfaces';

const initialState: IModalState = {
  isOpen: false,
  child: null,
  width: 'default',
  props: null
};

// const modalReducer = createReducer(modalInitState)({
//   [types.SHOW_MODAL]: (state: IModalState, { payload, props }: any) => ({
//     ...state,
//     isOpen: true,
//     child: payload,
//     props
//   }),
//   [types.HIDE_MODAL]: (state: IModalState) => ({
//     ...state,
//     ...modalInitState
//   })
// });

const modalReducer = (state = initialState, action: ModalActionCreatorType): IModalState => {
  switch (action.type) {
  case types.SHOW_MODAL: return {
    ...state,
    isOpen: true,
    child: action.payload,
    width: action.width,
    props: action.props
  };
  case types.HIDE_MODAL: return {
    ...state,
    ...initialState
  };
  default:
    return state
  }
};

export default modalReducer;

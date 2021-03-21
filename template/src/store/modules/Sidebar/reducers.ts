// import { createReducer } from 'store/utils';
import * as types from './types';
import { ISidebarState, SidebarActionCreatorType } from './interfaces';

const initialState: ISidebarState = {
  sidebarOpen: false,
  sidebarComponent: null,
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

const sidebarReducer = (state = initialState, action: SidebarActionCreatorType): ISidebarState => {
  switch (action.type) {
  case types.OPEN_SIDEBAR: return {
    ...state,
    sidebarOpen: true,
    sidebarComponent: action.payload,
    props: action.props
  };
  case types.CLOSE_SIDEBAR: return {
    ...state,
    ...initialState
  };
  default:
    return state
  }
};

export default sidebarReducer;

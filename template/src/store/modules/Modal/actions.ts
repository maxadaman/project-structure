import * as types from './types';
import { ModalActionCreatorType } from './interfaces';

export const toOpen = (node: any, props: any): ModalActionCreatorType => ({
  type: types.SHOW_MODAL,
  payload: node,
  props
});

export const toClose = (): ModalActionCreatorType => ({ type: types.HIDE_MODAL });

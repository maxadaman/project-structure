import * as types from './types';
import { ModalActionCreatorType, modalPropsType, modalComponentType } from './interfaces';

export const toOpenModal = (component: modalComponentType, props: modalPropsType): ModalActionCreatorType => ({
  type: types.OPEN_MODAL,
  payload: component,
  props
});

export const toCloseModal = (): ModalActionCreatorType => ({ type: types.CLOSE_MODAL });

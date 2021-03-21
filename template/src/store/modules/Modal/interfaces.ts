import { Nullable } from 'types/general';
import {
  SHOW_MODAL,
  HIDE_MODAL
} from './types';
import React from 'react';

export interface IShowModal {
  type: typeof SHOW_MODAL;
  payload: Nullable<typeof React.Component>;
  width?: string;
  props: any
}

export interface IHideModal {
  type: typeof HIDE_MODAL
}

export interface IModalState {
  isOpen: boolean;
  child: Nullable<typeof React.Component>;
  width?: string;
  props: Nullable<{ closeEvent: () => void }>
}

export type ModalActionCreatorType = IShowModal | IHideModal;
export type ModalActionType = typeof SHOW_MODAL | typeof HIDE_MODAL;

import { Nullable } from 'types/general';
import {
  OPEN_MODAL,
  CLOSE_MODAL
} from './types';
import React from 'react';

export interface IOpenModal {
  type: typeof OPEN_MODAL;
  payload: Nullable<typeof React.Component>;
  width?: string;
  props: modalPropsType
}

export interface ICloseModal {
  type: typeof CLOSE_MODAL
}

export type modalPropsType = Nullable<{
  title: string;
  [key: string]: any
}>;

export type modalComponentType = any;

export interface IModalState {
  modalOpen: boolean;
  modalComponent: Nullable<typeof React.Component>;
  width?: string;
  props: modalPropsType
}

export type ModalActionCreatorType = IOpenModal | ICloseModal;
export type ModalActionType = typeof OPEN_MODAL | typeof CLOSE_MODAL;

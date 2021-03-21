import { Nullable } from 'types/general';
import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR
} from './types';
import React from 'react';

export interface IOpenSidebar {
  type: typeof OPEN_SIDEBAR;
  payload: Nullable<typeof React.Component>;
  props: sidebarPropsType
}

export interface ICloseSidebar {
  type: typeof CLOSE_SIDEBAR
}

export type sidebarPropsType = Nullable<{
  title: string;
  [key: string]: any
}>;

export type sidebarComponentType = any;

export interface ISidebarState {
  sidebarOpen: boolean;
  sidebarComponent: Nullable<typeof React.Component>;
  props: sidebarPropsType
}

export type SidebarActionCreatorType = IOpenSidebar | ICloseSidebar;
export type SidebarActionType = typeof OPEN_SIDEBAR | typeof CLOSE_SIDEBAR;

import * as types from './types';
import { SidebarActionCreatorType, sidebarPropsType, sidebarComponentType } from './interfaces';

export const toOpenSidebar = (component: sidebarComponentType, props: sidebarPropsType): SidebarActionCreatorType => ({
  type: types.OPEN_SIDEBAR,
  payload: component,
  props
});

export const toCloseSidebar = (): SidebarActionCreatorType => ({ type: types.CLOSE_SIDEBAR });

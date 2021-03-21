import { ThunkOperationType } from 'types/general';
import { ISidebarState, sidebarPropsType, sidebarComponentType } from './interfaces';
import { toOpenSidebar, toCloseSidebar } from './actions';

export const openSidebar = (component: sidebarComponentType, props: sidebarPropsType)
  : ThunkOperationType<void, ISidebarState> => async dispatch => {
  if (typeof document !== 'undefined')
      document.querySelector('body')!.style.overflowY = 'hidden';
  dispatch(toOpenSidebar(component, props));
};

export const closeSidebar = (): ThunkOperationType<void, ISidebarState> => async dispatch => {
  if (typeof document !== 'undefined')
    document.querySelector('body')!.style.overflowY = 'auto';
  dispatch(toCloseSidebar());
};

import { ConnectedProps } from 'react-redux';
import { connector } from './container';

export type SidebarPropsFromRedux = ConnectedProps<typeof connector>;

export type SidebarComponentProps = SidebarPropsFromRedux;;

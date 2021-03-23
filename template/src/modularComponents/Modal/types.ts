import { ConnectedProps } from 'react-redux';
import { connector } from './container';

export type ModalPropsFromRedux = ConnectedProps<typeof connector> & {
  path: any
};

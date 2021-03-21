import { ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { connector } from './container';

export type RouterPropsFromRedux = ConnectedProps<typeof connector> & RouteComponentProps;

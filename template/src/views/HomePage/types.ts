import { ConnectedProps } from 'react-redux';
import { connector } from './container';

type HomePagePropsFromRedux = ConnectedProps<typeof connector>

export type IHomePageProps = HomePagePropsFromRedux;

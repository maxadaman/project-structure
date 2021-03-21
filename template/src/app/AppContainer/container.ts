import { connect } from 'react-redux';
import { globalOperations } from 'store/modules/Global';
import { authOperations } from 'store/modules/Auth';
import { RootStateType } from 'types/general';
import Router from './component';

const mapStateToProps = ({ Global, Auth }: RootStateType) => ({ Global, Auth });

const mapDispatchToProps = { ...globalOperations, ...authOperations };

export const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Router);

import { connect } from 'react-redux';
import HomePage from './component';
import { authOperations } from 'store/modules/Auth';
import { sidebarOperations } from 'store/modules/Sidebar';
import { modalOperations } from 'store/modules/Modal';
import { RootStateType } from 'types/general';

const mapStateToProps = ({ Auth }: RootStateType) => ({ Auth });

const mapDispatchToProps = { ...authOperations, ...sidebarOperations, ...modalOperations };

export const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(HomePage);

import { connect } from 'react-redux';
import SidebarComponent from './component';
import { sidebarOperations } from 'store/modules/Sidebar';
import { RootStateType } from 'types/general';

const mapStateToProps = ({ Sidebar }: RootStateType) => ({ Sidebar });

const mapDispatchToProps = { ...sidebarOperations };

export const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(SidebarComponent);

import { connect } from 'react-redux';
import { sidebarOperations } from 'store/modules/Sidebar';
import { RootStateType } from 'types/general';
import SidebarComponent from './component';

const mapStateToProps = ({ Sidebar }: RootStateType) => ({ Sidebar });

const mapDispatchToProps = { ...sidebarOperations };

export const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(SidebarComponent);

import { connect } from 'react-redux';
import ModalComponent from './component';
import { modalOperations } from 'store/modules/Modal';
import { RootStateType } from 'types/general';

const mapStateToProps = ({ Modal }: RootStateType) => ({ Modal });

const mapDispatchToProps = { ...modalOperations };

export const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(ModalComponent);

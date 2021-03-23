import React from 'react';
import './index.scss';

interface IModalProps {
  modalProps: {
    description: string,
    btnText: string,
    closeModal: () => void,
    closeEvent: () => void
  }
}

const ModalInfo: React.FC<IModalProps> = ({
  modalProps: {
    description,
    btnText,
    closeModal,
    closeEvent
  }
}) => (
  <div className={'modal-info'}>
    <p>{description}</p>
    <button type={'button'} className={'btn-secondary'} onClick={() => (closeEvent ? closeEvent() : closeModal())}>
      {btnText || 'Close'}
    </button>
  </div>
);
export default ModalInfo;

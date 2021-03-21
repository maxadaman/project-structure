import React from 'react';
import './index.scss';

interface IModalProps {
  modalProps: {
    title: string,
    description: string,
    btnText: string,
    toClose: () => void,
    closeEvent: () => void
  }
}

const ModalInfo: React.FC<IModalProps> = ({
  modalProps: {
    title,
    description,
    btnText,
    toClose,
    closeEvent
  }
}) => (
  <div className={'modal-info'}>
    <h3>{title}</h3>
    <div>{description}</div>
    <button type={'button'} className={'btn-secondary'} onClick={() => (closeEvent ? closeEvent() : toClose())}>
      {btnText}
    </button>
  </div>
);
export default ModalInfo;

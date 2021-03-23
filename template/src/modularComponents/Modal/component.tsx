import React, { useState, useEffect } from 'react';
import ReactModal, { Styles } from 'react-modal';
import { Nullable } from 'types/general';
import { ModalPropsFromRedux } from './types';
import './index.scss';

const ModalWindow: React.FC<ModalPropsFromRedux> = ({
  Modal,
  openModal,
  closeModal,
  path: propsPath
}) => {
  const [path, setPath] = useState<Nullable<string>>(null);
  const ChildComponent: typeof React.Component = Modal.modalComponent!;
  const modalProps = { ...Modal.props, openModal, closeModal };

  const customStyles: Styles = {
    overlay: {
      backgroundColor: 'rgba(68, 68, 68, 0.2)',
      zIndex: 2
    }
  };

  useEffect(() => {
    if (Modal.modalOpen) {
      if (path && propsPath !== path) {
        closeModal();
        return () => setPath(null);
      }
      return () => setPath(propsPath);
    }
    return () => undefined;
  }, [Modal, propsPath, path, closeModal]);

  return (
    <div className={'modal-wrp'}>
      <ReactModal
        portalClassName={`ModalPortal ModalPortal--default ${Modal.width === 'big' ? 'ModalPortal--big' : ''} ${
          Modal.width === 'small' ? 'ModalPortal--small' : ''}`}
        style={customStyles}
        ariaHideApp={false}
        isOpen={Modal.modalOpen}>
        <div className={'modal-wrp__content'}>
          <p className={'modal-title'}>{modalProps.title}</p>
          {ChildComponent ? <ChildComponent modalProps={modalProps} /> : <h2>Loading...</h2>}
          {Modal.width !== 'small' && (
            <button
              type={'button'}
              className={'modal-close'}
              onClick={closeModal}
            >
              <i className={'icon-close-square'} />
            </button>
          )}
        </div>
      </ReactModal>
    </div>
  );
};

export default ModalWindow;

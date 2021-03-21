import React, { useState, useEffect } from 'react';
import ReactModal, { Styles } from 'react-modal';
import { ModalPropsFromRedux } from './interfaces';
import { Nullable } from 'types/general';
import './index.scss';

const ModalWindow: React.FC<ModalPropsFromRedux> = ({
  Modal,
  toClose,
  toOpen,
  path: propsPath
}) => {
  const [path, setPath] = useState<Nullable<string>>(null);
  const ChildComponent: typeof React.Component = Modal.child!;
  const modalProps = {
    ...Modal.props,
    toClose,
    toOpen
  };

  const customStyles: Styles = {
    overlay: {
      backgroundColor: 'rgba(68, 68, 68, 0.2)',
      zIndex: 2
    }
  };

  useEffect(() => {
    if (Modal.isOpen) {
      if (path && propsPath !== path) {
        toClose();
        return () => setPath(null);
      }
      return () => setPath(propsPath);
    }
    return () => undefined;
  }, [Modal, propsPath, path, toClose]);

  return (
    <div className={'modal-wrp'}>
      <ReactModal
        portalClassName={`ModalPortal ModalPortal--default ${Modal.width === 'big' ? 'ModalPortal--big' : ''} ${
          Modal.width === 'small' ? 'ModalPortal--small' : ''}`}
        style={customStyles}
        ariaHideApp={false}
        isOpen={Modal.isOpen}>
        <div className={'modal-content-wrp'}>
          {ChildComponent ? <ChildComponent modalProps={modalProps} /> : <h2>Loading...</h2>}
          {Modal.width !== 'small' && (
            <button
              type={'button'}
              className={'modal-close'}
              onClick={() => (modalProps.closeEvent ? modalProps.closeEvent() : toClose())}
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

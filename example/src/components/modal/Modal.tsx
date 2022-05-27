import * as React from 'react';

import ModalContent from './ModalContent';

//
export interface ModalProps {
  classAppModal?: string;
  children: React.ReactElement;
  show: boolean;

  handleOpen?: () => void;
  handleClose?: () => void;
}

//
function Modal({
  classAppModal = 'app-modal',
  children,
  show,

  handleOpen,
  handleClose,
}: ModalProps) {
  //
  if (!show) {
    return null;
  }

  //
  return (
    <ModalContent
      classAppModal={classAppModal}
      handleOpen={handleOpen}
      handleClose={handleClose}
    >
      {children}
    </ModalContent>
  );
}

export default Modal;

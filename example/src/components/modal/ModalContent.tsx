import * as React from 'react';
import { useMyModal } from '../../hooks/useMyModal';

import Portal from '../portal/Portal';

//
export interface ModalContentProps {
  classAppModal: string;
  children: React.ReactElement;
  handleOpen?: () => void;
  handleClose?: () => void;
}

//
function ModalContent({
  children,
  handleOpen,
  handleClose,
  classAppModal,
}: ModalContentProps) {
  useMyModal({ handleOpen, handleClose, classAppModal });

  //
  return (
    <Portal>
      <div className={classAppModal}>{children}</div>
    </Portal>
  );
}

export default ModalContent;

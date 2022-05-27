import { useLayoutEffect } from 'react';
// import { getUseModal } from '../_package/hooks/getUseModal';
import { getUseModal } from '../../node_modules/multi-modals/dist/index';

//
interface useMyModalProps {
  classAppModal: string;
  zIndex?: number;

  handleClose?: () => void;
  handleOpen?: () => void;
}

//
export function useMyModal({
  classAppModal,
  zIndex = 1,

  handleClose,
  handleOpen,
}: useMyModalProps) {
  useLayoutEffect(() => {
    const { handleMounted, handleBeforeUnmount } = getUseModal({
      classAppModal,
      zIndex,

      handleClose,
      handleOpen,
    });

    handleMounted();

    return () => {
        handleBeforeUnmount();
    };
  }, []);
}

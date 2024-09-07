import { ReactNode } from 'react';
export interface ModalProps {
    visibleModal: boolean;
    wrapperClassName?: string;
    contentClassName?: string;
    bodyClassName?: string;
    children: ReactNode;
    onClose: () => void;
    fill?: string;
    showCloseButton?: boolean;
  }
  
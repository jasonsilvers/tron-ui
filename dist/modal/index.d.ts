import React from 'react';
declare const useModal: any;
interface ModalProps {
    isShowing: boolean;
    hide: () => {};
    children: React.ReactNode;
}
declare const Modal: React.FC<ModalProps>;
export { useModal, Modal, ModalProps };

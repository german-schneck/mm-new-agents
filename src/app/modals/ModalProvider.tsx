import React from "react";

import { useModal } from "@/app/modals/hooks/useModal";
import { BaseModalProps, ModalData } from "@/app/modals/modals.types";

import { modals } from "./modals.constants";

/**
 * Properties for the ModalLayout component.
 *
 * @interface ModalProviderProps
 * @property {React.ReactNode} children - The child components to be rendered within the ModalLayout.
 */
interface ModalProviderProps {
  readonly children: React.ReactNode;
}

/**
 * ModalProvider component that provides modal functionality to its children.
 *
 * @param {ModalProviderProps} props - The properties for the ModalProvider component.
 * @param {React.ReactNode} props.children - The child components to be rendered within the ModalProvider.
 * @returns {JSX.Element} The rendered ModalProvider component.
 */
export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const { id, data, closeModal: handleClose } = useModal();

  /**
   * Determines the modal content based on the current modal id.
   * If no modal id is present, it returns null.
   *
   * @constant
   * @type {(React.FC<BaseModalProps<ModalData[ModalsIds]>> | null)}
   */
  const ModalContent = id ? modals[id] : null;

  return (
    <>
      {ModalContent && id && (
        <ModalContent {...(data as BaseModalProps<ModalData[typeof id]>)} handleClose={handleClose} />
      )}
      {children}
    </>
  );
};

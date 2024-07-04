import React from "react";

import { BaseModalProps, ModalData, ModalsIds } from "@/lib/modals/types";
import { useModal } from "@/lib/modals/useModal";

// Modals --
import { ErrorModal } from "./modals/ErrorModal";
import { WarningModal } from "./modals/WarningModal";

/**
 * A record of modal components mapped by their respective modal IDs.
 *
 * @type {Record<ModalsIds, React.FC<BaseModalProps<ModalData[ModalsIds]>>>}
 */
const modals: Record<ModalsIds, React.FC<BaseModalProps<ModalData[ModalsIds]>>> = {
  [ModalsIds.WARNING]: WarningModal,
  [ModalsIds.ERROR]: ErrorModal,
};

// * * * * * * * * * * * * *

/**
 * Properties for the ModalLayout component.
 *
 * @interface ModalLayoutProps
 * @property {React.ReactNode} children - The child components to be rendered within the ModalLayout.
 */
interface ModalLayoutProps {
  readonly children: React.ReactNode;
}

/**
 * ModalProvider component that provides modal functionality to its children.
 *
 * @param {ModalLayoutProps} props - The properties for the ModalProvider component.
 * @param {React.ReactNode} props.children - The child components to be rendered within the ModalProvider.
 * @returns {JSX.Element} The rendered ModalProvider component.
 */
export const ModalProvider: React.FC<ModalLayoutProps> = ({ children }) => {
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

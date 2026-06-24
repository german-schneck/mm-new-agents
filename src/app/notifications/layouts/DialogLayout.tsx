import React, { useCallback } from "react";

import { DialogComponent } from "../components/Dialog";
import { useNotifications } from "../hooks/useNotifications";
import { NotificationTypes } from "../notifications.types";

/**
 * Properties for the DialogLayout component.
 *
 * @interface DialogLayoutProps
 * @property {React.ReactNode} children - The child components to be rendered within the DialogLayout.
 */
interface DialogLayoutProps {
  readonly children: React.ReactNode;
}

/**
 * DialogLayout component that renders its children within a fragment.
 *
 * @param {DialogLayoutProps} props - The properties for the DialogLayout component.
 * @param {React.ReactNode} props.children - The child components to be rendered within the DialogLayout.
 * @returns {JSX.Element} The rendered DialogLayout component.
 */
const DialogLayout: React.FC<DialogLayoutProps> = ({ children }) => {
  const { dialog, closeNotification } = useNotifications();

  /**
   * Handles the closing of the dialog notification.
   */
  const handleCloseDialog = useCallback(() => {
    closeNotification(NotificationTypes.DIALOG);
  }, [closeNotification]);

  return (
    <>
      {dialog && (
        <DialogComponent
          title={dialog.title}
          message={dialog.message}
          onConfirm={dialog.onConfirm}
          onCancel={dialog.onCancel}
          handleClose={handleCloseDialog}
        />
      )}
      {children}
    </>
  );
};

export default DialogLayout;

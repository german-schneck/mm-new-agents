import React from "react";

import DialogLayout from "./layouts/DialogLayout";
import ToastLayout from "./layouts/ToastLayout";

/**
 * Properties for the NotificationProvider component.
 *
 * @interface ModalProviderProps
 * @property {React.ReactNode} children - The child components to be rendered within the NotificationProvider.
 */
interface ModalProviderProps {
  readonly children: React.ReactNode;
}

/**
 * NotificationProvider component that provides notification functionality to its children.
 *
 * This component wraps its children with both ToastLayout and DialogLayout components,
 * enabling the display of toast and dialog notifications within the application.
 *
 * @param {ModalProviderProps} props - The properties for the NotificationProvider component.
 * @param {React.ReactNode} props.children - The child components to be rendered within the NotificationProvider.
 * @returns {JSX.Element} The rendered NotificationProvider component.
 */
export const NotificationProvider: React.FC<ModalProviderProps> = ({ children }) => {
  return (
    <ToastLayout>
      <DialogLayout>{children}</DialogLayout>
    </ToastLayout>
  );
};

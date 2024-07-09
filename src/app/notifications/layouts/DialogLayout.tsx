import React from "react";

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
  return <>{children}</>;
};

export default DialogLayout;

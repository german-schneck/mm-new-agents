import React from "react";

/**
 * Properties for the ToastLayout component.
 *
 * @interface ToastLayoutProps
 * @property {React.ReactNode} children - The child components to be rendered within the ToastLayout.
 */
interface ToastLayoutProps {
  readonly children: React.ReactNode;
}

/**
 * ToastLayout component that renders its children within a fragment.
 *
 * @param {ToastLayoutProps} props - The properties for the ToastLayout component.
 * @param {React.ReactNode} props.children - The child components to be rendered within the ToastLayout.
 * @returns {JSX.Element} The rendered ToastLayout component.
 */
const ToastLayout: React.FC<ToastLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default ToastLayout;

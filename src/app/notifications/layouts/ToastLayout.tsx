import React, { useCallback } from "react";

import Box from "@mui/material/Box";
import { motion, AnimatePresence, MotionProps } from "framer-motion";

import { ToastComponent } from "../components/Toast";
import { useNotifications } from "../hooks/useNotifications";
import { NotificationTypes, Toast } from "../notifications.types";

/**
 * Animation properties for the toast notifications.
 *
 * @type {MotionProps}
 * @property {object} initial - Initial state of the animation.
 * @property {object} animate - State of the animation when it is active.
 * @property {object} exit - State of the animation when it exits.
 * @property {object} whileHover - State of the animation when the element is hovered.
 * @property {object} whileTap - State of the animation when the element is tapped.
 */
const animationToastProps: MotionProps = {
  initial: {
    position: "relative",
    opacity: 0,
    top: 20,
  },
  animate: {
    opacity: 1,
    top: 0,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    right: -50,
    transition: {
      duration: 0.2,
    },
  },
  whileHover: {
    scale: 1.01,
    transition: { duration: 0.1 },
  },
  whileTap: {
    scale: 0.95,
    transition: { duration: 0.1 },
  },
};

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
  const { toasts, closeNotification } = useNotifications();

  /**
   * Handles the closing of a toast notification.
   *
   * @param {string} id - The unique identifier of the toast notification to close.
   */
  const handleCloseToast = useCallback(
    (id: Toast["id"]) => {
      closeNotification(NotificationTypes.TOAST, id);
    },
    [closeNotification],
  );

  return (
    <>
      <Box
        component="ul"
        sx={{
          position: "fixed",
          zIndex: 10,
          right: 0,
          bottom: 0,
          listStyleType: "none",
          padding: 4,
          display: "grid",
          gap: 2,
        }}
      >
        <AnimatePresence>
          {Object.values(toasts).map((toast) => (
            <motion.li key={toast.id} {...animationToastProps}>
              <ToastComponent
                key={toast.id}
                id={toast.id}
                title={toast.title}
                message={toast.message}
                handleClose={handleCloseToast}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </Box>
      {children}
    </>
  );
};

export default ToastLayout;

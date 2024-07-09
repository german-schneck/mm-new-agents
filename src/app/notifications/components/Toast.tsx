import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import type { Toast as ToastType } from "../notifications.types";

/**
 * Initial configuration for the toast notification.
 * Sets the default duration for the toast to 200 milliseconds.
 */
const initialToastConfig: ToastType["configuration"] = {
  duration: 200,
};

/**
 * Toast component to display a toast notification.
 *
 * @param {Readonly<ToastType>} props - The properties for the Toast component.
 * @param {string} props.id - The unique identifier for the toast notification.
 * @param {string} props.message - The message content of the toast notification.
 * @param {string} props.title - The title of the toast notification.
 * @param {Object} [props.configuration] - Optional configuration for the toast notification.
 * @param {number} [props.configuration.duration=200] - The duration for which the toast notification is displayed, defaulting to 200 milliseconds.
 * @returns {JSX.Element} The rendered Toast component.
 */
export const ToastComponent: React.FC<Readonly<ToastType>> = ({
  id,
  message,
  title,
  configuration = initialToastConfig,
}) => {
  return (
    <Box>
      <Typography id="toast-title" variant="h6" component="h2">
        {title}
      </Typography>
      <Typography id="toast-message" sx={{ mt: 2 }}>
        An ID {id} has been passed to this toast notification. Message: {message}
        Duration: ${configuration?.duration}
      </Typography>
    </Box>
  );
};

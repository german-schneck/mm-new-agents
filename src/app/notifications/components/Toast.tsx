import React, { CSSProperties, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import type { BaseNotificationProps, Toast as ToastType } from "../notifications.types";

/**
 * Initial configuration for the toast notification.
 * Sets the default duration for the toast to 200 milliseconds.
 */
const initialToastConfig: ToastType["config"] = {
  duration: 3000, // 3 seconds.
};

/**
 * Toast component to display a toast notification.
 *
 * @param {Readonly<ToastType>} props - The properties for the Toast component.
 * @param {string} props.id - The unique identifier for the toast notification.
 * @param {string} props.message - The message content of the toast notification.
 * @param {string} props.title - The title of the toast notification.
 * @param {Object} [props.config] - Optional configuration for the toast notification.
 * @param {number} [props.config.duration=200] - The duration for which the toast notification is displayed, defaulting to 200 milliseconds.
 * @returns {JSX.Element} The rendered Toast component.
 */
export const ToastComponent: React.FC<BaseNotificationProps<ToastType>> = ({
  id,
  title,
  message,
  config = initialToastConfig,
  handleClose,
}) => {
  const [progressValue, setProgressValue] = useState<number>(0);

  useEffect(() => {
    const updateProgress = () => {
      const elapsedTime = Date.now() - startTime;
      const percentage = Math.min((elapsedTime / config.duration) * 100, 100);
      setProgressValue(percentage);
      if (percentage >= 100) {
        clearInterval(timer);
        setTimeout(() => handleClose(id), 500);
      }
    };

    const startTime = Date.now();
    const timer = setInterval(updateProgress, 100);

    return () => clearInterval(timer);
  }, [id, config.duration, handleClose]);

  return (
    <Paper onClick={handleClose.bind(null, id)} elevation={1} sx={styles.card}>
      <Box sx={{ padding: 2 }}>
        <Typography variant={!message ? "body1" : "h6"}>{title}</Typography>
        {message && <Typography variant="body2">{message}</Typography>}
      </Box>

      <motion.div
        style={styles.progressBar}
        initial={{ width: 0 }}
        animate={{ width: `${progressValue}%` }}
        transition={{ duration: 0.2 }}
      />
    </Paper>
  );
};

const styles: Record<string, CSSProperties> = {
  card: {
    userSelect: "none",
    cursor: "pointer",
  },
  progressBar: {
    width: "100%",
    height: "4px",
    backgroundColor: "red",
    background: "linear-gradient(to right, #ff7e5f, #feb47b)",
  },
};

import React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import type { BaseNotificationProps, Dialog as DialogType } from "../notifications.types";

export const DialogComponent: React.FC<BaseNotificationProps<DialogType>> = ({
  title,
  message,
  onConfirm,
  onCancel,
  handleClose: closeDialog,
}) => {
  /**
   * Callback properties to be passed to the handler functions.
   * @property {Function} handleClose - Function to handle the closing of the dialog.
   */
  const handlerCallbackProps = {
    closeDialog,
  };

  return (
    <Dialog open={true} onClose={onCancel.handler} aria-labelledby="dialog-title" aria-describedby="dialog-description">
      <DialogTitle id="dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="dialog-description">{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel.handler.bind(null, handlerCallbackProps)} color="primary">
          {onCancel.text}
        </Button>
        <Button
          onClick={onConfirm.handler.bind(null, handlerCallbackProps)}
          variant={"contained"}
          color="primary"
          autoFocus
        >
          {onConfirm.text}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

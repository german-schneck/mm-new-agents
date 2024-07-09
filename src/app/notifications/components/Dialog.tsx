import React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import type { Dialog as DialogType } from "../notifications.types";

/**
 * Dialog component to display a dialog notification.
 *
 * @param {Readonly<DialogType>} props - The properties for the Dialog component.
 * @param {string} props.title - The title of the dialog notification.
 * @param {string} props.message - The message content of the dialog notification.
 * @param {() => void} props.onConfirm - The function to call when the dialog is confirmed.
 * @param {() => void} [props.onCancel] - Optional function to call when the dialog is canceled.
 * @returns {JSX.Element} The rendered Dialog component.
 */
export const DialogComponent: React.FC<Readonly<DialogType>> = ({ title, message, onConfirm, onCancel }) => {
  return (
    <Dialog open={true} onClose={onCancel} aria-labelledby="dialog-title" aria-describedby="dialog-description">
      <DialogTitle id="dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="dialog-description">{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="primary" autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

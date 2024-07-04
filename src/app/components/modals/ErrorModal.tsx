import React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { BaseModalProps, ErrorModalData } from "@/lib/modals/types";

export const ErrorModal: React.FC<BaseModalProps<ErrorModalData>> = ({ title, message, handleClose }) => {
  return (
    <Dialog open onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant={"outlined"} onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant={"contained"} onClick={handleClose} autoFocus>
          Continuar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

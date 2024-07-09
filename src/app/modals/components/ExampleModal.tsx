import React from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import { BaseModalProps, ExampleModalData } from "../modals.types";

export const ExampleModal: React.FC<BaseModalProps<ExampleModalData>> = ({ id, handleClose }) => {
  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          This is an example modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          It is fully customizable to your liking. An ID ${id} has been passed to it.
        </Typography>
      </Box>
    </Modal>
  );
};

import React from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import { BaseModalProps, ExampleModalData } from "../modals.types";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const ExampleModal: React.FC<BaseModalProps<ExampleModalData>> = ({ id, handleClose }) => {
  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
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

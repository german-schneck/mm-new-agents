import { useTranslation } from "react-i18next";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { useModal } from "@/app/modals/hooks/useModal";
import { ModalsIds } from "@/app/modals/modals.types";
import { useNotifications } from "@/app/notifications/hooks/useNotifications";

import { NotificationTypes } from "../../app/notifications/notifications.types";
import { SalesTable } from "../components/tables/SalesTable";

export function SalesPage() {
  const { t } = useTranslation();
  const { openModal } = useModal();
  const { createNotification } = useNotifications();

  /**
   * Opens the example modal with a predefined ID.
   *
   * @function handleClickOpenExampleModal
   * @returns {void}
   */
  const handleClickOpenExampleModal = () =>
    openModal(ModalsIds.EXAMPLE_MODAL, {
      id: 213552,
    });

  /**
   * Creates a toast notification with a predefined title and message.
   *
   * @function handleClickCreateToast
   * @returns {void}
   */
  const handleClickCreateToast = () =>
    createNotification(NotificationTypes.TOAST, {
      title: "Test Toast",
      message: "This is a test toast, it can be customizable.",
    });

  /**
   * Creates a dialog notification with a predefined title and message.
   *
   * @function handleClickCreateDialog
   * @returns {void}
   */
  const handleClickCreateDialog = () =>
    createNotification(NotificationTypes.DIALOG, {
      title: "Title of the dialog",
      message: "Are you sure you want to close this dialog?",
      onConfirm: {
        text: "Confirm",
        handler: ({ closeDialog }) => {
          closeDialog();
          createNotification(NotificationTypes.TOAST, {
            title: "Dialog confirmed",
            message: "The necessary actions will be executed.",
          });
        },
      },
      onCancel: {
        text: "Cancel",
        handler: ({ closeDialog }) => {
          closeDialog();
          createNotification(NotificationTypes.TOAST, {
            title: "Dialog canceled",
            message: "The intended actions will not be executed.",
          });
        },
      },
    });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4, m: 4 }} data-testid="sales-page">
      <Box>
        <Typography variant={"h5"} fontWeight="bold">
          {t("sales.list.title")}
        </Typography>
      </Box>
      <Paper sx={{ p: 4 }}>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <Button variant="contained" color="warning" onClick={handleClickOpenExampleModal}>
            Open Example Modal
          </Button>

          <Button variant="contained" color="warning" onClick={handleClickCreateToast}>
            Create a Toast
          </Button>

          <Button variant="contained" color="warning" onClick={handleClickCreateDialog}>
            Create a Dialog
          </Button>
        </Box>

        <Divider sx={{ my: 4 }} />

        <SalesTable />
      </Paper>
    </Box>
  );
}

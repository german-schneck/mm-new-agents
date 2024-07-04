import { useTranslation } from "react-i18next";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { ModalsIds } from "@/lib/modals/types";
import { useModal } from "@/lib/modals/useModal";

import { SalesTable } from "../components/tables/SalesTable";

export function SalesPage() {
  const { t } = useTranslation();
  const { openModal } = useModal();

  /**
   * Opens a warning modal with a predefined title and message.
   */
  const handleClickOpenWarningModal = () =>
    openModal(ModalsIds.WARNING, {
      title: "Mensaje de advertencia",
      message:
        "Este es un mensaje de advertencia de prueba, puede ser totalmente personalizado en base a la necesidad.",
    });

  /**
   * Opens an error modal with a predefined title and message.
   */
  const handleClickOpenErrorModal = () =>
    openModal(ModalsIds.ERROR, {
      title: "Mensaje de error",
      message: "Este es un mensaje de error, puede ser customizado segun necesidad.",
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
          <Button variant="contained" color="warning" onClick={handleClickOpenWarningModal}>
            Open Warning Modal
          </Button>
          <Button variant="contained" color="error" onClick={handleClickOpenErrorModal}>
            Open Error Modal
          </Button>
        </Box>

        <Divider sx={{ my: 4 }} />

        <SalesTable />
      </Paper>
    </Box>
  );
}

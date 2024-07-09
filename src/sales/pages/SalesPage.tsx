import { useTranslation } from "react-i18next";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { useModal } from "@/app/modals/hooks/useModal";

import { ModalsIds } from "../../app/modals/modals.types";
import { SalesTable } from "../components/tables/SalesTable";

export function SalesPage() {
  const { t } = useTranslation();
  const { openModal } = useModal();

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
        </Box>

        <Divider sx={{ my: 4 }} />

        <SalesTable />
      </Paper>
    </Box>
  );
}

import { useTranslation } from "react-i18next";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import NewSaleForm from "../components/forms/NewSaleForm";
import { useSalesController } from "../hooks/useSalesController";

export function NewSalePage() {
  const { t } = useTranslation();
  const { handleCreateNewSale, createMutation } = useSalesController();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4, m: 4 }}>
      <Box>
        <Typography variant={"h5"} fontWeight="bold">
          {t("forms.new_sale_form.new_sale")}
        </Typography>
        <Typography variant={"subtitle1"} fontWeight="light">
          {t("forms.new_sale_form.complete_data")}
        </Typography>
      </Box>
      <Paper sx={{ p: 4, display: "flex", flexDirection: "column", maxWidth: 500 }}>
        <NewSaleForm isLoading={createMutation.isPending} onSubmit={handleCreateNewSale} />
      </Paper>
    </Box>
  );
}

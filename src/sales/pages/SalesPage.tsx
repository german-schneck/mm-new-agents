import { useTranslation } from "react-i18next";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { SalesTable } from "../components/tables/SalesTable";

export function SalesPage() {
  const { t } = useTranslation();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4, m: 4 }}>
      <Box>
        <Typography variant={"h5"} fontWeight="bold">
          {t("sales.list.title")}
        </Typography>
      </Box>
      <Paper sx={{ p: 4 }}>
        <SalesTable />
      </Paper>
    </Box>
  );
}

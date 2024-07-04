import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#ff7800",
    },
    error: {
      main: "#f44336",
    },
    background: {
      default: "#fff",
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          "&.MuiChip-colorSecondary": {
            color: "#fff",
            fontWeight: "bold",
          },
        },
      },
    },
  },
});

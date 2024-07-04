import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { Person2, ShoppingCart } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { NavItem } from "./NavigationMenu.types";

const navItems: NavItem[] = [
  { icon: Person2, path: "/sales", label: "navigator.clients" },
  { icon: ShoppingCart, path: "/sales/new", label: "navigator.new_sale" },
];

export function NavigationMenu(): JSX.Element {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 4, alignItems: "center" }} component="nav">
      {navItems.map(({ icon: Icon, path, label }, index) => (
        <Box
          key={`__module-navigator-item-${index.toString()}`}
          component="a"
          href={path}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color:
              location.pathname === path ?? location.pathname.includes(path)
                ? (theme) => theme.palette.secondary.main
                : (theme) => theme.palette.background.default,
            textDecoration: "none",
          }}
        >
          <Icon sx={{ width: 22, height: 22 }} />
          <Typography variant="caption" component="span" fontWeight={"bold"}>
            {t(label)}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
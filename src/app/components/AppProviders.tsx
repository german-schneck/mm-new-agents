import { Theme, ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ModalProvider } from "../modals/ModalProvider";
import { queryClient as defaultQueryClient } from "../queryClient";
import { defaultTheme } from "../theme/theme";

export function AppProviders({
  children,
  queryClient = defaultQueryClient,
  theme = defaultTheme,
}: {
  readonly children: React.ReactNode;
  readonly queryClient?: QueryClient;
  readonly theme?: Theme;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ModalProvider>{children}</ModalProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

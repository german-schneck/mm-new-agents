import { MemoryRouter, RouterProvider, createMemoryRouter } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import { RenderOptions, render } from "@testing-library/react";

import { defaultTheme } from "@/lib/theme/theme";

import { routes } from "../app/routes";

export function TestProviders({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
}

export function TestProvidersWithRouter({ children }: { children: React.ReactNode }) {
  return (
    <TestProviders>
      <MemoryRouter>{children}</MemoryRouter>
    </TestProviders>
  );
}

export function TestApp({ initialEntries }: { initialEntries?: string[] }) {
  const router = createMemoryRouter(routes, {
    initialEntries,
  });

  return (
    <TestProviders>
      <RouterProvider router={router} />
    </TestProviders>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function renderWithTestProviders(ui: React.ReactElement, options?: RenderOptions) {
  return render(ui, { wrapper: TestProvidersWithRouter, ...options });
}
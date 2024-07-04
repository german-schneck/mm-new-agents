import { I18nextProvider } from "react-i18next";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";

import i18n from "@/i18n";

import { SalesPage } from "./SalesPage";

const queryClient = new QueryClient();

describe("SalesPage", () => {
  test("renders SalesPage with title", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18n}>
          <SalesPage />
        </I18nextProvider>
      </QueryClientProvider>,
    );

    expect(screen.getByText("Clients")).toBeInTheDocument();
  });

  test("renders SalesTable component", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18n}>
          <SalesPage />
        </I18nextProvider>
      </QueryClientProvider>,
    );

    expect(await screen.findByTestId("clients-table")).toBeInTheDocument();
  });
});

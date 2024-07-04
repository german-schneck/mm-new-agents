import { I18nextProvider } from "react-i18next";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";

import i18n from "@/i18n";

import { NewSalePage } from "./NewSalePage";

const queryClient = new QueryClient();

describe("NewSalePage", () => {
  test("renders NewSalePage with title and subtitle", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18n}>
          <NewSalePage />
        </I18nextProvider>
      </QueryClientProvider>,
    );

    expect(screen.getByText("New Sale")).toBeInTheDocument();
    expect(screen.getByText("Complete the following data to create a new contract")).toBeInTheDocument();
  });

  test("renders NewSaleForm component", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18n}>
          <NewSalePage />
        </I18nextProvider>
      </QueryClientProvider>,
    );

    expect(screen.getByTestId("new-sale-form")).toBeInTheDocument();
  });
});

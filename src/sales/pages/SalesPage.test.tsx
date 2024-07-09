import { render, screen } from "@testing-library/react";

import { SalesPage } from "./SalesPage";
import { TestProviders } from "../../../test/tests.helpers";
describe("SalesPage", () => {
  const renderSalesPage = () =>
    render(
      <TestProviders>
        <SalesPage />
      </TestProviders>,
    );

  test("renders SalesPage with title", () => {
    renderSalesPage();
    expect(screen.getByText("Clients")).toBeInTheDocument();
  });

  test("renders SalesTable component", async () => {
    renderSalesPage();
    expect(await screen.findByTestId("clients-table")).toBeInTheDocument();
  });
});

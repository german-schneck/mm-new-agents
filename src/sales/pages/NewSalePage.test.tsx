import { render, screen } from "@testing-library/react";

import { NewSalePage } from "./NewSalePage";
import { TestProviders } from "../../../test/tests.helpers";

describe("NewSalePage", () => {
  const renderNewSalePage = () =>
    render(
      <TestProviders>
        <NewSalePage />
      </TestProviders>,
    );

  test("renders NewSalePage with title and subtitle", () => {
    renderNewSalePage();

    expect(screen.getByText("New Sale")).toBeInTheDocument();
    expect(screen.getByText("Complete the following data to create a new contract")).toBeInTheDocument();
  });

  test("renders NewSaleForm component", () => {
    renderNewSalePage();

    expect(screen.getByTestId("new-sale-form")).toBeInTheDocument();
  });
});

import { act } from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SignInPage } from "./SignInPage";

import { TestApp, renderWithTestProviders } from "#/tests.helpers";

describe("SignInPage", () => {
  it("should render", async () => {
    const { container } = render(<TestApp initialEntries={["/login"]} />);

    expect(screen.getByTestId("login-page")).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("should render alternative", async () => {
    const { container } = renderWithTestProviders(<SignInPage />);

    expect(screen.getByTestId("login-page")).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("should navigate to /sales", async () => {
    render(<TestApp initialEntries={["/login"]} />);

    await act(() => userEvent.click(screen.getByText("Sign In")));

    expect(screen.getByTestId("sales-page")).toBeInTheDocument();
  });
});

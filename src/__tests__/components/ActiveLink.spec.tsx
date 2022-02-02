import { render, screen } from "@testing-library/react";

import { ActiveLink } from "../../components/ActiveLink";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/home",
      };
    },
  };
});

describe("ActiveLink component", () => {
  test("renders correctly", () => {
    const { debug } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    );

    // debug();
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("adds active class if the link is equals router path", () => {
    const { getByText } = render(
      <ActiveLink href="/home" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    );

    expect(getByText("Home")).toHaveClass("active");
  });
});

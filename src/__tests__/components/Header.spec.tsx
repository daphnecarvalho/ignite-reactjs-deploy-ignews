import { render } from "@testing-library/react";

import { Header } from "../../components/Header";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/posts",
      };
    },
  };
});

jest.mock("next-auth/react", () => {
  return {
    useSession() {
      return {
        data: null,
        status: "unauthenticated",
      };
    },
  };
});

describe("Header component", () => {
  test("renders correctly", () => {
    const { getByText } = render(<Header />);

    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Posts")).toBeInTheDocument();
  });
});

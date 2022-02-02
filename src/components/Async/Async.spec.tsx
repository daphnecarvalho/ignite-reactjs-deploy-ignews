import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Async } from ".";

test("renders correctly", async () => {
  render(<Async />);

  // screen.logTestingPlaygroundURL();

  expect(screen.getByText("Async")).toBeInTheDocument();

  // Não funciona porquê o button demora 1s para estar visível em tela
  // expect(screen.getByText("Button")).toBeInTheDocument();

  // Este espera o button aparecer em tela
  // expect(
  //   await screen.findByText(
  //     "Button",
  //     {},
  //     {
  //       timeout: 1500,
  //     }
  //   )
  // ).toBeInTheDocument();

  // await waitFor(
  //   () => {
  //     expect(screen.getByText("Button")).toBeInTheDocument();
  //   },
  //   {
  //     timeout: 1500,
  //   }
  // );

  // await waitForElementToBeRemoved(screen.queryByText("Button Invisible"));
});

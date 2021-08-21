import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

test("button has correct initatial color", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: "Change"
  });
  expect(button).toHaveStyle({ backgroundColor: "red" });
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "blue" });
});

// test("button teruns bule when click", () => {
//   render(<App />);
//   const button = screen.getByRole("button", { name: "Change to blue" });
//   expect(button).toHaveStyle({ backgroundColor: "blue" });
// });

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Period from "../../../pages/periodPage/Period";
import { render, screen} from "@testing-library/react";


describe ("periodPage", () => {
  test("renders period page", () => {
  render(<Period />, { route: "/Period" });
  expect(screen.getByRole("heading")).toHaveTextContent(/testing/i);
})
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
<BrowserRouter>
  <Period />
</BrowserRouter>,
div
  );
  ReactDOM.unmountComponentAtNode(div);
})
});
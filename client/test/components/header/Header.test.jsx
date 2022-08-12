import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "../../utils/testing";
import Header from "../../../components/header/Header";

test("renders Header component", () => {
  render(<Header />);
  expect(screen.asFragment()).toMatchSnapshot();
  expect(screen.getByRole("mfl-logo")).toBeInTheDocument();
});
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
<BrowserRouter>
  <Header />
</BrowserRouter>,
div
  );
  ReactDOM.unmountComponentAtNode(div);
});

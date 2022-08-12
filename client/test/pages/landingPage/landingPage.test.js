import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import App from "../../../pages/landingPage/LandingPage";

describe ("landingPage", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
test("renders Sign up", () => {
  render(<App />, {
    route: "/App",
  });
  expect(screen.getByText(/Sign up/i)).toBeInTheDocument();
})
test("renders Log in", () => {
  render(<App />, {
    route: "/App",
  });
  expect(screen.getByText(/Log in/i)).toBeInTheDocument();
})
});
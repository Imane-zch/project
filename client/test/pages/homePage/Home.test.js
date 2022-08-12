import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import Home from "../../../pages/homePage";


describe ("Home", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
});
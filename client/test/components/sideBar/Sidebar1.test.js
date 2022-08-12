import React from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "../../../components/sidebar";

describe ("Sidebar", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
  <BrowserRouter>
    <Sidebar />
  </BrowserRouter>,
  div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
});
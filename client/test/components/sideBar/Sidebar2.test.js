import React from "react";
import { BrowserRouter } from "react-router-dom";
import SideBar from "../../../components/Sidebar2.js";

describe ("Sidebar", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
  <BrowserRouter>
    <SideBar />
  </BrowserRouter>,
  div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
});
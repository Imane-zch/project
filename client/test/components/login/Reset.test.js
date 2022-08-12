import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ResetPage from "../../../pages/resetPage/ResetPage"

describe("ResetPage", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
  <BrowserRouter>
    <ResetPage />
  </BrowserRouter>,
  div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
});
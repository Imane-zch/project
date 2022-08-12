import { render, screen } from "@testing-library/react"
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import user from "@testing-library/user-event";
import Registration from "../../../components/login/Registration"

describe("Registration", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
  <BrowserRouter>
    <Registration />
  </BrowserRouter>,
  div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
  test("renders register", () => {
  render(<Registration />, {
  route: "/Registration",
  });
  expect(screen.getByText(/Register/i)).toBeInTheDocument();
})
  test("on submit, with no input data sign up request is not called", async () => {
    render(<Registration />, { route: "/Registration" });
    user.click(screen.getByRole("button"));
  })
});
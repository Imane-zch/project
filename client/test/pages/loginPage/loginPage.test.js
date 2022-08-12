import { render, screen} from "@testing-library/react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "../../../pages/loginPage/LoginPage";

describe ("LoginPage", () => {
test("renders reset your password", () => {
  render(<LoginPage />, {
    route: "/LoginPage",
  });
  expect(screen.getByText(/Reset your password/i)).toBeInTheDocument();
})
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
<BrowserRouter>
  <LoginPage />
</BrowserRouter>,
div
  );
  ReactDOM.unmountComponentAtNode(div);
})});
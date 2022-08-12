import React from "react";
import { render, fireEvent, screen} from "@testing-library/react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "../../../components/login/Login";

describe("Login", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
      div
        );
        ReactDOM.unmountComponentAtNode(div);
      })
    test("calls with user email and password", () => {
        const login = jest.fn();
        const error = null;
        render(
        <Login login={login} error={error} />
        );
        const email = screen.getByLabelText('Email');
        const password = screen.getByLabelText('Password');
        email.value = 'test@test.com';
        password.value = 'password';
        fireEvent.click(screen.getByText('Login'));  
        expect(login).toHaveBeenCalledTimes(1);
        expect(login).toHaveBeenCalledWith({
            email: "imane.ziouche@gmail.com",
            password: "password",
    });
})});
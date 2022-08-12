import React, { useState } from "react";
import Dashboard from "../../pages/moodLog/MoodLog";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import axios from "axios";

export default function Registration() {
  // Navigate between pages
  const navigate = useNavigate();

  const navigatetoDashboard = () => {
    navigate("/Dashboard");
  };
  const navigatetoLogin = () => {
    navigate("/Login");
  };
  // Registration


  const [error, setError] = useState("");

    
  const [fields, setFields] = useState({
    email: "",
    name: "",
    surname: "",
    password: "",
    confirmPassword: "",
  });

  const auth = getAuth();
   


   const handleChange = (e) => {
      setFields({ ...fields, [e.target.name]: e.target.value });
    };
  
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (fields.password.length < 6) {
        return setError("Password must be at least 6 characters in length.");
      }
      if (fields.confirmPassword !== fields.password) {
        return setError("Password and confirm password must match.");
      }


      try {
        const req = await axios.post("http://localhost:4000/api/user", {
          email: fields.email,
          password: fields.password,
          name: fields.name,
          surname: fields.surname,
        });
        const message = req.data.success;
        return navigate("/Login", {
          replace: true,
          state: {
            message,
          },
        });
      } catch (err) {
        const errMessage = err.response.data.error;
        return setError(errMessage);
      }
    };

    return (
      <div className="App">
        <div className="form">
          <div>
            <h1>Register</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <label className="label" htmlFor="name">
                First Name
              </label>
              <input
                className="input"
                type="text"
                name="name"
                value={fields.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="label" htmlFor="surname">
                Last Name
              </label>
              <input
                className="input"
                type="text"
                name="surname"
                value={fields.surname}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                className="input"
                type="email"
                name="email"
                value={fields.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="label" tmlFor="password">
                Password
              </label>

              <input
                className="input"
                type="password"
                name="password"
                value={fields.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="label" htmlFor="confirmPassword">
                Confirm Password
              </label>
            </div>
            <div>
              <input
                className="input"
                type="password"
                name="confirmPassword"
                value={fields.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            {error ? <p style={{ color: "red" }}>Error: {error}</p> : null}
            <div>
              <button type="submit" className="btn">
                Sign Up
              </button>
              <hr />
              <button onClick={navigatetoLogin} className="btn" type="submit">
                {" "}
                Login Here{" "}
              </button>
            </div>
            <Routes>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Login" element={<login />} />
            </Routes>
          </form>
        </div>
      </div>
  );
    
}

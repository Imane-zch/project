import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,  useLocation
} from "react-router-dom";
import Registration from "./Registration";
import Dashboard from "../../pages/moodLog/MoodLog";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



export default function  Login() {
  // Navigate between pages
  const location = useLocation();
  const navigate = useNavigate();
  
  const navigatetoDashboard = () => {
    navigate("/UserProfile");
  };
  const navigatetoReg = () => {
    navigate("/Registration");
  };
  const [fields, setFields] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");


  const auth =getAuth();


  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        fields.email,
        fields.password
      );
      if (user) {
        navigate("/UserProfile");
        console.log("Called");
        console.log(user)
      }
    } catch (err) {
      console.log(err);
      setError("Invalid email address or password.");
    }
  };
 

  return (
    <div>
      {location.state && location.state.message ? (
        <p style={{ color: "green" }}>{location.state.message}</p>
      ) : null}
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="label">Email Address</label>
        </div>
        <div>
          <input
            className="input"
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            required
          />
        </div>
        <div >
          <label htmlFor="password" className="label">Password</label>
        </div>
        <div>
          <input
            className="input"
            type="password"
            name="password"
            value={fields.password}
            onChange={handleChange}
            required
          />
        </div>
        
        {error ? <p style={{ color: "red" }}>Error: {error}</p> : null}
        <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <hr />
            <button onClick={navigatetoReg} className="btn" type="submit">
              Register Here{" "}
            </button>
          </div>
          {/* <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Registration" element={<Registration />} />
          </Routes>
       */}
      </form>
      
    </div>
  );
}

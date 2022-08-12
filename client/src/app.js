import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/landingPage/LandingPage";
import Header from "./components/header/Header";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/footer/Footer.js";
import Registration from "./components/login/Registration";
import PeriodPage from "./pages/periodPage/Period";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";
//import Dashboard from "../pages/dashboard/MoodLog";
import Login from "./pages/loginPage/LoginPage";
import SignUp from "./pages/signUpPage/SignUp"
import UserProfile from "./pages/profilePage/UserProfile";
import ResetPage from "./pages/resetPage/ResetPage";

import { useEffect } from "react";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./services/firebase";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { saveUser } from "./redux/slice/authSlice";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import PublicRoutes from  "./utils/PublicRoutes";

import TestLog from "./pages/moodLog/MoodLog"

function App (){

  initializeApp(firebaseConfig);
  const auth = getAuth();
  const user = useSelector((state) => state.auth.value);
  console.log("user from state", user);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(saveUser(user.accessToken))
      } else {
        dispatch(saveUser(undefined));
      }
    });
  }, [auth, dispatch]);

  return (

    <Router>
      <Header />

      <Routes>
      <Route exact path="/" element={<Home />} />

   <Route path="/" element={<ProtectedRoutes/>}>
      
     
  </Route>
     
        
  <Route path="/" element={<PublicRoutes/>}>
  <Route exact path="/" element={<Home />}></Route>
       {/* <Route path="/Dashboard" element={<Dashboard />}></Route> */}
        <Route path="/period" element={<PeriodPage />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route path="/Home" element={<landingPage />}></Route>
        <Route path="/SignUp" element={< SignUp/>}></Route>
        <Route path="/Reset" element={< ResetPage/>}></Route>
        <Route path = "/Test" element = {<TestLog/>}></Route>

        
        <Route path="/UserProfile/*" element={<UserProfile />} />

  </Route> 
      </Routes>
      <Footer />
    </Router>
 
);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

export default App;

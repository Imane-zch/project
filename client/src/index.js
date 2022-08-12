import React from "react";
import ReactDOM from "react-dom/client";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import { StoreProvider } from "easy-peasy";
//import store from "./store/store";
import reportWebVitals from "./reportWebVitals";
import App from "./app";

import { store } from "./redux/store";
import { Provider } from "react-redux";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
     <Provider store={store}>
    
     
     <App/>
     
      
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

























// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/landingPage/LandingPage.js";
// import Header from "./components/header/Header.js";
// import reportWebVitals from "./reportWebVitals";
// import Footer from "./components/footer/Footer.js";
// import Dashboard from "./pages/homePage/Home.js";
// import Registration from "./components/login/Registration.js";
// import Login from "./components/login/Login.js";
// import PeriodPage from "./pages/periodPage/Period.js";
// import "bootstrap/dist/css/bootstrap.min.css";
// import ThemeProvider from "react-bootstrap/ThemeProvider";
// import SignUp from "./pages/signUpPage/SignUp"

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Router>
    
//       <Header />

//       <Routes>
//         <Route exact path="/" element={<Home />}></Route>
//         <Route path="/Dashboard" element={<Dashboard />}></Route>
//         <Route path="/Dashboard" element={<Dashboard />}></Route>
//         <Route path="/period" element={<PeriodPage />}></Route>
//         <Route exact path="/Login" element={<Login />}></Route>
//         <Route path="/Home" element={<landingPage />}></Route>
//         <Route path="/SignUp" element={< SignUp/>}></Route>
//       </Routes>
//       <Footer />
//     </Router>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();








import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Link,
  useLocation,
} from "react-router-dom";
//import Registration from "./Registration";
import Dashboard from "../moodLog/MoodLog";
import { useEffect, useState } from "react";
import firebaseService from "../../services/firebase";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import "../../style/ProfilePage.css";
import Profile1 from "../../assets/Profile1.png";
import Sidebar2 from "../../components/sidebar/Sidebar2.js";

import axios from "axios";
import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import { useGetUserQuery } from "../../redux/slice/profileSlice";

export default function UserProfile() {
  //   const [loadingUser, setLoadingUser] = useState(true);
  //   const [user, setUser] = useState(null);

  const auth = getAuth();

  const {
    currentData: user,
    isLoading,
    isSuccess,
    isError,
  } = useGetUserQuery();

  //   let navigate = useNavigate()

  //   const getUser = async () => {
  //     try {
  //       const token = await firebaseService.auth.currentUser.getIdToken(true);
  //       console.log(token);
  //       const req = await axios.get("http://localhost:4000", {
  //         headers: {
  //           authorization: `Bearer ${token}`
  //         }
  //       });

  //       console.log(req.data);

  //       if (req.data) {
  //         setUser(req.data);
  //         setLoadingUser(false);
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   useEffect(() => {
  //     getUser();
  //   }, []);

  return (
    // <>
    //    {/* <h1>Dashboard</h1>
    //   {loadingUser ? (
    //     <p>Loading User</p>
    //   ) : ( */}
    //     // <div className="detail">
    //     //   <p>Name: {auth.currentUser.displayName}</p>
    //     //   <p>Surname: {auth.currentUser.surname}</p>
    //     //   <p>Email: {auth.currentUser.email}</p>
    //     // </div>
    <Container>
      <div className="header">
        <h1>Your Profile Details</h1>
      </div>
      <div className="profile">
        <img src={Profile1} alt="ProfilePic" width="200" height="200" />
      </div>
      <div className="detail">
        {isLoading && <h2>...Loading</h2>}
        {isError && <h2>Something went wrong</h2>}
        {isSuccess && (
          <div>
            <p>Name: {user.name}</p>
            <p>Surname: {user.surname}</p>
            <p>Email: {user.email}</p>
          </div>
        )}
      </div>
      <div>
        <Sidebar2 />
      </div>
    </Container>
    // to="/"
    // onClick={() =>  {
    //   signOut(auth)
    //     .then(() => {
    //       console.log("user signed out");
    //     })
    //     .catch((error) => {
    //       console.log("error", error);
    //     });
    // }}
    // >
    // Log out
    // </Link>

    // //     </>
  );
}

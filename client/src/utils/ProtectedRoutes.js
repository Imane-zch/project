import React from "react";
import { Navigate, Route, Outlet} from "react-router";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { useSelector } from "react-redux";


	const useAuth=()=>{
	 
    const user = useSelector((state) => state.auth.value)
	  if(user){
	    return true
	  } else {
	    return false
	  }
	}
	

	const  ProtectedRoutes=(props) =>{
	

	  const auth=useAuth()	

	  return auth?<Outlet/>: <Navigate to="/SignUp"/>
	}
	
	export default ProtectedRoutes;
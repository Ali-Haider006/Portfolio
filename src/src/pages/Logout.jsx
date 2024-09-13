/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Logout = () => {
    const [token, setToken] = useState(localStorage.getItem("token"));  
    useEffect(()=>{
        const LogoutUser = () =>{
            setToken("");
            localStorage.removeItem("token");
        };
        LogoutUser();
    },[]);
    return <Navigate to="/login"/>;
 }
export default Logout;
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import "./Layout.css"
const Layout = () => {
  return (
    <>
      
      <Outlet />
      <div style={{position: "fixed", bottom: "2rem", display: "flex", justifyContent: "center" , width: "100%"}}>
      <NavBar />  
      </div>
    </>
  );
};
export default Layout;

import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      style={{
        display: "flex",
        borderRadius: "10px",
        backgroundColor: "lightblue",
        padding: "10px",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Link to="/blogs" style={{ marginRight: "10px" }}>
        Blogs
      </Link>
      <Link to="/about" style={{ marginRight: "10px" }}>
        About
      </Link>
      <Link to="/" style={{ marginRight: "10px" }}>
        Contact
      </Link>
    </nav>
  );
};
export default NavBar;

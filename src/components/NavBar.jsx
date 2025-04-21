import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
    >
      <Link to="/" style={{ marginRight: "10px", fontWeight:"bold",color: 'white'}}>
        Blogs
      </Link>
      <Link to="/about" style={{ marginRight: "10px", fontWeight:"bold", color: 'white'}}>
        About
      </Link>
      <Link to="/contact" style={{ marginRight: "10px", fontWeight:"bold",color: 'white' }}>
        Contact
      </Link>
    </nav>
  );
};
export default NavBar;

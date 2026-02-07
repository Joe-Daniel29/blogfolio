import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/" style={{ marginRight: "10px" ,color: 'black'}}>
        Blogs
      </Link>
      <Link to="/about" style={{ marginRight: "10px", color: 'black'}}>
        About
      </Link>
      <Link to="/contact" style={{ marginRight: "10px", color: 'black' }}>
        Contact
      </Link>
    </nav>
  );
};
export default NavBar;

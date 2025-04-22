import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <div>Error</div>
      <Link to={'/'}>Take me Home</Link>
    </>
  );
};

export default NotFound;

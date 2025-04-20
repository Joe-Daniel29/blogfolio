import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <div>Error</div>
      <Link to={'/blogs'}>Take me Home</Link>
    </>
  );
};

export default NotFound;

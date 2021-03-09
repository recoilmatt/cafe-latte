import React from "react";
import { Link } from "react-router-dom";

function HeaderTest() {
  return (
    <div>
      <Link to="/menu">Menu</Link>
      <Link to="/locations">Locations</Link>
    </div>
  );
}

export default HeaderTest;

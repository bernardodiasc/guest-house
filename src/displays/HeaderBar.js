import React from "react";
import { Link } from "react-router-dom";

const HeaderBar = () => (
  <header>
    <Link to="/">
      <h1>Guest house manager</h1>
    </Link>
  </header>
);

export default HeaderBar;

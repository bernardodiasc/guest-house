import React, { Component } from "react";
import { Link } from "react-router-dom";

import Bedrooms from "../displays/Bedrooms";
import bedrooms from "../constants/bedrooms";

class Homepage extends Component {
  render() {
    return <Bedrooms Link={Link} bedrooms={bedrooms} />;
  }
}

export default Homepage;

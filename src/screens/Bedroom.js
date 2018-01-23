import React, { Component } from "react";
import { Link } from "react-router-dom";

import bedrooms from "../constants/bedrooms";

class Bedroom extends Component {
  render() {
    const id = this.props.match.params.id;
    const bedroom = bedrooms.find(x => x.id === id);
    return <div>{bedroom.name}</div>;
  }
}

export default Bedroom;

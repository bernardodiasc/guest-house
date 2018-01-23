import React, { Component } from "react";
import { Link } from "react-router-dom";

import HeaderBar from "../displays/HeaderBar";

class App extends Component {
  render() {
    return (
      <main>
        <HeaderBar Link={Link} />
        <article>{this.props.children}</article>
      </main>
    );
  }
}

export default App;

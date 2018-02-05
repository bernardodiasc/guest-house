import React, { Component } from "react";

import HeaderBar from "../displays/HeaderBar";

class App extends Component {
  render() {
    return (
      <main>
        <HeaderBar />
        <article>{this.props.children}</article>
      </main>
    );
  }
}

export default App;

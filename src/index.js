import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import App from "./Screens/App";
import Homepage from "./Screens/Homepage";
import Bedroom from "./Screens/Bedroom";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <App>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/bedroom/:id" component={Bedroom} />
          <Route component={Homepage} />
        </Switch>
      </App>
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById("root")
);

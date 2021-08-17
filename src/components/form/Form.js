import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../routes/Routes";

export default class Form extends Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}

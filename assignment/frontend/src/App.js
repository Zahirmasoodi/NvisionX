import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Home from "./components/home";
import Request from "./components/request";
import Aboutus from "./components/aboutus";
import "./App.css";
import Visionandmission from "./components/visionandmission";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/request" component={Request} />
          <Route path="/about" component={Aboutus} />
          <Route path="/vision" component={Visionandmission} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

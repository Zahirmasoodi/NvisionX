import Carousel from "./carousel";
import Aboutus from "./aboutus";
import Visionandmission from "./visionandmission";
import Footer from "./footer";
import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <Aboutus />
        <Visionandmission />
        <Footer />
      </div>
    );
  }
}

export default Home;

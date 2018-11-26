import React, { Component } from "react";
import Navbar from "../MainComponents/Navbar/Navbar";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar />
        <UserNavbar />
        <Mstories />
        
      </div>
    );
  }
}

export default HomePage;

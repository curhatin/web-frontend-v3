import React, { Component } from "react";
import Navbar from "../MainComponents/Navbar/Navbar";
import UserNavbar from "../MainComponents/UserNavbar'"
import Mstory from "../MainComponents/Mstory/Mstory";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <UserNavbar />
        <Mstory />
        
      </div>
    );
  }
}

export default HomePage;

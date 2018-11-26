import React, { Component } from "react";
import Footer from "../MainComponents/Footer/Footer";
import UserNavbar from "../MainComponents/UserNavbar/UserNavbar";
import Navbar from "../MainComponents/Navbar/Navbar";
import Pstories from "../MainComponents/Pstories/Pstories";
import { Z_FIXED } from "zlib";

class PeopleStories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
          <Navbar />
          <UserNavbar />
        <Pstories />
      </div>
    );
  }
}

export default PeopleStories;

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Navbar/Style.css";
import Logo from "../../../logo/LogoYellow.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <div className='white-nav-top'>
            <div id='main-nav' className="container-fluid">
              <div className="row navbar">
                <div className="col-md-2 text-right">
                  <a>
                    <img src={Logo} alt="logo" />
                  </a>
                </div>

                <div className="col-md-8">
                  <ul className="nav justify-content-end">
                    <li className="nav-item">
                      <a className="nav-link active" href="#home">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#about">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#team">
                        Share
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#statement">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>

                <div id="home-btn" className="col-md-2">
                  <a className="btn btn-outline-primary btn-sm" href="#">
                    Sign In
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

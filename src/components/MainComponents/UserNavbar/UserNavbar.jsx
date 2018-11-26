import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../UserNavbar/Style.css";
import Logo from "../../../logo/LogoYellow.png";

class UserNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div id='UserNavbar'>
          <div className='user-nav-top'>
            <div id='main-nav' className="container-fluid">
              <div className="row navbar">
                <div className="col-md-2 text-right">
                </div>

                <div className="col-md-8">
                  <ul className="nav justify-content-end">
                    <li className="nav-item">
                      <a className="nav-link active" href="navbar">
                        People stories
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#about">
                        My Stories
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#team">
                        Create Story
                      </a>
                    </li>
                  </ul>
                </div>

                <div id="search-input" className="col-md-2">
                <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              id="name"
                              placeholder="Search ..... "
                            />
                          </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserNavbar;

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div id="login">
          <div className="container-login">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4" />
                <div className="col-md-8">
                  <div id="register-right">
                    <div id='login-form'>
                      <a href='#'>
                        <p>HOME</p>
                      </a>
                      <h4>
                        {" "}
                        Get <span>STARTED</span>{" "} <br/>
                      </h4>
                      <p>It's all free</p>
                      <div className="row">
                        <div className="col-md-12">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              id="name"
                              placeholder="Full name"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              id="name"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              id="name"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                      </div>
                      <div id="login-btn">
                        <button type="button" className="btn btn-outline-secondary">
                          Sign Up
                        </button>
                      </div>
                    </div>
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

export default Register;

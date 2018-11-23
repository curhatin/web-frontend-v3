import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";

class Login extends Component {
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
                  <div id="login-right">
                    <div id='login-form'>
                      <a href='#'>
                        <p>HOME</p>
                      </a>
                      <h4>
                        {" "}
                        Sign in to <span>CURHATIN</span>{" "}
                      </h4>
                      <p>Enter your detail below!</p>
                      <div className="row">
                        <div className="col-md-12">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              id="name"
                              placeholder="Email..."
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              id="name"
                              placeholder="Password.."
                            />
                          </div>
                        </div>
                      </div>
                      <div id="login-btn">
                        <button type="button" className="btn btn-outline-secondary">
                          Sign In
                        </button>
                      </div>

                      <div id="login-register-box">
                        <p> Sign Up?</p>
                        <div id="login-register-btn">
                          <button type="button" className="btn btn-outline-dark">
                            Click here
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
      </div>
    );
  }
}

export default Login;

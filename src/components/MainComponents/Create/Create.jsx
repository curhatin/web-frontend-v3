import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Create/Style.css";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div id="box-lg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div id="create-boxes">
                  <div className="row">
                    <div id="create-wrapper">
                      <div className="col-md-12">
                        <div id="comment-title">
                          <input type="text" class="form-control" placeholder="Title....." />
                        </div>
                        <hr />
                        <div id="stories-content">
                          <textarea type="text" placeholder="Your stories" />
                        </div>
                        <div className="row">
                        <div className="col-md-2">
                              <div id="create-button">
                                <button
                                  type="submit"
                                  className="btn-outline-success"
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                            <div className="col-md-10">
                              <div id="create-catagories">
                                <a href="#">
                                  <p> Education</p>
                                </a>
                                <a href="#">
                                  <p> Sex </p>
                                </a>
                                <a href="#">
                                  <p> Social life </p>
                                </a>
                                <a href="#">
                                  <p> Religion </p>
                                </a>
                                <a href="#">
                                  <p> Health </p>
                                </a>
                                <a href="#">
                                  <p> Others </p>
                                </a>
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
        </div>
      </div>
    );
  }
}

export default Create;

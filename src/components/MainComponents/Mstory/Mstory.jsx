import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Mstory/Style.css"


class Mstory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <div id="peoplestories">
          <div id="box-lg">
            <div className="container">
              <div className="row">
                <div className="col-md-10">
                  <div id="comment-boxes">
                    <div className="row">
                      <div id="comment-wrapper">
                        <div className="col-md-12">
                          <div id="comment-notif">
                            <p> 100 comments</p>
                            <p> 10 minutes ago</p>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div id="comment-box">
                            <div id="comment-title">
                              <a href="#">
                                <h5>
                                  <strong>Makan bang</strong>
                                </h5>
                              </a>
                            </div>
                            <hr />
                            <div id="comment-content">
                              <p>
                                {" "}
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Laboriosam, corrupti
                                voluptate. Facere vel autem, sequi asperiores
                                inventore facilis qui cum odit. Molestiae
                                praesentium ipsam saepe tenetur fugiat dolorem!
                                Magni, fugit?{" "}
                              </p>
                            </div>
                          </div>
                          <hr />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div id="topic-box">
                    <div>
                      <h6 className="text-center">
                        {" "}
                        <strong>TOPICS</strong>
                      </h6>
                      <hr />
                    </div>
                    <div id="topic-catagories">
                      <div className="topic-category">
                        <a href="#">
                          <p>EDUCATION</p>
                        </a>
                      </div>
                      <div className="topic-category">
                        <a href="#">
                          <p>SEX</p>
                        </a>
                      </div>
                      <div className="topic-category">
                        <a href="#">
                          <p>SOCIAL LIFE</p>
                        </a>
                      </div>
                      <div className="topic-category">
                        <a href="#">
                          <p>RELIGION</p>
                        </a>
                      </div>
                      <div className="topic-category">
                        <a href="#">
                          <p>HEALTH</p>
                        </a>
                      </div>
                      <div className="topic-category">
                        <a href="#">
                          <p>OTHERS</p>
                        </a>
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

export default Mstory;

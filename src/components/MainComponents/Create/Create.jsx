import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Create/Style.css";
import {connect} from 'react-redux'
import { createCurhat } from '../../../actions/postActions'
import { Link, withRouter } from 'react-router-dom'

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagId: 1,
      post: '',
      topic: ''
    };
  }

  handleOnChange = e => {
    this.setState({
        [e.target.name] : e.target.value
    })
    
}

handleSubmit = async () => {
 await this.props.createCurhat({
      tagId: this.state.tagId,
      post: this.state.post,
      topic: this.state.topic,
      token: this.props.token
  })
  this.props.history.push("/Mystories");
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
                          <input type="text" class="form-control" placeholder="Title....." name="topic" value={this.state.topic} onChange={this.handleOnChange} />
                        </div>
                        <hr />
                        <div id="stories-content">
                          <textarea type="text" placeholder="Your stories" name="post" value={this.state.post} onChange={this.handleOnChange} />
                        </div>
                        <div className="row">
                        <div className="col-md-2">
                              <div id="create-button">
                                <button
                                  type="submit"
                                  className="btn-outline-success"
                                  onClick={this.handleSubmit}
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


const mapStateToProps = state => ({
  token : state.auth.token
})
export default withRouter(connect(mapStateToProps,{createCurhat})(Create))

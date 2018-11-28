import React, { Component } from "react"
import HomePage from "./components/Pages/HomePage"
import Login from "./components/MainComponents/LoginPage/Login"
import Register from "./components/MainComponents/Register/Register"
import PeopleStories from "./components/Pages/PeopleStories"
import CreateStory from "./components/Pages/CreteStory"
import PeopleStoryDetail from "./components/Pages/PeopleStoryDetail"
import MyStoryDetail from "./components/Pages/MyStoryDetail"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import { cekToken } from "./actions/authActions"
import { connect } from "react-redux"
import Mystories from "./components/Pages/MyStories"

class App extends Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.cekToken(localStorage.getItem("token"))
    } else {
      this.setState({ isAuthenticated: false })
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route
                exact
                path="/Login"
                render={props => <Login {...props} />}
              />
              <Route
                exact
                path="/Register"
                render={props => <Register {...props} />}
              />
              <Route
                exact
                path="/Share"
                render={props => <PeopleStories {...props} />}
              />
              <Route
                exact
                path="/Mystories"
                render={props => <Mystories {...props} />}
              />
              <Route
                exact
                path="/MyStoryDetail"
                render={props => <MyStoryDetail {...props} />}
              />
              <Route
                exact
                path="/PeopleStoryDetail"
                render={props => <PeopleStoryDetail {...props} />}
              />
              <Route
                exact
                path="/CreateStory"
                render={props => <CreateStory {...props} />}
              />
              <Route
                exact
                path="/MyStoryDetail/:id"
                render={props => <MyStoryDetail {...props} />}
              />
              <Route
                exact
                path="/PeopleStories"
                render={props => <PeopleStories {...props} />}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default connect(
  null,
  { cekToken }
)(App)

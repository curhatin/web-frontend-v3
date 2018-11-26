import React, { Component } from 'react';
import HomePage from './components/Pages/HomePage';
import Login from './components/MainComponents/LoginPage/Login'
import { register } from './serviceWorker';
import Register from './components/MainComponents/Register/Register'
import Footer from './components/MainComponents/Footer/Footer'
import Navbar from './components/MainComponents/Navbar/Navbar';
import UserNavbar from './components/MainComponents/UserNavbar/UserNavbar';
import PeopleStories from './components/Pages/PeopleStories'
import Header from './components/MainComponents/Header/Header';
import Contact from './components/MainComponents/Contact/Contact';
import CreateStory from './components/Pages/CreteStory';
import PeopleStoryDetail from './components/Pages/PeopleStoryDetail';
import CommentStory from './components/Pages/CommentStory';


class App extends Component {
  render() {
    return (
      <div>
        <CommentStory />
      </div>
    );
  }
}

export default App;

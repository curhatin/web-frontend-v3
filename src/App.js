import React, { Component } from 'react';
import Navbar from './components/MainComponents/Navbar/Navbar';
import Header from './components/MainComponents/Header/Header';
import About from './components/MainComponents/AboutUs/AboutUs';


class App extends Component {
  render() {
    return (
      <div>
        < Navbar />
        < Header />
        < About />
      </div>
    );
  }
}

export default App;

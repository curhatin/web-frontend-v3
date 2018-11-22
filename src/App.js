import React, { Component } from 'react';
import Navbar from './components/MainComponents/Navbar/Navbar';
import Header from './components/MainComponents/Header/Header';
import About from './components/MainComponents/AboutUs/AboutUs';
import Contact from './components/MainComponents/Contact/Contact';
import Footer from './components/MainComponents/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div>
        < Navbar />
        < Header />
        < About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;

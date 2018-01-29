import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

import './App.css';

import Navbar from '../Components/Navbar'
import Welcome from '../Pages/Welcome'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Portfolio from '../Pages/Portfolio'
import Footer from '../Components/Footer'

class App extends Component {
  // In this format a constructor is required. Make sure you understand why...
  constructor() {
    super();
  }

  scrollToAboutOnClick(elementId) {
    scrollToComponent(document.getElementById(elementId), {
      offset: 0,
      align: 'top',
      duration: 750
  });
  }

  render() {
    return (
      <div className="App">
        <div className="backToTop" onClick={this.scrollToAboutOnClick.bind(this, "welcome-div")}>Back to Top</div>
        <Navbar />
        <Welcome
          welcomeText="Hello. My name is Anathi."
          welcomeTextSecondLine="I build websites and mobile apps for humans."
          welcomeParagraph="Anathi Keswa is developer that lives and breathes all things front-end. Based in New York he's an active member of the developer community. His goal is to inspire creativity through his work and, in return, be inspired to be an even better hacker."
        />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
  
};

export default App;
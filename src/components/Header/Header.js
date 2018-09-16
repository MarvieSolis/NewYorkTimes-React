import React, { Component } from 'react';
import './Header.css';
import logo from './nytlogo.png';

class Header extends Component {
  render() {
    return (
      <div id="header" className="container-fluid">
        <img id="nytLogo" src={logo} alt="The New York Times Logo" />
        <h1 id="headerText">Article Scrubber</h1>
        <h6 id="headerText2">Search for and annotate articles of interest</h6>
      </div>
    );
  }
}

export default Header;
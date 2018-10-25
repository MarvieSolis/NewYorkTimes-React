import React, { Component } from 'react';
import './Header.css';
import NYTVideo from "../../static/NYTVideo.mp4";

class Header extends Component {
  render() {
    return (
      <div id="header" className="container-fluid">
        <div className="row justify-content-center">
          <div className="videoContainer">
            <video id="NYTVideo" playsInline width="100%" autoPlay muted loop>
              <source src={NYTVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
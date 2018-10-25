import React, { Component } from 'react';
import Main from "./components/Main/Main";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid mainApp">
          <Route path="/" component={Main} />
        </div>
      </Router>
    );
  }
}


export default App;
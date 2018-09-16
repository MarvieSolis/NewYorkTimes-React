import React, { Component } from 'react';
import Main from "./components/Main/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Main} />
        </div>
      </Router>
    );
  }
}


export default App;
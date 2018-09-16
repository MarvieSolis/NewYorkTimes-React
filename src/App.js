import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Results from './components/Results/Results';
import Saved from './components/Saved/Saved';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <Search />

        <Results />

        <Saved />

      </div>
    );
  }
}

export default App;

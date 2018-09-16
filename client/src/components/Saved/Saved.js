import React, { Component } from 'react';
import SavedArticles from '../SavedArticles/SavedArticles';
import './Saved.css';


class Saved extends Component {

  // A helper method for rendering one div for each saved article

    
    render() {
        return (
            <div id="savedSection" className="container">
                <div id="savedHeaderContainer" className="container-fluid">
                    <h2 id="savedHeader">Saved</h2>
                </div>

                <SavedArticles/>

                

            </div>
        );
    }
}

export default Saved;
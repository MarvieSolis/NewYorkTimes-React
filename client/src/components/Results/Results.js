import React, { Component } from 'react';
import ResultsArticles from '../ResultsArticles/ResultsArticles';
import './Results.css';

class Results extends Component {



    render() {
        return (
            <div id="resultsSection" className="container">
                <div id="resultsHeaderContainer" className="container-fluid">
                    <h2 id="searchHeader">Results</h2>
                </div>

                {console.log(this.state)}

            </div>
        );
    }
}

export default Results;
import React, { Component } from 'react';
import ResultsArticles from '../ResultsArticles/ResultsArticles';
import './Results.css';

class Results extends Component {

    renderArticles = () => {
        return this.state.articles.map(article => (
            <Results
                _id={article._id}
                key={article._id}
                title={article.headline.main}
                date={article.pub_date}
                url={article.web_url}
                handleSaveButton={this.handleSaveButton}
                getSavedArticles={this.getSavedArticles}
            />
        ));
    }

    render() {
        return (
            <div id="resultsSection" className="container">
                <div id="resultsHeaderContainer" className="container-fluid">
                    <h2 id="searchHeader">Results</h2>
                </div>

                <ResultsArticles 
                renderArticles={this.renderArticles}
                />


            </div>
        );
    }
}

export default Results;
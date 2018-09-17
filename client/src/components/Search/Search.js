import React, { Component } from 'react';
import './Search.css';
import '../Results/Results.css';
import ResultsArticles from '../ResultsArticles/ResultsArticles';
import API from "../../utils/api";

class Search extends Component {


    state = {
        topic: "",
        startYear: "",
        endYear: "",
        articles: [],
        saved: []
    };

    // Keep track of what user types into topic input so that input can be grabbed later
    handleTopicChange = (event) => {
        this.setState({ topic: event.target.value });
    }

    // Keep track of what user types into topic input so that input can be grabbed later
    handleStartYearChange = (event) => {
        this.setState({ startYear: event.target.value });
    }

    // Keep track of what user types into topic input so that input can be grabbed later
    handleEndYearChange = (event) => {
        this.setState({ endYear: event.target.value });
    }

    // When the search form submits, perform NYT api search with user input
    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Getting NYT Articles");
        console.log("this.state.topic: ", this.state.topic);
        console.log("this.state.startYear: ", this.state.startYear);
        console.log("this.state.endYear: ", this.state.endYear);
        API.searchNYT(this.state.topic, this.state.startYear, this.state.endYear)
            .then((res) => {
                this.setState({ articles: res.data.response.docs });
                console.log("this.state.articles: ", this.state.articles);
            });
    }

    renderArticles = () => {
        return this.state.articles.map(article => (
            <ResultsArticles
                _id={article._id}
                key={article._id}
                title={article.headline.main}
                date={article.pub_date.substring(0, 10)}
                url={article.web_url}
                handleSaveButton={this.handleSaveButton}
            // getSavedArticles={this.getSavedArticles}
            />
        ));
    }

    // When save article button is clicked, add article to db
    handleSaveButton = (id) => {
        const findArticleByID = this.state.articles.find((el) => el._id === id);
        console.log("findArticleByID: ", findArticleByID);
        const newSave = { title: findArticleByID.headline.main, date: findArticleByID.pub_date, url: findArticleByID.web_url };
        console.log(newSave);
        API.saveArticle(newSave);

    }

    


    render() {
        return (
            <div className="container-fluid">
                <div id="searchSection" className="container" >
                    <div id="searchHeaderContainer" className="container-fluid">
                        <h2 id="searchHeader">Search</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-sm-10">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="topic">Topic</label>
                                    <input type="topic" className="form-control" id="topic" aria-describedby="topic" placeholder="Enter topic" onChange={this.handleTopicChange} />
                                </div>
                                <div className="form-row">
                                    <div className="col-sm-5">
                                        <label htmlFor="startDate">Start Year</label>
                                        <input type="text" className="form-control" placeholder="Start" onChange={this.handleStartYearChange} />
                                    </div>
                                    <div className="col-sm-2">
                                        <h1 id="dash">-</h1>
                                    </div>
                                    <div className="col-sm-5">
                                        <label htmlFor="endDate">End Year</label>
                                        <input type="text" className="form-control" placeholder="End" onChange={this.handleEndYearChange} />
                                    </div>
                                </div>
                                <button type="submit" className="btn submitButton" onClick={this.handleFormSubmit}><i className="fas fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                </div>


                <div id="resultsSection" className="container">
                    <div id="resultsHeaderContainer" className="container-fluid">
                        <h2 id="searchHeader">Results</h2>
                    </div>

                    {this.renderArticles()}

                </div>
            </div>
        );
    }
}


export default Search;
import React, { Component } from 'react';
import './Search.css';
import '../Results/Results.css';
import '../Saved/Saved.css';
import ResultsArticles from '../ResultsArticles/ResultsArticles';
import SavedArticles from '../SavedArticles/SavedArticles';
import API from "../../utils/api";

class Search extends Component {


    state = {
        topic: "",
        startYear: "",
        endYear: "",
        articles: [],
        saved: []
    };

    // Load page with saved articles if they exist.
    componentDidMount() {
        this.getSavedArticles()
    }

    // Grabbing user entered topic
    handleTopicChange = (event) => {
        this.setState({ topic: event.target.value });
    }

    // Grabbing user entered start year
    handleStartYearChange = (event) => {
        this.setState({ startYear: event.target.value });
    }

    // Grabbing user entered end year
    handleEndYearChange = (event) => {
        this.setState({ endYear: event.target.value });
    }

    // Performs search via New York Times API
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

    // Renders the results div for each article
    renderArticles = () => {
        return this.state.articles.map(article => (
            <ResultsArticles
                _id={article._id}
                key={article._id}
                title={article.headline.main}
                date={article.pub_date.substring(0, 10)}
                url={article.web_url}
                handleSaveButton={this.handleSaveButton}
                getSavedArticles={this.getSavedArticles}
            />
        ));
    }

    // obtains saved articles from database
    getSavedArticles = () => {
        API.getArticle()
            .then((res) => {
                this.setState({ saved: res.data });
                console.log(this.state.saved);
            });
    }

    // Renders saved article divs on page
    renderSaved = () => {
        return this.state.saved.map(save => (
            <SavedArticles
                _id={save._id}
                key={save._id}
                title={save.title}
                date={save.date}
                url={save.url}
                handleDeleteButton={this.handleDeleteButton}
                getSavedArticles={this.getSavedArticles}
            />
        ));
    }

    // Adds article into database
    handleSaveButton = (id) => {
        const findArticleByID = this.state.articles.find((el) => el._id === id);
        console.log("findArticleByID: ", findArticleByID);
        const newSave = { title: findArticleByID.headline.main, date: findArticleByID.pub_date, url: findArticleByID.web_url };
        console.log(newSave);
        API.saveArticle(newSave);

    }

    // Deletes article fromm database
    handleDeleteButton = (id) => {
        API.deleteArticle(id)
            .then(this.getSavedArticles());
    }




    render() {
        return (
            <div className="container-fluid mainApp">
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

                <div id="savedSection" className="container">
                    <div id="savedHeaderContainer" className="container-fluid">
                        <h2 id="savedHeader">Saved</h2>
                    </div>

                    {this.renderSaved()}


                </div>
            </div>
        );
    }
}


export default Search;
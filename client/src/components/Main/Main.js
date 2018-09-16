import React, { Component } from "react";
import Header from "../Header/Header";
// import Saved from "../Saved/Saved";
import Search from "../Search/Search";
// import Results from "../Results/Results";
// import API from "../../utils/api";

class Main extends Component {

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
        // API.searchNYT(this.state.topic, this.state.startYear, this.state.endYear)
        //     .then((res) => {
        //         this.setState({ articles: res.data.response.docs });
        //         console.log("this.state.articles: ", this.state.articles);
        //     });
    }



    render() {
        return (

            <div className="container-fluid">
                <div className="container-fluid">
                    <Header />
                    {/* Search Form and Results Section */}
                    <Search
                    />
                    {/* <Results /> */}
                    {/* Saved Articles Section */}
                    {/* <Saved /> */}
                </div>
            </div>

        );
    }

}

export default Main;
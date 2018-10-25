import React, { Component } from "react";
import Header from "../Header/Header";
// import Saved from "../Saved/Saved";
import Search from "../Search/Search";

class Main extends Component {


    render() {
        return (

            <div className="mainApp">
                <Header />
                {/* Search Form and Results Section */}
                <Search />

                {/* Saved Articles Section */}
                {/* <Saved /> */}
            </div>

        );
    }

}

export default Main;
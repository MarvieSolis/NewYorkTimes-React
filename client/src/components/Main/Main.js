import React, { Component } from "react";
import Header from "../Header/Header";
// import Saved from "../Saved/Saved";
import Search from "../Search/Search";
import API from "../../utils/api";

class Main extends Component {


    render() {
        return (

            <div className="container-fluid">
                <div className="container-fluid">
                    <Header />
                    {/* Search Form and Results Section */}
                    <Search />

                    {/* Saved Articles Section */}
                    {/* <Saved /> */}
                </div>
            </div>

        );
    }

}

export default Main;
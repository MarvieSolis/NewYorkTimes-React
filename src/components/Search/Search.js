import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    render() {
        return (
            <div id="searchSection" className="container">
                <div id="searchHeaderContainer" className="container-fluid">
                    <h2 id="searchHeader">Search</h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-10">
                        <form>
                            <div className="form-group">
                                <label for="topic">Topic</label>
                                <input type="topic" className="form-control" id="topic" aria-describedby="topic" placeholder="Enter topic" />
                            </div>
                            <div className="form-row">
                                <div className="col-sm-5">
                                    <label for="startDate">Start Date</label>
                                    <input type="text" className="form-control" placeholder="Start" />
                                </div>
                                <div className="col-sm-2">
                                    <h1 id="dash">-</h1>
                                </div>
                                <div className="col-sm-5">
                                    <label for="endDate">End Date</label>
                                    <input type="text" className="form-control" placeholder="End" />
                                </div>
                            </div>
                            <button type="submit" className="btn submitButton"><i class="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
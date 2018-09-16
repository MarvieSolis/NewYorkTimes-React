import React, { Component } from 'react';
import './ResultsArticles.css';



class ResultsArticles extends Component {
  render() {
    return (
      <div id="articlePod" className="container">

        <div className="row justify-content-between topResult">
            <span className="articleLeft"><p><strong>Article Title</strong> - Article Date</p></span>
            <span className="articleRight">
                <button className="btn save"><i class="far fa-save"></i></button>
            </span>
        </div>
        <div className="row bottomResult">
            <p className="articleSummary">Here is the article's summary</p>
        </div>
      

      </div>
    );
  }
}

export default ResultsArticles;
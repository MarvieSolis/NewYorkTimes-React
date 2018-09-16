import React, { Component } from 'react';
import './SavedArticles.css';



class SavedArticles extends Component {
  render() {
    return (
      <div id="articlePod" className="container">

        <div className="row justify-content-between topResult">
            <span className="articleLeft"><p><strong>Article Title</strong> - Article Date</p></span>
            <span className="articleRight">
                <button className="btn remove"><i class="far fa-trash-alt"></i></button>
            </span>
        </div>
        <div className="row bottomResult">
            <p className="articleSummary">Here is the article's summary</p>
        </div>
      

      </div>
    );
  }
}

export default SavedArticles;
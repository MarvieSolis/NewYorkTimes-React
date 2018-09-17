import React, { Component } from 'react';
import './ResultsArticles.css';


class ResultsArticles extends Component {
  render() {
    return(
      <div id="articlePod" className="container">

        <div className="row justify-content-between topResult">
            <span className="articleLeft col-sm-10"><p><strong>{this.props.title}</strong></p></span>
            <span className="articleRight col-sm-2">
                <button className="btn save" onClick={() => this.props.handleSaveButton(this.props._id)}><i className="far fa-save"></i></button>
            </span>
        </div>
        <div className="row bottomResult">
            <p className="articleSummary">{this.props.date} - <a href={this.props.url} alt="article source" target="_blank">View Article</a></p>
        </div>
      

      </div>
    );
  }
}



export default ResultsArticles;
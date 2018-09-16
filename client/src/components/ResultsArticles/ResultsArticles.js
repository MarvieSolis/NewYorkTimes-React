import React, { Component } from 'react';
import './ResultsArticles.css';


const ResultsArticles = props =>

      <div id="articlePod" className="container">

        <div className="row justify-content-between topResult">
            <span className="articleLeft"><p><strong>{props.title}</strong></p></span>
            <span className="articleRight">
                <button className="btn save" onClick={() => props.handleSaveButton(props._id)}><i class="far fa-save"></i></button>
            </span>
        </div>
        <div className="row bottomResult">
            <p className="articleSummary">{props.date} - <a href={props.url} alt="article source">View Article</a></p>
        </div>
      

      </div>


export default ResultsArticles;
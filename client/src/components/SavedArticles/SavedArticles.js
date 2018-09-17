import React from 'react';
import './SavedArticles.css';



const SavedArticles = props =>
      <div id="articlePod" className="container">

        <div className="row justify-content-between topResult">
            <span className="articleLeft"><p><strong>{props.title}</strong></p></span>
            <span className="articleRight">
                <button className="btn remove" onClick={() => props.handleDeleteButton(props._id)}><i className="far fa-trash-alt"></i></button>
            </span>
        </div>
        <div className="row bottomResult">
            <p className="articleSummary">{props.date} - <a href={props.url} alt="article source">View Article</a></p>
        </div>
      

      </div>

export default SavedArticles;
import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <div className='news-article'>
      <img src={props.img} />
      <h2>{props.headline}</h2>
      <p>{props.description}</p>
      <section>{props.url}</section>
    </div>
  )
}

export default NewsArticle;
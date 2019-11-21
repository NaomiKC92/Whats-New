import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <div className='news-article'>
      <img className='article-img' src={props.img} alt='Related to specific news article'/>
      <h2 className='article-title'>{props.headline}</h2>
      <p className='article-summary'>{props.description}</p>
      <section className='article-url'>{props.url}</section>
    </div>
  )
}

export default NewsArticle;
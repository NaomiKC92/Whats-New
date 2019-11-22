import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = ({articles}) => {
  
  let eachArticle = articles.map( article => {
    return (
      <NewsArticle
        key={article.id}
        headline={article.headline}
        img={article.img}
        description={article.description}
        url={<a href= {article.url}>Link to article --></a>}
      />
    )
  })

  return (
    <div className='article-container'>
      {eachArticle}
    </div>
  )

}

export default NewsContainer;
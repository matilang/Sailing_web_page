import React from 'react';

const Article = ({ imageSrc, date, title, text, link }) => {
  return (
    <div className="article">
      <div className='article-img'>
        <a href={link} title="artukuł">
          <img src={imageSrc} className='article-image' alt="Article Image"></img>
        </a>
      </div>
      <div className='article-body'>
        <p className='article-date'>{date}</p>
        <h2 className='article-title'>
          <a href={link}>{title}</a>
        </h2>
        <p className='article-text'>
          {text}
        </p>
      </div>
    </div>
  );
}

export default Article;

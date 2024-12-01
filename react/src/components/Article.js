import React from 'react';
import {Link} from 'react-router-dom';

export function Image ({image}) {

  return (
    <p title='artykuł'>
        <Link to='/fullarticle1'>
          <img src={image} alt="" className='article-image'/>
        </Link>
    </p>
  )
}

export function ArticleText({date, content, title, link}) {

  return (
    <div className='article-body'>
      <p className='article-date'>{date}</p>
      <h2 className='article-title'>
        <Link to={link}>{title}</Link>
      </h2>
      <p className='article-text'>{content}</p>
    </div>
  )
}

export default function Article({data}) {
  return(
    <div className='article'>
      <div className='article-img'>
        <Image image={data.image}/>
      </div>
        <ArticleText date={data.date} content={data.content} title={data.title} link={data.link}/>
    </div>
  )
}
import React from 'react';
import {articles} from './ArticleData.js';

// const Article = ({ imageSrc, date, title, text, link }) => {
//   return (
//     <div className="article">
//       <div className='article-img'>
//         <a href={link} title="artukuł">
//           <img src={imageSrc} className='article-image' alt="Article Image"></img>
//         </a>
//       </div>
//       <div className='article-body'>
//         <p className='article-date'>{date}</p>
//         <h2 className='article-title'>
//           <a href={link}>{title}</a>
//         </h2>
//         <p className='article-text'>
//           {text}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Article;

export function Image () {
  const shortArticleData = articles

  return (
    <img
      src = {shortArticleData.Image}
      alt = ""
    />
  )
}

export function ArticleText() {
  const shortArticleData = articles

  return (
    <div>
      <p className='article-date'>{shortArticleData.date}</p>
      <h2 className='article-title'>
        <a href={shortArticleData.link}>{shortArticleData.title}</a>
      </h2>
      <p className='article-text'>{shortArticleData.text}</p>
    </div>
  )
}

export default function Article() {
  return(
    <div className='article'>
      <div className='article-img'>
        <Image/>
      </div>
      <div className='article-body'>
        <ArticleText/>
      </div>
    </div>
  )
}
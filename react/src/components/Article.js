import React from 'react';
import {Link} from 'react-router-dom';

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

export function Image ({image, link}) {

  return (
    <a title='artykuł'>
        <Link to='/fullarticle1'>
          <img src={image} alt="" className='article-image'/>
        </Link>
    </a>
  )
}

export function ArticleText({date, content, title, link}) {

  return (
    <div className='article-body'>
      <p className='article-date'>{date}</p>
      <h2 className='article-title'>
        <a href={link}>{title}</a>
      </h2>
      <p className='article-text' href={link}>{content}</p>
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
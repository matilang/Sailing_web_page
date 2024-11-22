import React from 'react';
import { Link } from 'react-router-dom';

const TitleBar = ({ mainTitle, pageLinks }) => {
  return (
    <section className='title-bar'>
      <div className='container1'>
        <div>
          <div className='backtrace'>
            <ol className='pages'>
              {pageLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <li className='pagelink'>
                    <Link to={link.href} title={link.title}>{link.text}</Link>
                  </li>
                  {index < pageLinks.length - 1 && <li className='separator'>/</li>}
                </React.Fragment>
              ))}
            </ol>
          </div>
        </div>
        <div>
          <div className='title-block backtrace'>{mainTitle}</div>
        </div>
      </div>
    </section>
  );
}

export default TitleBar;

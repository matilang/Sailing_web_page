import React from 'react';

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
                    <a href={link.href} title={link.title}>
                      {link.text}
                    </a>
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

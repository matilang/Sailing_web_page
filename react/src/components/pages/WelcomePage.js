import baner from '../../images/baner_yacht.jpg'
import yacht from '../../images/yachtArticle.jpg'
import motorboat from '../../images/motorboatArticle.jpg'
import './WelcomePage.css'
import Article from '../Article'
import TitleBar from '../TitleBar'
import SideHeader from '../SideHeader'
import { useAuth } from '../AuthContext'
import { Link } from 'react-router-dom'
import {articles} from '../ArticleData.js';



const Body = () => {

    const isAdmin = localStorage.getItem('role') === 'admin';
    const {userRole, role} = useAuth();
    console.log(userRole)
    const pageTitle = 'Sekcja Żeglarska Politechniki Gdańskiej';
    const pageLinks = [
        { text: 'Politechnika Gdańska', href: '/#', title: 'Wróć do poprzedniej strony' },
        { text: 'Sekcja Żeglarska Politechniki Gdańskiej', href: '/#', title: 'Obecna strona' },
  ];


    return (
      <div>
        <TitleBar mainTitle={pageTitle} pageLinks={pageLinks} />
        <section className="main">
            <div className='container2'>
                {articles.map(article => (
                    <Article key={article.id} data={article} />
                ))}
            </div>
            <div className='container2'>
                {isAdmin && <Link to='/createcourseform'><button>+</button></Link>}
            </div>
            <SideHeader/>
        </section>
      </div>
    );
  };

  export default Body;

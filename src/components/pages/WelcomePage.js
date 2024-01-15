import baner from '../../images/baner_yacht.jpg'
import yacht from '../../images/yachtArticle.jpg'
import motorboat from '../../images/motorboatArticle.jpg'
import './WelcomePage.css'
import Article from '../Article'
import TitleBar from '../TitleBar'
import SideHeader from '../SideHeader'
import { useAuth } from '../AuthContext'
import { Link } from 'react-router-dom'


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
        <TitleBar mainTitle={pageTitle} pageLinks={pageLinks}/>
        <section className="main">
            <div className='container2'>
                <Article
                    imageSrc={yacht}
                    date='10-01-2024'
                    title='Kurs żeglarza jachtowego'
                    link='/fullarticle1'
                    text='Jak co roku Sekcja Żeglarska ma zaszczyt zaprosić na obozy szkoleniowe na patent żeglarza jachtowego. Oferujemy studentom Politechniki Gdańskiej możliwość zdobycia pierwszych żeglarskich szlifów na wodach jeziora Jeziorak w niepowtarzalnej atmosferze. Szkolić będą doskonale przygotowani instruktorzy.. '
                />
            </div>
            <div className='container2'>
                <Article
                    imageSrc={motorboat}
                    date='12-12-2023'
                    title='Kurs sternika motorowodnego 2023'
                    link='/FullArticle2'
                    text='Sekcja Żeglarska Politechniki Gdańskiej zaprasza wszystkich studentów naszej uczelni i nie tylko na weekendowy kurs na patent sternika motorowodnego. Jeśli lubisz szybkość i adrenalinę to jest to propozycja właśnie dla Ciebie.'
                />
            </div>
            <div className='container2'>
                <Article
                    imageSrc={baner}
                    date='20-02-2024'
                    title='Przykładowy kurs'
                    link='/FullArticle3'
                    text='Jak co roku Sekcja Żeglarska ma zaszczyt zaprosić na obozy szkoleniowe na patent żeglarza jachtowego. Oferujemy studentom Politechniki Gdańskiej możliwość zdobycia pierwszych żeglarskich szlifów na wodach jeziora Jeziorak w niepowtarzalnej atmosferze. Szkolić będą doskonale przygotowani instruktorzy.. '
                />
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
  
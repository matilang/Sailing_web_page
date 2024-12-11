import '../../App.css'
import Article from '../Article'
import TitleBar from '../TitleBar'
import SideHeader from '../SideHeader'
import { useAuth } from '../AuthContext'
import {articles} from '../ArticleData.js';



const Body = () => {

    const {userRole, role} = useAuth();
    console.log(userRole)
    const pageTitle = 'Sekcja Żeglarska Politechniki Gdańskiej';
    const pageLinks = [
        { text: 'Politechnika Gdańska', href: '/#', title: 'Wróć do poprzedniej strony' },
        { text: 'Sekcja Żeglarska Politechniki Gdańskiej', href: '/#', title: 'Obecna strona' },
  ];


    return (
      <div className='main-content'>
        <TitleBar mainTitle={pageTitle} pageLinks={pageLinks} />
        <section className="main">
            <div className='container2'>
                {articles.map(article => (
                    <Article key={article.id} data={article} />
                ))}
            </div>
            <SideHeader/>
        </section>
      </div>
    );
  };

  export default Body;

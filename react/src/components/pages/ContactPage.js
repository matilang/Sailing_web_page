import './SectionPage.css'
import SideHeader from '../SideHeader';
import TitleBar from '../TitleBar';
import { Link } from 'react-router-dom'

export default function ContactPage() {
    const pageTitle = 'Kontakt';
    const pageLinks = [
        { text: 'Politechnika Gdańska', href: '/#', title: 'Wróć do poprzedniej strony' },
        { text: 'Sekcja Żeglarska Politechniki Gdańskiej', href: '/#', title: 'Obecna strona' },
        { text: 'Kontakt', href: '/contact', title: 'Obecna strona' },
  ];
    return(
        <div>
            <TitleBar mainTitle={pageTitle} pageLinks={pageLinks}/>
            <div className='container1'>
                <div className='text'>
                    <p><h3>Sekcja Żeglarska Politechniki Gdańskiej</h3></p>
                    <ul>
                        <li><strong>adres:</strong> Al. Zwycięstwa 12 80-219 Gdańsk</li>
                        <li><strong>e-mail:</strong><Link to='/#'>pgzagle@gmail.com</Link></li>
                        <li><strong>telefon:</strong>609176750</li>
                        <li><strong>adres strony www:</strong>https://pg.edu.pl/zagle</li>
                        <li><strong><Link to='/#'>strona 'Żagle PG Ahoooj!' na FB</Link></strong></li>
                    </ul>
                </div>
            </div>
            <SideHeader/>
        </div>
    );
}

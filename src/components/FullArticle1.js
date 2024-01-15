import yacht from '../images/baner_yacht.jpg';
import './pages/SectionPage.css'
import TitleBar from './TitleBar';
import { useState } from 'react';
import RegistrationForm from './RegistrationForm';


const FullArticle1 = () => {
    const [courseId, setCourseId] = useState('ID_kurs_żeglarski');
    const pageTitle = 'Aktulaności';
    const pageLinks = [
        { text: 'Politechnika Gdańska', href: '/#', title: 'Wróć do poprzedniej strony' },
        { text: 'Sekcja Żeglarska Politechniki Gdańskiej', href: '/#', title: 'Obecna strona' },
        { text: 'Aktulaności', href: '/FullArticle1', title: 'Obecna strona' },
    ];
    return(
        <div>
            <TitleBar mainTitle={pageTitle} pageLinks={pageLinks}/>
            <div className="container1">
                <div className='article-dates'>Data dodania: 10-20-2020</div>
                <div className='article-titles'><h2>Kurs żeglarza jachtowego</h2></div>
                <div className='article-images'><img src={yacht}></img></div>
                <div className='text'>
                    <p>
                    Jak co roku Sekcja Żeglarska ma zaszczyt zaprosić na obozy szkoleniowe na patent żeglarza jachtowego. Oferujemy studentom Politechniki Gdańskiej możliwość zdobycia pierwszych żeglarskich szlifów na wodach jeziora Jeziorak w niepowtarzalnej atmosferze. Szkolić będą doskonale przygotowani instruktorzy, w ośrodku mamy profesjonalny sprzęt do zajęć teoretycznych oraz flotylle 4 jachtów czekających na świeżych adeptów żeglarstwa.
                    </p>
                    <p><strong>Terminy: </strong></p>
                    <ul>
                        <li>T1  - 02.07-15.07</li>
                        <li>T2  - 16.07-29.07</li>
                        <li>T3  - 30.07-12.08</li>
                        <li>T4  - 13.08-26.08</li>
                    </ul>
                    <p><strong>Koszt: </strong></p>
                    <ul>
                        <li>Studenci PG – 1200,- PLN</li>
                        <li>Inni spoza PG – 1600,- PLN</li>
                    </ul>
                    <p><strong>Cena obejmuje: </strong></p>
                    <ul>
                        <li>szkolenie</li>
                        <li>zakwaterowanie na terenie ośrodka PG</li>
                        <li>pełne wyżywienie (3 posiłki dziennie)</li>
                        <li>wypożyczenie materiałów szkoleniowych</li>
                        <li>ubezpieczenie</li>
                    </ul>
                    <p><strong>Cena nie obejmuje: </strong></p>
                    <ul>
                        <li>dojazdu</li>
                        <li>kosztów egzaminu i kosztów wydania patentu - 50% zniżki dla młodzieży uczącej się do 26 roku życia z ważną legitymacją</li>
                    </ul>
                    <p><strong>ORGANIZATOR ZASTRZEGA SOBIE ODWOŁANIE KURSÓW W RAZIE BRAKU CHĘTNYCH DO SZKOLENIA.</strong></p>
                    <div className='sign-in'>
                    <a href={`/allcourses`} className='sign-in-link'>Zapisy</a>
                    </div>
                    <p><strong>Płatności: </strong></p>
                    <p>Płatność na konto PG:</p>
                    <p><strong>40 1090 1098 0000 0001 2023 3750   Santander Bank Polska SA</strong></p>
                    <p>
                        W celu rezerwacji miejsca należy dokonać wpłaty zaliczki <strong>100 PLN</strong> w na dwa tygodnie przed rozpoczęciem kursu i wysłać na adres:pgzagle@gmail.com, tytułem: Wpłata ŻJ - TX - Imię Nazwisko(X - numer turnusu)
                    </p>
                    <p><strong>Złe zatytułowanie może spowodować niedostarczenie wiadomości!!!</strong></p>
                    <p>
                        Resztę kwoty należy wpłacić na dwa tygodnie przed rozpoczęciem kursu i również wysłać na podany wyżej mail. Oczywiście można wysłać całą kwotę jednym przelewem.
                    </p>
                    <p><strong>Uprawnienia żeglarza jachtowego: </strong></p>
                    <ul>
                        <li>prowadzenie jachtów żaglowych bez lub z pomocniczym napędem mechanicznym po wodach śródlądowych</li>
                        <li>prowadzenie jachtów żaglowych bez lub z pomocniczym napędem mechanicznym o długości całkowitej do 8,5 m po wodach morskich w strefie 2 Mm od brzegu w porze dziennej</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FullArticle1;
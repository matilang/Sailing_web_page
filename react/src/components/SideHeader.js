import React from "react";

const SideHeader = () => {

    const isLogged = localStorage.getItem('islogged') === 'true';

    return (

        <div className='side-header'>
            <div className='main-header'>
                    <h2><a href='/#'>Sekcja Żeglarska PG</a></h2>
            </div>
            <ul className='downpage-list'>
                <li><a href='/section'>Sekcja</a></li>
                <li><a href='/crew'>Załoga</a></li>
                <li><a href='/partner'>Partnerzy</a></li>
                <li><a href='/calendar'>FAQ</a></li>
                <li><a href="/allcourses">Wszystkie Kursy</a></li>
                {isLogged && <li><a href="/userpage">Moje Kursy</a></li>}
                {isLogged && <li><a href="/edituserpage">Edytuj Dane Użytkownika</a></li>}
                <li className="last"><a href='/contact'>Kontakt</a></li>
            </ul>
        </div>
    );
}

export default SideHeader;

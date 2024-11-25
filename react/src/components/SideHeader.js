import React from "react";
import { Link } from "react-router-dom";

export default function SideHeader() {

    const isLogged = localStorage.getItem('islogged') === 'true';

    return (

        <div className='side-header'>
            <div className='main-header'>
                    <h2><Link to='/#'>Sekcja Żeglarska PG</Link></h2>
            </div>
            <ul className='downpage-list'>
                <li><Link to='/section'>Sekcja</Link></li>
                <li><Link to='/crew'>Załoga</Link></li>
                <li><Link to='/partner'>Partnerzy</Link></li>
                <li><Link to='/calendar'>FAQ</Link></li>
                <li><Link to="/allcourses">Wszystkie Kursy</Link></li>
                {isLogged && <li><Link to="/userpage">Moje Kursy</Link></li>}
                {isLogged && <li><Link to="/edituserpage">Edytuj Dane Użytkownika</Link></li>}
                <li className="last"><Link to='/contact'>Kontakt</Link></li>
            </ul>
        </div>
    );
}



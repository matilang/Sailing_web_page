import React from 'react';
import './Footer.css'
import PG_logo from '../images/pg-logotyp.svg'
import F_logo from '../images/ZUF_logotyp.svg'


export function FooterColumn ({ title, links }) {
    return (
        <div className='footer-col'>
            <div className='footer-col-title'>
                <h2>{title}</h2>
            </div>
            <ul className='footer-col-links'>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default function Footer() {

    const logoStyle = {
        position: "fixed",
        bottom: 250,
        right: 100,
        zIndex: 1000,
    };


    return (
        <div className='container'>
            <div className='footer-columns'>
                {columns.map((column, index) => (
                    <FooterColumn key={index} title={column.title} links={column.links} />
                ))}
            </div>
            <div className='logos'  style={logoStyle}>
                <a href='/#' alt='logo PG' className='pg-logo'>
                    <img src={PG_logo} alt=''/>
                </a>
                <a href='/#' alt='logo UF' className='fah-logo'>
                    <img src={F_logo} alt=''/>
                </a>
            </div>
        </div>
    );
};


const columns = [
    {
        title: 'Informacje o',
        links: [
            { text: 'Uczelnia Badawcza', href: '/#' },
            { text: 'Zrównowarzony rozwój', href: '/#' },
            { text: 'Wydziały', href: '/#' },
            { text: 'Jednostki i organizacje', href: '/#' },
            { text: 'Biblioteka', href: '/#' },
            { text: 'Samorząd Studentów', href: '/#' },
            { text: 'Samorząd Doktorantów', href: '/#' },
            { text: 'Realizowane projekty', href: '/#' },
            { text: 'Rada Rektorów Woj. Pomorskiego', href: '/#' },
            { text: 'Patronat Rektora', href: '/#' },
        ],
    },
    {
        title: 'Informacje dla',
        links: [
            { text: 'Kandydaci', href: '/#' },
            { text: 'Studenci', href: '/#' },
            { text: 'Doktoranci', href: '/#' },
            { text: 'Absolwenci', href: '/#' },
            { text: 'Biznes', href: '/#' },
            { text: 'Szkoły', href: '/#' },
            { text: 'Pracownicy', href: '/#' },
            { text: 'Społeczność lokalna', href: '/#' },
            { text: 'Media', href: '/#' },

        ],
    },
    {
        title: 'Linki',
        links: [
            { text: 'Poczta', href: '/#' },
            { text: 'Moja PG - portal uczelniany', href: '/#' },
            { text: 'Kalendarz roku akademickiego', href: '/#' },
            { text: 'eNauczanie', href: '/#' },
            { text: 'Przetargi', href: '/#' },
            { text: 'Helpdesk', href: '/#' },
            { text: 'Mapa kampusu', href: '/#' },
            { text: 'Oferty pracy lokalna', href: '/#' },
            { text: 'Deklaracja dostępności', href: '/#' },
            { text: 'Polityka prywatności', href: '/#' },

        ],
    }
];



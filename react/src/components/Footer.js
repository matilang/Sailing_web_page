import React from 'react';
import '../App.css'
import PG_logo from '../images/pg-logotyp.svg'
import F_logo from '../images/ZUF_logotyp.svg'
import { Link } from 'react-router-dom';
import { columns } from './FooterTable';




export function FooterColumn ({ title, links }) {
    return (
        <div className='footer-col'>
            <div className='footer-col-title'>
                <h2>{title}</h2>
            </div>
            <ul className='footer-col-links'>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.href}>{link.text}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default function Footer() {

    const logoStyle = {
        position: "absolute",
        bottom: 250,
        right: 100,
        zIndex: 1000,
    };


    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-columns'>
                    {columns.map((column, index) => (
                        <FooterColumn key={index} title={column.title} links={column.links} />
                    ))}
                </div>
                <div className='logos'  style={logoStyle}>
                    <Link to='/sailing-webpage' alt='logo-PG'>
                        <img src={PG_logo}
                            alt=''
                            style={{ width: '100px',
                                    paddingRight: '20px' }} />
                    </Link>
                    <Link to='/sailing-webpage' alt='logo-PG'>
                        <img src={F_logo}
                            alt=''
                            style={{ width: '200px',
                                    paddingLeft: '20px',
                                    borderLeft: "1px solid #eee" }} />
                    </Link>
                </div>
            </div>
        </footer>
    );
};






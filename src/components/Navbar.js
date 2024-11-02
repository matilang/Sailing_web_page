import React, {useRef} from 'react'
import './Navbar.css';
import logo from '../images/pg-logotyp.svg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navRef = useRef()
  const navigate = useNavigate()
  
  const LogoutUser = () => {
    axios.get('/auth/logout').then(response => {
      console.log(response)
      localStorage.setItem('islogged', false)
      localStorage.setItem('role','student')
      navigate('/');

    })
    .catch(err => console.log(err))
  }
  const isLogged = localStorage.getItem('islogged') === 'true';
  console.log(localStorage.getItem('islogged'))

  return (  

    
    <header>
      <div className='logo-bar'>
        <div className='site-logo'>
          <a href='/'> <img src={logo} alt="Logo" /></a>
        </div>
      </div>
      <div className='main-bar'>
        {isLogged ? (
              <button className='btn' onClick={LogoutUser}>
              {/* <a href='/'>Wyloguj się</a> */}
              Wyloguj się
            </button>
        ) : (
          <button className='btn'>
              <a href='/signup'>Zaloguj się</a>
            </button>
        )}
            <div id='side-nav'>
              <div className='side-nav'>
                <nav ref={navRef}>
                  <ul className='side-nav'>
                    <li><a href='/#'>Strefa pracownika</a></li>
                    <li><a href='/#'>Biznes</a></li>
                    <li><a href='/#'>Absolwenci</a></li>
                    <li><a href='/#'>Społeczność lokalna</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div id='main-nav'>
              <nav ref={navRef}>
                <ul className='main-nav'>
                  <li className='bar-style'><a href='/#'>Studenci</a>
                    <ul className='list-styled'>
                      <li><a href='/#'>Studia</a></li>
                      <li><a href='/#'>Sprawy studenckie</a></li>
                      <li><a href='/#'>Działalność studencka</a></li>
                      <li><a href='/#'>Moja PG</a></li>
                    </ul>
                  </li>
                  <li className='bar-style'><a href='/#'>Rekrutacja</a></li>
                  <li className='bar-style'><a href='/#'>Nauka</a>
                    <ul className='list-styled'>
                        <li><a href='/#'>Uczelnia badawcza</a></li>
                        <li><a href='/#'>Projekty badawcze</a></li>
                        <li><a href='/#'>Publikacje naukowe</a></li>
                        <li><a href='/#'>Współpraca</a></li>
                      </ul>
                  </li>
                  <li className='bar-style'><a href='/#'>Uczelnia</a>
                      <ul className='list-styled'>
                        <li><a href='/#'>Wydziały</a></li>
                        <li><a href='/#'>Organizacja</a></li>
                        <li><a href='/#'>Władze</a></li>
                        <li><a href='/#'>Fakty i Liczby</a></li>
                      </ul>
                  </li>
                </ul>
              </nav>
            </div>
      </div>
     
    </header>
   );
}

export default Navbar;

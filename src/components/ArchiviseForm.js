import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import TitleBar from './TitleBar';
import SideHeader from './SideHeader';

const ArchiviseForm = () => {

  const courseId = localStorage.getItem('courseId')
  const [courses, setCourses] = useState([]);
  const pageTitle = 'Archiwizacja';
    const pageLinks = [
      { text: 'Politechnika Gdańska', href: '/#', title: 'Wróć do poprzedniej strony' },
      { text: 'Sekcja Żeglarska Politechniki Gdańskiej', href: '/#', title: 'Wróć do poprzedniej strony' },
      { text: 'Wszystkie kursy', href: '/allcourses', title: 'Wróć do poprzedniej strony'},
      { text: 'Archiwizacja', href: '/archiviseform', title: 'Obecna strona' },
    ];

  axios.put(`/courses/archive/${courseId}`)
    .then(response => console.log(response.data))
    .catch(error => console.error('Error fetching course details:', error));


  return (
    <div>
      <TitleBar mainTitle={pageTitle} pageLinks={pageLinks} />
    <div className='text'>
        <h2>Kurs został zarchiwizowany</h2>
    </div>
    <SideHeader/>
    </div>
  );
};

export default ArchiviseForm;

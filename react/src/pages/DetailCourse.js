import React, { useState} from 'react';
import axios from 'axios';
import '../App.css'
import SideHeader from '../components/SideHeader';
import TitleBar from '../components/TitleBar';
import {CourseDetails} from '../components/Course';

const DetailCourse = () => {

  const courseId = localStorage.getItem('courseId')
  const [course, setCourse] = useState([]);
  const pageTitle = 'Szczegóły';
    const pageLinks = [
      { text: 'Politechnika Gdańska', href: '/#', title: 'Wróć do poprzedniej strony' },
      { text: 'Sekcja Żeglarska Politechniki Gdańskiej', href: '/#', title: 'Wróć do poprzedniej strony' },
      { text: 'Wszystkie kursy', href: '/allcourses', title: 'Wróć do poprzedniej strony'},
      { text: 'Szczegóły', href: '/detailcourse', title: 'Obecna strona' },
    ];

  axios.get(`/courses/${courseId}`)
    .then(response => setCourse(response.data))
    .catch(error => console.error('Error fetching course details:', error));


  return (
    <div className='main-content'>
      <TitleBar mainTitle={pageTitle} pageLinks={pageLinks} />
      <div className='text'>
        <div className='courses'>
          <h1>Szczegółowy opis kursu</h1>
          <CourseDetails course={course}/>
      </div>
      </div>
      <SideHeader/>
    </div>
  );
};

export default DetailCourse;

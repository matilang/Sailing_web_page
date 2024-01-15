import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './AllCourses.css'
import SideHeader from './SideHeader';
import TitleBar from './TitleBar';

const DetailCourse = () => {

  const courseId = localStorage.getItem('courseId')
  const [course, setCourse] = useState([]);
  const [crewmates, setcrewmates] = useState([]);
  const isAdmin = localStorage.getItem('role') === 'admin';
  const isInstructor = localStorage.getItem('role') === 'instructor';
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
    <div>
      <TitleBar mainTitle={pageTitle} pageLinks={pageLinks} />
      <div className='text'>
        <div className='courses'>
      <h1>Lista Kursów</h1>
      <ul>
          <li key={course._id}> 
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <p>Koszt: {course.cost}</p>
            <p>Data rozpoczęcia: {course.dates}</p>
            <p>Czas trwania: {course.courseDurationDays} dni</p>
            {Array.isArray(course.enrolledStudents) && (
            <p>Liczba zapisanych uczestników: {course.enrolledStudents.length}</p>
            )}
            {Array.isArray(course.instructorOfTheCourse) && (
            <p>Liczba zapisanych instruktorów: {course.instructorOfTheCourse.length}</p>
            )}
          </li>
      </ul>
      </div>
      </div>
      <SideHeader/>
    </div>
  );
};

export default DetailCourse;

import axios from 'axios';
import TitleBar from './TitleBar';
import SideHeader from './SideHeader';
import {Course} from './Course.js'
import React, { useState, useEffect } from 'react';

const ArchiviseForm = () => {

  const isAdmin = localStorage.getItem('role') === 'admin';
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [courses, setCourses] = useState([]);
  const pageTitle = 'Archiwium';
  const pageLinks = [
      { text: 'Politechnika Gdańska', href: '/#'},
      { text: 'Sekcja Żeglarska Politechniki Gdańskiej', href: '/#'},
      { text: 'Wszystkie kursy', href: '/allcourses'},
      { text: 'Archiwizacja', href: '/archiviseform'},
    ];

    useEffect(() => {
      axios.get('/courses')
        .then(response => {
          setCourses(response.data);
          setLoading(false);
        })
        .catch(error => {
          setError('Failed to load courses. Please try again later.');
          setLoading(false);
        });
    }, []);

    const archivedCourses = courses.filter(course => course.isArchived === true);

    if (loading) return <p>Loading courses...</p>;
    if (error) return <p>{error}</p>;


  return (
    <div className='main-content'>
      <TitleBar mainTitle={pageTitle} pageLinks={pageLinks} />
    <div className='text'>
      <h3>Zarchiwizowane kursy</h3>
      <div className='course-list'>
          {archivedCourses.map(course => (
            <Course
              key={course._id}
              course={course}
              isAdmin={isAdmin}
              isArchived={true}
            />
          ))}
        </div>
    </div>
    <SideHeader/>
    </div>
  );
};

export default ArchiviseForm;

import React, { useState, useEffect } from 'react';
import {Course} from './Course';
import SideHeader from './SideHeader';
import TitleBar from './TitleBar';
import axios from 'axios';

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isAdmin = localStorage.getItem('role') === 'admin';

  const pageTitle = 'Wszystkie Kursy';
    const pageLinks = [
      { text: 'Politechnika Gdańska', href: '/#', title: 'Wróć do poprzedniej strony' },
      { text: 'Sekcja Żeglarska Politechniki Gdańskiej', href: '/#', title: 'Wróć do poprzedniej strony' },
      { text: 'Wszystkie kursy', href: '/allcourses', title: 'Obecna strona'},
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

  const notArchivedCourses = courses.filter(course => course.isArchived === false);

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p>{error}</p>;

  return (
  <div>
    <TitleBar mainTitle={pageTitle} pageLinks={pageLinks} />
    <div className='text'>
      <h1>Lista Kursów</h1>
      <div className='course-list'>
        {notArchivedCourses.map(course => (
          <Course 
            key={course._id}
            course={course}
            isAdmin={isAdmin}
          />
        ))}
      </div>
    </div>
    <SideHeader/>
  </div>
  );
};

export default AllCourses;

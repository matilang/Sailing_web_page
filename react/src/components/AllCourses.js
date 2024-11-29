import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import '../App.css'
import TitleBar from './TitleBar';
import SideHeader from './SideHeader';

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(null); // State to handle errors
  const isAdmin = localStorage.getItem('role') === 'admin';
  const navigate = useNavigate();
  const pageTitle = 'Wszystkie Kursy';
    const pageLinks = [
      { text: 'Politechnika Gdańska', href: '/#', title: 'Wróć do poprzedniej strony' },
      { text: 'Sekcja Żeglarska Politechniki Gdańskiej', href: '/#', title: 'Wróć do poprzedniej strony' },
      { text: 'Wszystkie kursy', href: '/allcourses', title: 'Obecna strona'},
    ];

  const handleCourseDetails = (courseId) => {
    localStorage.setItem('courseId', courseId);
    console.log(courseId)
    navigate('/detailcourse');
  };

  const handleCourseRegistration = (courseId) => {
    localStorage.setItem('courseId', courseId);
    console.log(courseId)
    navigate('/registrationform');
  };
  const handleNewFormTemplate = (courseId) => {
    localStorage.setItem('courseId', courseId);
    console.log(courseId)
    navigate('/newformtemplate');
  };

  const handleEditCourse = (courseId) => {
    localStorage.setItem('courseId', courseId);
    navigate(`/editcourseform`);
  };

  const handleArchiveCourse = (courseId) => {
    localStorage.setItem('courseId', courseId);
    navigate(`/archiviseform`);
  };

  useEffect(() => {
    axios.get('/courses')
      .then(response => {
        console.log('API Response:', response.data);
        setCourses(response.data); // Update courses state with data
        setLoading(false); // Set loading to false
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
        setError('Failed to load courses. Please try again later.');
        setLoading(false); // Set loading to false
      });
  }, []);


  return (
    <div>
      <TitleBar mainTitle={pageTitle} pageLinks={pageLinks} />

    <div className='text'>
      <div className='courses'>
      <h1>Lista Kursów</h1>
      <ul>
        {courses.map(course => (
          <li key={course._id}>
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <p>Data rozpoczęcia: {new Date(course.dates[0]).toLocaleDateString()}</p>
            <button onClick={() => handleCourseDetails(course._id)}>Szczegóły</button>
            <button onClick={() => handleCourseRegistration(course._id)}>Zapisz się</button>
            {isAdmin && <button onClick={() => handleEditCourse(course._id)}>Edytuj Dane</button>}
            {isAdmin && <button onClick={() => handleNewFormTemplate(course._id)}>Dodaj zapytanie w kursie</button>}
            {isAdmin && <button onClick={() => handleArchiveCourse(course._id)}>Archiwizuj Kurs</button>}
          </li>
        ))}
      </ul>
    </div>
    </div>
    <SideHeader/>
    </div>
  );
};

export default AllCourses;

import React from 'react';
import '../App.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Course = ({ course, isAdmin, isUserPage, isArchived}) => {

  const navigate = useNavigate();


  const handleCourseDetails = (courseId) => {
    localStorage.setItem('courseId', courseId);
    navigate('/detailcourse');
  };

  const handleCourseRegistration = (courseId) => {
    localStorage.setItem('courseId', courseId);
    navigate('/registrationform');
  };

  const handleEditCourse = (courseId) => {
    localStorage.setItem('courseId', courseId);
    navigate(`/editcourseform`);
  };

  const handleNewFormTemplate = (courseId) => {
    localStorage.setItem('courseId', courseId);
    navigate('/newformtemplate');
  };

  const handleArchiveCourse = (courseId) => {
    axios.put(`/courses/archive/${courseId}`)
      .then(response => {
        console.log(response.data)
        localStorage.setItem('courseId', courseId);
        navigate(`/archiviseform`);
      })
    .catch(error => console.error('Error fetching course details:', error));
  };

  const handleUserEditCourse = (courseId) => {
    localStorage.setItem('courseId', courseId);
    navigate('/usereditpage')
  };

  const handleDeletefromCourses = (courseId) => {
    axios.put(`user/unregister/${courseId}`)
    .then(response => console.log(response))
    .catch(err => console.error(err))
    navigate('/')
  };

  return (
    <div className='course-box'>
      <h3>{course.name}</h3>
      <p>{course.description}</p>
      <p>Data rozpoczęcia: {new Date(course.dates[0]).toLocaleDateString()}</p>
      <div className='button-group'>
        <button onClick={() => handleCourseDetails(course._id)}>Szczegóły</button>
        {!isArchived && (
        <div> 
          {!isUserPage && <button onClick={() => handleCourseRegistration(course._id)}>Zapisz się</button>}
          {isAdmin && <button onClick={() => handleEditCourse(course._id)}>Edytuj Dane</button>}
          {isAdmin && <button onClick={() => handleNewFormTemplate(course._id)}>Dodaj zapytanie w kursie</button>}
          {isAdmin && <button onClick={() => handleArchiveCourse(course._id)}>Archiwizuj Kurs</button>}
          {isUserPage && <button onClick={() => handleUserEditCourse(course._id)}>Edytuj swoje zgłoszenie</button>}
          {isUserPage && <button onClick={() => handleDeletefromCourses(course._id)}>Wypisz się</button>}
        </div>
        )}
      </div>
    </div>
  );
};

export const CourseDetails = ({ course }) => {
  if (!course) return null;

  return (
    <div className="course-description">
      <h3>{course.name}</h3>
      <p>{course.description}</p>
      <p>Koszt dla studentów PG: {course.costForStudents}</p>
      <p>Koszt dla pracowników PG: {course.costForWorkers}</p>
      <p>Koszt dla członków AWS: {course.costForAWSMembers}</p>
      <p>Koszt dla pozostałych osób: {course.regularCost}</p>
      <p>Data rozpoczęcia: {new Date(course.dates).toLocaleDateString()}</p>
      <p>Czas trwania: {course.courseDurationDays} dni</p>
      {Array.isArray(course.enrolledStudents) && (
        <p>Liczba zapisanych uczestników: {course.enrolledStudents.length}</p>
      )}
      {Array.isArray(course.instructorOfTheCourse) && (
        <p>Liczba zapisanych instruktorów: {course.instructorOfTheCourse.length}</p>
      )}  
    </div>
  );
};


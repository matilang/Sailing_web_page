import { useState, useEffect } from "react";
import axios from "axios";
import TitleBar from "../TitleBar";
import SideHeader from "../SideHeader";
import { useNavigate } from "react-router-dom";
import '../AllCourses.css'


const UserPage = () => {
    const [registrations, setRegistrations] = useState([]);
    const [detailedCourses, setDetailedCourses] = useState([]);
    const navigate = useNavigate();
    const pageTitle = 'Moje Kursy';
    const pageLinks = [
      { text: 'Politechnika Gdańska', href: '/#', title: 'Wróć do poprzedniej strony' },
      { text: 'Sekcja Żeglarska Politechniki Gdańskiej', href: '/#', title: 'Obecna strona' },
      { text: 'Moje Kursy', href: '/crew', title: 'Obecna strona' },
    ];
  
    useEffect(() => {
      axios.get('/user/user-registration-forms')
        .then(response => setRegistrations(response.data))
        .catch(err => console.error(err));
    }, []);
  
    useEffect(() => {
      const fetchDetailedCourses = async () => {
        const promises = registrations.map(registration =>
          axios.get(`/courses/${registration.courseId}`)
        );
  
        try {
          const responses = await Promise.all(promises);
          const detailedCoursesData = responses.map(response => response.data);
          setDetailedCourses(detailedCoursesData);
        } catch (error) {
          console.error('Error fetching detailed courses:', error);
        }
      };
  
      fetchDetailedCourses();
    }, [registrations]);
  
    const handleDeletefromCoures = (courseId) => {
      axios.put(`user/unregister/${courseId}`)
      .then(response => console.log(response))
      .catch(err => console.error(err))
      navigate('/')
    };

    const handleUserEditCourse = (courseId) => {
          localStorage.setItem('courseId', courseId);
          navigate('/usereditpage')
        };
  
    return (
      <div>
        <TitleBar mainTitle={pageTitle} pageLinks={pageLinks} />
        <div className='container1'>
          <div className="text">
          <div className="courses">
          <ul>
          {detailedCourses.length > 0 ? (
            detailedCourses.map(course => (
              <li key={course._id}>
                <h3>{course.name}</h3>
                <p>{course.description}</p>
                <p>Koszt regularny: {course.regularCost} zł</p>
                <p>Koszt dla studenta: {course.costForStudents} zł</p>
                <p>Data rozpoczęcia: {course.dates}</p>
                <p>Czas trwania: {course.courseDurationDays} dni</p>
                {Array.isArray(course.enrolledStudents) && (
                  <p>Liczba zapisanych uczestników: {course.enrolledStudents.length}</p>
                )}
                {Array.isArray(course.instructorOfTheCourse) && (
                  <p>Liczba zapisanych instruktorów: {course.instructorOfTheCourse.length}</p>
                )}
                <button onClick={() => handleDeletefromCoures(course._id)}>Wypisz się</button>
                <button onClick={() => handleUserEditCourse(course._id)}>Edytuj swoje zgłoszenie</button>
              </li>
            ))
          ) : (
            <h3> Nie jesteś zapisany na żaden kurs</h3>
          )}
          </ul>
          </div>
          </div>
        </div>
        <SideHeader />
      </div>
    );
  };
  
  export default UserPage;
  
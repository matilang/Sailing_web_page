import { useState, useEffect } from "react";
import axios from "axios";
import TitleBar from "../TitleBar";
import SideHeader from "../SideHeader";
import '../../App.css'
import { Course } from "../Course";
import PaymentUpload from '../PaymentUpload.js'


const UserPage = () => {
    const [registrations, setRegistrations] = useState([]);
    const [detailedCourses, setDetailedCourses] = useState([]);
    const isAdmin = localStorage.getItem('role') === 'admin';
    const pageTitle = 'Moje Kursy';
    const pageLinks = [
      { text: 'Politechnika Gdańska', href: '/#'},
      { text: 'Sekcja Żeglarska Politechniki Gdańskiej', href: '/#'},
      { text: 'Moje Kursy', href: '/userpage'},
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

    return (
      <div>
        <TitleBar mainTitle={pageTitle} pageLinks={pageLinks} />
          <div className="text">
            <div className="course-list">
              {detailedCourses.length > 0 ? (
                  <div className='course-list'>
                    {detailedCourses.map(course => (
                      <div className="user-course-item">
                        <Course 
                          key={course._id}
                          course={course}
                          isAdmin={isAdmin}
                          isUserPage={true}
                        />
                        <PaymentUpload courseId={course._id} />
                      </div>
                    ))}
                  </div>
              ) : (
                <h3> Nie jesteś zapisany na żaden kurs</h3>
              )}
            </div>
          </div>
        <SideHeader />
      </div>
    );
  };

  export default UserPage;

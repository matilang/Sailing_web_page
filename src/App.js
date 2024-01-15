import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import WelcomePage from './components/pages/WelcomePage'
import SectionPage from './components/pages/SectionPage'
import CrewPage from './components/pages/CrewPage';
import PartnerPage from './components/pages/PartnerPage';
import CalendarPage from './components/pages/CalendarPage';
import ContactPage from './components/pages/ContactPage';
import FullArticle1 from './components/FullArticle1';
import Signup from './components/Signup';
import Login from './components/Login';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import UserPage from './components/pages/UserPage'
import CreateCourseForm from './components/CreateNewCourse';
import AllCourses from './components/AllCourses';
import DetailCourse from './components/DetailCourse'
import EditCourseForm from './components/EditCourseForm'
import ArchiviseForm from './components/ArchiviseForm'
import NewFormTemplate from './components/NewFormTemplate'
import EditUser from './components/EditUser'
import UserEditPage from './components/UserEditCourse'


function App() {
  const isLoggedIn = null;

  return (
    <div className='App'>
      <Router>
        <React.Fragment>
          <Navbar/>
          <Routes>
            <Route path="/" element={<WelcomePage/ >} />
            <Route path='/section' element={<SectionPage />} />
            <Route path='/crew' element={<CrewPage />} />
            <Route path='/partner' element={<PartnerPage />} />
            <Route path='/calendar' element={<CalendarPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/fullarticle1' element={<FullArticle1 />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registrationform' element={<RegistrationForm/>} />
            <Route path='/userpage' element={<UserPage />} />
            <Route path='/createcourseform' element={<CreateCourseForm/>} />
            <Route path='/allcourses' element={<AllCourses/>} />
            <Route path='/detailcourse' element={<DetailCourse/>} />
            <Route path='/editcourseform' element={<EditCourseForm/>} />
            <Route path='/archiviseform' element={<ArchiviseForm/>} />
            <Route path='/newformtemplate' element={<NewFormTemplate/>} />
            <Route path='/edituserpage' element={<EditUser/>} />
            <Route path='/usereditpage' element={<UserEditPage/>} />
          </Routes>
          <Footer/>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;

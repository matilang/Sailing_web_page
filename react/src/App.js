import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import WelcomePage from './pages/WelcomePage'
import SectionPage from './pages/SectionPage'
import CrewPage from './pages/CrewPage';
import PartnerPage from './pages/PartnerPage';
import CalendarPage from './pages/CalendarPage';
import ContactPage from './pages/ContactPage';
import FullArticle1 from './pages/FullArticle1';
import Signup from './pages/Signup';
import Login from './pages/Login';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RegistrationForm from './pages/RegistrationForm';
import UserPage from './pages/UserPage'
import CreateNewCourse from './pages/CreateNewCourse';
import AllCourses from './pages/AllCourses';
import DetailCourse from './pages/DetailCourse'
import EditCourseForm from './pages/EditCourseForm'
import ArchiviseForm from './pages/ArchiviseForm'
import NewFormTemplate from './pages/NewFormTemplate'
import EditUser from './pages/EditUser'
import UserEditRegistration from './pages/UserEditRegistration'


function App() {

  return (
    <div className='App'>
      <Router>
        <React.Fragment>
          <Navbar/>
          <Routes>
            <Route path="/" element={<WelcomePage/ >} />
            <Route path='/section' element={<SectionPage />} />
            <Route path='/crewpage' element={<CrewPage />} />
            <Route path='/partner' element={<PartnerPage />} />
            <Route path='/calendar' element={<CalendarPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/fullarticle1' element={<FullArticle1 />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registrationform' element={<RegistrationForm/>} />
            <Route path='/createnewcourse' element={<CreateNewCourse/>} />
            <Route path='/allcourses' element={<AllCourses/>} />
            <Route path='/detailcourse' element={<DetailCourse/>} />
            <Route path='/editcourseform' element={<EditCourseForm/>} />
            <Route path='/archiviseform' element={<ArchiviseForm/>} />
            <Route path='/newformtemplate' element={<NewFormTemplate/>} />
            <Route path='/userpage' element={<UserPage />} />
            <Route path='/edituser' element={<EditUser/>} />
            <Route path='/usereditregistration' element={<UserEditRegistration/>} />
          </Routes>
          <Footer/>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;

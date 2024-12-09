import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "./components/pages/WelcomePage";
import SectionPage from "./components/pages/SectionPage";
import CrewPage from "./components/pages/CrewPage";
import PartnerPage from "./components/pages/PartnerPage";
import CalendarPage from "./components/pages/CalendarPage";
import ContactPage from "./components/pages/ContactPage";
import FullArticle1 from "./components/FullArticle1";
import Signup from "./components/Signup";
import Login from "./components/Login";
import RegistrationForm from "./components/RegistrationForm";
import UserPage from "./components/pages/UserPage";
import CreateNewCourse from "./components/CreateNewCourse";
import AllCourses from "./components/AllCourses";
import DetailCourse from "./components/DetailCourse";
import EditCourseForm from "./components/EditCourseForm";
import ArchiviseForm from "./components/ArchiviseForm";
import NewFormTemplate from "./components/NewFormTemplate";
import EditUser from "./components/EditUser";
import UserEditPage from "./components/UserEditCourse";
import CreateNewCourse from "./components/CreateNewCourse";

export const router = createBrowserRouter(
  [
    { path: "/", element: <WelcomePage /> },
    { path: "/section", element: <SectionPage /> },
    { path: "/crew", element: <CrewPage /> },
    { path: "/partner", element: <PartnerPage /> },
    { path: "/calendar", element: <CalendarPage /> },
    { path: "/contact", element: <ContactPage /> },
    { path: "/fullarticle1", element: <FullArticle1 /> },
    { path: "/signup", element: <Signup /> },
    { path: "/login", element: <Login /> },
    { path: "/registrationform", element: <RegistrationForm /> },
    { path: "/userpage", element: <UserPage /> },
    { path: "/createnewcourse", element: <CreateNewCourse /> },
    { path: "/allcourses", element: <AllCourses /> },
    { path: "/detailcourse", element: <DetailCourse /> },
    { path: "/editcourseform", element: <EditCourseForm /> },
    { path: "/archiviseform", element: <ArchiviseForm /> },
    { path: "/newformtemplate", element: <NewFormTemplate /> },
    { path: "/edituserpage", element: <EditUser /> },
    { path: "/usereditpage", element: <UserEditPage /> },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

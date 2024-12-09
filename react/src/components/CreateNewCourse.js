import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TitleBar from './TitleBar';
import SideHeader from './SideHeader';

const CreateNewCourse = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    costForStudents: 0,
    costForWorkers: 0,
    costForAWSMembers: 0,
    regularCost: 0,
    dates: [],
    courseDurationDays: 0,
  });

  const pageTitle = 'Utwórz nowy kurs';
    const pageLinks = [
      { text: 'Politechnika Gdańska', href: '/#', title: 'Wróć do poprzedniej strony' },
      { text: 'Sekcja Żeglarska Politechniki Gdańskiej', href: '/#', title: 'Wróć do poprzedniej strony' },
      { text: 'Utwórz nowy kurs', href: '/createnewcourse', title: 'Obecna strona'},
    ];

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/courses', formData);
      console.log('Course created successfully:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  return (

    <div>
    <TitleBar mainTitle={pageTitle} pageLinks={pageLinks} />
    <div className='regist'>
    <form onSubmit={handleSubmit}>
        <label>
            Nazwa kursu:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
            Opis:
            <input type="text" name="description" value={formData.description} onChange={handleChange} required />
        </label>

        <label>
            Koszt dla Studenta:
            <input type="text" name="costForStudents" value={formData.costForStudents} onChange={handleChange} required />
        </label>

        <label>
            Koszt dla instruktorów:
            <input type="text" name="costForWorkers" value={formData.costForWorkers} onChange={handleChange} required />
        </label>

        <label>
            Koszt dla członków AWS:
            <input type="text" name="costForAWSMembers" value={formData.costForAWSMembers} onChange={handleChange} required />
        </label>

        <label>
            Koszt bez zniżek:
            <input type="text" name="regularCost" value={formData.regularCost} onChange={handleChange} required />
        </label>

        <label>
            Data:
            <input type="date" name="dates" value={formData.dates} onChange={handleChange} required />
        </label>

        <label>
            Czas trwania kursu (dni):
            <input type="text" name="courseDurationDays" value={formData.courseDurationDays} onChange={handleChange} required />
        </label>

      <button type="submit">Create Course</button>
      </form>
      </div>
      <SideHeader/>
      </div>

  );
};

export default CreateNewCourse;

// export function CourseLabel ({name, value, handleChange}) {
//   <label>
//   <input
//     type = 'text'
//     name = {name}
//     value = {value}
//     onChange = {handleChange}
//     />
//     </label>
// }

// export default function Course() {

//   <div>
//   <CourseLabel
//     name = 'name'
//     value = {formData.courseDurationDays}
//     onChange = {handleChange}
//     />
//     <CourseLabel
//     name = 'name'
//     value = {formData.courseDurationDays}
//     onChange = {handleChange}
//     />
//     <CourseLabel
//     name = 'name'
//     value = {formData.courseDurationDays}
//     onChange = {handleChange}
//     />
//     <CourseLabel
//     name = 'name'
//     value = {formData.courseDurationDays}
//     onChange = {handleChange}
//     />




// </div>
//   }
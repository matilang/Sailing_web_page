import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../App.css'
import TitleBar from '../components/TitleBar';
import SideHeader from '../components/SideHeader';

const RegistrationForm = () => {

  const courseId = localStorage.getItem('courseId')
  const navigate = useNavigate()
  const pageTitle = 'Zapisz się na kurs';
    const pageLinks = [
      { text: 'Politechnika Gdańska', href: '/sailing-webpage'},
      { text: 'Sekcja Żeglarska Politechniki Gdańskiej', href: '/sailing-webpage'},
      { text: 'Wszystkie kursy', href: '/allcourses'},
      { text: 'Zapisz się na kurs', href: '/registrationform'},
    ];

  const [course, setCourse] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    pesel: "",
    phoneNumber: "",
    cost: "",
    date: "",
    email: "",
    studentIdNumber: "",
    azsPgMembershipCardNumber: "",
    tShirtSize: "",
    meals: "",
    referringSource: "",
  });

  useEffect(() => {
    axios.get(`/courses/${courseId}`)
      .then(response => {
        const courseData = response.data;
        setCourse(courseData);

        const initialFormData = { ...formData };

        courseData.registrationFormTemplate?.fields?.forEach(field => {
          initialFormData[field.fieldName] = '';
        });

        setFormData(initialFormData);
      })
      .catch(error => console.error('Error fetching course details:', error));
  }, [courseId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dane do zapisu:", formData);

    axios.post(`/user/register/${courseId}`, formData)
      .then((result) => {
        console.log(result);
        navigate('/')
      })
      .catch((err) => {
        console.error(err);
        if (err.response) {
          console.error('Server responded with:', err.response.data);
        }
      });
  };

  return (
    <div className='main-content'>
      <TitleBar mainTitle={pageTitle} pageLinks={pageLinks} />
    <div className='text'>
      <div className='regist'>
        <h3>Formularz Zapisu na Kurs Żeglarski</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Imię:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              autoComplete='off'
            />
          </label>
          <br />
          <label>
            Nazwisko:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              autoComplete='off'
            />
          </label>
          <br />
          <label>
            PESEL:
            <input
              type="text"
              name="pesel"
              value={formData.pesel}
              onChange={handleChange}
              autoComplete='off'
            />
          </label>
          <br />
          <label>
            Numer telefonu:
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              autoComplete='off'
            />
          </label>
          <br />
          <label>
            Koszt kursu:
            <input
              type="text"
              name="cost"
              value={formData.cost}
              onChange={handleChange}
              autoComplete='off'
            />
          </label>
          <br />
          <label>
            Data rozpoczęcia:
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
              autoComplete='off'
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete='off'
            />
          </label>
          <br />
          <label>
            Numer legitymacji studenckiej:
            <input
              type="text"
              name="studentIdNumber"
              value={formData.studentIdNumber}
              onChange={handleChange}
              autoComplete='off'
            />
          </label>
          <br />
          <label>
            Numer karty członkowskiej AZS PG:
            <input
              type="text"
              name="azsPgMembershipCardNumber"
              value={formData.azsPgMembershipCardNumber}
              onChange={handleChange}
              autoComplete='off'
            />
          </label>
          <br />
          <label>
            Rozmiar koszulki:
            <input
              type="text"
              name="tShirtSize"
              value={formData.tShirtSize}
              onChange={handleChange}
              autoComplete='off'
            />
          </label>
          <br />
          <label>
            Posiłki:
            <input
              type="text"
              name="meals"
              value={formData.meals}
              onChange={handleChange}
              autoComplete='off'
            />
          </label>
          <br />
          <label>
            Źródło polecające:
            <input
              type="text"
              name="referringSource"
              value={formData.referringSource}
              onChange={handleChange}
              autoComplete='off'
            />
          </label>
          {course?.registrationFormTemplate?.fields?.map((field, index) => (
              <div key={index} className="form-group">
                <label htmlFor={field.fieldName}>{field.fieldName}</label>

                {field.fieldType === 'text' && (
                  <input
                    type="text"
                    name={field.fieldName}
                    value={formData[field.fieldName] || ''}
                    onChange={handleChange}
                    required={field.isRequired}
                    autoComplete="off"
                  />
                )}
                {field.fieldType === 'number' && (
                  <input
                    type="number"
                    name={field.fieldName}
                    value={formData[field.fieldName] || ''}
                    onChange={handleChange}
                    required={field.isRequired}
                    autoComplete="off"
                  />
                )}
                {field.fieldType === 'date' && (
                  <input
                    type="date"
                    name={field.fieldName}
                    value={formData[field.fieldName] || ''}
                    onChange={handleChange}
                    required={field.isRequired}
                  />
                )}
                {field.fieldType === 'email' && (
                  <input
                    type="email"
                    name={field.fieldName}
                    value={formData[field.fieldName] || ''}
                    onChange={handleChange}
                    required={field.isRequired}
                    autoComplete="off"
                  />
                )}
              </div>
            ))}
          <br />
          <button type="submit">Zapisz się na kurs</button>
        </form>
      </div>
    </div>
    <SideHeader/>
    </div>
  );
};

export default RegistrationForm;

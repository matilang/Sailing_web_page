import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './RegistrationForm.css'

const RegistrationForm = () => {

  const courseId = localStorage.getItem('courseId')
  const navigate = useNavigate()
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dane do zapisu:", formData);

    axios.post(`/user/form-registration/${courseId}`, formData)
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
    <div className='regist'>
      <h2>Formularz Zapisu na Kurs Żeglarski Edycja</h2>
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
        <br />
        <button type="submit">Zapisz się na kurs</button>
      </form>
    </div>
  );
};

export default RegistrationForm;

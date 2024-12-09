import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../App.css'
import TitleBar from './TitleBar';
import SideHeader from './SideHeader';

const EditUser = () => {

  const navigate = useNavigate()
  const pageTitle = 'Edytuj Dane Użytkownika';
    const pageLinks = [
      { text: 'Politechnika Gdańska', href: '/#'},
      { text: 'Sekcja Żeglarska Politechniki Gdańskiej', href: '/#'},
      { text: 'Edytuj Dane Użytkownika', href: '/edituser'},
    ];


  const [formData, setFormData] = useState({
    username: "",
    email: "",

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

    axios.put(`/user/user-profile`, formData)
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
    <div>
    <TitleBar mainTitle={pageTitle} pageLinks={pageLinks} />
    <div className='text'>
      <div className='regist'>
        <h2>Edytuj dane osobowe</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nazwa Użytkownika:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              autoComplete='off'
            />
          </label>
          <br />
          <label>
            E-mail:
            <input
              type="text"
              name="email"
              value={formData.lastName}
              onChange={handleChange}
              autoComplete='off'
            />
          </label>
          <button type="submit">Edytuj dane</button>
        </form>
      </div>
    </div>
    <SideHeader/>
    </div>
  );
};

export default EditUser;

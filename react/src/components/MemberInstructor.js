import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

export const Instructor = ({ instructor }) => {
  return (
    <Link className='tile' to={instructor.link}>
      <img src={instructor.imageSrc} alt={`${instructor.name} - zdjęcie`} />
      <p>{instructor.name}</p>
    </Link>
  );
};

export const Member = ({ member }) => {
  return (
    <div className='tile'>
      <img src={member.imageSrc} alt={`${member.name} - zdjęcie`} />
      <p>{member.name}</p>
    </div>
  );
};
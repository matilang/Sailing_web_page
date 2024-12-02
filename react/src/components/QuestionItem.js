import React from 'react';
import '../App.css'

const QuestionItem = ({ question, answer, isActive, onToggleActive }) => {
  return (
    <div className={`faq ${isActive ? 'active' : ''}`} onClick={onToggleActive}>
      <div className="question">
        <h3>{question}</h3>
        <svg width="15" height="10" viewBox="0 0 42 25">
          <path
            d='M3 3L21 21L39 3'
            stroke='black'
            strokeWidth='7'
            strokeLinecap='round'
            fill='none'
          ></path>
        </svg>
      </div>
      <div className="answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default QuestionItem;

import React, { useState } from 'react';

export function QuestionItem ({ question, answer, isActive, onToggleActive }) {
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

export default function Question ({ questions }) {
  const [activeIndices, setActiveIndices] = useState([]);

  const handleToggleActive = (index) => {
    setActiveIndices((prevIndices) => {
      if (prevIndices.includes(index)) {
        return prevIndices.filter((i) => i !== index);
      } else {
        return [...prevIndices, index];
      }
    });
  };

  return (
    <div className="text">
      <h2>Strefa najczęściej zadawanych pytań</h2>
      {questions.map((q, index) => (
        <QuestionItem
          key={index}
          question={q.question}
          answer={q.answer}
          isActive={activeIndices.includes(index)}
          onToggleActive={() => handleToggleActive(index)}
        />
      ))}
    </div>
  );
};
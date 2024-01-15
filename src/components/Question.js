import React, { useState } from 'react';
import QuestionItem from './QuestionItem';

const Question = ({ questions }) => {
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

export default Question;

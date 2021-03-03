import React, { useState } from 'react';
import './styles.scss';

function Question({ title, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleQuestion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Question">
      <div className="Question__title box" onClick={toggleQuestion}>
        <h2 className="Question__title--text">{title}</h2>
        <span className="Question__title--text">{isOpen ? 'X' : '+'}</span>
      </div>
      {isOpen && (
        <div className="Question__answer box">
          <p className="Question__answer--text">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default Question;

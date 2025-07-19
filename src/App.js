import React, { useState } from 'react';
import './App.css';
import Button from './Button';
import Display from './Display';

const App = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  return (
    <div className="app">
      <h1>React Calculator</h1>
      <div className="calculator">
        <Display value={input} />
        <div className="buttons">
          {buttons.map((btn, index) => (
            <Button key={index} label={btn} onClick={handleClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

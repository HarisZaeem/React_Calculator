import React from 'react';

const Button = ({ label, onClick }) => {
  const getClass = () => {
    if (label === 'C') return 'clear-btn';
    if (label === '=') return 'equals-btn';
    if (['/', '*', '-', '+'].includes(label)) return 'operator-btn';
    return '';
  };

  return (
    <button className={getClass()} onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

export default Button;

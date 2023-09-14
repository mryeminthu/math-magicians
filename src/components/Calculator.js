import React, { useState } from 'react';
import './Calculator.css';
import Button from './Button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (value) => {
    const newData = calculate(calculatorData, value);
    setCalculatorData(newData);
    setDisplay(newData.next || newData.total || '0');
  };

  const buttons = [
    'AC', '+/-', '%', { label: '÷', className: 'operator' },
    '7', '8', '9', { label: 'x', className: 'operator' },
    '4', '5', '6', { label: '-', className: 'operator' },
    '1', '2', '3', { label: '+', className: 'operator' },
    { label: '0', className: 'zero' }, '.', { label: '=', className: 'operator' },
  ];

  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen">{display}</div>
        <div className="buttonBox">
          {buttons.map((buttonValue) => (
            <Button
              key={buttonValue.label || buttonValue}
              value={buttonValue.label || buttonValue}
              onClick={handleButtonClick}
              className={`button ${buttonValue.className || ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;

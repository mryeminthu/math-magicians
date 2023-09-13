import React, { useState } from 'react';
import './Calculator.css';
import Button from './Button';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [prevInput, setPrevInput] = useState(null);
  const [currentInput, setCurrentInput] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleButtonClick = (value) => {
    if (/\d/.test(value)) {
      if (!currentInput) {
        setCurrentInput(value);
        setDisplay(value);
      } else {
        setCurrentInput(currentInput + value);
        setDisplay(currentInput + value);
      }
    } else if (value === '+' || value === '-' || value === 'x' || value === '÷') {
      if (currentInput) {
        if (prevInput && operation) {
          const result = calculate(prevInput, currentInput, operation);
          setPrevInput(result);
          setCurrentInput(null);
          setOperation(value);
          setDisplay(result);
        } else {
          setPrevInput(currentInput);
          setCurrentInput(null);
          setOperation(value);
        }
      }
    } else if (value === '=') {
      if (prevInput && currentInput && operation) {
        const result = calculate(prevInput, currentInput, operation);
        setPrevInput(null);
        setCurrentInput(result);
        setOperation(null);
        setDisplay(result);
      }
    } else if (value === 'AC') {
      setPrevInput(null);
      setCurrentInput(null);
      setOperation(null);
      setDisplay('0');
    } else if (value === '+/-' || value === '%') {
      if (currentInput) {
        const result = operate(currentInput, value);
        setCurrentInput(result);
        setDisplay(result);
      }
    }
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
              className={buttonValue.className || ''}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;

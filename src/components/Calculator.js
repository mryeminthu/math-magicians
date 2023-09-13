import React from 'react';

const Calculator = () => {
  const getButtonStyle = (value) => {
    const buttonStyles = {
      0: 'zero',
      x: 'operator',
      '-': 'operator',
      '+': 'operator',
      '=': 'operator',
      '÷': 'operator',
    };
    return `${buttonStyles[value]} button`;
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen">0</div>
        <div className="buttonBox">
          <button type="button" className={getButtonStyle('AC')}>AC</button>
          <button type="button" className={getButtonStyle('+/-')}>+/-</button>
          <button type="button" className={getButtonStyle('%')}>%</button>
          <button type="button" className={`operator-bg ${getButtonStyle('÷')}`}>÷</button>
          <button type="button" className={getButtonStyle('7')}>7</button>
          <button type="button" className={getButtonStyle('8')}>8</button>
          <button type="button" className={getButtonStyle('9')}>9</button>
          <button type="button" className={`operator-bg ${getButtonStyle('x')}`}>x</button>
          <button type="button" className={getButtonStyle('4')}>4</button>
          <button type="button" className={getButtonStyle('5')}>5</button>
          <button type="button" className={getButtonStyle('6')}>6</button>
          <button type="button" className={`operator ${getButtonStyle('-')}`}>-</button>
          <button type="button" className={getButtonStyle('1')}>1</button>
          <button type="button" className={getButtonStyle('2')}>2</button>
          <button type="button" className={getButtonStyle('3')}>3</button>
          <button type="button" className={`operator-bg ${getButtonStyle('+')}`}>+</button>
          <button type="button" className={`zero ${getButtonStyle('0')}`}>0</button>
          <button type="button" className={getButtonStyle('.')}>.</button>
          <button type="button" className={getButtonStyle('=')}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

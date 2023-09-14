import React from 'react';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

function App() {
  const appContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  };

  return (
    <div style={appContainerStyle}>
      <div className="quote">
        <Quote />
      </div>
      <div className="calculator">
        <Calculator />
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './Calculator.css';
 
function Calculator() {
  const [input, setInput] = useState('');
 
  const handleButtonClick = (value) => {
    setInput(input + value);
  };
 
  const handleClear = () => {
    setInput('');
  };
 
  const handleEquals = () => {
    setInput(eval(input));
  };
 
  return (
    <div className="calculator">
      <input className="textarea" type="text" value={input} />
      <div className="buttons">
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={handleEquals}>=</button>
      </div>
    </div>
  );
}
 
export default Calculator;
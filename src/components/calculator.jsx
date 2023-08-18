import { useState } from 'react';
import Button from './button';
import '../index.css';
import Input from './input';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculation, setCalculation] = useState({});

  const handleClick = (buttonName) => {
    const newCalculation = calculate(calculation, buttonName);
    setCalculation(newCalculation);
  };

  return (

    <div className="calc-wrapper">
      <Input data={calculation.next || calculation.total || '0'} />
      <div className="row">
        <Button symbol="AC" color="#E0E0E0" onClick={() => handleClick('AC')} />
        <Button symbol="+/-" color="#E0E0E0" onClick={() => handleClick('+/-')} />
        <Button symbol="%" color="#E0E0E0" onClick={() => handleClick('%')} />
        <Button symbol="÷" color="#F5913E" onClick={() => handleClick('÷')} />
      </div>
      <div className="row">
        <Button symbol="7" color="#E0E0E0" onClick={() => handleClick('7')} />
        <Button symbol="8" color="#E0E0E0" onClick={() => handleClick('8')} />
        <Button symbol="9" color="#E0E0E0" onClick={() => handleClick('9')} />
        <Button symbol="x" color="#F5913E" onClick={() => handleClick('x')} />
      </div>
      <div className="row">
        <Button symbol="4" color="#E0E0E0" onClick={() => handleClick('4')} />
        <Button symbol="5" color="#E0E0E0" onClick={() => handleClick('5')} />
        <Button symbol="6" color="#E0E0E0" onClick={() => handleClick('6')} />
        <Button symbol="-" color="#F5913E" onClick={() => handleClick('-')} />
      </div>
      <div className="row">
        <Button symbol="1" color="#E0E0E0" onClick={() => handleClick('1')} />
        <Button symbol="2" color="#E0E0E0" onClick={() => handleClick('2')} />
        <Button symbol="3" color="#E0E0E0" onClick={() => handleClick('3')} />
        <Button symbol="+" color="#F5913E" onClick={() => handleClick('+')} />
      </div>
      <div className="row last">
        <Button symbol="0" color="#E0E0E0" onClick={() => handleClick('0')} />
        <Button symbol="." color="#E0E0E0" onClick={() => handleClick('.')} />
        <Button symbol="=" color="#F5913E" onClick={() => handleClick('=')} />
      </div>
    </div>

  );
}

export default Calculator;

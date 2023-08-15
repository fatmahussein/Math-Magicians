import React from 'react';
import Button from './button';
import './index.css';
import Input from './input';

function Calculator() {
  return (
    <div className="calc-wrapper">
      <Input />
      <div className="row">
        <Button symbol="AC" color="#E0E0E0" />
        <Button symbol="+/-" color="#E0E0E0" />
        <Button symbol="%" color="#E0E0E0" />
        <Button symbol="/" color="#F5913E" />
      </div>
      <div className="row">
        <Button symbol="7" color="#E0E0E0" />
        <Button symbol="8" color="#E0E0E0" />
        <Button symbol="9" color="#E0E0E0" />
        <Button symbol="x" color="#F5913E" />
      </div>
      <div className="row">
        <Button symbol="4" color="#E0E0E0" />
        <Button symbol="5" color="#E0E0E0" />
        <Button symbol="6" color="#E0E0E0" />
        <Button symbol="-" color="#F5913E" />
      </div>
      <div className="row">
        <Button symbol="1" color="#E0E0E0" />
        <Button symbol="2" color="#E0E0E0" />
        <Button symbol="3" color="#E0E0E0" />
        <Button symbol="+" color="#F5913E" />
      </div>
      <div className="row last">
        <Button symbol="0" color="#E0E0E0" />
        <Button symbol="." color="#E0E0E0" />
        <Button symbol="=" color="#F5913E" />
      </div>
    </div>
  );
}

export default Calculator;

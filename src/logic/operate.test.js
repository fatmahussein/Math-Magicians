import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import operate from './operate.js'; // Update the path to your operate.js file

describe('operate function', () => {
  test('performs addition correctly', () => {
    const result = operate('2', '3', '+');
    expect(result).toBe('5');
  });

  test('performs subtraction correctly', () => {
    const result = operate('5', '3', '-');
    expect(result).toBe('2');
  });

  test('performs multiplication correctly', () => {
    const result = operate('2', '3', 'x');
    expect(result).toBe('6');
  });

  test('performs division correctly', () => {
    const result = operate('6', '2', '÷');
    expect(result).toBe('3');
  });

  test('handles division by zero', () => {
    const result = operate('6', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  test('performs modulo operation correctly', () => {
    const result = operate('5', '2', '%');
    expect(result).toBe('1');
  });

  test('handles modulo by zero', () => {
    const result = operate('5', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  test('throws error for unknown operation', () => {
    expect(() => operate('5', '2', '^')).toThrow("Unknown operation '^'");
  });
});

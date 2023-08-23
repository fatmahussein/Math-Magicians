import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from './calculator';

describe('Calculator component', () => {
  test('renders calculator component properly', () => {
    render(<Calculator />);
  });

  test('showcase the initial values correctly', () => {
    render(<Calculator />);
    const showData = screen.getByTestId('initial');
    expect(showData).toHaveTextContent(0);
  });
});

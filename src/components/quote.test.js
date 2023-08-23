import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FetchQuote from './fetchQuote';

describe('quotes components', () => {
  it('should render loading while fetching data', () => {
    render(<FetchQuote />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });
});

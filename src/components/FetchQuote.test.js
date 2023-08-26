import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FetchQuote from './fetchQuote';

describe('quotes components', () => {
  test('renders loading state correctly', () => {
    const { asFragment } = render(<FetchQuote isLoading />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render loading while fetching data', () => {
    render(<FetchQuote />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });
});

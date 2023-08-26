import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

describe('Home Component', () => {
  test('it matches the snapshot', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  test('renders paragraphs with dummy text', () => {
    const { getAllByText } = render(<Home />);
    const paragraphs = getAllByText(/Lorem Ipsum is simply dummy text/i);
    expect(paragraphs.length).toBe(2);
  });
});

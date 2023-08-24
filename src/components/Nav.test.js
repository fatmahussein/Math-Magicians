import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Nav';

test('Navbar snapshot', () => {
  const { asFragment } = render(
    <Router>
      {' '}
      {/* Wrap component in BrowserRouter */}
      <Navbar />
    </Router>,
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Navbar link destinations', () => {
  const { getByText } = render(
    <Router>
      <Navbar />
    </Router>,
  );

  const homeLink = getByText('Home');
  const calculatorLink = getByText('Calculator');
  const quotesLink = getByText('Quotes');

  expect(homeLink.getAttribute('href')).toBe('/');
  expect(calculatorLink.getAttribute('href')).toBe('/Calculator');
  expect(quotesLink.getAttribute('href')).toBe('/Quotes');
});

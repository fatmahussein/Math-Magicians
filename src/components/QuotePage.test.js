import React from 'react';
import { render } from '@testing-library/react';
import QuotePage from './QuotePage';

test('QuotePage matches snapshot', () => {
  const { asFragment } = render(<QuotePage />);
  expect(asFragment()).toMatchSnapshot();
});

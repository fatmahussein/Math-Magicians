import React from 'react';
import { render } from '@testing-library/react';
import Input from './input';

describe('Input Component', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Input data="123" />);
    expect(asFragment()).toMatchSnapshot();
  });
});

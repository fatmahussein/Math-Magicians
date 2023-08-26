import React from 'react';
import { render } from '@testing-library/react';
import CalcPage from './CalcPage';

describe('CalcPage Component', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<CalcPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});

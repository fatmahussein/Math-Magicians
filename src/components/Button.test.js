import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './button';

describe('Button Component', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Button symbol="+" color="blue" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls onClick function when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button symbol="+" color="blue" onClick={onClickMock} />);
    const button = getByText('+');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });
});

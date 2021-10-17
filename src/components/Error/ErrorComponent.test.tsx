import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ErrorComponent from './ErrorComponent';

test('should render error component image', () => {
  render(<ErrorComponent />);
  expect(screen.getByRole('img')).toBeValid();
  expect(screen.getByRole('img')).toHaveAttribute('src', 'warning.png');
});
test('should render error component message', () => {
  render(<ErrorComponent />);
  expect(screen.getByRole('heading')).toHaveTextContent('Ops, something went wrong. Please try again later.')
});

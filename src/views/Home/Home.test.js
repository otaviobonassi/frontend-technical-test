import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Home } from './Home';
import FIXTURE from '../../App.fixture';

test('should always render navbar', () => {
  render(<Home events={[]}/>)
  expect(screen.getByRole('img')).toHaveAttribute('src', 'menu.png')
})

test('should always render loading when events.length is null', () => {
  render(<Home events={[]}/>)
  expect(screen.queryByRole('banner')).toBeNull()
  expect(screen.queryByRole('button')).toBeNull()
})

test('should render all buttons when events loaded', () => {
  render(<Home events={FIXTURE}/>)
  expect(screen.getAllByRole('button')).toHaveLength(7)
})
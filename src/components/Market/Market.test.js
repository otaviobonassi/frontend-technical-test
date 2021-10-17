import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Market } from './Market';
import FIXTURE from '../../App.fixture';

const market = FIXTURE[0].markets[0];

beforeEach(() => render(<Market market={market} />));

test('should render Market header', () => {
  expect(screen.getByRole('heading')).toHaveTextContent('Team to Win');
});

test('should render Selections buttons', () => {
  expect(screen.getAllByRole('button')[0]).toHaveAttribute('value', 'SEL_1')
  expect(screen.getAllByRole('button')[1]).toHaveAttribute('value', 'SEL_2')
});
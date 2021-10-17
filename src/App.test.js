import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom'
import App from './App';
import FIXTURE from './App.fixture';

const server = setupServer(
  rest.get('/59f08692310000b4130e9f71', (req, res, ctx) => {
    return res(ctx.json(FIXTURE))
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('makes http request to get mandatory data', () => {
  render(<App />);
});

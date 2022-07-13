import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App Component Test', () => {
  render(<App />);
  const linkElement = screen.getByText('Hello World');
  expect(linkElement).toBeInTheDocument();
});

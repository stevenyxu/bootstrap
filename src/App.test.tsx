import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders banner and main content', () => {
  render(<App />);
  const bannerName = screen.getByText(/bootstrap-app/i);
  expect(bannerName).toBeInTheDocument();
  const h1 = screen.getByText(/Bootstrap App/i);
  expect(h1).toBeInTheDocument();
});

import {render, screen} from '@testing-library/react';
import React from 'react';
import App from './App';

test("renders welcome message", () => {
  render(<App />);
  const viewElement = screen.getByText(/View Lists/i);
  expect(viewElement).toBeInTheDocument();
  const editElement = screen.getByText(/Edit/i);
  expect(editElement).toBeInTheDocument();
});

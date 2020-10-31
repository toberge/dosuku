import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Check" button', () => {
    render(<App />);
    const buttonElement = screen.getByText(/Check/i);
    expect(buttonElement).toBeInTheDocument();
});

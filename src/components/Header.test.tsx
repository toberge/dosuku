import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders "dusoku" text', () => {
    render(<Header />);
    const buttonElement = screen.getByText(/dosuku/i);
    expect(buttonElement).toBeInTheDocument();
});

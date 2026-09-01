// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoStudioDiamond title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoStudioDiamond/i);
    expect(titleElement).toBeInTheDocument();
});

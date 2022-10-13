import App from './App';
import { render, screen } from '@testing-library/react';

describe('App Tests', () => {
    const renderComponent = () => {
        return render(<App />);
    };

    test('should render home page initially', () => {
        renderComponent();
        const homeContainer = screen.getByTestId('home-page-container');
        expect(homeContainer).toBeInTheDocument();
    });
});

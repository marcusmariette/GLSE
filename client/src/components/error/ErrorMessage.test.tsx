import ErrorMessage from './ErrorMessage';
import { render, screen } from '@testing-library/react';

describe('ErrorMessage Tests', () => {
    const renderComponent = (errorSeverity: string = 'error') => {
        return render(<ErrorMessage errorSeverity={errorSeverity} errorMessage={'Error'} />);
    };

    test('should render container', () => {
        renderComponent();
        const errorContainer = screen.getByTestId('error-container');
        expect(errorContainer).toBeInTheDocument();
    });

    test('should render child elements for error', () => {
        renderComponent();
        const text = screen.getByTestId('error-text');
        expect(text).toBeInTheDocument();

        const icon = screen.getByTestId('error-icon');
        expect(icon).toBeInTheDocument();
    });

    test('should render child elements for info', () => {
        renderComponent('info');
        const text = screen.getByTestId('info-text');
        expect(text).toBeInTheDocument();

        const icon = screen.getByTestId('info-icon');
        expect(icon).toBeInTheDocument();
    });
});

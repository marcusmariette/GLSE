import ErrorMessage from './ErrorMessage';
import { render, screen } from '@testing-library/react';

describe('ErrorMessage Tests', () => {
    const renderComponent = () => {
        return render(<ErrorMessage errorSeverity={`error`} errorMessage={'Error'} />);
    };

    test('should render container', () => {
        renderComponent();
        const errorContainer = screen.getByTestId('error-container');
        expect(errorContainer).toBeInTheDocument();
    });

    test('should render child elements', () => {
        renderComponent();
        const text = screen.getByTestId('error-text');
        expect(text).toBeInTheDocument();

        const icon = screen.getByTestId('error-icon');
        expect(icon).toBeInTheDocument();
    });
});

import LoaderSection from './LoaderSection';
import { render, screen } from '@testing-library/react';

describe('LoaderSection Tests', () => {
    const renderComponent = () => {
        return render(<LoaderSection />);
    };

    test('should render container', () => {
        renderComponent();
        const loaderSectionContainer = screen.getByTestId('loaderSection-container');
        expect(loaderSectionContainer).toBeInTheDocument();
    });
});

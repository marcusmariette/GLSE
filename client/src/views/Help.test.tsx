import Help from './Help';
import { render, screen } from '@testing-library/react';

describe('Help Tests', () => {
    const renderComponent = () => {
        return render(<Help />);
    };

    test('should render container', () => {
        renderComponent();
        const helpContainer = screen.getByTestId('help-page-container');
        expect(helpContainer).toBeInTheDocument();
    });

    test('should render description text', () => {
        renderComponent();
        const descText = screen.getByText('GLSE supports the following query symbols while performing a search:');
        expect(descText).toBeInTheDocument();
    });
});

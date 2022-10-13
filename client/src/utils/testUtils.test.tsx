import { renderWithRouting } from './testUtils';
import { screen } from '@testing-library/react';
import Header from '../components/header/Header';

describe('TestUtils Tests', () => {
    const renderComponent = () => {
        return renderWithRouting(<Header />);
    };

    test('should render child component with router', () => {
        renderComponent();
        const headerContainer = screen.getByTestId('header-container');
        expect(headerContainer).toBeInTheDocument();
    });
});

import Home from './Home';
import { screen } from '@testing-library/react';
import { renderWithRouting } from '../utils/testUtils';

describe('Home Tests', () => {
    const renderComponent = () => {
        return renderWithRouting(<Home setSearchString={jest.fn()} searchString={''} />);
    };

    test('should render container', () => {
        renderComponent();
        const homeContainer = screen.getByTestId('home-page-container');
        expect(homeContainer).toBeInTheDocument();
    });

    test('should render GLSE heading', () => {
        renderComponent();
        const text = screen.getByText('GLSE');
        expect(text).toBeInTheDocument();
    });
});

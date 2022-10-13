import Search from './Search';
import { screen } from '@testing-library/react';
import { renderWithRouting } from '../utils/testUtils';

describe('Search Tests', () => {
    const renderComponent = () => {
        return renderWithRouting(<Search setSearchString={jest.fn()} searchString={''} />);
    };

    test('should render container', () => {
        renderComponent();
        const searchContainer = screen.getByTestId('search-page-container');
        expect(searchContainer).toBeInTheDocument();
    });
});

import Search from './Search';
import { screen } from '@testing-library/react';
import { renderWithRouting } from '../utils/testUtils';

describe('Search Tests', () => {
    const renderComponent = () => {
        return renderWithRouting(
            <Search
                searchString={''}
                setSearchString={jest.fn()}
                searchReload={false}
                setSearchReload={jest.fn()}
                fetchingData={false}
                setFetchingData={jest.fn()}
            />
        );
    };

    test('should render container', () => {
        renderComponent();
        const searchContainer = screen.getByTestId('search-page-container');
        expect(searchContainer).toBeInTheDocument();
    });
});

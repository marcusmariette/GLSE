import SearchBar from './SearchBar';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouting } from '../../utils/testUtils';

describe('SearchBar Tests', () => {
    const renderComponent = (searchString: string = '') => {
        return renderWithRouting(<SearchBar setSearchReload={jest.fn()} searchReload={false} setSearchString={jest.fn()} searchString={searchString} />);
    };

    test('should render container', () => {
        renderComponent();
        const headerContainer = screen.getByTestId('search-container');
        expect(headerContainer).toBeInTheDocument();
    });

    test('should render placeholder text', () => {
        renderComponent();
        const text = screen.queryByPlaceholderText('determine ? number of x');
        expect(text).toBeInTheDocument();
    });

    test('should render value when searchString is nonnull', () => {
        renderComponent('some search/string');
        const textField = screen.getByTestId('search-field');
        expect(textField).toBeInTheDocument();
        expect(textField).toHaveValue('some search/string');
    });

    // TODO: Refactor to test for react routing with navigate
    test('should handle navigation onClick of Help Icon', () => {
        renderComponent();
        const button = screen.getByTestId('help-btn');
        fireEvent.click(button);
        expect(button).toBeInTheDocument();
    });

    // TODO: Add onChange Handler for TextField MUI Element
    // TODO: Add onChange with Error
});

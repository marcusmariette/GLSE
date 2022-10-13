import SearchBar from './SearchBar';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouting } from '../../utils/testUtils';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => mockedUsedNavigate,
}));

describe('SearchBar Tests', () => {
    const renderComponent = (searchString: string = '') => {
        return renderWithRouting(<SearchBar setSearchReload={jest.fn()} searchReload={false} setSearchString={jest.fn()} searchString={searchString} />);
    };

    describe('SearchBar Rendering', () => {
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
    });

    describe('SearchBar Input & Navigation', () => {
        test('should handle navigation to help page onClick of Help Icon', () => {
            renderComponent();
            const button = screen.getByTestId('help-btn');
            fireEvent.click(button);
            expect(mockedUsedNavigate).toHaveBeenCalledWith('/help');
        });

        test('should navigate to search page on successful string query', () => {
            renderComponent('search/some value');
            const searchField = screen.getByTestId('search-field');
            fireEvent.keyDown(searchField, { key: 'Enter' });
            expect(mockedUsedNavigate).toHaveBeenCalledWith('/search');
        });

        test('should not navigate if search string is empty', () => {
            renderComponent();
            const searchField = screen.getByTestId('search-field');
            fireEvent.keyDown(searchField, { key: 'Enter' });
            expect(mockedUsedNavigate).not.toHaveBeenCalled();
        });

        test('should show error message on no symbols provided', () => {
            renderComponent('search some value');
            const searchField = screen.getByTestId('search-field');
            fireEvent.keyDown(searchField, { key: 'Enter' });
            expect(mockedUsedNavigate).not.toHaveBeenCalled();
            const errorMessage = screen.getByTestId('error-text');
            expect(errorMessage).toBeInTheDocument();
        });

        test('should show error message on more than a single symbols', () => {
            renderComponent('search some/many ?values adj.');
            const searchField = screen.getByTestId('search-field');
            fireEvent.keyDown(searchField, { key: 'Enter' });
            expect(mockedUsedNavigate).not.toHaveBeenCalled();
            const errorMessage = screen.getByTestId('error-text');
            expect(errorMessage).toBeInTheDocument();
        });

        test('should show error message on invalid usage of symbol', () => {
            renderComponent('search so?me');
            const searchField = screen.getByTestId('search-field');
            fireEvent.keyDown(searchField, { key: 'Enter' });
            expect(mockedUsedNavigate).not.toHaveBeenCalled();
            const errorMessage = screen.getByTestId('error-text');
            expect(errorMessage).toBeInTheDocument();
        });

        test('should update input value onChange', () => {
            renderComponent();
            const searchField = screen.getByTestId('search-field');
            fireEvent.change(searchField, { target: { value: 'valid/invalid search' } });
            expect(mockedUsedNavigate).not.toHaveBeenCalled();
        });
    });
});

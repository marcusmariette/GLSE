import SearchResults from './SearchResults';
import mockAxios from 'jest-mock-axios';
import { screen, waitFor } from '@testing-library/react';
import { renderWithRouting } from '../../utils/testUtils';

const mockedUsedNavigate = jest.fn();

const mockResponseData = {
    data: {
        status: 200,
        message: 'success',
        match: [
            {
                sentence: 'first result',
                count: 3,
            },
            {
                sentence: 'second result',
                count: 7,
            },
        ],
    },
};

const mockEmptyData = {
    data: {
        status: 200,
        message: 'success',
        match: [],
    },
};

const mockErrorData = {
    error: 'Error',
};

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => mockedUsedNavigate,
}));

describe('SearchResults Tests', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    const renderComponent = (searchString: string, searchReload: boolean = true) => {
        return renderWithRouting(
            <SearchResults
                searchString={searchString}
                setSearchString={jest.fn()}
                searchReload={searchReload}
                setSearchReload={jest.fn()}
                fetchingData={false}
                setFetchingData={jest.fn()}
            />
        );
    };

    test('should render container', async () => {
        mockAxios.get.mockResolvedValue(mockResponseData);

        renderComponent('this/that person');
        await waitFor(() => {
            const resultsContainer = screen.getByTestId('results-container');
            expect(resultsContainer).toBeInTheDocument();
        });

        expect(mockAxios.get).toHaveBeenCalledWith('http://localhost:3001/getResults?search=this/that person');
    });

    test('should handle no results', async () => {
        mockAxios.get.mockResolvedValue(mockEmptyData);

        renderComponent('this/that person');
        await waitFor(() => {
            const resultsContainer = screen.queryByTestId('results-container');
            expect(resultsContainer).not.toBeInTheDocument();
        });
    });

    test('should handle error from axios', async () => {
        mockAxios.get.mockRejectedValueOnce(mockErrorData);

        renderComponent('this/that person');
        await waitFor(() => {
            const resultsContainer = screen.queryByTestId('results-container');
            expect(resultsContainer).not.toBeInTheDocument();
        });
    });
});

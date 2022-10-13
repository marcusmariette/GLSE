import Header from './Header';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouting } from '../../utils/testUtils';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => mockedUsedNavigate,
}));

describe('Header Tests', () => {
    const renderComponent = () => {
        return renderWithRouting(<Header />);
    };

    test('should render container', () => {
        renderComponent();
        const headerContainer = screen.getByTestId('header-container');
        expect(headerContainer).toBeInTheDocument();
    });

    test('should render child components', () => {
        renderComponent();
        const image = screen.getByTestId('header-img');
        expect(image).toBeInTheDocument();

        const button = screen.getByTestId('header-btn');
        expect(button).toBeInTheDocument();
    });

    test('should call navigation to homepage onClick of image', () => {
        renderComponent();

        const image = screen.getByTestId('header-img');
        expect(image).toBeInTheDocument();
        fireEvent.click(image);

        expect(mockedUsedNavigate).toHaveBeenCalledWith('/');
    });

    test('should call navigation to homepage onClick of button', () => {
        renderComponent();

        const button = screen.getByTestId('header-btn');
        expect(button).toBeInTheDocument();
        fireEvent.click(button);

        expect(mockedUsedNavigate).toHaveBeenCalledWith('/');
    });
});

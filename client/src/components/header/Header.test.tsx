import Header from './Header';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouting } from '../../utils/testUtils';

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

    // TODO: Refactor to test for react routing with navigate
    test('should call homepage navigation onClick of image', () => {
        renderComponent();

        const image = screen.getByTestId('header-img');
        expect(image).toBeInTheDocument();
        fireEvent.click(image);

        const text = screen.getByText('GLSE');
        expect(text).toBeInTheDocument();
    });

    // TODO: Refactor to test for react routing with navigate
    test('should call homepage navigation onClick of button', () => {
        renderComponent();

        const button = screen.getByTestId('header-btn');
        expect(button).toBeInTheDocument();
        fireEvent.click(button);

        const text = screen.getByText('GLSE');
        expect(text).toBeInTheDocument();
    });
});

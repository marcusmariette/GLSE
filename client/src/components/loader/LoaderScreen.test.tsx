import LoaderScreen from './LoaderScreen';
import { render, screen } from '@testing-library/react';

describe('LoaderScreen Tests', () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');

    const renderComponent = () => {
        return render(<LoaderScreen />);
    };

    test('should render container', () => {
        renderComponent();
        const loaderContainer = screen.getByTestId('loader-container');
        expect(loaderContainer).toBeInTheDocument();
        expect(setTimeout).toHaveBeenCalledTimes(1);
    });
});

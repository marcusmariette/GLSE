import HelpBox from './HelpBox';
import { render, screen } from '@testing-library/react';

describe('HelpBox Tests', () => {
    const renderComponent = (param: string = '/') => {
        return render(<HelpBox parameter={param} name={'Optional'} description={'Test Optional Description'} examples={['hello world/people']} />);
    };

    test('should render container', () => {
        renderComponent();
        const helpContainer = screen.getByTestId('help-container');
        expect(helpContainer).toBeInTheDocument();
    });

    test('should render text elements', () => {
        renderComponent();
        const paramText = screen.getByTestId('help-param');
        expect(paramText).toBeInTheDocument();

        const descText = screen.getByText('Test Optional Description');
        expect(descText).toBeInTheDocument();

        const exampleText = screen.getByTestId('help-example');
        expect(exampleText).toBeInTheDocument();
    });

    test('should render a larger parameter', () => {
        renderComponent('adj.');
        const paramText = screen.getByTestId('help-param');
        expect(paramText).toBeInTheDocument();
    });
});

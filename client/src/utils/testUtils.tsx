import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

export const renderWithRouting = (children) => {
    return render(<BrowserRouter>{children}</BrowserRouter>);
};

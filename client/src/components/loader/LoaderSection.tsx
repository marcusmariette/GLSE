import React from 'react';
import { StyledLoaderSection } from './LoaderStyles';
import loader from '../../resources/images/loader.svg';

const LoaderSection: React.FC = () => {
    return (
        <StyledLoaderSection data-testid={'loaderSection-container'}>
            <img src={loader} alt="loader" />
        </StyledLoaderSection>
    );
};

export default LoaderSection;

import React, { useState, useEffect } from 'react';
import { StyledLoaderBox } from './LoaderStyles';

const LoaderScreen: React.FC = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setActive(true);
        }, 1575);
    }, []);

    return (
        <StyledLoaderBox data-testid={'loader-container'} className={!active ? 'section-loader' : 'section-loader active'}>
            <div className="loader-logo"></div>
        </StyledLoaderBox>
    );
};

export default LoaderScreen;

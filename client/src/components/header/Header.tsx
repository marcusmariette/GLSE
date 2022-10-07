import React from 'react';
import { StyledHeaderBox, StyledTextButton, StyledLogoImage } from './HeaderStyles';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const navigate = useNavigate();

    return (
        <StyledHeaderBox>
            <StyledLogoImage src="/android-chrome-192x192.png" onClick={() => navigate('/')} alt="GLSE Logo" />
            <StyledTextButton onClick={() => navigate('/')}>GLSE</StyledTextButton>
        </StyledHeaderBox>
    );
};

export default Header;

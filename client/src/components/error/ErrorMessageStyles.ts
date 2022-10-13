import styled from 'styled-components';
import { Box } from '@mui/material';
import { white, pink, orange } from '../../resources/styles/variables';

export const StyledErrorMessageBox = styled(Box)`
    border-radius: 100vw;
    background-color: ${white};
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.3rem 2rem;

    box-shadow: 0px 0px 10px rbga(#000, 0.7);

    fieldset {
        border: none;
    }
`;

export const StyledErrorText = styled.h3`
    font-size: 17px;
    color: ${pink};
    font-weight: 600;
    padding: 0 1.3rem;
`;

export const StyledInfoText = styled.h3`
    font-size: 17px;
    color: ${orange};
    font-weight: 600;
    padding: 0 1.3rem;
`;

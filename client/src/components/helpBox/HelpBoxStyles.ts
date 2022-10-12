import styled from 'styled-components';
import { Box } from '@mui/material';
import { white, helpBox, orange, shadedGrey } from '../../resources/styles/variables';

export const StyledHelpBox = styled(Box)`
    border: 1px solid ${white};
    border-radius: 10px;
    background-color: ${helpBox};
    margin: 1% auto;
    padding: 2% 0%;
    min-height: 200px;
`;

export const StyledParameter = styled.h2`
    margin: 60% 30%;
    text-align: center;
    background-color: ${orange};
    border: 1px solid ${orange};
    border-radius: 10px;
`;

export const StyledParameterSmall = styled.h3`
    margin: 60% 18%;
    text-align: center;
    background-color: ${orange};
    border: 1px solid ${orange};
    border-radius: 10px;
`;

export const StyledExampleText = styled.p`
    padding: 5px 10px;
    max-width: 250px;
    background-color: ${shadedGrey};
    border: 1px solid ${shadedGrey};
    border-radius: 2px;
`;

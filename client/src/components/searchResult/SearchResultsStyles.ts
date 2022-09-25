import styled from 'styled-components';
import { Box } from '@mui/material';
import { white } from '../../resources/styles/variables';

export const StyledSearchResultBox = styled(Box)`
    border-radius: 100vw;
    background-color: ${white};
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0 1.5rem;

    box-shadow: 0px 0px 10px rbga(#000, 0.7);

    fieldset {
        border: none;
    }
`;
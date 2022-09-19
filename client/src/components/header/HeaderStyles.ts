import styled from 'styled-components';
import { Box } from '@mui/material';
import { white } from '../../resources/styles/variables';

export const StyledHeaderBox = styled(Box)`
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1.8rem;
    border-bottom: 1px solid ${white};
    margin: auto 3%;
`;

export const StyledTextButton = styled.h2`
    &:hover {
        cursor: pointer;
    }
`;

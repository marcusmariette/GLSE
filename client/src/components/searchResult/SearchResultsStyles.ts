import styled from 'styled-components';
import { Box, LinearProgress } from '@mui/material';
import { white, background } from '../../resources/styles/variables';

export const StyledSearchResultBox = styled(Box)`
    background-color: ${white};
    padding: 2rem 2.5rem;
    border-radius: 1.5rem;
    width: 90%;
    margin: 0 auto;
`;

export const StyledSearchResultRow = styled(Box)`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    transition: transform 0.2s ease;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        color: ${background};
        font-size: 18px;
        font-weight: bold;
    }

    & + .search-result-row {
        margin-top: 1.5rem;
    }

    svg {
        transition: transform 0.4s ease;
        position: relative;
        top: 0.75rem;
    }

    &:hover {
        transform: scale(1.01);
        svg {
            transform: translateX(3px);
        }
    }
`;

export const StyledSearchResultFooter = styled(Box)`
    width: 90%;
    margin: 0 auto;
    padding: 0 2.5rem;

    h6 {
        position: relative;
        &::before {
            content: '';
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 12px;
            height: 12px;
            background: ${white};
            border-radius: 50%;
            left: -22px;
        }
    }
`;

export const StyledSearchResultProgress = styled(LinearProgress)`
    border-radius: 100vw !important;
    height: 15px !important;
    margin-top: 0.5rem;
    .MuiLinearProgress-bar {
        background-color: ${background} !important;
    }
`;

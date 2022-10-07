import styled from 'styled-components';
import { Box } from '@mui/material';
import { background } from '../../resources/styles/variables';

export const StyledLoaderBox = styled(Box)`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: ${background};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
`;

export const StyledLoaderSection = styled(Box)`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    img {
        width: 100px;
        height: 100px;
        object-fit contain;
    }
`;
import styled from "styled-components";
import { Box, TextField } from "@mui/material";
import { background, white } from "../../resources/styles/variables";

export const StyledSearchBarBox = styled(Box)`
    border-radius: 100vw;
    background-color: ${white};
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0 1.5rem;

    box-shadow: 0px 0px 10px rbga(#000, 0.7);

    fieldset {
        border: none;
    }
`;

export const StyledSearchBarTextField = styled(TextField)`
    width: 100%;
    input {
        font-size: 18px;
        color: ${background};
        font-weight: 600;
        padding: 16.5px 14px 16px;
    }
`;

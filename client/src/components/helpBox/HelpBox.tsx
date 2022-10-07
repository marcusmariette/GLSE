import React from 'react';
import { Grid } from '@mui/material';
import { StyledHelpBox, StyledParameter, StyledExampleText } from './HelpBoxStyles';
import { orange } from '../../resources/styles/variables';
import parse from 'html-react-parser';
import { HelpData } from '../../types';

const HelpBox: React.FC<HelpData> = ({ parameter, name, description, examples }) => {
    const changeParameterColour = (text) => {
        return text.replace(parameter, `<span style="color:${orange}">${parameter}</span>`);
    };

    return (
        <StyledHelpBox>
            <Grid container>
                <Grid item xs={1}>
                    <StyledParameter>{parameter}</StyledParameter>
                </Grid>
                <Grid item xs={11}>
                    <Grid container>
                        <Grid item xs={12}>
                            <h5>{name}</h5>
                        </Grid>
                        <Grid item xs={12}>
                            <h5 style={{ fontStyle: 'italic' }}>{description}</h5>
                        </Grid>
                        <Grid item xs={12} sx={{ marginTop: '1%' }}>
                            <p>{'Examples:'}</p>
                        </Grid>
                        {examples.map((example) => {
                            return (
                                <Grid item xs={12} sx={{ marginTop: '1%' }}>
                                    <StyledExampleText>{parse(changeParameterColour(example))}</StyledExampleText>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </StyledHelpBox>
    );
};

export default HelpBox;

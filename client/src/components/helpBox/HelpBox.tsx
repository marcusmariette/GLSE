import React from 'react';
import { Grid } from '@mui/material';
import { StyledHelpBox, StyledParameter, StyledParameterSmall, StyledExampleText } from './HelpBoxStyles';
import { orange } from '../../resources/styles/variables';
import { HelpData } from '../../types';
import parse from 'html-react-parser';

const HelpBox: React.FC<HelpData> = ({ parameter, name, description, examples }) => {
    const changeParameterColour = (text) => {
        return text.replace(parameter, `<span style="color:${orange}">${parameter}</span>`);
    };

    const renderParameter = () => {
        if (parameter.length > 2) {
            return <StyledParameterSmall data-testid={'help-param'}>{parameter}</StyledParameterSmall>;
        }

        return <StyledParameter data-testid={'help-param'}>{parameter}</StyledParameter>;
    };

    return (
        <StyledHelpBox data-testid={'help-container'}>
            <Grid container>
                <Grid item xs={1}>
                    {renderParameter()}
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
                        {examples.map((example, index) => {
                            return (
                                <Grid key={index} item xs={12} sx={{ marginTop: '1%' }}>
                                    <StyledExampleText data-testid={'help-example'}>{parse(changeParameterColour(example))}</StyledExampleText>
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

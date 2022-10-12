import React from 'react';
import { Grid, Box } from '@mui/material';
import HelpBox from '../components/helpBox/HelpBox';
import { orange } from '../resources/styles/variables';
import { HelpData } from '../types';
import helpConfig from '../config/helpConfig.json';

const Help: React.FC = () => {
    const symbolData: Array<HelpData> = helpConfig;

    return (
        <Box className='section section-help'>
            <Grid container sx={{ maxWidth: '1200px', margin: '0 auto' }}>
                <Grid item xs={12}>
                    <h3 style={{ color: orange }}>{'Symbols'}</h3>
                </Grid>
                <Grid item xs={12} sx={{ marginBottom: '1%' }}>
                    <h4>{'GLSE supports the following query symbols while performing a search:'}</h4>
                </Grid>
                {symbolData.map((symbol: HelpData, index) => (
                    <Grid key={`${index}-${symbol.name}`} item xs={12}>
                        <HelpBox parameter={symbol.parameter} name={symbol.name} description={symbol.description} examples={symbol.examples} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Help;

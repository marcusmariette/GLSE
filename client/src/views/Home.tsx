import React from 'react';
import { Grid, Box } from '@mui/material';
import SearchBar from '../components/searchBar/SearchBar';
import { SearchPropTypes } from '../types';

const Home: React.FC<SearchPropTypes> = ({ searchString, setSearchString, setSearchReload, fetchingData }) => {
    return (
        <Box data-testid={'home-page-container'}>
            <Grid container sx={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h1>GLSE</h1>
                <Grid item xs={12}>
                    <SearchBar searchString={searchString} setSearchString={setSearchString} setSearchReload={setSearchReload} fetchingData={fetchingData} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;

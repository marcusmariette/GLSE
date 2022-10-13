import React from 'react';
import { Grid, Box } from '@mui/material';
import SearchBar from '../components/searchBar/SearchBar';
import { SearchPropTypes } from '../types';

const Home: React.FC<SearchPropTypes> = ({ searchString, setSearchString }) => {
    return (
        <Box data-testid={'home-container'}>
            <Grid container sx={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h1>GLSE</h1>
                <Grid item xs={12}>
                    <SearchBar setSearchString={setSearchString} searchString={searchString} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;

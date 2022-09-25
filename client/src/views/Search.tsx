import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import SearchBar from '../components/searchBar/SearchBar';

const Search: React.FC = () => {
    return (
        <Box className='section section-search'>
            <Grid container sx={{ maxWidth: '1200px', margin: '0 auto' }}>
                <Grid item xs={12}>
                    <SearchBar />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Search;

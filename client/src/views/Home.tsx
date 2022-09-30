import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import SearchBar from '../components/searchBar/SearchBar';

const Home: React.FC = () => {
    const [searchString, setSearchString] = useState<string>('');

    return (
        <Box className='section section-home'>
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

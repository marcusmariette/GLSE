import React from 'react';
import { Grid, Box } from '@mui/material';
import SearchResults from '../components/searchResult/SearchResults';
import { SearchPropTypes } from '../types';

const Search: React.FC<SearchPropTypes> = ({ searchString, setSearchString, setSearchReload, searchReload  }) => {
    return (
        <Box data-testid={'search-page-container'}>
            <Grid container sx={{ maxWidth: '1200px', margin: '0 auto' }}>
                <Grid item xs={12}>
                    <SearchResults setSearchReload={setSearchReload} searchReload={searchReload} setSearchString={setSearchString} searchString={searchString} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Search;

import React from 'react';
import { Grid, Box } from '@mui/material';
import SearchResults from '../components/searchResult/SearchResults';
import { SearchPropTypes } from '../types';

const Search: React.FC<SearchPropTypes> = ({ searchString, setSearchString, searchReload, setSearchReload, fetchingData, setFetchingData }) => {
    return (
        <Box data-testid={'search-page-container'}>
            <Grid container sx={{ maxWidth: '1200px', margin: '0 auto' }}>
                <Grid item xs={12}>
                    <SearchResults
                        searchString={searchString}
                        setSearchString={setSearchString}
                        searchReload={searchReload}
                        setSearchReload={setSearchReload}
                        fetchingData={fetchingData}
                        setFetchingData={setFetchingData}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Search;

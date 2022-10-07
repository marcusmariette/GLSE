import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import SearchResults from '../components/searchResult/SearchResults';

const Search: React.FC = () => {
    const params = useParams();

    const navigate = useNavigate();
    const [searchString, setSearchString] = useState<string>(String(params.query));

    return (
        <Box className='section section-search'>
            <Grid container sx={{ maxWidth: '1200px', margin: '0 auto' }}>
                <Grid item xs={12}>
                    <SearchResults setSearchString={setSearchString} searchString={searchString} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Search;

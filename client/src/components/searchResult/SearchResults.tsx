import React, { useEffect, useState } from 'react';
import {
    StyledSearchResultBox,
    StyledSearchResultRow,
    StyledSearchResultProgress,
    StyledSearchResultFooter,
} from './SearchResultsStyles';
import SearchBar from '../searchBar/SearchBar';
import LoaderSection from '../loader/LoaderSection';
import { SearchPropTypes } from '../../types';
import { SearchResultItem } from '../../types';
import { Grid, Typography, Stack, Box } from '@mui/material';
import { ChevronRight } from 'tabler-icons-react';

const sampleSearchResults: Array<SearchResultItem> = [
    {
        sentence: 'I would like some milk now.',
        occurrencePercentage: 69,
    },
    {
        sentence: 'I would like some milk tomorrow.',
        occurrencePercentage: 16,
    },
    {
        sentence: 'I would like some milk yesterday.',
        occurrencePercentage: 10,
    },
    {
        sentence: 'I would like some milk always.',
        occurrencePercentage: 5,
    },
];

const SearchResults: React.FC<SearchPropTypes> = ({ setSearchString, searchString }) => {
    const [searchResults, setSearchResults] = useState<Array<SearchResultItem>>([]);

    useEffect(() => {
        setTimeout(function () {
            setSearchResults(sampleSearchResults);
        }, 2500);
    }, []);

    return (
        <Grid container spacing={3} className="search-result-container">
            <Grid item xs={12}>
                <SearchBar setSearchString={setSearchString} searchString={searchString} />
            </Grid>
            <Grid item xs={12}>
                <StyledSearchResultBox>
                    {searchResults.length != 0 ? (
                        <>
                            {searchResults.map((item) => (
                                <StyledSearchResultRow
                                    key={item.sentence + item.occurrencePercentage}
                                    className="search-result-row"
                                >
                                    <Box sx={{ flex: 1 }}>
                                        <Stack direction="row" justifyContent="space-between">
                                            <Typography variant="h5">{item.sentence}</Typography>
                                            <Typography variant="h5">{item.occurrencePercentage}%</Typography>
                                        </Stack>

                                        <StyledSearchResultProgress
                                            variant="determinate"
                                            value={item.occurrencePercentage}
                                        />
                                    </Box>
                                    <ChevronRight style={{ marginLeft: 1 }} width="28px" height="32px" />
                                </StyledSearchResultRow>
                            ))}
                        </>
                    ) : (
                        <LoaderSection />
                    )}
                </StyledSearchResultBox>
            </Grid>
            <Grid item xs={12}>
                <StyledSearchResultFooter>
                    <Stack direction="row" justifyContent="flex-end">
                        <Typography variant="h6" style={{ fontSize: '18px', fontWeight: 'bold' }}>
                            {`${searchResults.length} Results Found`}
                        </Typography>
                    </Stack>
                </StyledSearchResultFooter>
            </Grid>
        </Grid>
    );
};

export default SearchResults;

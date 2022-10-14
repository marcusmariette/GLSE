import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { StyledSearchResultBox, StyledSearchResultRow, StyledSearchResultProgress, StyledSearchResultFooter } from './SearchResultsStyles';
import SearchBar from '../searchBar/SearchBar';
import LoaderSection from '../loader/LoaderSection';
import { SearchPropTypes } from '../../types';
import { SearchResultItem } from '../../types';
import { Grid, Typography, Stack, Box } from '@mui/material';
import { ChevronRight } from 'tabler-icons-react';
import { getTotalCount, populateSentenceData } from '../../utils/searchUtils';

const SearchResults: React.FC<SearchPropTypes> = ({ searchString, setSearchString, searchReload, setSearchReload, fetchingData, setFetchingData }) => {
    const [searchResults, setSearchResults] = useState<Array<SearchResultItem>>([]);
    const [noResultsFound, setNoResultsFound] = useState<boolean>(false);

    const fetchSentences = () => {
        if (!fetchingData) {
            setFetchingData && setFetchingData(true);
            axios
                .get('http://localhost:3001/getResults?search=' + searchString)
                .then((response) => {
                    const results = response.data.match;

                    if (results.length === 0) {
                        setNoResultsFound(true);
                    } else {
                        // Sort Sentences in order of count
                        results.sort((a, b) => (a.count !== b.count ? (a.count < b.count ? 1 : -1) : 0));

                        // Calculate total amount of sentences found (denominator)
                        const totalCount = getTotalCount(results);

                        // Initialize empty search result item array to populate
                        const sentencesData: Array<SearchResultItem> = populateSentenceData(results, totalCount);

                        // Update state
                        setSearchResults(sentencesData);
                    }

                    setFetchingData && setFetchingData(false);
                })
                .catch((error) => {
                    setFetchingData && setFetchingData(false);
                    setNoResultsFound(true);
                    console.log('Axios Error:', error);
                });
        }
    };

    useCallback(() => {
        if (searchString && !searchReload) {
            setSearchReload && setSearchReload(true);
        }
    }, [searchString, searchReload, setSearchReload]);

    useEffect(() => {
        if (searchReload) {
            setSearchResults([]);
            setNoResultsFound(false);
            fetchSentences();
            setSearchReload && setSearchReload(false);
        }
    }, [searchReload]);

    return (
        <Grid container spacing={3} sx={{ paddingTop: '2%', paddingBottom: '2%' }}>
            <Grid item xs={12}>
                <SearchBar
                    searchString={searchString}
                    setSearchString={setSearchString}
                    setSearchReload={setSearchReload}
                    fetchingData={fetchingData}
                    noResultsFound={noResultsFound}
                />
            </Grid>
            {!noResultsFound && (
                <>
                    <Grid item xs={12}>
                        <StyledSearchResultBox data-testid={'results-container'}>
                            {searchResults.length !== 0 ? (
                                <>
                                    {searchResults.map((item, index) => (
                                        <StyledSearchResultRow key={index} className="search-result-row">
                                            <Box sx={{ flex: 1 }}>
                                                <Stack direction="row" justifyContent="space-between">
                                                    <Typography variant="h5">{item.sentence}</Typography>
                                                    <Typography variant="h5">{item.occurrencePercentage < 1 ? '< 1' : item.occurrencePercentage}%</Typography>
                                                </Stack>

                                                <StyledSearchResultProgress
                                                    variant="determinate"
                                                    value={item.occurrencePercentage < 1 ? 1 : item.occurrencePercentage}
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
                </>
            )}
        </Grid>
    );
};

export default SearchResults;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyledSearchResultBox, StyledSearchResultRow, StyledSearchResultProgress, StyledSearchResultFooter } from './SearchResultsStyles';
import SearchBar from '../searchBar/SearchBar';
import LoaderSection from '../loader/LoaderSection';
import { SearchPropTypes } from '../../types';
import { SearchResultItem } from '../../types';
import { Grid, Typography, Stack, Box } from '@mui/material';
import { ChevronRight } from 'tabler-icons-react';
import ErrorMessage from '../error/ErrorMessage';

const SearchResults: React.FC<SearchPropTypes> = ({ setSearchString, searchString, setSearchReload, searchReload }) => {
    const MAX_RESULTS = 25;
    const [searchResults, setSearchResults] = useState<Array<SearchResultItem>>([]);
    const [fetching, setFetching] = useState<Boolean>(false);
    const [noResultsFound, setNoResultsFound] = useState<boolean>(false);

    const fetchSentences = () => {
        if (!fetching) {
            setFetching(true);
            axios
                .get('http://localhost:3001/getResults?search=' + searchString)
                .then((response) => {
                    const results = response.data.match;

                    if (results.length === 0) {
                        setNoResultsFound(true);
                    } else {
                        // Sort Sentences in order of count
                        results.sort((a, b) => {
                            return a.count !== b.count ? (a.count < b.count ? 1 : -1) : 0;
                        });

                        // Calculate total amount of sentences found (denominator)
                        var totalCount = 0;
                        results.forEach((sentence, index) => {
                            if (index < MAX_RESULTS) {
                                totalCount += sentence.count;
                            }
                        });

                        // initialize empty search result item array to populate
                        const sentencesData: Array<SearchResultItem> = [];
                        results.forEach((result, index) => {
                            if (index < MAX_RESULTS) {
                                sentencesData.push({
                                    sentence: result.sentence,
                                    occurrencePercentage: Math.floor((result.count / totalCount) * 100),
                                });
                            }
                        });

                        // Update state
                        setSearchResults(sentencesData);
                    }

                    setFetching(false);
                })
                .catch((error) => {
                    setFetching(false);
                    console.log('Axios Error:', error);
                });
        }
    };

    useEffect(() => {
        setTimeout(() => {
            if (searchString && searchReload === false) {
                setSearchReload(true);
            }
        }, 1500);
    }, []);

    useEffect(() => {
        if (searchReload === true) {
            setSearchResults([]);
            setNoResultsFound(false);
            setTimeout(() => {
                fetchSentences();
            }, 500);
            setSearchReload(false);
        }
    }, [searchReload]);

    return (
        <Grid container spacing={3} sx={{ paddingTop: '2%' }}>
            <Grid item xs={12}>
                <SearchBar setSearchReload={setSearchReload} searchReload={searchReload} setSearchString={setSearchString} searchString={searchString} />
            </Grid>
            {noResultsFound ? (
                <Grid item xs={12}>
                    <ErrorMessage errorSeverity={`info`} errorMessage={`No results found for: ${searchString}`} />
                </Grid>
            ) : (
                <>
                    <Grid item xs={12}>
                        <StyledSearchResultBox>
                            {searchResults.length !== 0 ? (
                                <>
                                    {searchResults.map((item) => (
                                        <StyledSearchResultRow key={item.sentence + item.occurrencePercentage} className="search-result-row">
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

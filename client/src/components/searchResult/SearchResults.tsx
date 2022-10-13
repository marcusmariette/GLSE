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

/*const sampleSearchResults: Array<SearchResultItem> = [
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
];*/

const SearchResults: React.FC<SearchPropTypes> = ({ setSearchString, searchString, setSearchReload, searchReload }) => {
    const MAX_RESULTS = 25;
    const [searchResults, setSearchResults] = useState<Array<SearchResultItem>>([]);
    const [fetching, setFetching] = useState<Boolean>(false);
    const [noResultsFound, setNoResultsFound] = useState<boolean>(false);

    const fetchSentences = () => {
        if(!fetching) {
            setFetching(true);
            axios.get('http://localhost:3001/getResults?search=' + searchString).then((_response) => {
                const results = _response.data.match;

                if(results.length == 0) {
                    setNoResultsFound(true);
                } else {
                    // Sort Sentences in order of count
                    results.sort((a, b) => {
                        return a.count != b.count ? (a.count < b.count ? 1 : -1) : 0;
                    });
    
                    // Calculate total amount of sentences found (denominator)
                    var totalCount = 0
                    results.forEach((_sentence, _index) => {
                        if(_index < MAX_RESULTS) {
                            totalCount += _sentence.count;
                        }
                    });
    
                    
                    // initialize empty search result item array to populate
                    const setencesData: Array<SearchResultItem> = [];
                    results.forEach((_sentence, _index) => {
                        if(_index < MAX_RESULTS) {
                            setencesData.push({
                                sentence: _sentence.sentence,
                                occurrencePercentage: Math.floor((_sentence.count / totalCount) * 100)
                            });
                        }
                    });
    
                    // Update state
                    setSearchResults(setencesData);
                }

                setFetching(false);
            }).catch((_error) => {
                setFetching(false);
                console.log(_error);
            });
        }

    }

    useEffect(() => {
        setTimeout(function () {
            if(searchString && searchReload == false) {
                setSearchReload(true);
            }
        }, 1500);
    }, []);

    useEffect(() => {
        if(searchReload == true) {
            setSearchResults([]);
            setNoResultsFound(false);
            setTimeout(function() {
                fetchSentences();
            }, 500);
            setSearchReload(false);
        }
    }, [searchReload])

    return (
        <Grid container spacing={3} className="search-result-container">
            <Grid item xs={12}>
                <SearchBar setSearchReload={setSearchReload} searchReload={searchReload} setSearchString={setSearchString} searchString={searchString} />
            </Grid>
            {
                noResultsFound ? 
                <Grid item xs={12} sx={{ paddingTop: '2%' }}>
                    <ErrorMessage errorSeverity={`info`} errorMessage={`No results found for: ${searchString}`} />
                </Grid> :
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
                                                    <Typography variant="h5">{item.occurrencePercentage < 1 ? "< 1" : item.occurrencePercentage}%</Typography>
                                                </Stack>

                                                <StyledSearchResultProgress variant="determinate" value={item.occurrencePercentage < 1 ? 1 : item.occurrencePercentage} />
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
            }
        </Grid>
    );
};

export default SearchResults;

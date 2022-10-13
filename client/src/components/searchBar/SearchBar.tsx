import React, { useState } from 'react';
import { IconButton, Grid } from '@mui/material';
import { Search as SearchIcon, QuestionMark as QuestionMarkIcon } from 'tabler-icons-react';
import { StyledSearchBarBox, StyledSearchBarTextField } from './SearchBarStyles';
import { useNavigate } from 'react-router-dom';
import { background, orange } from '../../resources/styles/variables';
import { SearchPropTypes } from '../../types';
import { findSymbols, validateSymbolRegex } from '../../utils/validationUtils';
import ErrorMessage from '../error/ErrorMessage';

const SearchBar: React.FC<SearchPropTypes> = ({ setSearchString, searchString, searchReload, setSearchReload}) => {
    const navigate = useNavigate();
    const [showError, setShowError] = useState<boolean>(false);
    const [errorSeverity, setErrorSeverity] = useState<string>("error");
    const [errorMessage, setErrorMessage] = useState<string>('');

    // Handles search input value setter
    const handleSearchInputChange = (event: any) => {
        setSearchString(event.target.value);
    };

    // Handle Keyword Search Execution
    const handleSearchInputKeyDown = (event: any) => {
        if (event.key === 'Enter' && searchString.length > 0) {
            const foundSymbols = findSymbols(searchString);
            if (foundSymbols.length === 1) {
                const validationError = validateSymbolRegex(searchString, foundSymbols[0]);
                if (validationError) {
                    setErrorMessage(validationError);
                    setShowError(true);
                } else {
                    setErrorMessage('');
                    setShowError(false);
                    navigate('/search?' + searchString);
                    setSearchReload(true);
                }
            } else {
                setErrorMessage('Error: Must use a single symbol. (Example: I am/are happy)');
                setErrorSeverity('error');
                setShowError(true);
            }
        }
    };

    return (
        <Grid data-testid={'search-container'} container sx={{ maxWidth: '1200px', margin: '0 auto' }}>
            <Grid item xs={12}>
                <StyledSearchBarBox>
                    <IconButton>
                        <SearchIcon size={30} color={background} />
                    </IconButton>
                    <StyledSearchBarTextField
                        inputProps={{ 'data-testid': 'search-field' }}
                        onChange={handleSearchInputChange}
                        value={searchString}
                        onKeyDown={handleSearchInputKeyDown}
                        placeholder="determine ? number of x"
                    />
                    <IconButton data-testid={'help-btn'} onClick={() => navigate('/help')}>
                        <QuestionMarkIcon size={30} color={orange} />
                    </IconButton>
                </StyledSearchBarBox>
            </Grid>
            {showError && (
                <Grid item xs={12} sx={{ paddingTop: '2%' }}>
                    <ErrorMessage errorSeverity={errorSeverity} errorMessage={errorMessage} />
                </Grid>
            )}
        </Grid>
    );
};

export default SearchBar;

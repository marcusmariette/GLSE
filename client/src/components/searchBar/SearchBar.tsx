import React, { useState } from 'react';
import { IconButton, Grid } from '@mui/material';
import { Search as SearchIcon, QuestionMark as QuestionMarkIcon } from 'tabler-icons-react';
import { StyledSearchBarBox, StyledSearchBarTextField } from './SearchBarStyles';
import { useNavigate } from 'react-router-dom';
import { background, orange } from '../../resources/styles/variables';
import { SearchPropTypes } from '../../types';
import { validateSearchString } from '../../utils/validation';
import ErrorMessage from '../error/ErrorMessage';

const SearchBar: React.FC<SearchPropTypes> = ({ setSearchString, searchString }) => {
    const navigate = useNavigate();
    const [showError, setShowError] = useState<boolean>(false);

    // Handles search input value setter
    const handleSearchInputChange = (event: any) => {
        setSearchString(event.target.value);
    };

    // Handle Keyword Search Execution
    const handleSearchInputKeyDown = (event: any) => {
        if (event.key == 'Enter' && searchString.length > 0) {
            if (validateSearchString(searchString)) {
                setShowError && setShowError(false);
                navigate('/search');
            } else {
                setShowError && setShowError(true);
            }
        }
    };

    return (
        <Grid container sx={{ maxWidth: '1200px', margin: '0 auto' }}>
            <Grid item xs={12}>
                <StyledSearchBarBox>
                    <IconButton>
                        <SearchIcon size={30} color={background} />
                    </IconButton>
                    <StyledSearchBarTextField
                        onChange={handleSearchInputChange}
                        value={searchString}
                        onKeyDown={handleSearchInputKeyDown}
                        placeholder="determine ? number of x"
                    />
                    <IconButton onClick={() => navigate('/help')}>
                        <QuestionMarkIcon size={30} color={orange} />
                    </IconButton>
                </StyledSearchBarBox>
            </Grid>
            {showError && (
                <Grid item xs={12} sx={{ paddingTop: '2%' }}>
                    <ErrorMessage errorMessage='Error: You must use a single symbol. Example: "I talk/talked to many professionals".' />
                </Grid>
            )}
        </Grid>
    );
};

export default SearchBar;

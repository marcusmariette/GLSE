import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { Search as SearchIcon, QuestionMark as QuestionMarkIcon } from 'tabler-icons-react';
import { StyledSearchBarBox, StyledSearchBarTextField } from './SearchBarStyles';
import { useNavigate, useParams } from 'react-router-dom';
import { background, orange } from '../../resources/styles/variables';

const SearchBar: React.FC = () => {

    const params = useParams();

    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState<any>(params.query);

    // Handles search input value setter
    const handleSearchInputChange = (event: any) => {
        setSearchInput(event.target.value);
    }

    // Handle Keyword Search Execution
    const handleSearchInputKeyDown = (event: any) => {
        if(event.key == "Enter" && searchInput.length > 0) {
            navigate(`/search/${searchInput}`);
        }
    }

    return (
        <StyledSearchBarBox className='search-container'>
            <IconButton>
                <SearchIcon size={30} color={background} />
            </IconButton>
            <StyledSearchBarTextField onChange={handleSearchInputChange} value={searchInput} onKeyDown={handleSearchInputKeyDown} placeholder='determine ? number of x' />
            <IconButton onClick={() => navigate('/help')}>
                <QuestionMarkIcon size={30} color={orange} />
            </IconButton>
        </StyledSearchBarBox>
    );
};

export default SearchBar;

import { IconButton } from '@mui/material';
import { Search as SearchIcon, QuestionMark as QuestionMarkIcon } from 'tabler-icons-react';
import { StyledSearchBarBox, StyledSearchBarTextField } from './SearchBarStyles';
import { useNavigate } from 'react-router-dom';
import { background, orange } from '../../resources/styles/variables';

const SearchBar: React.FC = () => {
    const navigate = useNavigate();

    return (
        <StyledSearchBarBox className='search-container'>
            <IconButton>
                <SearchIcon size={30} color={background} />
            </IconButton>
            <StyledSearchBarTextField placeholder='determine ? number of x' />
            <IconButton onClick={() => navigate('/help')}>
                <QuestionMarkIcon size={30} color={orange} />
            </IconButton>
        </StyledSearchBarBox>
    );
};

export default SearchBar;
